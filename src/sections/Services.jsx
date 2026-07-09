import './Services.css'
import Reveal from './Reveal'

export function IconExam() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="13" r="6.5" stroke="#1C6B58" strokeWidth="1.8" />
      <path d="M16 19.5 L16 27" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 24 L20 24" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="24" cy="8" r="3" stroke="#1C6B58" strokeWidth="1.4" />
      <path d="M21.5 10.5 L18.8 13.2" stroke="#1C6B58" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
export function IconVaccine() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M16 4 L26 8.5 L26 17 C26 23 21 27.5 16 29.5 C11 27.5 6 23 6 17 L6 8.5 Z" stroke="#F07250" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M16 13.5 L16 20.5 M12.5 17 L19.5 17" stroke="#F07250" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
export function IconSpa() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="14" width="20" height="12" rx="4" stroke="#B89018" strokeWidth="1.8" />
      <path d="M10 14 L10 11 Q10 8 13.5 8 L18.5 8 Q22 8 22 11 L22 14" stroke="#B89018" strokeWidth="1.8" fill="none" />
      <circle cx="13" cy="20" r="2" stroke="#B89018" strokeWidth="1.4" />
      <circle cx="19" cy="20" r="2" stroke="#B89018" strokeWidth="1.4" />
    </svg>
  )
}
export function IconStay() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M6 17 L16 7.5 L26 17 L26 27 L6 27 Z" stroke="#3A8038" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M13 27 L13 21 L19 21 L19 27" stroke="#3A8038" strokeWidth="1.8" fill="none" />
    </svg>
  )
}
export function IconLab() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M13 5 L13 14.5 L7 24 Q6 27 9 27 L23 27 Q26 27 25 24 L19 14.5 L19 5" stroke="#2A836D" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M11 5 L21 5" stroke="#2A836D" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9.5 21 L22.5 21" stroke="#2A836D" strokeWidth="1.5" />
      <circle cx="16" cy="24" r="1.3" fill="#2A836D" />
    </svg>
  )
}
function IconEmergency() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#FDE8DC" strokeWidth="1.8" />
      <path d="M16 9 L16 16 L20.5 19" stroke="#FDE8DC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8 L13 8 M13 8 L8.5 3.5 M13 8 L8.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  { icon: <IconExam />, tone: 'mint', name: 'Khám & tư vấn chuyên sâu', desc: 'Thăm khám tổng quát, theo dõi sức khỏe định kỳ cùng bác sĩ giàu kinh nghiệm.' },
  { icon: <IconVaccine />, tone: 'peach', name: 'Tiêm phòng an toàn', desc: 'Phác đồ vắc-xin chuẩn quốc tế, theo dõi sát sau tiêm.' },
  { icon: <IconSpa />, tone: 'gold', name: 'Spa & Grooming cao cấp', desc: 'Tắm gội, cắt tỉa, thư giãn — chăm chút từ dáng vẻ đến tâm trạng.' },
  { icon: <IconStay />, tone: 'sage', name: 'Lưu trú & chăm sóc toàn diện', desc: 'Không gian lưu trú ấm áp khi bạn vắng nhà, như ở chính ngôi nhà của bé.' },
  { icon: <IconLab />, tone: 'mint', name: 'Xét nghiệm & chẩn đoán hình ảnh', desc: 'Thiết bị hiện đại, kết quả nhanh và chính xác.' },
]

export default function Services() {
  return (
    <section className="service" id="dich-vu">
      <div className="section-wrap">
        <Reveal className="service-head">
          <div className="eyebrow service-eyebrow">✦ Dịch vụ</div>
          <h2 className="service-h2">Chăm sóc toàn diện,<br /><span>từng nhịp thở một.</span></h2>
        </Reveal>

        <div className="service-bento">
          <Reveal className="service-card service-card-feature" delay={0}>
            <div className="service-feature-icon"><IconEmergency /></div>
            <h3>Cấp cứu 24/7</h3>
            <p>Đội ngũ trực cấp cứu mọi giờ trong ngày — vì những khoảnh khắc khẩn cấp không bao giờ báo trước.</p>
            <button className="service-feature-cta">Gọi đường dây nóng <ArrowIcon /></button>
            <div className="service-feature-deco"></div>
          </Reveal>

          {services.map((s, i) => (
            <Reveal as="div" className={`service-card service-card-sm tone-${s.tone}`} key={s.name} delay={120 + i * 90}>
              <div className="service-sm-icon">{s.icon}</div>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
