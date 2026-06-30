import './Knowledge.css'
import Reveal from './Reveal'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog4 from '../assets/dog4.png'

const articles = [
  {
    tag: 'Sức khỏe', readTime: '6 phút đọc', img: dog2,
    title: '5 dấu hiệu cho thấy thú cưng của bạn cần đi khám ngay',
    desc: 'Đôi khi một chiếc đuôi cụp xuống cũng là một lời cầu cứu thầm lặng.',
    big: true,
  },
  {
    tag: 'Dinh dưỡng', readTime: '4 phút đọc', img: dog3,
    title: 'Dinh dưỡng theo từng giai đoạn cho mèo',
    desc: 'Mỗi độ tuổi, một thực đơn khác nhau.',
  },
  {
    tag: 'Tiêm phòng', readTime: '3 phút đọc', img: dog4,
    title: 'Vì sao tiêm phòng định kỳ lại quan trọng',
    desc: 'Phòng bệnh hơn chữa bệnh — luôn đúng, kể cả với thú cưng.',
  },
]

export default function Knowledge() {
  return (
    <section className="know" id="kien-thuc">
      <div className="section-wrap">
        <Reveal className="know-head">
          <div className="eyebrow know-eyebrow">✦ Kiến thức</div>
          <h2 className="know-h2">Yêu thương đúng cách,<br /><span>bắt đầu từ hiểu biết.</span></h2>
        </Reveal>

        <div className="know-grid">
          {articles.map((a, i) => (
            <Reveal
              as="article"
              key={a.title}
              className={`know-card${a.big ? ' know-card-big' : ''}`}
              delay={i * 130}
            >
              <div className="know-img">
                <img src={a.img} alt={a.title} />
                <span className="know-tag">{a.tag}</span>
              </div>
              <div className="know-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <span className="know-meta">{a.readTime}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
