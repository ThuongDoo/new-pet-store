import './ProcessSteps.css'
import Reveal from './Reveal'
import { CLIENT_DATA } from '../data/clientData'

export default function ProcessSteps({ data = CLIENT_DATA }) {
  const { process } = data

  return (
    <section className="process">
      <div className="section-wrap">
        <Reveal className="process-head">
          <div className="eyebrow process-eyebrow">✦ Quy trình khám</div>
          <h2 className="process-h2">{process.h2Line1}<br /><span>{process.h2Span}</span></h2>
        </Reveal>

        <div className="process-steps">
          {process.steps.map((s, i) => (
            <Reveal as="div" className="process-step" key={s.title} delay={i * 100}>
              <div className="process-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
