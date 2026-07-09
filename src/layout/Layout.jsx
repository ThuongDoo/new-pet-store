import './Layout.css'
import Home from '../pages/Home'
import { SiteFooter } from '../sections/Footer'

function LogoSVG() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
      <circle cx="23" cy="23" r="21.5" stroke="#1C6B58" strokeWidth="1.4"/>
      <path d="M14 28 Q13 22 16 19 Q18 16 21 17 L23 15 Q25 13 27 15 Q30 13 32 15 Q34 17 32 20 L31 28 Q30 32 23 33 Q16 32 14 28Z" stroke="#1C6B58" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
      <path d="M16 19 Q14 15 16 13 Q18 14 18 17" stroke="#1C6B58" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <path d="M30 20 Q32 15 30 13 Q28 14 28 18" stroke="#1C6B58" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <path d="M13 19 Q11 15 13 13 Q15 14 14 17" stroke="#F07250" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <circle cx="20" cy="26" r="1.1" fill="#1C6B58" opacity=".5"/>
      <circle cx="23" cy="27.5" r="1.1" fill="#1C6B58" opacity=".5"/>
      <circle cx="26" cy="26" r="1.1" fill="#1C6B58" opacity=".5"/>
    </svg>
  )
}

const navItems = [
  { to: '#gioi-thieu', label: 'Giới thiệu' },
  { to: '#dich-vu', label: 'Dịch vụ' },
  { to: '#thu-vien-anh', label: 'Thư viện ảnh' },
  { to: '#danh-gia-khach-hang', label: 'Đánh giá khách hàng' },
  { to: '#lien-he', label: 'Liên hệ' },
]

export default function Layout() {
  return (
    <>
      <nav>
        <a href="#top" className="logo">
          <LogoSVG />
          <div className="logo-texts">
            <h2>Paw<em>Harmony</em></h2>
            <p>ANIMAL CARE CLINIC</p>
          </div>
        </a>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.to}>
              <a href={item.to}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="#dat-lich-kham" className="btn-book">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            Đặt lịch khám
          </a>
          <button className="btn-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <main>
        <Home />
      </main>

      <SiteFooter />
    </>
  )
}
