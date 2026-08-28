import { useParams, Link, Navigate } from 'react-router-dom'
import SiteTag from '../components/SiteTag.jsx'
import Reveal from '../components/Reveal.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { categories, projects, projectImages } from '../data/projects.js'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  usePageMeta(
    project?.title,
    project ? `ผลงาน ${project.title} ลูกค้า ${project.client} สถานที่ ${project.location} โดยสยาม เอราวัณ คอนสตรัคชั่น` : undefined
  )

  if (!project) return <Navigate to="/portfolio" replace />

  const cat = categories.find((c) => c.slug === project.category)
  const images = projectImages(project)
  const idx = projects.findIndex((p) => p.id === id)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Link to="/portfolio" className="eyebrow" style={{ display: 'inline-block', marginBottom: 18 }}>
            ← ผลงานทั้งหมด
          </Link>
          <div className="cat" style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {cat?.en}
          </div>
          <h1 style={{ marginTop: 10, fontSize: 'clamp(1.6rem, 3.6vw, 2.3rem)', maxWidth: '26ch' }}>{project.title}</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <Reveal variant="reveal-scale">
            <SiteTag src={images[0]} alt={project.title} className="project-hero-img" />
          </Reveal>

          <div className="project-detail-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>ภาพหน้างาน</div>
              <div className="detail-photo-grid">
                {images.slice(1).map((src, i) => (
                  <Reveal as="div" delay={i * 90} key={src}>
                    <SiteTag src={src} alt={`${project.title} ${i + 2}`} />
                  </Reveal>
                ))}
              </div>
            </div>

            <aside>
              <dl className="spec-list">
                <dt>ลูกค้า</dt>
                <dd>{project.client}</dd>
                <dt>สถานที่ตั้ง</dt>
                <dd style={{ fontWeight: 500 }}>{project.location}</dd>
                <dt>กลุ่มงาน</dt>
                <dd>{cat?.th}</dd>
              </dl>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
                ปรึกษาโครงการคล้ายกัน
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <div className="stripe-divider thin" />

      <section className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <Link to={`/portfolio/${prev.id}`}>
            <div className="eyebrow">← โครงการก่อนหน้า</div>
            <div style={{ fontWeight: 600, marginTop: 6, maxWidth: '32ch' }}>{prev.title}</div>
          </Link>
          <Link to={`/portfolio/${next.id}`} style={{ textAlign: 'right' }}>
            <div className="eyebrow">โครงการถัดไป →</div>
            <div style={{ fontWeight: 600, marginTop: 6, maxWidth: '32ch' }}>{next.title}</div>
          </Link>
        </div>
      </section>
    </>
  )
}
