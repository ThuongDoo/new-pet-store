import { Link } from 'react-router-dom'
import './TeamTeaser.css'
import Reveal from './Reveal'
import { doctors } from '../data/team'

export default function TeamTeaser() {
  const featured = doctors.slice(0, 3)

  return (
    <section className="team-teaser">
      <div className="section-wrap">
        <Reveal className="team-teaser-head" as="div">
          <div>
            <div className="eyebrow team-teaser-eyebrow">✦ Đội ngũ bác sĩ</div>
            <h2 className="team-teaser-h2">Chuyên môn vững vàng,<br /><span>tận tâm với từng ca bệnh.</span></h2>
          </div>
          <Link className="team-teaser-link" to="/gioi-thieu#doi-ngu-bac-si">Xem toàn bộ đội ngũ →</Link>
        </Reveal>

        <div className="team-teaser-grid">
          {featured.map((d, i) => (
            <Reveal as="div" className="team-teaser-card" key={d.name} delay={i * 100}>
              <div className={`team-teaser-avatar tone-${d.tone}`}>{d.initials}</div>
              <h3>{d.name}</h3>
              <p>{d.title}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
