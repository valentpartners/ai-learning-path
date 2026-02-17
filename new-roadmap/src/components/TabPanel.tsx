import { useState } from 'react'
import type { DataNode } from '../data/data'
import { isLeaf } from '../utils'
import { Accordion } from './Accordion'

interface TabPanelProps {
  tab: DataNode
  colors: { color: string; light: string; border: string }
  isActive: boolean
  activeLeaf: string | null
  onLeafClick: (node: DataNode, breadcrumb: string) => void
}

export function TabPanel({ tab, colors, isActive, activeLeaf, onLeafClick }: TabPanelProps) {
  const [expandAll, setExpandAll] = useState(false)

  return (
    <div className={`tab-content${isActive ? ' active' : ''}`}>
      {tab.description && <div className="module-goal">{tab.description}</div>}
      <div className="toolbar">
        <button className="toolbar-btn" onClick={() => setExpandAll(!expandAll)}>{expandAll ? 'Collapse all' : 'Expand all'}</button>
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
            expandAll={expandAll}
            activeLeaf={activeLeaf}
            onLeafClick={onLeafClick}
          />
        ))}
      </div>
    </div>
  )
}
