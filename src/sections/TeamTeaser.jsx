import './TeamTeaser.css'
import Reveal from './Reveal'
import { CLIENT_DATA } from '../data/clientData'
import { isImageValue } from '../utils/imgSrc'

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(-2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function TeamTeaser({ data = CLIENT_DATA }) {
  const { team } = data

  return (
    <section className="team-teaser">
      <div className="section-wrap team-teaser-wrap">
        <Reveal className="team-teaser-head" as="div">
          <div className="eyebrow team-teaser-eyebrow">✦ Đội ngũ bác sĩ</div>
          <h2 className="team-teaser-h2">{team.h2Line1}<br /><span>{team.h2Span}</span></h2>
          <p className="team-teaser-p">{team.p}</p>
        </Reveal>

        <Reveal as="div" className="team-teaser-card" delay={100}>
          {isImageValue(team.avatar) ? (
            <img className="team-teaser-photo" src={team.avatar} alt={team.name} />
          ) : (
            <div className={`team-teaser-avatar tone-${team.tone}`}>{initials(team.name)}</div>
          )}
          <h3>{team.name}</h3>
          <p className="team-teaser-title">{team.title}</p>
          <p className="team-teaser-bio">{team.bio}</p>
        </Reveal>
      </div>
    </section>
  )
}
