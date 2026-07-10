import { useState } from 'react'
import './Booking.css'
import Reveal from './Reveal'
import Faq from '../components/Faq'
import { CLIENT_DATA } from '../data/clientData'

export default function Booking({ data = CLIENT_DATA }) {
  const { booking, phone, phoneLabel } = data
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="booking-wrap" id="dat-lich-kham">
      <div className="section-wrap">
        <div className="booking-grid">
          <Reveal className="booking-copy">
            <div className="eyebrow">✦ {booking.eyebrow}</div>
            <h2 className="booking-h1">{booking.h2Line1}<br /><span>{booking.h2Span}</span></h2>
            <p>{booking.p}</p>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="booking-phone">
              <span className="booking-phone-ring">📞</span>
              <span>
                <strong>{phone}</strong>
                <small>{phoneLabel}</small>
              </span>
            </a>
          </Reveal>

          <Reveal className="booking-form-card" delay={150}>
            {submitted ? (
              <div className="booking-thanks">
                <div className="booking-thanks-icon">🤍</div>
                <h3>{booking.thanksTitle}</h3>
                <p>{booking.thanksP}</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>{booking.formHeading}</h3>
                <div className="booking-field-row">
                  <input type="text" placeholder="Họ và tên" required />
                  <input type="tel" placeholder="Số điện thoại" required />
                </div>
                <input type="text" placeholder="Tên & loài thú cưng của bạn" required />
                <select defaultValue="" required>
                  <option value="" disabled>Chọn dịch vụ cần đặt</option>
                  {booking.serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <div className="booking-field-row">
                  <input type="date" required />
                  <select defaultValue="">
                    <option value="" disabled>Khung giờ mong muốn</option>
                    <option>Buổi sáng (8h - 12h)</option>
                    <option>Buổi chiều (13h - 17h)</option>
                    <option>Buổi tối (17h - 20h)</option>
                  </select>
                </div>
                <textarea placeholder="Ghi chú thêm về tình trạng thú cưng" rows={3}></textarea>
                <button type="submit">{booking.submitBtn}</button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="booking-faq">
          <Reveal className="booking-faq-head">
            <div className="eyebrow booking-faq-eyebrow">✦ {booking.faqEyebrow}</div>
            <h2 className="booking-faq-h2">{booking.faqH2Line1}<br />{booking.faqH2Line2}</h2>
          </Reveal>
          <Reveal className="booking-faq-inner" delay={100}>
            <Faq items={booking.faqItems} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
