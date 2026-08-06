import type { OutfitLook } from '../data/outfit'

type OutfitDetailProps = {
  look: OutfitLook
  onOpenItems: () => void
}

export function OutfitHero({ look, onOpenItems }: OutfitDetailProps) {
  return (
    <section className="hero">
      <div className="hero__image-wrap reveal">
        <img src={look.heroImage} alt={look.name} />
      </div>

      <p className="hero__eyebrow reveal reveal-delay-1">Curated look</p>
      <h1 className="hero__title reveal reveal-delay-1">{look.name}</h1>
      <div className="hero__rule reveal reveal-delay-1" />
      <p className="hero__desc reveal reveal-delay-2">{look.description}</p>

      <div className="hero__actions reveal reveal-delay-3">
        <button type="button" className="ot-btn ot-btn-dark" onClick={onOpenItems}>
          Shop look
        </button>
      </div>
    </section>
  )
}
