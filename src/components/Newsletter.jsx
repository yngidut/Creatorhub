import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="section newsletter">
      <div className="container">
        <div className="newsletter__card">
          <div className="newsletter__bg" />
          <div className="newsletter__content">
            <div className="section-label">Stay Connected</div>
            <h2 className="section-title">Join the Newsletter</h2>
            <p className="section-subtitle">
              Get early access to new content, exclusive behind-the-scenes updates,
              and special offers delivered to your inbox every week.
            </p>

            {subscribed ? (
              <div className="newsletter__success">
                <div className="newsletter__success-icon">🎉</div>
                <h4>You're In!</h4>
                <p>Thanks for subscribing. Check your inbox for a welcome email.</p>
              </div>
            ) : (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <div className="newsletter__input-wrapper">
                  <svg className="newsletter__input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4.5h12A1.5 1.5 0 0116.5 6v7.5a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V6A1.5 1.5 0 013 4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 6L9 10.5 1.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary newsletter__btn">
                  Subscribe Free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}

            <p className="newsletter__footnote">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .newsletter__card {
          position: relative;
          padding: 80px 60px;
          border-radius: var(--radius-xl);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          overflow: hidden;
        }

        .newsletter__bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 50%, rgba(108, 92, 231, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(0, 206, 201, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .newsletter__content {
          position: relative;
          z-index: 1;
          max-width: 560px;
          margin: 0 auto;
          text-align: center;
        }

        .newsletter__content .section-subtitle {
          margin: 0 auto 40px;
        }

        .newsletter__form {
          display: flex;
          gap: 12px;
          max-width: 480px;
          margin: 0 auto;
        }

        .newsletter__input-wrapper {
          flex: 1;
          position: relative;
        }

        .newsletter__input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .newsletter__input-wrapper input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border-radius: 50px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .newsletter__input-wrapper input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .newsletter__input-wrapper input::placeholder {
          color: var(--text-muted);
        }

        .newsletter__btn {
          flex-shrink: 0;
        }

        .newsletter__footnote {
          margin-top: 20px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .newsletter__success {
          padding: 20px;
        }

        .newsletter__success-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .newsletter__success h4 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .newsletter__success p {
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .newsletter__card {
            padding: 48px 24px;
          }
          .newsletter__form {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}