import { useEffect, useState } from 'react'
import './Testimonials.css'
import Reveal from './Reveal'
import dog from '../assets/dog.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog4 from '../assets/dog4.png'
import dog5 from '../assets/dog5.png'
import dog6 from '../assets/dog6.png'
import { CLIENT_DATA } from '../data/clientData'
import { imgSrc } from '../utils/imgSrc'

const AVATAR_FALLBACKS = [dog, dog3, dog2, dog6, dog5, dog4]

function Star({ filled }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.3 L9.9 5.6 L14.6 6.1 L11 9.2 L12 13.8 L8 11.4 L4 13.8 L5 9.2 L1.4 6.1 L6.1 5.6Z"
        fill={filled ? '#F5C840' : 'none'}
        stroke={filled ? '#F5C840' : 'rgba(255,255,255,.3)'}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Stars({ count = 5 }) {
  return (
    <div className="tm-stars">
      {Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < count} />)}
    </div>
  )
}

export default function Testimonials({ data = CLIENT_DATA }) {
  const { stats, reviews } = data
  const quotes = reviews.items
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % quotes.length), 4500)
    return () => clearInterval(id)
  }, [quotes.length])

  return (
    <section className="tm" id="danh-gia-khach-hang">
      <div className="section-wrap tm-wrap">
        <Reveal className="tm-stat-col">
          <div className="tm-stat-blob">
            <div className="tm-num">{stats.number}</div>
            <div className="tm-lbl">{stats.label}</div>
            <div className="tm-avrow">
              <div className="tm-av"><img src={dog} alt="" /></div>
              <div className="tm-av"><img src={dog2} alt="" /></div>
              <div className="tm-av"><img src={dog3} alt="" /></div>
              <div className="tm-av"><img src={dog4} alt="" /></div>
              <div className="tm-av"><img src={dog6} alt="" /></div>
              <div className="tm-av-plus">+</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="tm-quote-col" delay={150}>
          <div className="eyebrow tm-eyebrow">✦ {reviews.eyebrow}</div>
          <div className="tm-quote-mark">"</div>
          <div className="tm-quote-stage">
            {quotes.map((q, i) => (
              <blockquote className={`tm-quote${i === active ? ' is-active' : ''}`} key={q.name}>
                <Stars count={Number(q.rating)} />
                <p>{q.text}</p>
                <footer><strong>{q.name}</strong><span>{q.pet}</span></footer>
              </blockquote>
            ))}
          </div>
          <div className="tm-dots">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Xem cảm nhận của ${q.name}`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="section-wrap">
        <Reveal className="tm-grid" delay={100}>
          {quotes.map((q, i) => (
            <article className={`tm-card${i === active ? ' is-active' : ''}`} key={q.name} onClick={() => setActive(i)}>
              <div className="tm-card-head">
                <div className="tm-card-av"><img src={imgSrc(q.avatar, AVATAR_FALLBACKS[i % AVATAR_FALLBACKS.length])} alt="" /></div>
                <div>
                  <strong>{q.name}</strong>
                  <span>{q.pet}</span>
                </div>
              </div>
              <Stars count={Number(q.rating)} />
              <p>{q.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
