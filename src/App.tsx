import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ShopGrid } from './components/ShopGrid'
import { OutfitHero } from './components/OutfitHero'
import { ProductGrid } from './components/ProductGrid'
import { ShopCta } from './components/ShopCta'
import { EmailSignupModal } from './components/EmailSignupModal'
import { getLookById } from './data/outfit'

type View = 'home' | 'outfit'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [activeLookId, setActiveLookId] = useState<string | null>(null)
  const [signupOpen, setSignupOpen] = useState(false)

  const look = getLookById(activeLookId)

  useEffect(() => {
    // Clear piecesReveal reset
  }, [activeLookId])

  useEffect(() => {
    // Initialize history state on first load
    window.history.replaceState({ view: 'home', lookId: null }, '')

    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setView(event.state.view || 'home')
        setActiveLookId(event.state.lookId || null)
      } else {
        setView('home')
        setActiveLookId(null)
      }
      // window.scrollTo({ top: 0, behavior: 'smooth' }) // Optional, but usually native back restores scroll. 
      // If we want to guarantee top scroll on back navigation:
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [view, activeLookId])

  const openSignup = () => setSignupOpen(true)

  const openOutfit = (lookId: string) => {
    window.history.pushState({ view: 'outfit', lookId }, '')
    setActiveLookId(lookId)
    setView('outfit')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAllItems = () => {
    setTimeout(() => {
      document.getElementById('pieces')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 0)
  }

  const goHome = () => {
    if (view !== 'home') {
      window.history.pushState({ view: 'home', lookId: null }, '')
    }
    setView('home')
    setActiveLookId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page">
      <Header onLogoClick={goHome} onEarlyAccess={openSignup} />

      <main key={view === 'home' ? 'home' : activeLookId || 'outfit'} className="page-view">
        {view === 'home' || !look ? (
          <ShopGrid onShop={openOutfit} onShopAll={openSignup} />
        ) : (
          <>
            <div style={{ maxWidth: 'var(--max-wide)', margin: '0 auto', padding: '1.5rem var(--page-pad) 0', width: '100%' }}>
              <button
                type="button"
                className="site-header__back"
                onClick={goHome}
                aria-label="Go back"
              >
                ← Back to looks
              </button>
            </div>
            <OutfitHero
              look={look}
              onOpenItems={openAllItems}
            />
            <ProductGrid look={look} onBuy={openSignup} reveal={true} />
            <ShopCta onShop={openSignup} />
          </>
        )}
      </main>

      <footer className="site-footer">
        <p className="site-footer__brand">Outfit Theory</p>
        <p className="site-footer__copy">
          © {new Date().getFullYear()} Outfit Theory — coming soon
        </p>
      </footer>

      <EmailSignupModal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        autoOpen={true}
      />
    </div>
  )
}
