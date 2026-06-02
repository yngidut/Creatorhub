import { sponsorshipTiers } from '../data/mockData';
import { useState } from 'react';

export default function WorkWithMe() {
  const [form, setForm] = useState({ name: '', email: '', brand: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-label">Collaborate</div>
        <h2 className="section-title">Work With Me</h2>
        <p className="section-subtitle">
          Let's create something amazing together. Here's how we can partner.
        </p>

        <div className="work__tiers">
          {sponsorshipTiers.map((tier, i) => (
            <div key={tier.name} className={`work__tier ${i === 1 ? 'work__tier--featured' : ''}`}>
              {i === 1 && <span className="work__tier-badge">Most Popular</span>}
              <h3 className="work__tier-name">{tier.name}</h3>
              <div className="work__tier-price">
                <span className="work__tier-amount">{tier.price}</span>
                <span className="work__tier-period">/ campaign</span>
              </div>
              <p className="work__tier-desc">{tier.description}</p>
              <ul className="work__tier-features">
                {tier.features.map((f) => (
                  <li key={f} className="work__tier-feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact-form" className="btn btn-primary work__tier-cta">
                Get In Touch
              </a>
            </div>
          ))}
        </div>

        <div id="contact-form" className="work__contact">
          <h3 className="work__contact-title">Send a Message</h3>
          <p className="work__contact-subtitle">
            Tell me about your brand and what you have in mind.
          </p>

          {submitted ? (
            <div className="work__success">
              <div className="work__success-icon">✓</div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. I'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <form className="work__form" onSubmit={handleSubmit}>
              <div className="work__form-row">
                <div className="work__form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="work__form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@brand.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="work__form-group">
                <label htmlFor="brand">Brand / Company</label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  placeholder="Your brand name"
                  value={form.brand}
                  onChange={handleChange}
                />
              </div>
              <div className="work__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your campaign idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .work__tiers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin: 48px 0 80px;
        }

        .work__tier {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s ease;
        }

        .work__tier:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .work__tier--featured {
          border-color: var(--accent);
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.05), transparent);
        }

        .work__tier-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 4px 16px;
          border-radius: 50px;
          background: var(--gradient-1);
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          white-space: nowrap;
        }

        .work__tier-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .work__tier-price {
          margin-bottom: 16px;
        }

        .work__tier-amount {
          font-size: 2.5rem;
          font-weight: 800;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .work__tier-period {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .work__tier-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }

        .work__tier-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .work__tier-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .work__tier-feature svg {
          color: var(--success);
          flex-shrink: 0;
        }

        .work__tier-cta {
          width: 100%;
          justify-content: center;
        }

        .work__contact {
          max-width: 640px;
          margin: 0 auto;
          padding: 48px;
          background: var(--bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .work__contact-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .work__contact-subtitle {
          color: var(--text-secondary);
          margin-bottom: 32px;
        }

        .work__form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .work__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .work__form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .work__form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .work__form-group input,
        .work__form-group textarea {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .work__form-group input:focus,
        .work__form-group textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-glow);
        }

        .work__form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .work__success {
          text-align: center;
          padding: 40px 20px;
        }

        .work__success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--success);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 auto 20px;
        }

        .work__success h4 {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .work__success p {
          color: var(--text-secondary);
        }

        @media (max-width: 968px) {
          .work__tiers {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .work__form-row {
            grid-template-columns: 1fr;
          }
          .work__contact {
            padding: 28px 20px;
          }
        }
      `}</style>
    </section>
  );
}