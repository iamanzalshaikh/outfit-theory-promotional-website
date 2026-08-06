type ShopCtaProps = {
  onShop: () => void
}

export function ShopCta({ onShop }: ShopCtaProps) {
  return (
    <section id="shop" className="shop-cta">
      <div className="shop-cta__rule" />
      <p className="shop-cta__text">For men who&apos;d rather do anything than shop.</p>
      <p className="shop-cta__sub">
        We&apos;ve built the laziest way to build a great wardrobe.<br />
        Join the waitlist and be the first to know when we launch.
      </p>
      <button type="button" className="btn-gradient btn-gradient--lg" onClick={onShop}>
        <span>Join now</span>
      </button>
    </section>
  )
}
