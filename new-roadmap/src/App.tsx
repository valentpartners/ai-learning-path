import { useState, useEffect, useCallback } from 'react'
import { DATA } from './data/data'
import type { DataNode } from './data/data'
import { Sidebar } from './components/Sidebar'
import { TabPanel } from './components/TabPanel'
import { getColors } from './utils'
import './App.css'

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
            const colors = getColors(tab.color, i);

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
            const colors = getColors(tab.color, i);
            
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
