import './Cases.css'
import Reveal from './Reveal'
import dog from '../assets/dog.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog5 from '../assets/dog5.png'
import { CLIENT_DATA } from '../data/clientData'
import { imgSrc } from '../utils/imgSrc'

const IMG_FALLBACKS = [dog5, dog2, dog3, dog]

function CheckBadge() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5 L6.3 11.8 L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Cases({ data = CLIENT_DATA }) {
  const { cases } = data

  return (
    <section className="cases" id="ca-xu-ly">
      <div className="section-wrap">
        <Reveal className="cases-head">
          <div className="eyebrow cases-eyebrow">✦ {cases.eyebrow}</div>
          <h2 className="cases-h2">{cases.h2Line1}<br /><span>{cases.h2Span}</span></h2>
        </Reveal>

        <div className="cases-grid">
          {cases.items.map((c, i) => (
            <Reveal as="article" className="case-card" key={c.title} delay={i * 100}>
              <div className="case-img">
                <img src={imgSrc(c.img, IMG_FALLBACKS[i % IMG_FALLBACKS.length])} alt={c.title} />
                <span className="case-tag">{c.tag}</span>
                <span className="case-duration">{c.duration}</span>
              </div>
              <div className="case-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-outcome">
                  <CheckBadge />
                  <span>{c.outcome}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
