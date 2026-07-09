import { useEffect, useState } from 'react'
import './Testimonials.css'
import Reveal from './Reveal'
import dog from '../assets/dog.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog4 from '../assets/dog4.png'
import dog5 from '../assets/dog5.png'
import dog6 from '../assets/dog6.png'

function Star({ filled }) {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.3 L9.9 5.6 L14.6 6.1 L11 9.2 L12 13.8 L8 11.4 L4 13.8 L5 9.2 L1.4 6.1 L6.1 5.6Z"
        fill={filled ? '#F5C840' : 'none'}
        stroke={filled ? '#F5C840' : 'rgba(255,255,255,.3)'}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Stars({ count = 5 }) {
  return (
    <div className="tm-stars">
      {Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < count} />)}
    </div>
  )
}

const quotes = [
  { text: 'Bé Mít nhà mình từng rất sợ đi khám, giờ thì... tự chạy vào phòng khám trước cả mình.', name: 'Chị Lan', pet: 'chủ của Mít · Golden Retriever', rating: 5, avatar: dog },
  { text: 'Đội ngũ ở đây không chỉ giỏi chuyên môn mà còn thực sự yêu thương từng bé.', name: 'Anh Huy', pet: 'chủ của Tom · Mèo Anh lông ngắn', rating: 5, avatar: dog3 },
  { text: 'Mình tin tưởng tuyệt đối mỗi lần đưa Bún đi tiêm phòng hay làm spa.', name: 'Chị Thảo', pet: 'chủ của Bún · Poodle', rating: 5, avatar: dog2 },
  { text: 'Cấp cứu lúc nửa đêm mà các bác sĩ vẫn nhẹ nhàng, tận tâm. Cảm ơn PawHarmony.', name: 'Anh Nam', pet: 'chủ của Đậu · Husky', rating: 5, avatar: dog6 },
  { text: 'Theo dõi tình trạng sau phẫu thuật rất sát sao, ngày nào cũng nhắn tin hỏi thăm.', name: 'Chị Vy', pet: 'chủ của Kẹo · Mèo ta', rating: 5, avatar: dog5 },
  { text: 'Giá rõ ràng, không phát sinh, lại còn được tư vấn dinh dưỡng miễn phí.', name: 'Anh Khoa', pet: 'chủ của Lu · Corgi', rating: 4, avatar: dog4 },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % quotes.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="tm" id="danh-gia-khach-hang">
      <div className="section-wrap tm-wrap">
        <Reveal className="tm-stat-col">
          <div className="tm-stat-blob">
            <div className="tm-num">10.000+</div>
            <div className="tm-lbl">gia đình thú cưng đã tin tưởng lựa chọn</div>
            <div className="tm-avrow">
              <div className="tm-av"><img src={dog} alt="" /></div>
              <div className="tm-av"><img src={dog2} alt="" /></div>
              <div className="tm-av"><img src={dog3} alt="" /></div>
              <div className="tm-av"><img src={dog4} alt="" /></div>
              <div className="tm-av"><img src={dog6} alt="" /></div>
              <div className="tm-av-plus">+</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="tm-quote-col" delay={150}>
          <div className="eyebrow tm-eyebrow">✦ Đánh giá khách hàng</div>
          <div className="tm-quote-mark">"</div>
          <div className="tm-quote-stage">
            {quotes.map((q, i) => (
              <blockquote className={`tm-quote${i === active ? ' is-active' : ''}`} key={q.name}>
                <Stars count={q.rating} />
                <p>{q.text}</p>
                <footer><strong>{q.name}</strong><span>{q.pet}</span></footer>
              </blockquote>
            ))}
          </div>
          <div className="tm-dots">
            {quotes.map((q, i) => (
              <button
                key={q.name}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
                aria-label={`Xem cảm nhận của ${q.name}`}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <div className="section-wrap">
        <Reveal className="tm-grid" delay={100}>
          {quotes.map((q, i) => (
            <article className={`tm-card${i === active ? ' is-active' : ''}`} key={q.name} onClick={() => setActive(i)}>
              <div className="tm-card-head">
                <div className="tm-card-av"><img src={q.avatar} alt="" /></div>
                <div>
                  <strong>{q.name}</strong>
                  <span>{q.pet}</span>
                </div>
              </div>
              <Stars count={q.rating} />
              <p>{q.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
