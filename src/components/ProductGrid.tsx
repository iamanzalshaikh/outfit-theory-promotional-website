import type { OutfitLook } from '../data/outfit'

type ProductGridProps = {
  look: OutfitLook
  onBuy: () => void
  reveal?: boolean
}

export function ProductGrid({ look, onBuy, reveal = false }: ProductGridProps) {
  return (
    <section
      id="pieces"
      className={`pieces${reveal ? ' is-revealing' : ''}`}
    >
      <p className="pieces__hint">* click on the products to buy.</p>

      <div className="pieces__grid">
        {look.pieces.map((piece) => {
          const hasLink = piece.buyUrl && piece.buyUrl.startsWith('http');
          
          if (hasLink) {
            return (
              <a
                key={piece.id}
                href={piece.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="piece"
              >
                <div className="piece__media">
                  <img src={piece.image} alt={piece.name} />
                </div>
                <span className="piece__name">{piece.name}</span>
              </a>
            )
          }

          return (
            <button
              key={piece.id}
              type="button"
              className="piece"
              onClick={onBuy}
            >
              <div className="piece__media">
                <img src={piece.image} alt={piece.name} />
              </div>
              <span className="piece__name">{piece.name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
