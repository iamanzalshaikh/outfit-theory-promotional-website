import { looks } from '../data/outfit'

type ShopGridProps = {
  onShop: (lookId: string) => void
  onShopAll: () => void
}

export function ShopGrid({ onShop, onShopAll }: ShopGridProps) {
  return (
    <section className="shop-home">
      <div className="promo-banner reveal">
        <p className="promo-banner__eyebrow">Outfit Theory</p>
        <h1 className="promo-banner__title">
          Style, curated. <br /> <em className="promo-banner__soon">Coming soon</em>
        </h1>
        <p className="promo-banner__lead">
          Outfit theory is the smartest yet laziest way to shop for Indian men. - Curated outfits, Capsule wardrobes, quality checked garments, virtual try on.
        </p>
        <p className="promo-banner__copy">
          We build outfits the way a stylist would: balanced proportions,
          timeless fabrics, and pieces that work together. Browse the preview
          below. Full shopping and member promotions open shortly — join early
          access to be first.
        </p>
      </div>
      
      <img src="/images/Line.png" alt="" className="promo-banner__line reveal" />

      <div className="shop-home__intro reveal reveal-delay-1">
        <h2 className="shop-home__heading">Featured looks</h2>
        <p className="shop-home__sub">
          Open a look to see every related piece — then shop what belongs in your wardrobe.
        </p>
      </div>

      <div className="looks-grid">
        {looks.map((look, index) => (
          <article
            key={look.id}
            className={`look-card reveal reveal-delay-${Math.min((index % 3) + 1, 3)}`}
          >
            <button
              type="button"
              className="look-card__media"
              onClick={() => onShop(look.id)}
              aria-label={`Open ${look.name}`}
            >
              <img src={look.coverImage} alt={look.name} />
            </button>
            <div className="look-card__body">
              <h3 className="look-card__name">{look.name}</h3>
              <p className="look-card__tagline">{look.tagline}</p>
              <button
                type="button"
                className="ot-btn ot-btn-dark look-card__shop"
                onClick={() => onShop(look.id)}
              >
                Shop
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="shop-all reveal">
        <p className="shop-all__note" style={{ color: 'var(--color-charcoal)', fontSize: '1.5em', marginBottom: '0.25rem', fontWeight: 400, fontFamily: 'var(--font-display)' }}>
          For men who&apos;d rather do anything than shop.
        </p>
        <p className="shop-all__note">
          We&apos;ve built the laziest way to build a great wardrobe.<br />
          Join the waitlist and be the first to know when we launch.
        </p>
        <button type="button" className="btn-gradient btn-gradient--lg" onClick={onShopAll}>
          <span>Join now</span>
        </button>
      </div>
    </section>
  )
}
