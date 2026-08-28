import { Link } from 'react-router-dom'
import SiteTag from '../components/SiteTag.jsx'
import Reveal from '../components/Reveal.jsx'
import { categories, projects } from '../data/projects.js'

export default function Services() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <span className="eyebrow">บริการของเรา</span>
          <h1 style={{ marginTop: 10, fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
            4 กลุ่มงานหลัก ครบวงจรตั้งแต่โรงงานถึงบ้านพักอาศัย
          </h1>
          <p style={{ marginTop: 16, color: 'var(--steel)', maxWidth: '62ch', fontSize: '1.02rem' }}>
            ทุกกลุ่มงานควบคุมโดยหัวหน้าช่างและวิศวกรที่มีประสบการณ์หน้างานจริง
            ยึดหลัก "คุณภาพ ตรงเวลา ปลอดภัย" ในทุกขั้นตอน
          </p>
        </div>
      </section>

      <div className="stripe-divider thin" />

      {categories.map((c, i) => {
        const related = projects.filter((p) => p.category === c.slug).slice(0, 3)
        return (
          <section className="section" key={c.slug} style={{ background: i % 2 ? 'var(--paper-raised)' : 'transparent' }}>
            <div className="wrap">
              <div className="about-grid">
                <Reveal variant="reveal-scale">
                  <SiteTag src={c.cover} alt={c.th} label={`0${i + 1}`} className="about-photo" />
                </Reveal>
                <Reveal delay={120}>
                  <span className="eyebrow">{`0${i + 1} · ${c.en}`}</span>
                  <h2 style={{ marginTop: 10, fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)' }}>{c.th}</h2>
                  <p style={{ marginTop: 16, color: 'var(--steel)', fontSize: '1rem' }}>{c.desc}</p>

                  {related.length > 0 && (
                    <div style={{ marginTop: 28 }}>
                      <div className="eyebrow" style={{ marginBottom: 12 }}>ตัวอย่างโครงการ</div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {related.map((p) => (
                          <li key={p.id} style={{ borderBottom: '1px solid var(--line)', paddingBottom: 10 }}>
                            <Link to={`/portfolio/${p.id}`} style={{ fontWeight: 600 }}>
                              {p.title}
                            </Link>
                            <div style={{ fontSize: '0.85rem', color: 'var(--steel-light)', marginTop: 3 }}>{p.client}</div>
                          </li>
                        ))}
                      </ul>
                      <Link to={`/portfolio?cat=${c.slug}`} className="btn btn-outline" style={{ marginTop: 22 }}>
                        ดูผลงานหมวดนี้ทั้งหมด →
                      </Link>
                    </div>
                  )}
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section cta-band">
        <Reveal className="wrap">
          <span className="eyebrow on-dark">ปรึกษาโครงการของคุณ</span>
          <h2 style={{ marginTop: 10 }}>ไม่แน่ใจว่างานของคุณเข้าข่ายไหน? โทรคุยกับเราได้เลย</h2>
          <div className="btn-row">
            <a href="tel:0988257519" className="btn btn-primary">โทร 098-825-7519</a>
            <Link to="/contact" className="btn btn-outline dark-ctx">ดูข้อมูลติดต่อทั้งหมด</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
