import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'
import './sections/shared.css'
import dog  from './assets/dog.png'
import dog2 from './assets/dog2.png'
import dog3 from './assets/dog3.png'
import dog4 from './assets/dog4.png'
import dog6 from './assets/dog6.png'
import Ecosystem from './sections/Ecosystem'
import Services from './sections/Services'
import Story from './sections/Story'
import Cases from './sections/Cases'
import Testimonials from './sections/Testimonials'
import Knowledge from './sections/Knowledge'
import Footer from './sections/Footer'

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

function SunDeco() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="6.5" fill="#F5C840" opacity=".9"/>
      <circle cx="16" cy="4.5" r="2.2" fill="#F5C840" opacity=".55"/>
      <circle cx="16" cy="27.5" r="2.2" fill="#F5C840" opacity=".55"/>
      <circle cx="4.5" cy="16" r="2.2" fill="#F5C840" opacity=".55"/>
      <circle cx="27.5" cy="16" r="2.2" fill="#F5C840" opacity=".55"/>
      <circle cx="7.5" cy="7.5" r="1.6" fill="#F5C840" opacity=".4"/>
      <circle cx="24.5" cy="7.5" r="1.6" fill="#F5C840" opacity=".4"/>
      <circle cx="7.5" cy="24.5" r="1.6" fill="#F5C840" opacity=".4"/>
      <circle cx="24.5" cy="24.5" r="1.6" fill="#F5C840" opacity=".4"/>
      <path d="M13,17 Q16,20.5 19,17" stroke="#E8A820" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <circle cx="13.5" cy="14.5" r="1.1" fill="#E8A820"/>
      <circle cx="18.5" cy="14.5" r="1.1" fill="#E8A820"/>
    </svg>
  )
}

function Leaf1Deco() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
      <path d="M10 2 Q17 7 15 17 Q13 23 10 23 Q7 23 5 17 Q3 7 10 2Z" fill="#A8D8CC" opacity=".75"/>
      <path d="M10 23 L10 13" stroke="#7AC0B0" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  )
}

function Leaf2Deco() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path d="M9 2 Q16 6 13 15 Q11 20 9 20 Q7 20 5 15 Q2 6 9 2Z" fill="#A8D8CC" opacity=".65"/>
      <path d="M9 20 L9 11" stroke="#7AC0B0" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  )
}

