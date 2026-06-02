import { creator, stats } from '../data/mockData';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__content container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Content Creator
        </div>

        <h1 className="hero__title">
          {creator.name}
        </h1>

        <p className="hero__tagline">{creator.tagline}</p>

        <p className="hero__description">{creator.description}</p>

        <div className="hero__cta">
          <a href="#content" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M5 10l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="btn btn-secondary">
            Work With Me
          </a>
        </div>

        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(108, 92, 231, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(0, 206, 201, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(253, 121, 168, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero__content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 50px;
          background: var(--accent-glow);
          border: 1px solid rgba(108, 92, 231, 0.2);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 32px;
        }

        .hero__badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--success);
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero__title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .hero__tagline {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .hero__description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero__cta {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .hero__stats {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .hero__stat-value {
          font-size: 2rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero__stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero__stats {
            gap: 28px;
          }
          .hero__stat-value {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}