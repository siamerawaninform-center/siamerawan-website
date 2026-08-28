import { Link } from 'react-router-dom'
import SiteTag from '../components/SiteTag.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { categories, projects } from '../data/projects.js'

const featured = ['p4', 'p7', 'p17', 'p19']

export default function Home() {
  usePageMeta(
    'รับเหมาก่อสร้างงานอุตสาหกรรม พาณิชย์ ที่พักอาศัย',
    'บริษัท สยาม เอราวัณ คอนสตรัคชั่น จำกัด รับเหมาก่อสร้างงานวิศวกรรมโครงสร้างอุตสาหกรรม ปรับปรุงโรงงาน อาคารพาณิชย์ และที่พักอาศัย ในสมุทรปราการและทั่วประเทศ คุณภาพ ตรงเวลา ปลอดภัย'
  )
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow on-dark">รับเหมาก่อสร้าง · สมุทรปราการ</span>
            <h1 className="hero-title">
              สร้างมาตรฐานใหม่ให้วงการรับเหมาก่อสร้าง<br />
              <span className="accent">คุณภาพ ตรงเวลา ปลอดภัย</span>
            </h1>
            <p className="hero-sub">
              บริษัท สยาม เอราวัณ คอนสตรัคชั่น จำกัด ก่อตั้งโดยหัวหน้าช่างและวิศวกรที่มีประสบการณ์จริง
              รับงานวิศวกรรมโครงสร้างอุตสาหกรรม ปรับปรุงโรงงาน อาคารพาณิชย์ และที่พักอาศัย
              ให้กับบริษัทชั้นนำของประเทศ
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">ดูผลงานที่ผ่านมา</Link>
              <Link to="/contact" className="btn btn-outline dark-ctx">ติดต่อขอใบเสนอราคา</Link>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/images/hero/crane.jpg" alt="ทีมงานสยาม เอราวัณ ติดตั้งโครงสร้างหน้างานด้วยเครน" />
          </div>
        </div>
        <div className="hero-slogan-bar">
          <div className="item">
            <div className="num">01</div>
            <div className="word">คุณภาพ</div>
          </div>
          <div className="item">
            <div className="num">02</div>
            <div className="word">ตรงเวลา</div>
          </div>
          <div className="item">
            <div className="num">03</div>
            <div className="word">ปลอดภัย</div>
          </div>
        </div>
      </section>

      <div className="stripe-divider" />

      {/* About */}
      <section className="section">
        <div className="wrap about-grid">
          <Reveal variant="reveal-scale">
            <SiteTag src="/images/hero/about-crew.jpg" alt="ทีมงานหน้างานสยาม เอราวัณ" label="On-site briefing" className="about-photo" />
          </Reveal>
          <Reveal delay={120} className="about-copy">
            <span className="eyebrow">เกี่ยวกับเรา</span>
            <h2 style={{ marginTop: 10, fontSize: 'clamp(1.6rem, 3vw, 2.1rem)' }}>
              ก่อตั้งจากหัวหน้าช่างที่เห็นปัญหาวงการรับเหมา
            </h2>
            <p className="lead">
              ก่อตั้งขึ้นในปี พ.ศ. 2562 จากความตั้งใจที่จะสร้างมาตรฐานให้กับวงการรับเหมาก่อสร้าง
            </p>
            <p>
              เราเริ่มต้นจากหัวหน้าช่าง วิศวกร และผู้ควบคุมงานที่มีประสบการณ์จริง
              และเล็งเห็นถึงปัญหาความต้องการผู้รับเหมาที่มีความรับผิดชอบ และส่งมอบงานที่มีคุณภาพได้อย่างแท้จริง
            </p>
            <p>
              เราเชื่อว่าความสำเร็จของลูกค้าคือความสำเร็จของเรา จึงทุ่มเทในทุกรายละเอียดเพื่อสร้างสรรค์ผลงาน
              ที่แข็งแรง ทนทาน และตอบสนองต่อการใช้งานได้อย่างเต็มประสิทธิภาพ
            </p>
            <span className="pill-quote">"คุณภาพ ตรงเวลา ปลอดภัย"</span>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="wrap stats-grid">
          <Reveal as="div" className="stat" delay={0}>
            <div className="n"><CountUp to={2562} /></div>
            <div className="label">ปีที่ก่อตั้ง (พ.ศ.)</div>
          </Reveal>
          <Reveal as="div" className="stat" delay={80}>
            <div className="n"><CountUp to={4} /></div>
            <div className="label">กลุ่มงานบริการหลัก</div>
          </Reveal>
          <Reveal as="div" className="stat" delay={160}>
            <div className="n"><CountUp to={300} suffix="+" /></div>
            <div className="label">โครงการที่ส่งมอบแล้วตั้งแต่ก่อตั้งบริษัท</div>
          </Reveal>
          <Reveal as="div" className="stat" delay={240}>
            <div className="n"><CountUp to={100} suffix="%" /></div>
            <div className="label">เน้นคุณภาพและความปลอดภัยหน้างาน</div>
          </Reveal>
        </div>
      </div>

      {/* Services preview */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">บริการของเรา</span>
            <h2>ครบทุกงานก่อสร้าง ตั้งแต่โรงงานถึงบ้านพักอาศัย</h2>
            <p>เราให้บริการ 4 กลุ่มงานหลัก ครอบคลุมตั้งแต่งานวิศวกรรมโครงสร้างอุตสาหกรรมไปจนถึงงานตกแต่งที่พักอาศัย</p>
          </Reveal>
          <div className="service-grid">
            {categories.map((c, i) => (
              <Reveal as="div" className="service-card" key={c.slug} delay={i * 90}>
                <div className="photo">
                  <img src={c.cover} alt={c.th} loading="lazy" />
                </div>
                <div className="body">
                  <div className="idx">0{i + 1}</div>
                  <h3>{c.th}</h3>
                  <div className="en">{c.en}</div>
                  <p className="desc">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/services" className="btn btn-outline">ดูรายละเอียดบริการทั้งหมด →</Link>
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="section" style={{ background: 'var(--paper-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">ผลงานที่ผ่านมา</span>
            <h2>งานจริง ลูกค้าจริง หน้างานจริง</h2>
            <p>ตลอดเส้นทางกว่า 300 โครงการ นี่คือตัวอย่างส่วนหนึ่งที่เราส่งมอบให้กับลูกค้าทั้งภาคอุตสาหกรรม พาณิชย์ และที่พักอาศัย</p>
          </Reveal>
          <div className="portfolio-grid">
            {featured.map((id, i) => {
              const p = projects.find((x) => x.id === id)
              return (
                <Reveal as="div" delay={i * 90} key={p.id}>
                  <Link to={`/portfolio/${p.id}`} className="project-card">
                    <SiteTag src={`/images/projects/${p.id}/0.jpg`} alt={p.title} label={p.client.length > 24 ? p.client.slice(0, 22) + '…' : p.client} />
                    <div className="meta">
                      <div className="cat">{categories.find((c) => c.slug === p.category)?.en}</div>
                      <h3>{p.title}</h3>
                      <div className="loc">{p.location}</div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/portfolio" className="btn btn-outline">ดูผลงานทั้งหมด →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <Reveal className="wrap">
          <span className="eyebrow on-dark">พร้อมเริ่มโครงการของคุณ</span>
          <h2 style={{ marginTop: 10 }}>มีงานก่อสร้างในใจ? คุยกับเราก่อนได้เลย</h2>
          <p>ไม่ว่าจะเป็นงานโรงงาน อาคารพาณิชย์ หรือบ้านพักอาศัย ทีมงานของเราพร้อมลงพื้นที่สำรวจและให้คำปรึกษา</p>
          <div className="btn-row">
            <a href="tel:0988257519" className="btn btn-primary">โทร 098-825-7519</a>
            <a href="mailto:siamerawan.inform@gmail.com" className="btn btn-outline dark-ctx">ส่งอีเมลถึงเรา</a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
