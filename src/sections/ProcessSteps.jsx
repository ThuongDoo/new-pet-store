import './ProcessSteps.css'
import Reveal from './Reveal'

const steps = [
  { title: 'Đặt lịch khám', desc: 'Gọi hotline hoặc đặt lịch online, chọn dịch vụ và khung giờ phù hợp.' },
  { title: 'Tiếp đón & khai báo', desc: 'Nhân viên tiếp đón, ghi nhận thông tin và tình trạng của thú cưng.' },
  { title: 'Bác sĩ thăm khám', desc: 'Thăm khám, chẩn đoán và tư vấn phác đồ điều trị phù hợp.' },
  { title: 'Điều trị & theo dõi', desc: 'Thực hiện điều trị, hướng dẫn chăm sóc và theo dõi sau khám.' },
]

export default function ProcessSteps() {
  return (
    <section className="process">
      <div className="section-wrap">
        <Reveal className="process-head">
          <div className="eyebrow process-eyebrow">✦ Quy trình khám</div>
          <h2 className="process-h2">Đơn giản, rõ ràng,<br /><span>từng bước một.</span></h2>
        </Reveal>

        <div className="process-steps">
          {steps.map((s, i) => (
            <Reveal as="div" className="process-step" key={s.title} delay={i * 100}>
              <div className="process-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
