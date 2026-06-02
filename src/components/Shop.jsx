import { shopItems } from '../data/mockData';

export default function Shop() {
  return (
    <section id="shop" className="section shop">
      <div className="container">
        <div className="shop__header">
          <div>
            <div className="section-label">Store</div>
            <h2 className="section-title">Digital Products & Gear</h2>
            <p className="section-subtitle">
              Tools, templates, and gear I personally use and recommend.
            </p>
          </div>
          <a href="#newsletter" className="btn btn-secondary shop__header-cta">
            Subscribe for Deals
          </a>
        </div>

        <div className="shop__grid">
          {shopItems.map((item) => (
            <div key={item.id} className="shop__card">
              <div className="shop__card-image">
                <img src={item.image} alt={item.name} loading="lazy" />
                {item.badge && (
                  <span className="shop__card-badge">{item.badge}</span>
                )}
                <div className="shop__card-type-badge">
                  {item.type === 'digital' ? 'Digital' : 'Affiliate Link'}
                </div>
              </div>
              <div className="shop__card-body">
                <h3 className="shop__card-title">{item.name}</h3>
                <p className="shop__card-desc">{item.description}</p>
                <div className="shop__card-footer">
                  <span className={`shop__card-price ${item.type === 'affiliate' ? 'shop__card-price--affiliate' : ''}`}>
                    {item.price}
                  </span>
                  <button className="shop__card-btn">
                    {item.type === 'digital' ? 'Buy Now' : 'View Deal'}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .shop__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .shop__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }

        .shop__card {
          background: var(--bg-card);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .shop__card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
        }

        .shop__card-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .shop__card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .shop__card:hover .shop__card-image img {
          transform: scale(1.05);
        }

        .shop__card-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 4px 12px;
          border-radius: 50px;
          background: var(--gradient-1);
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
        }

        .shop__card-type-badge {
          position: absolute;
          bottom: 8px;
          left: 8px;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.7);
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          backdrop-filter: blur(4px);
        }

        .shop__card-body {
          padding: 20px;
        }

        .shop__card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .shop__card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .shop__card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .shop__card-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent);
        }

        .shop__card-price--affiliate {
          font-size: 1rem;
          color: var(--text-primary);
        }

        .shop__card-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 50px;
          background: var(--accent);
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .shop__card-btn:hover {
          background: var(--accent-hover);
          transform: translateX(2px);
        }

        @media (max-width: 768px) {
          .shop__grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .shop__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}