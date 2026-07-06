import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Reveal from './Reveal'

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="21.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 28 Q13 22 16 19 Q18 16 21 17 L23 15 Q25 13 27 15 Q30 13 32 15 Q34 17 32 20 L31 28 Q30 32 23 33 Q16 32 14 28Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
    </svg>
  )
}
function SocialFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.55.45-1 1-1Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" /></svg>
  )
}
function SocialCamera() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="13" r="3.4" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="9.5" r="1" fill="currentColor" /></svg>
  )
}
function SocialChat() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.5 6.8 0 1 1-3.4-5.4L21 5l-1 3.6c.65.85 1 1.85 1 2.9Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" /></svg>
  )
}

const footerLinks = [
  { label: 'Giới thiệu', to: '/gioi-thieu' },
  { label: 'Dịch vụ', to: '/dich-vu' },
  { label: 'Đặt lịch khám', to: '/dat-lich-kham' },
  { label: 'Thư viện ảnh', to: '/thu-vien-anh' },
  { label: 'Đánh giá khách hàng', to: '/danh-gia-khach-hang' },
  { label: 'Liên hệ', to: '/lien-he' },
]

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="foot-cta" id="lien-he">
      <div className="foot-blob foot-blob1"></div>
      <div className="foot-blob foot-blob2"></div>
      <span className="foot-deco foot-deco-sun">✦</span>
      <span className="foot-deco foot-deco-leaf">🐾</span>

      <div className="section-wrap foot-cta-wrap">
        <Reveal className="foot-cta-copy">
          <div className="eyebrow foot-eyebrow">✦ Liên hệ</div>
          <h2 className="foot-h2">Hãy để chúng tôi<br /><em>đồng hành cùng bé.</em></h2>
          <p className="foot-p">
            Đặt lịch khám, hỏi thăm tình trạng sức khỏe, hay chỉ đơn giản là
            trò chuyện — chúng tôi luôn sẵn sàng lắng nghe.
          </p>
          <div className="foot-cta-actions">
            <a href="tel:19009999" className="foot-cta-phone">
              <span className="foot-phone-ring">📞</span>
              <span>
                <strong>1900 9999</strong>
                <small>Hotline 24/7</small>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal className="foot-form-card" delay={150}>
          {submitted ? (
            <div className="foot-form-thanks">
              <div className="foot-form-thanks-icon">🤍</div>
              <h3>Đã nhận được lời nhắn!</h3>
              <p>Đội ngũ PawHarmony sẽ liên hệ lại với bạn sớm nhất.</p>
            </div>
          ) : (
            <form className="foot-form" onSubmit={handleSubmit}>
              <h3>Gửi lời nhắn cho chúng tôi</h3>
              <div className="foot-field-row">
                <input type="text" placeholder="Họ và tên" required />
                <input type="tel" placeholder="Số điện thoại" required />
              </div>
              <input type="text" placeholder="Tên & loài thú cưng của bạn" />
              <textarea placeholder="Bạn cần PawHarmony hỗ trợ điều gì?" rows={3}></textarea>
              <button type="submit">Gửi lời nhắn</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer-wrap">
        <div className="site-footer-brand">
          <div className="site-footer-logo"><LogoMark /><span>Paw<em>Harmony</em></span></div>
          <p>Vì họ là gia đình — chăm sóc bằng cả chuyên môn và trái tim.</p>
          <div className="site-footer-social">
            <a href="#" aria-label="Facebook"><SocialFacebook /></a>
            <a href="#" aria-label="Instagram"><SocialCamera /></a>
            <a href="#" aria-label="Zalo"><SocialChat /></a>
          </div>
        </div>

        <nav className="site-footer-nav">
          {footerLinks.map(l => <Link key={l.label} to={l.to}>{l.label}</Link>)}
        </nav>

        <div className="site-footer-addr">
          <p>123 Đường Yêu Thương, Q.1, TP.HCM</p>
          <p>hello@pawharmony.vn</p>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© 2026 PawHarmony Animal Care Clinic.</span>
        <span>Made with 🤍 for every paw.</span>
      </div>
    </footer>
  )
}
