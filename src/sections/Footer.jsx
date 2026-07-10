import { useState } from 'react'
import './Footer.css'
import Reveal from './Reveal'
import { CLIENT_DATA } from '../data/clientData'

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
  { label: 'Giới thiệu', to: '#gioi-thieu' },
  { label: 'Dịch vụ', to: '#dich-vu' },
  { label: 'Đặt lịch khám', to: '#dat-lich-kham' },
  { label: 'Đánh giá khách hàng', to: '#danh-gia-khach-hang' },
  { label: 'Liên hệ', to: '#lien-he' },
]

export function ContactCTA({ data = CLIENT_DATA }) {
  const { contact, phone, phoneLabel } = data
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
          <div className="eyebrow foot-eyebrow">✦ {contact.eyebrow}</div>
          <h2 className="foot-h2">{contact.h2Line1}<br /><em>{contact.h2Em}</em></h2>
          <p className="foot-p">{contact.p}</p>
          <div className="foot-cta-actions">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="foot-cta-phone">
              <span className="foot-phone-ring">📞</span>
              <span>
                <strong>{phone}</strong>
                <small>{phoneLabel}</small>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal className="foot-form-card" delay={150}>
          {submitted ? (
            <div className="foot-form-thanks">
              <div className="foot-form-thanks-icon">🤍</div>
              <h3>{contact.thanksTitle}</h3>
              <p>{contact.thanksP}</p>
            </div>
          ) : (
            <form className="foot-form" onSubmit={handleSubmit}>
              <h3>{contact.formHeading}</h3>
              <div className="foot-field-row">
                <input type="text" placeholder="Họ và tên" required />
                <input type="tel" placeholder="Số điện thoại" required />
              </div>
              <input type="text" placeholder="Tên & loài thú cưng của bạn" />
              <textarea placeholder="Bạn cần hỗ trợ điều gì?" rows={3}></textarea>
              <button type="submit">{contact.submitBtn}</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter({ data = CLIENT_DATA }) {
  const { brand, address, email, social, footer } = data

  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer-wrap">
        <div className="site-footer-brand">
          <div className="site-footer-logo"><LogoMark /><span>{brand}</span></div>
          <p>{footer.tagline}</p>
          <div className="site-footer-social">
            <a href={social.facebook || '#'} aria-label="Facebook"><SocialFacebook /></a>
            <a href={social.instagram || '#'} aria-label="Instagram"><SocialCamera /></a>
            <a href={social.zalo || '#'} aria-label="Zalo"><SocialChat /></a>
          </div>
        </div>

        <nav className="site-footer-nav">
          {footerLinks.map(l => <a key={l.label} href={l.to}>{l.label}</a>)}
        </nav>

        <div className="site-footer-addr">
          <p>{address}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>{footer.copyright}</span>
        <span>{footer.note}</span>
      </div>
    </footer>
  )
}
