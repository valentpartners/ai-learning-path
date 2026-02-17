import type { DataNode } from "../types";
import { getColors } from "../utils";

interface TabProps {
    tab: DataNode
    index: number
    activeTab: number
    setActiveTab: (i: number) => void
}

export function Tab({ tab, index, activeTab, setActiveTab }: TabProps) {
    const colors = getColors(tab.color, index);

    return <button
        key={tab.name}
        className={`tab${activeTab === index ? ' active' : ''}`}
        style={{
            '--tab-color': colors.color,
            '--tab-bg': colors.light,
            '--tab-border': colors.border,
        } as React.CSSProperties}
        onClick={() => setActiveTab(index)}
    >
        <span style={{ fontSize: '16px' }}>{tab.icon || '●'}</span>
        {tab.name}
    </button>
}