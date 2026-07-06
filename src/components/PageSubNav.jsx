import { useEffect, useState } from 'react'
import './PageSubNav.css'

export default function PageSubNav({ tabs }) {
  const [active, setActive] = useState(tabs[0]?.id)

  useEffect(() => {
    const sections = tabs.map(t => document.getElementById(t.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [tabs])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="page-subnav">
      <div className="section-wrap page-subnav-inner">
        {tabs.map(t => (
          <button
            key={t.id}
            type="button"
            className={`page-subnav-tab${active === t.id ? ' is-active' : ''}`}
            onClick={() => handleClick(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
