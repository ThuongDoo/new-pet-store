import './Story.css'
import Reveal from './Reveal'
import dog5 from '../assets/dog5.png'

const milestones = [
  { year: '2016', label: 'Khởi đầu từ một phòng khám nhỏ, với một lời hứa lớn.' },
  { year: '2019', label: 'Mở rộng đội ngũ bác sĩ chuyên khoa & trang thiết bị hiện đại.' },
  { year: '2022', label: '10.000+ gia đình thú cưng chọn đồng hành cùng chúng tôi.' },
  { year: 'Hôm nay', label: 'Mỗi ngày, vẫn tiếp tục viết thêm một chương yêu thương.' },
]

export default function Story() {
  return (
    <section className="story" id="cau-chuyen">
      <div className="section-wrap story-wrap">
        <Reveal className="story-image-col">
          <div className="story-img-frame">
            <img src={dog5} alt="Hành trình PawHarmony" />
            <div className="story-img-badge">Từ <strong>2016</strong></div>
          </div>
          <div className="story-img-glow"></div>
        </Reveal>

        <Reveal className="story-text-col" delay={150}>
          <div className="eyebrow story-eyebrow">✦ Câu chuyện</div>
          <h2 className="story-h2">Bắt đầu từ<br /><em>một lời hứa nhỏ.</em></h2>
          <p className="story-p">
            PawHarmony ra đời từ một câu hỏi giản dị: làm sao để mỗi lần đến
            phòng khám không còn là nỗi sợ — của thú cưng, lẫn của người chủ?
          </p>
          <p className="story-p">
            Từ một phòng khám nhỏ, chúng tôi lớn lên cùng hàng ngàn câu chuyện
            chữa lành — từng chiếc đuôi vẫy lại, từng hơi thở nhẹ nhõm của
            người ở lại.
          </p>
        </Reveal>
      </div>

      <Reveal className="story-timeline" delay={250}>
        <svg className="story-path" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M10,60 C160,-10 300,130 500,55 S 760,-10 990,65" stroke="#A8D8CC" strokeWidth="2" fill="none" strokeDasharray="2 10" strokeLinecap="round" />
        </svg>
        <div className="story-milestones">
          {milestones.map((m) => (
            <div className="story-milestone" key={m.year}>
              <span className="story-dot"></span>
              <span className="story-year">{m.year}</span>
              <p>{m.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
