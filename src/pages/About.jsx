import './About.css'
import '../sections/shared.css'
import Reveal from '../sections/Reveal'
import Story from '../sections/Story'
import PageSubNav from '../components/PageSubNav'
import { doctors } from '../data/team'
import dog from '../assets/dog.png'
import dog2 from '../assets/dog2.png'
import dog3 from '../assets/dog3.png'
import dog4 from '../assets/dog4.png'
import dog6 from '../assets/dog6.png'

const tabs = [
  { id: 've-chung-toi', label: 'Về chúng tôi' },
  { id: 'co-so-vat-chat', label: 'Cơ sở vật chất' },
  { id: 'doi-ngu-bac-si', label: 'Đội ngũ bác sĩ' },
]

const facilities = [
  { img: dog2, title: 'Phòng khám tổng quát', desc: 'Không gian khám thoáng đãng, đầy đủ thiết bị theo dõi sức khỏe cơ bản.' },
  { img: dog4, title: 'Phòng phẫu thuật vô trùng', desc: 'Đạt chuẩn vô trùng, trang bị hệ thống gây mê và theo dõi hiện đại.' },
  { img: dog6, title: 'Khu lưu trú thú cưng', desc: 'Chuồng lưu trú riêng biệt, thông thoáng, có nhân viên túc trực 24/7.' },
  { img: dog3, title: 'Phòng xét nghiệm & chẩn đoán hình ảnh', desc: 'Máy siêu âm, X-quang và xét nghiệm sinh hóa cho kết quả nhanh chóng.' },
  { img: dog, title: 'Khu vực chờ thân thiện', desc: 'Góc chờ thoải mái cho cả thú cưng và người đồng hành.' },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="section-wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--teal-mid)' }}>✦ Giới thiệu</div>
          <h1 className="page-hero-h1">Câu chuyện, con người<br /><span>và không gian PawHarmony.</span></h1>
          <p className="page-hero-p">
            Tìm hiểu về hành trình của chúng tôi, cơ sở vật chất được đầu tư kỹ lưỡng
            và đội ngũ bác sĩ luôn đồng hành cùng thú cưng của bạn.
          </p>
        </div>
      </div>

      <PageSubNav tabs={tabs} />

      <section className="about-block" id="ve-chung-toi">
        <div className="section-wrap">
          <p className="about-mission">
            Mỗi thú cưng là một thế giới nhỏ. Mỗi người chủ là một mái nhà. Và ở
            giữa, PawHarmony là nơi những bàn tay chữa lành thắp lên sợi dây kết
            nối ấy — bằng chuyên môn, và bằng sự dịu dàng.
          </p>
        </div>
        <Story />
      </section>

      <section className="about-block about-block-alt" id="co-so-vat-chat">
        <div className="section-wrap">
          <Reveal className="about-block-head">
            <div className="eyebrow about-block-eyebrow">✦ Cơ sở vật chất</div>
            <h2 className="about-block-h2">Không gian được đầu tư<br /><span>kỹ lưỡng, an toàn.</span></h2>
          </Reveal>
          <p className="about-block-note">Hình ảnh minh họa — phòng khám sẽ cập nhật bộ ảnh thực tế sớm nhất.</p>

          <div className="facility-grid">
            {facilities.map((f, i) => (
              <Reveal as="article" className="facility-card" key={f.title} delay={i * 90}>
                <div className="facility-img"><img src={f.img} alt={f.title} /></div>
                <div className="facility-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-block" id="doi-ngu-bac-si">
        <div className="section-wrap">
          <Reveal className="about-block-head">
            <div className="eyebrow about-block-eyebrow">✦ Đội ngũ bác sĩ</div>
            <h2 className="about-block-h2">Chuyên môn vững vàng,<br /><span>tận tâm với từng ca bệnh.</span></h2>
          </Reveal>
          <p className="about-block-note">Ảnh đại diện minh họa — thông tin bác sĩ sẽ được cập nhật đầy đủ.</p>

          <div className="doctor-grid">
            {doctors.map((d, i) => (
              <Reveal as="article" className="doctor-card" key={d.name} delay={i * 90}>
                <div className={`doctor-avatar tone-${d.tone}`}>{d.initials}</div>
                <h3>{d.name}</h3>
                <div className="doctor-title">{d.title}</div>
                <p className="doctor-bio">{d.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
