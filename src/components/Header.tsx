type HeaderProps = {
  onLogoClick?: () => void
  onEarlyAccess?: () => void
}

export function Header({ onLogoClick, onEarlyAccess }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          href="/"
          aria-label="Outfit Theory home"
          onClick={(e) => {
            if (!onLogoClick) return
            e.preventDefault()
            onLogoClick()
          }}
        >
          <img
            src="/images/logo/Black.png"
            alt="Outfit Theory"
            className="site-header__logo"
          />
        </a>

        <div className="site-header__right">
          <button 
            type="button" 
            className="site-header__badge" 
            onClick={onEarlyAccess}
          >
            Early Access
          </button>

        </div>
      </div>
    </header>
  )
}
