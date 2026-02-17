interface HeaderProps {
    name: string
}

export function Header({ name }: HeaderProps) {
    return (
        <header className="header">
            <div className="header-label">Interactive Roadmap</div>
            <h1>{name}</h1>
            <p>Explore tools, concepts, and architecture patterns for modern AI development</p>
        </header>
    )
}