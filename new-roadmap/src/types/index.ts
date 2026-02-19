export interface Source {
  label: string;
  url: string;
  route?: string;
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
