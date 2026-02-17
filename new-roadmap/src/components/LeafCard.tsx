import type { DataNode } from '../data/data'

interface LeafCardProps {
  node: DataNode
  accentColor: string
  isActive: boolean
  onClick: () => void
}

export function LeafCard({ node, accentColor, isActive, onClick }: LeafCardProps) {
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
