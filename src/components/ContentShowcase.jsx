import { contentItems } from '../data/mockData';
import { useState } from 'react';

const filters = ['All', 'Video', 'Social', 'Podcast'];

function getTypeIcon(type) {
  switch (type) {
    case 'video':
      return '▶';
    case 'social':
      return '📱';
    case 'podcast':
      return '🎙';
    default:
      return '📄';
  }
}

export default function ContentShowcase() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? contentItems
      : contentItems.filter(
          (item) => item.type === activeFilter.toLowerCase()
        );

  return (
    <section id="content" className="section showcase">
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Content Showcase</h2>
        <p className="section-subtitle">
          A curated collection of my best work across YouTube, Instagram, TikTok,
          and podcasting.
        </p>

        <div className="showcase__filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`showcase__filter ${
                activeFilter === f ? 'showcase__filter--active' : ''
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="showcase__grid">
          {filtered.map((item) => (
            <div key={item.id} className="showcase__card">
              <div className="showcase__card-image">
                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                <div className="showcase__card-overlay">
                  <span className="showcase__card-play">
                    {getTypeIcon(item.type)}
                  </span>
                </div>
                {item.duration && (
                  <span className="showcase__card-duration">{item.duration}</span>
                )}
                <span className="showcase__card-platform">{item.platform}</span>
              </div>
              <div className="showcase__card-body">
                <h3 className="showcase__card-title">{item.title}</h3>
                <div className="showcase__card-meta">
                  {item.views && (
                    <span className="showcase__card-meta-item">
                      👁 {item.views} views
                    </span>
                  )}
                  {item.likes && (
                    <span className="showcase__card-meta-item">
                      ❤ {item.likes} likes
                    </span>
                  )}
                  <span className="showcase__card-type">{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .showcase__filters {
          display: flex;
          gap: 8px;
          margin: 40px 0 32px;
          flex-wrap: wrap;
        }

        .showcase__filter {
          padding: 10px 24px;
          border-radius: 50px;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .showcase__filter:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .showcase__filter--active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .showcase__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .showcase__card {
          background: var(--bg-card);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .showcase__card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
        }

        .showcase__card-image {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .showcase__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .showcase__card:hover .showcase__card-image img {
          transform: scale(1.05);
        }

        .showcase__card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .showcase__card:hover .showcase__card-overlay {
          opacity: 1;
        }

        .showcase__card-play {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(108, 92, 231, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: white;
          backdrop-filter: blur(4px);
        }

        .showcase__card-duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          padding: 4px 8px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
        }

        .showcase__card-platform {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 10px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          backdrop-filter: blur(4px);
        }

        .showcase__card-body {
          padding: 16px;
        }

        .showcase__card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .showcase__card-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .showcase__card-meta-item {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .showcase__card-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 2px 8px;
          border-radius: 4px;
          background: var(--bg-hover);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .showcase__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}