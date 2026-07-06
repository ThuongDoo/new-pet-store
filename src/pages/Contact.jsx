import './Contact.css'
import '../sections/shared.css'
import Reveal from '../sections/Reveal'
import { ContactCTA } from '../sections/Footer'

const address = '123 Đường Yêu Thương, Q.1, TP.HCM'

export default function Contact() {
  return (
    <>
      <ContactCTA />

      <div className="contact-info">
        <div className="section-wrap contact-info-grid">
          <Reveal className="contact-info-card">
            <h3>Địa chỉ & Giờ làm việc</h3>
            <p>
              {address}<br />
              hello@pawharmony.vn<br /><br />
              Thứ 2 – Chủ nhật: 8:00 – 20:00<br />
              Cấp cứu: 24/7
            </p>
            <a
              className="contact-map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Xem trên Google Maps →
            </a>
          </Reveal>

          <Reveal className="contact-map-box" delay={120}>
            <span>📍</span>
            <strong>PawHarmony Animal Care Clinic</strong>
            <span>{address}</span>
          </Reveal>
        </div>
      </div>
    </>
  )
}
