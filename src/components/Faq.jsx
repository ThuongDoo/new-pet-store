import { useState } from 'react'
import './Faq.css'

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item${openIndex === i ? ' is-open' : ''}`} key={item.q}>
          <button
            type="button"
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.q}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
