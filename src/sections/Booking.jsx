import { useState } from 'react'
import './Booking.css'
import Reveal from './Reveal'
import Faq from '../components/Faq'

const serviceOptions = [
  'Khám tổng quát',
  'Tiêm phòng',
  'Phẫu thuật',
  'Triệt sản',
  'Xét nghiệm',
  'Chẩn đoán hình ảnh',
  'Điều trị nội trú',
  'Spa - Grooming',
  'Khách sạn thú cưng',
]

const faqItems = [
  { q: 'Có cần đặt lịch trước không?', a: 'Nên đặt lịch trước để được phục vụ nhanh chóng, tuy nhiên PawHarmony vẫn tiếp nhận các trường hợp khám trực tiếp không hẹn trước.' },
  { q: 'Phòng khám có khám ngoài giờ không?', a: 'Có, phòng khám hỗ trợ khám ngoài giờ hành chính theo lịch hẹn trước; trường hợp cấp cứu được tiếp nhận 24/7.' },
  { q: 'Có khám chó, mèo và thú cưng khác không?', a: 'PawHarmony khám và điều trị cho chó, mèo cùng nhiều loại thú cưng nhỏ khác. Vui lòng liên hệ trước nếu thú cưng của bạn thuộc loài đặc biệt.' },
  { q: 'Có dịch vụ cấp cứu không?', a: 'Có, đội ngũ cấp cứu trực 24/7, sẵn sàng hỗ trợ trong mọi tình huống khẩn cấp.' },
  { q: 'Có chỗ đậu xe không?', a: 'Phòng khám có khu vực đậu xe máy và ô tô miễn phí dành cho khách hàng.' },
]

export default function Booking() {
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
            <div className="eyebrow">✦ Đặt lịch khám</div>
            <h2 className="booking-h1">Đặt lịch chỉ mất<br /><span>một phút.</span></h2>
            <p>
              Điền thông tin bên dưới, đội ngũ PawHarmony sẽ liên hệ xác nhận lịch hẹn
              trong thời gian sớm nhất.
            </p>
            <a href="tel:19009999" className="booking-phone">
              <span className="booking-phone-ring">📞</span>
              <span>
                <strong>1900 9999</strong>
                <small>Hotline 24/7</small>
              </span>
            </a>
          </Reveal>

          <Reveal className="booking-form-card" delay={150}>
            {submitted ? (
              <div className="booking-thanks">
                <div className="booking-thanks-icon">🤍</div>
                <h3>Đã nhận được lịch hẹn!</h3>
                <p>Đội ngũ PawHarmony sẽ gọi lại để xác nhận trong ít phút.</p>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Thông tin đặt lịch</h3>
                <div className="booking-field-row">
                  <input type="text" placeholder="Họ và tên" required />
                  <input type="tel" placeholder="Số điện thoại" required />
                </div>
                <input type="text" placeholder="Tên & loài thú cưng của bạn" required />
                <select defaultValue="" required>
                  <option value="" disabled>Chọn dịch vụ cần đặt</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
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
                <button type="submit">Xác nhận đặt lịch</button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="booking-faq">
          <Reveal className="booking-faq-head">
            <div className="eyebrow booking-faq-eyebrow">✦ Câu hỏi thường gặp</div>
            <h2 className="booking-faq-h2">Giải đáp nhanh<br />trước khi đến khám.</h2>
          </Reveal>
          <Reveal className="booking-faq-inner" delay={100}>
            <Faq items={faqItems} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
