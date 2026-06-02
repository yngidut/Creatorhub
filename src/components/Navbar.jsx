import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Content', href: '#content' },
  { label: 'About', href: '#about' },
  { label: 'Work With Me', href: '#work' },
  { label: 'Shop', href: '#shop' },
  { label: 'Newsletter', href: '#newsletter' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">◆</span>
          <span>CreatorHub</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .navbar--scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          padding: 12px 0;
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .navbar__logo-icon {
          font-size: 1.5rem;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .navbar__link {
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .navbar__link:hover {
          color: var(--text-primary);
          background: var(--bg-hover);
        }

        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          padding: 8px;
        }

        .navbar__hamburger span {
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar__hamburger--active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .navbar__hamburger--active span:nth-child(2) {
          opacity: 0;
        }

        .navbar__hamburger--active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .navbar__links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 80px 32px 32px;
            background: var(--bg-secondary);
            border-left: 1px solid var(--border-color);
            transition: right 0.3s ease;
            gap: 4px;
          }

          .navbar__links--open {
            right: 0;
          }

          .navbar__link {
            width: 100%;
            padding: 12px 16px;
            font-size: 1.1rem;
          }

          .navbar__hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}