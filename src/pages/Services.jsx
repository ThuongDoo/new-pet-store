import { Link } from 'react-router-dom'
import './Services.css'
import '../sections/shared.css'
import Reveal from '../sections/Reveal'
import PageSubNav from '../components/PageSubNav'
import { IconExam, IconVaccine, IconSpa, IconStay, IconLab } from '../sections/Services'

function IconSurgery() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M9 6 L23 20" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 6 L9 20" stroke="#1C6B58" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="24" r="3" stroke="#1C6B58" strokeWidth="1.6" />
      <circle cx="23" cy="24" r="3" stroke="#1C6B58" strokeWidth="1.6" />
      <path d="M9 20 L9 21.3 M23 20 L23 21.3" stroke="#1C6B58" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function IconNeuter() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="18" r="8" stroke="#F07250" strokeWidth="1.8" />
      <path d="M19.5 12.5 L26 6 M26 6 L20 6 M26 6 L26 12" stroke="#F07250" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconScan() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="5" width="22" height="22" rx="4" stroke="#2A836D" strokeWidth="1.8" />
      <path d="M5 12 L27 12 M12 5 L12 27" stroke="#2A836D" strokeWidth="1.3" opacity=".6" />
      <circle cx="19" cy="19" r="4.2" stroke="#2A836D" strokeWidth="1.6" />
    </svg>
  )
}
function IconHotel() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
      <path d="M5 26 L5 10 L16 5 L27 10 L27 26" stroke="#B89018" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      <path d="M11 26 L11 18 L21 18 L21 26" stroke="#B89018" strokeWidth="1.6" fill="none" />
      <path d="M5 26 L27 26" stroke="#B89018" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const tabs = [
  { id: 'kham-chan-doan', label: 'Khám & Chẩn đoán' },
  { id: 'phau-thuat', label: 'Phẫu thuật' },
  { id: 'spa-luu-tru', label: 'Spa & Lưu trú' },
]

const categories = [
  {
    id: 'kham-chan-doan',
    title: 'Khám & Chẩn đoán',
    accent: 'chính xác, kịp thời.',
    items: [
      { icon: <IconExam />, tone: 'mint', name: 'Khám tổng quát', desc: 'Thăm khám định kỳ, theo dõi sức khỏe toàn diện cùng bác sĩ giàu kinh nghiệm.' },
      { icon: <IconVaccine />, tone: 'peach', name: 'Tiêm phòng', desc: 'Phác đồ vắc-xin chuẩn quốc tế, theo dõi sát sau tiêm.' },
      { icon: <IconLab />, tone: 'mint', name: 'Xét nghiệm', desc: 'Xét nghiệm máu, sinh hóa với thiết bị hiện đại, kết quả nhanh chóng.' },
      { icon: <IconScan />, tone: 'sage', name: 'Chẩn đoán hình ảnh', desc: 'Siêu âm, X-quang hỗ trợ chẩn đoán chính xác các bệnh lý phức tạp.' },
      { icon: <IconStay />, tone: 'sage', name: 'Điều trị nội trú', desc: 'Theo dõi và điều trị sát sao cho các ca cần lưu viện.' },
    ],
  },
  {
    id: 'phau-thuat',
    title: 'Phẫu thuật',
    accent: 'an toàn, chuyên sâu.',
    items: [
      { icon: <IconSurgery />, tone: 'mint', name: 'Phẫu thuật', desc: 'Đội ngũ ngoại khoa giàu kinh nghiệm, phòng mổ đạt chuẩn vô trùng.' },
      { icon: <IconNeuter />, tone: 'peach', name: 'Triệt sản', desc: 'Phẫu thuật triệt sản an toàn, nhẹ nhàng, hồi phục nhanh.' },
    ],
  },
  {
    id: 'spa-luu-tru',
    title: 'Spa & Lưu trú',
    accent: 'thư giãn, ấm áp.',
    items: [
      { icon: <IconSpa />, tone: 'gold', name: 'Spa - Grooming', desc: 'Tắm gội, cắt tỉa, thư giãn — chăm chút từ dáng vẻ đến tâm trạng.' },
      { icon: <IconHotel />, tone: 'gold', name: 'Khách sạn thú cưng', desc: 'Không gian lưu trú ấm áp khi bạn vắng nhà, như ở chính ngôi nhà của bé.' },
    ],
  },
]

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="section-wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--teal-mid)' }}>✦ Dịch vụ</div>
          <h1 className="page-hero-h1">Chăm sóc toàn diện,<br /><span>từng nhịp thở một.</span></h1>
          <p className="page-hero-p">
            Từ khám tổng quát đến phẫu thuật, spa và lưu trú — PawHarmony đồng hành
            cùng thú cưng của bạn ở mọi giai đoạn.
          </p>
        </div>
      </div>

      <PageSubNav tabs={tabs} />

      {categories.map((cat) => (
        <section className="services-block" id={cat.id} key={cat.id}>
          <div className="section-wrap">
            <Reveal className="services-block-head">
              <div className="eyebrow services-block-eyebrow">✦ {cat.title}</div>
              <h2 className="services-block-h2">{cat.title},<br /><span>{cat.accent}</span></h2>
            </Reveal>

            <div className="services-full-grid">
              {cat.items.map((s, i) => (
                <Reveal as="article" className="services-full-card" key={s.name} delay={i * 90}>
                  <div className={`services-full-icon tone-${s.tone}`}>{s.icon}</div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="section-wrap" style={{ paddingBottom: 80 }}>
        <Reveal className="pricing-note">
          <h3>Chi phí khám và điều trị</h3>
          <p>
            Chi phí sẽ phụ thuộc vào tình trạng sức khỏe, loại dịch vụ và chỉ định
            của bác sĩ. Vui lòng liên hệ để được tư vấn và báo giá cụ thể.
          </p>
          <Link className="pricing-note-cta" to="/dat-lich-kham">Đặt lịch tư vấn ngay</Link>
        </Reveal>
      </div>
    </>
  )
}
