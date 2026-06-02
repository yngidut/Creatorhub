import { creator } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo-icon">◆</span>
            <span className="footer__logo-text">CreatorHub</span>
            <p className="footer__tagline">Creating content that connects.</p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">Navigate</h4>
              <a href="#content">Content</a>
              <a href="#about">About</a>
              <a href="#work">Work With Me</a>
              <a href="#shop">Shop</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              {creator.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {creator.name}. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border-color);
          padding: 60px 0 32px;
          margin-top: 40px;
        }

        .footer__top {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .footer__brand {
          max-width: 280px;
        }

        .footer__logo-icon {
          font-size: 1.8rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-bottom: 8px;
        }

        .footer__logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          display: block;
          margin-bottom: 8px;
        }

        .footer__tagline {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer__links {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer__col-title {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .footer__col a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .footer__col a:hover {
          color: var(--accent);
        }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer__bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer__bottom-links a {
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .footer__bottom-links a:hover {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .footer__top {
            flex-direction: column;
            gap: 40px;
          }
          .footer__links {
            gap: 40px;
          }
          .footer__bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}