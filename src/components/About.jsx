import { creator } from '../data/mockData';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image">
              <img
                src="https://picsum.photos/seed/creator-portrait/600/700"
                alt={creator.name}
                loading="lazy"
              />
            </div>
            <div className="about__image-accent" />
            <div className="about__social-ring">
              {creator.socialLinks.slice(0, 4).map((link, i) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__social-dot"
                  style={{ '--i': i }}
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="about__content">
            <div className="section-label">About Me</div>
            <h2 className="section-title">The Story Behind the Content</h2>

            <div className="about__bio">
              {creator.bio.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about__tags">
              {['Storytelling', 'Video Production', 'Photography', 'Podcasting', 'Tech Reviews', 'Travel'].map(
                (tag) => (
                  <span key={tag} className="about__tag">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about__image-wrapper {
          position: relative;
        }

        .about__image {
          position: relative;
          z-index: 2;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }

        .about__image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .about__image-accent {
          position: absolute;
          top: -12px;
          left: -12px;
          right: 12px;
          bottom: 12px;
          border: 1px solid var(--accent);
          border-radius: var(--radius-lg);
          z-index: 1;
          opacity: 0.3;
        }

        .about__social-ring {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          justify-content: center;
        }

        .about__social-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .about__social-dot:hover {
          border-color: var(--accent);
          background: var(--accent-glow);
          transform: translateY(-3px);
        }

        .about__content {
          position: relative;
        }

        .about__bio p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .about__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 32px;
        }

        .about__tag {
          padding: 8px 16px;
          border-radius: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .about__tag:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-glow);
        }

        @media (max-width: 968px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about__image-wrapper {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}