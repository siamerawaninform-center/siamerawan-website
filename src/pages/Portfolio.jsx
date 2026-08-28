import { Link, useSearchParams } from 'react-router-dom'
import SiteTag from '../components/SiteTag.jsx'
import Reveal from '../components/Reveal.jsx'
import { categories, projects } from '../data/projects.js'

export default function Portfolio() {
  const [params, setParams] = useSearchParams()
  const active = params.get('cat') || 'all'

  const list = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">ผลงานที่ผ่านมา</span>
        <h1 style={{ marginTop: 10, fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>โครงการที่เราส่งมอบแล้ว</h1>
        <p style={{ marginTop: 16, color: 'var(--steel)', maxWidth: '62ch', fontSize: '1.02rem', marginBottom: 40 }}>
          ตั้งแต่ก่อตั้งบริษัทเราส่งมอบงานไปแล้วกว่า 300 โครงการ นี่คือตัวอย่างส่วนหนึ่งพร้อมภาพจริงจากหน้างานจริง
          ครอบคลุมโครงการภาคอุตสาหกรรม อาคารพาณิชย์ และที่พักอาศัย
        </p>

        <div className="filter-bar">
          <button
            className={`filter-chip ${active === 'all' ? 'active' : ''}`}
            onClick={() => setParams({})}
          >
            ทั้งหมด ({projects.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              className={`filter-chip ${active === c.slug ? 'active' : ''}`}
              onClick={() => setParams({ cat: c.slug })}
            >
              {c.th} ({projects.filter((p) => p.category === c.slug).length})
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {list.map((p, i) => (
            <Reveal as="div" delay={(i % 6) * 80} key={p.id}>
              <Link to={`/portfolio/${p.id}`} className="project-card">
                <SiteTag
                  src={`/images/projects/${p.id}/0.jpg`}
                  alt={p.title}
                  label={categories.find((c) => c.slug === p.category)?.th.slice(0, 18) + '…'}
                />
                <div className="meta">
                  <div className="cat">{categories.find((c) => c.slug === p.category)?.en}</div>
                  <h3>{p.title}</h3>
                  <div className="client">{p.client}</div>
                  <div className="loc">{p.location}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