function App() {
  const [careIconIndex, setCareIconIndex] = useState(0)
  const blobWrapRef = useRef(null)
  const decoRefs = useRef([])
  const careCircleRef = useRef(null)
  const pawBlobRef = useRef(null)

  const careIcons = ['🤍 🐾', '🧡 🐾', '💛 🐾', '💚 🐾']

  const dots = useMemo(() =>
    Array.from({ length: 49 }, () => ({
      opacity: (0.2 + Math.random() * 0.5).toFixed(2)
    })), [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCareIconIndex(i => (i + 1) % careIcons.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5
      const cy = e.clientY / window.innerHeight - 0.5
      if (blobWrapRef.current) {
        blobWrapRef.current.style.transform = `translate(${cx * 10}px,${cy * 7}px)`
      }
      decoRefs.current.forEach((d, i) => {
        if (d) {
          const f = 0.7 + i * 0.25
          d.style.transform = `translate(${-cx * f * 6}px,${-cy * f * 5}px)`
        }
      })
      if (careCircleRef.current) {
        careCircleRef.current.style.transform = `translate(${cx * -7}px,${cy * -5}px)`
      }
      if (pawBlobRef.current) {
        pawBlobRef.current.style.transform = `translate(${cx * -5}px,${cy * -4}px)`
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo">
          <LogoSVG />
          <div className="logo-texts">
            <h2>Paw<em>Harmony</em></h2>
            <p>ANIMAL CARE CLINIC</p>
          </div>
        </div>

        <ul className="nav-links">
          <li><a href="#dich-vu">Dịch vụ</a></li>
          <li><a href="#ca-xu-ly">Ca đã xử lý</a></li>
          <li><a href="#cau-chuyen">Câu chuyện</a></li>
          <li><a href="#kien-thuc">Kiến thức</a></li>
          <li><a href="#lien-he">Liên hệ</a></li>
        </ul>

        <div className="nav-right">
          <button className="btn-book">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg>
            Đặt lịch khám
          </button>
          <button className="btn-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-grid">

        {/* LEFT */}
        <div className="left">
          <div className="deco d-sun" ref={el => decoRefs.current[0] = el}><SunDeco /></div>
          <div className="deco d-hrt1" ref={el => decoRefs.current[1] = el}>♡</div>
          <div className="deco d-hrt2" ref={el => decoRefs.current[2] = el}>♡</div>
          <div className="deco d-lf1" ref={el => decoRefs.current[3] = el}><Leaf1Deco /></div>
          <div className="deco d-lf2" ref={el => decoRefs.current[4] = el}><Leaf2Deco /></div>
          <div className="deco d-star" ref={el => decoRefs.current[5] = el}>✦</div>

          <svg className="arr-svg" style={{top:'52px',left:'178px',zIndex:5}} width="88" height="68" fill="none">
            <defs>
              <marker id="m1" viewBox="0 0 8 8" refX="5" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,2 L6,4 L0,6" stroke="#A8D8CC" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>
            <path d="M4,10 Q44,2 80,50" stroke="#A8D8CC" strokeWidth="1.5" strokeDasharray="5,3.5" fill="none" markerEnd="url(#m1)" opacity=".72"/>
          </svg>

          <div className="tag-pill"><div className="tag-dot"></div>Vì họ là gia đình</div>

          <h1>
            Đồng hành<br />trên mọi hành trình
            <span className="cursive-wrap">
              yêu thương
              <svg width="105" height="13" viewBox="0 0 105 13" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginLeft:'3px'}}>
                <path d="M2 9 Q26 3 52 8.5 Q78 14 103 7" stroke="#F07250" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
              </svg>
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" style={{display:'inline-block',marginLeft:'3px',verticalAlign:'middle'}}>
                <path d="M8.5 13.5 C8.5 13.5 1 9 1 4.5A3.7 3.7 0 0 1 8.5 2.5 A3.7 3.7 0 0 1 16 4.5C16 9 8.5 13.5 8.5 13.5Z" stroke="#F07250" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>
          </h1>

          <p className="sub">
            PawHarmony mang đến dịch vụ thú y hiện đại,<br />
            chăm sóc bằng cả chuyên môn và trái tim.
          </p>

          <div className="ctas">
            <button className="cta-main">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              Khám phá dịch vụ
            </button>
            <button className="cta-vid">
              <div className="play-ring">▶</div>
              <div className="vid-txt">
                <strong>Xem câu chuyện</strong>
                <span>của chúng tôi</span>
              </div>
            </button>
          </div>
        </div>

        {/* CENTER */}
        <div className="center">
          <svg className="arc-l" width="52" height="108" fill="none">
            <defs>
              <marker id="m2" viewBox="0 0 8 8" refX="5" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,2 L5,4 L0,6" stroke="#F8A888" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>
            <path d="M44,5 Q4,54 40,103" stroke="#F8A888" strokeWidth="1.5" strokeDasharray="5,3.5" fill="none" markerEnd="url(#m2)" opacity=".72"/>
          </svg>

          <div className="blob-wrap" ref={blobWrapRef}>
            {/* Main hero photo */}
            <div className="main-blob">
              <img src={dog4} className="blob-photo" alt="PawHarmony" />
            </div>

            {/* Floating photo card — left */}
            <div className="photo-float pf-left">
              <img src={dog} alt="happy pets" />
              <span>😊 Vui vẻ mỗi ngày</span>
            </div>

            {/* Floating photo card — right */}
            <div className="photo-float pf-right">
              <img src={dog3} alt="kitten and puppy" />
              <span>🌟 Chăm sóc tận tâm</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="teal-bg"></div>
          <div className="dot-grid">
            {dots.map((dot, i) => (
              <span key={i} style={{opacity: dot.opacity}}></span>
            ))}
          </div>
          <div className="care-circle" ref={careCircleRef}>
            <div className="cc-icons">{careIcons[careIconIndex]}</div>
            <div className="cc-title">Care with love</div>
            <div className="cc-sub">Grow with trust</div>
          </div>

          {/* Paw blob with real photo */}
          <div className="paw-blob" ref={pawBlobRef}>
            <img src={dog6} alt="cute pets" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <div className="services">

          <div className="svc">
            <div className="sb sb1">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="13" r="6.5" stroke="#1C6B58" strokeWidth="1.8"/>
                <path d="M16 19.5 L16 27" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M12 24 L20 24" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="24" cy="8" r="3" stroke="#1C6B58" strokeWidth="1.4"/>
                <path d="M21.5 10.5 L18.8 13.2" stroke="#1C6B58" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="svc-name">Khám & tư vấn<br />chuyên sâu</div>
          </div>

          <div className="svc">
            <div className="sb sb2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4 L26 8.5 L26 17 C26 23 21 27.5 16 29.5 C11 27.5 6 23 6 17 L6 8.5 Z" stroke="#F07250" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <path d="M16 13.5 L16 20.5 M12.5 17 L19.5 17" stroke="#F07250" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="svc-name">Tiêm phòng<br />an toàn</div>
          </div>

          <div className="svc">
            <div className="sb sb3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="14" width="20" height="12" rx="4" stroke="#B89018" strokeWidth="1.8"/>
                <path d="M10 14 L10 11 Q10 8 13.5 8 L18.5 8 Q22 8 22 11 L22 14" stroke="#B89018" strokeWidth="1.8" fill="none"/>
                <circle cx="13" cy="20" r="2" stroke="#B89018" strokeWidth="1.4"/>
                <circle cx="19" cy="20" r="2" stroke="#B89018" strokeWidth="1.4"/>
                <circle cx="9" cy="6" r="1.5" fill="#B89018" opacity=".5"/>
                <circle cx="14" cy="4" r="1.2" fill="#B89018" opacity=".4"/>
                <circle cx="23" cy="5" r="1.5" fill="#B89018" opacity=".5"/>
              </svg>
            </div>
            <div className="svc-name">Spa & Grooming<br />cao cấp</div>
          </div>

          <div className="svc">
            <div className="sb sb4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 17 L16 7.5 L26 17 L26 27 L6 27 Z" stroke="#3A8038" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                <path d="M13 27 L13 21 L19 21 L19 27" stroke="#3A8038" strokeWidth="1.8" fill="none"/>
                <path d="M14.5 15 C14.5 15 16 12.5 17.5 15 C16 17 14.5 15 14.5 15Z" stroke="#3A8038" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <div className="svc-name">Lưu trú & chăm sóc<br />toàn diện</div>
          </div>

        </div>

        <div className="stats">
          <div className="snum">10.000+</div>
          <div className="slbl">gia đình thú cưng tin tưởng lựa chọn</div>
          <div className="avrow">
            <div className="av"><img src={dog}  alt="" /></div>
            <div className="av"><img src={dog2} alt="" /></div>
            <div className="av"><img src={dog3} alt="" /></div>
            <div className="av"><img src={dog4} alt="" /></div>
            <div className="av"><img src={dog6} alt="" /></div>
            <div className="av-plus">+</div>
          </div>
        </div>
      </div>

      <Ecosystem />
      <Services />
      <Story />
      <Cases />
      <Testimonials />
      <Knowledge />
      <Footer />
    </>
  )
}

export default App
