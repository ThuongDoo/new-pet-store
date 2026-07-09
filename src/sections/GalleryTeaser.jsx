import './GalleryTeaser.css'
import Reveal from './Reveal'
import { galleryImages } from '../data/gallery'

export default function GalleryTeaser() {
  const preview = galleryImages.slice(0, 4)

  return (
    <section className="gallery-teaser" id="thu-vien-anh">
      <div className="section-wrap">
        <Reveal className="gallery-teaser-head" as="div">
          <div>
            <div className="eyebrow gallery-teaser-eyebrow">✦ Thư viện ảnh</div>
            <h2 className="gallery-teaser-h2">Hình ảnh phòng khám,<br /><span>và những người bạn nhỏ.</span></h2>
          </div>
        </Reveal>

        <div className="gallery-teaser-grid">
          {preview.map((img, i) => (
            <Reveal as="div" className="gallery-teaser-item" key={img.caption} delay={i * 90}>
              <img src={img.src} alt={img.caption} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
