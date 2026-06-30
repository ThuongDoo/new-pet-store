import './Cases.css'
import Reveal from './Reveal'
import dog from '../assets/dog.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog5 from '../assets/dog5.png'

function CheckBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5 L6.3 11.8 L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const cases = [
  {
    img: dog5, tag: 'Cấp cứu & Phẫu thuật', duration: '5 ngày theo dõi',
    title: 'Ca phẫu thuật khẩn trong đêm của bé Kem',
    desc: 'Kem nhập viện lúc nửa đêm vì xoắn dạ dày — tình trạng nguy hiểm tính bằng phút. Đội ngũ cấp cứu xử lý kịp thời, phẫu thuật thành công ngay trong đêm.',
    outcome: 'Hồi phục hoàn toàn sau 5 ngày',
  },
  {
    img: dog2, tag: 'Ngoại khoa', duration: '3 tuần điều trị',
    title: 'Lúa và hành trình hồi phục sau gãy chân',
    desc: 'Một tai nạn nhỏ khiến Lúa không thể đi lại bình thường. Sau ca chỉnh hình và quá trình vật lý trị liệu kiên trì, Lúa đã chạy nhảy trở lại.',
    outcome: 'Vận động bình thường trở lại',
  },
  {
    img: dog3, tag: 'Tâm lý & Hành vi', duration: '4 buổi làm quen',
    title: 'Tý vượt qua nỗi sợ kim tiêm',
    desc: 'Tý từng run rẩy mỗi lần bước vào phòng khám. Bằng phương pháp tiếp cận nhẹ nhàng, từng bước một, giờ đây Tý tự tin đưa chân ra tiêm phòng.',
    outcome: 'Không còn sợ hãi khi đi khám',
  },
  {
    img: dog, tag: 'Dinh dưỡng', duration: '2 tháng đồng hành',
    title: 'Múp giảm cân an toàn, khỏe mạnh hơn mỗi ngày',
    desc: 'Thừa cân khiến Múp lười vận động và có nguy cơ tim mạch. Một thực đơn riêng cùng lịch tái khám sát sao đã giúp Múp lấy lại vóc dáng khỏe mạnh.',
    outcome: 'Giảm 2kg, chỉ số sức khỏe ổn định',
  },
]

export default function Cases() {
  return (
    <section className="cases" id="ca-xu-ly">
      <div className="section-wrap">
        <Reveal className="cases-head">
          <div className="eyebrow cases-eyebrow">✦ Đã đồng hành</div>
          <h2 className="cases-h2">Những ca bệnh,<br /><span>những cái kết tròn đầy.</span></h2>
        </Reveal>

        <div className="cases-list">
          {cases.map((c, i) => (
            <Reveal as="article" className="cases-row" key={c.title} delay={i * 100}>
              <div className="cases-img">
                <img src={c.img} alt={c.title} />
                <span className="cases-duration">{c.duration}</span>
              </div>
              <div className="cases-body">
                <span className="cases-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="cases-outcome">
                  <CheckBadge />
                  <span>{c.outcome}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
