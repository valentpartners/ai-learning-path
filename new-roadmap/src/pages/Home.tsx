export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>AI Learning Path</h1>
        <p>
          Choose your track and master the skills that matter most to your role.
        </p>
      </header>
      <main className="path-cards">
        <a href="/developer" className="path-card path-card--developer">
          <span className="path-card-icon">&#60;/&#62;</span>
          <h2 className="path-card-title">Developer Track</h2>
          <p className="path-card-desc">
            Build AI-powered applications, integrate LLMs, and master prompt
            engineering with hands-on projects.
          </p>
          <span className="path-card-cta">
            Start learning <span className="path-card-arrow">&#8594;</span>
          </span>
        </a>
        <a href="/business" className="path-card path-card--business">
          <span className="path-card-icon">&#9670;</span>
          <h2 className="path-card-title">Business Track</h2>
          <p className="path-card-desc">
            Leverage AI for strategy, operations, and drive business outcomes.
          </p>
          <span className="path-card-cta">
            Start learning <span className="path-card-arrow">&#8594;</span>
          </span>
        </a>
      </main>
    </div>
  );
}
