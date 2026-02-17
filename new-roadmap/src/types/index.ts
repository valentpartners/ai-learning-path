export interface Source {
  label?: string;
  name?: string;
  url: string;
}

export interface DataNode {
  name: string;
  description?: string;
  tags?: string[];
  sources?: Source[];
  children?: DataNode[];
  icon?: string;
  color?: string;
}