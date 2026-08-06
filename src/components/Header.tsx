type HeaderProps = {
  onLogoClick?: () => void
}

export function Header({ onLogoClick }: HeaderProps) {
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
          <span className="site-header__badge">Early Access</span>
          <button type="button" aria-label="Account" className="site-header__account">
            <img src="/images/icons/Users.png" alt="" />
          </button>
        </div>
      </div>
    </header>
  )
}
