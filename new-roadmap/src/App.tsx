import { useState, useEffect, useCallback } from 'react'
import { DATA } from './data'
import type { DataNode } from './data'
import './App.css'

const DEFAULT_COLORS = [
  { color: '#2563EB', light: '#EFF6FF', border: '#BFDBFE' },
  { color: '#059669', light: '#ECFDF5', border: '#A7F3D0' },
  { color: '#9333EA', light: '#FAF5FF', border: '#DDD6FE' },
  { color: '#DC2626', light: '#FEF2F2', border: '#FECACA' },
  { color: '#D97706', light: '#FFFBEB', border: '#FDE68A' },
]

function isLeaf(node: DataNode): boolean {
  return !node.children || node.children.length === 0
}

// ---- Sidebar ----

interface SidebarProps {
  node: DataNode | null
  breadcrumb: string
  onClose: () => void
}

function Sidebar({ node, breadcrumb, onClose }: SidebarProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      <div
        className={`sidebar-overlay${node ? ' visible' : ''}`}
        onClick={onClose}
      />
      <div className={`sidebar${node ? ' open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-header-text">
            <div className="sidebar-breadcrumb">{breadcrumb}</div>
            <div className="sidebar-title">{node?.name}</div>
          </div>
          <button className="sidebar-close" onClick={onClose}>✕</button>
        </div>
        <div className="sidebar-body">
          {node?.description && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Overview</div>
              <div className="sidebar-description">{node.description}</div>
            </div>
          )}
          {node?.tags && node.tags.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Tags</div>
              <div className="sidebar-tags">
                {node.tags.map(t => (
                  <span key={t} className="sidebar-tag">{t}</span>
                ))}
              </div>
            </div>
          )}
          {node?.sources && node.sources.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-section-label">Resources</div>
              <div className="sidebar-sources">
                {node.sources.map((s, i) => {
                  let hostname = ''
                  let faviconUrl = ''
                  try {
                    hostname = new URL(s.url).hostname
                    faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`
                  } catch { /* invalid url */ }
                  return (
                    <a key={i} className="sidebar-source" href={s.url} target="_blank" rel="noopener noreferrer">
                      <span className="source-favicon">
                        {faviconUrl
                          ? <img src={faviconUrl} alt="" loading="lazy" />
                          : '🔗'
                        }
                      </span>
                      <div className="source-info">
                        <div className="source-label">{s.label}</div>
                        {hostname && <div className="source-url">{hostname}</div>}
                      </div>
                      <span className="source-arrow">↗</span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// ---- LeafCard ----

interface LeafCardProps {
  node: DataNode
  accentColor: string
  isActive: boolean
  onClick: () => void
}

function LeafCard({ node, accentColor, isActive, onClick }: LeafCardProps) {
  return (
    <div
      className={`leaf-card${isActive ? ' active-leaf' : ''}`}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
      onClick={onClick}
    >
      {node.name}
      <span className="card-arrow">→</span>
    </div>
  )
}

// ---- Accordion ----

interface AccordionProps {
  node: DataNode
  depth: number
  accentColor: string
  isTopLevel: boolean
  breadcrumb: string
  expandVer: number
  collapseVer: number
  activeLeaf: string | null
  onLeafClick: (node: DataNode, breadcrumb: string) => void
}

function Accordion({
  node, depth, accentColor, isTopLevel, breadcrumb,
  expandVer, collapseVer, activeLeaf, onLeafClick,
}: AccordionProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => { if (expandVer > 0) setOpen(true) }, [expandVer])
  useEffect(() => { if (collapseVer > 0) setOpen(false) }, [collapseVer])

  const currentBreadcrumb = breadcrumb ? breadcrumb + ' › ' + node.name : node.name
  const leafChildren = node.children?.filter(c => isLeaf(c)) ?? []
  const branchChildren = node.children?.filter(c => !isLeaf(c)) ?? []
  const badgeText = node.children ? String(node.children.length) : ''

  return (
    <div className={`accordion${open ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(o => !o)}>
        {isTopLevel && <span className="dot" style={{ background: accentColor }} />}
        <span className="accordion-chevron">▶</span>
        <span className="accordion-title">{node.name}</span>
        <span className="accordion-badge">{badgeText}</span>
      </button>
      <div className="accordion-body">
        <div className="accordion-inner">
          {leafChildren.length > 0 && (
            <div className="leaf-grid">
              {leafChildren.map(child => (
                <LeafCard
                  key={child.name}
                  node={child}
                  accentColor={accentColor}
                  isActive={activeLeaf === child.name + '|' + currentBreadcrumb}
                  onClick={() => onLeafClick(child, currentBreadcrumb)}
                />
              ))}
            </div>
          )}
          {branchChildren.length > 0 && (
            <div className="accordion-group">
              {branchChildren.map(child => (
                <Accordion
                  key={child.name}
                  node={child}
                  depth={depth + 1}
                  accentColor={accentColor}
                  isTopLevel={false}
                  breadcrumb={currentBreadcrumb}
                  expandVer={expandVer}
                  collapseVer={collapseVer}
                  activeLeaf={activeLeaf}
                  onLeafClick={onLeafClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ---- TabPanel ----

interface TabPanelProps {
  tab: DataNode
  colors: { color: string; light: string; border: string }
  isActive: boolean
  activeLeaf: string | null
  onLeafClick: (node: DataNode, breadcrumb: string) => void
}

function TabPanel({ tab, colors, isActive, activeLeaf, onLeafClick }: TabPanelProps) {
  const [expandVer, setExpandVer] = useState(0)
  const [collapseVer, setCollapseVer] = useState(0)

  return (
    <div className={`tab-content${isActive ? ' active' : ''}`}>
      {tab.goal && <div className="module-goal">{tab.goal}</div>}
      <div className="toolbar">
        <button className="toolbar-btn" onClick={() => setExpandVer(v => v + 1)}>Expand all</button>
        <button className="toolbar-btn" onClick={() => setCollapseVer(v => v + 1)}>Collapse all</button>
      </div>
      <div className="accordion-group">
        {tab.children?.filter(s => !isLeaf(s)).map(section => (
          <Accordion
            key={section.name}
            node={section}
            depth={0}
            accentColor={colors.color}
            isTopLevel={true}
            breadcrumb={tab.name}
            expandVer={expandVer}
            collapseVer={collapseVer}
            activeLeaf={activeLeaf}
            onLeafClick={onLeafClick}
          />
        ))}
      </div>
    </div>
  )
}

// ---- App ----

export default function App() {
  const root = DATA[0]
  const tabs = root.children ?? []

  const [activeTab, setActiveTab] = useState(0)
  const [sidebarNode, setSidebarNode] = useState<DataNode | null>(null)
  const [sidebarBreadcrumb, setSidebarBreadcrumb] = useState('')
  const [activeLeaf, setActiveLeaf] = useState<string | null>(null)

  const handleLeafClick = useCallback((node: DataNode, breadcrumb: string) => {
    setActiveLeaf(node.name + '|' + breadcrumb)
    setSidebarNode(node)
    setSidebarBreadcrumb(breadcrumb)
  }, [])

  const handleCloseSidebar = useCallback(() => {
    setSidebarNode(null)
    setActiveLeaf(null)
  }, [])

  useEffect(() => {
    if (sidebarNode) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }
    return () => document.body.classList.remove('sidebar-open')
  }, [sidebarNode])

  return (
    <>
      <Sidebar node={sidebarNode} breadcrumb={sidebarBreadcrumb} onClose={handleCloseSidebar} />
      <div className="container">
        <div className="header">
          <div className="header-label">Interactive Roadmap</div>
          <h1>{root.name}</h1>
          <p>Explore tools, concepts, and architecture patterns for modern AI development</p>
        </div>
        <div className="tabs">
          {tabs.map((tab, i) => {
            const colors = {
              color: tab.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length].color,
              light: tab.colorLight || DEFAULT_COLORS[i % DEFAULT_COLORS.length].light,
              border: tab.colorBorder || DEFAULT_COLORS[i % DEFAULT_COLORS.length].border,
            }
            return (
              <button
                key={tab.name}
                className={`tab${activeTab === i ? ' active' : ''}`}
                style={{
                  '--tab-color': colors.color,
                  '--tab-bg': colors.light,
                  '--tab-border': colors.border,
                } as React.CSSProperties}
                onClick={() => setActiveTab(i)}
              >
                <span style={{ fontSize: '16px' }}>{tab.icon || '●'}</span>
                {tab.name}
              </button>
            )
          })}
        </div>
        <div id="tab-panels">
          {tabs.map((tab, i) => {
            const colors = {
              color: tab.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length].color,
              light: tab.colorLight || DEFAULT_COLORS[i % DEFAULT_COLORS.length].light,
              border: tab.colorBorder || DEFAULT_COLORS[i % DEFAULT_COLORS.length].border,
            }
            return (
              <TabPanel
                key={tab.name}
                tab={tab}
                colors={colors}
                isActive={activeTab === i}
                activeLeaf={activeLeaf}
                onLeafClick={handleLeafClick}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
