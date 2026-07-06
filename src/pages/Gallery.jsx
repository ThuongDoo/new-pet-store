import { useState } from 'react'
import './Gallery.css'
import '../sections/shared.css'
import Reveal from '../sections/Reveal'
import { galleryImages } from '../data/gallery'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gallery-wrap">
      <div className="page-hero">
        <div className="section-wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--teal-mid)' }}>✦ Thư viện ảnh</div>
          <h1 className="page-hero-h1">Những khoảnh khắc<br /><span>tại PawHarmony.</span></h1>
        </div>
      </div>

      <div className="section-wrap">
        <p className="gallery-note">Hình ảnh minh họa — phòng khám sẽ cập nhật bộ ảnh thực tế sớm nhất.</p>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <Reveal
              as="button"
              className="gallery-cell"
              key={img.caption}
              delay={i * 70}
              onClick={() => setSelected(img)}
            >
              <img src={img.src} alt={img.caption} />
              <span className="gallery-cell-caption">{img.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div className="gallery-lightbox" onClick={() => setSelected(null)}>
          <button className="gallery-lightbox-close" onClick={() => setSelected(null)} aria-label="Đóng">✕</button>
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.caption} />
            <p>{selected.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
