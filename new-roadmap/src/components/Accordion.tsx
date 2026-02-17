import { useState, useEffect } from 'react'
import { isLeaf } from '../utils'
import { LeafCard } from './LeafCard'
import type { DataNode } from '../types'

interface AccordionProps {
  node: DataNode
  depth: number
  accentColor: string
  isTopLevel: boolean
  breadcrumb: string
  expandAll: boolean
  activeLeaf: string | null
  onLeafClick: (node: DataNode, breadcrumb: string) => void
}

export function Accordion({
  node, depth, accentColor, isTopLevel, breadcrumb,
  expandAll, activeLeaf, onLeafClick,
}: AccordionProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(expandAll) }, [expandAll])

  const currentBreadcrumb = breadcrumb ? breadcrumb + ' › ' + node.name : node.name
  const leafChildren = node.children?.filter(c => isLeaf(c)) ?? []
  const branchChildren = node.children?.filter(c => !isLeaf(c)) ?? []
  const badgeText = node.children ? String(node.children.length) : ''

  return (
    <div className={`accordion${open ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(o => !o)}>
        {isTopLevel && <span className="dot" style={{ background: accentColor }} />}
        <span className="accordion-chevron">
          {/* arrow icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
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
                  expandAll={expandAll}
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
