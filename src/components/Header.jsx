import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/services', label: 'บริการ' },
  { to: '/portfolio', label: 'ผลงาน' },
  { to: '/contact', label: 'ติดต่อเรา' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SE</span>
          <span>
            <span className="brand-text-th" style={{ display: 'block' }}>สยาม เอราวัณ คอนสตรัคชั่น</span>
            <span className="brand-text-en">Siam Erawan Construction</span>
          </span>
        </NavLink>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <div className="nav-links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <a href="tel:0988257519" className="nav-phone">
            098-825-7519
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-label="เปิดเมนู">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      <div className="stripe-divider thin" />
    </header>
  )
}
