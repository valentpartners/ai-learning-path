
import { useState, useEffect, useCallback } from 'react'
import { Sidebar } from '../components/Sidebar'
import { TabPanel } from '../components/TabPanel'
import { Header } from '../components/Header'
import { Tab } from '../components/Tab'
import type { DataNode } from '../types'

interface PathWrapperProps {
    root: DataNode
}

export default function PathWrapper({ root }: PathWrapperProps) {
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
        <Header name={root.name} description={root.description} />
        <div className="tabs">
          {tabs.map((tab, i) => <Tab tab={tab} index={i} activeTab={activeTab} setActiveTab={setActiveTab} />)}
        </div>
        <div id="tab-panels">
          {tabs.map((tab, i) => (
            <TabPanel
              key={tab.name}
              index={i}
              tab={tab}
              isActive={activeTab === i}
              activeLeaf={activeLeaf}
              onLeafClick={handleLeafClick}
            />
          )
          )}
        </div>
      </div>
    </>
  )
}
