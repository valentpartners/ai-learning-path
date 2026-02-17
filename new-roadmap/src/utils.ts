import type { DataNode } from './data/data'

export const DEFAULT_COLORS = [
  { color: '#2563EB', light: '#EFF6FF', border: '#BFDBFE' },
  { color: '#059669', light: '#ECFDF5', border: '#A7F3D0' },
  { color: '#9333EA', light: '#FAF5FF', border: '#DDD6FE' },
  { color: '#DC2626', light: '#FEF2F2', border: '#FECACA' },
  { color: '#D97706', light: '#FFFBEB', border: '#FDE68A' },
]

export function isLeaf(node: DataNode): boolean {
  return !node.children || node.children.length === 0
}
