import usePageMeta from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta(
    'ติดต่อเรา',
    'ติดต่อบริษัท สยาม เอราวัณ คอนสตรัคชั่น จำกัด โทร 098-825-7519 อีเมล siamerawan.inform@gmail.com ที่อยู่ 779 หมู่ 1 ถ.สุขุมวิท ต.บางปู อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280'
  )
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">ติดต่อเรา</span>
        <h1 style={{ marginTop: 10, fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>คุยกับเราเรื่องโครงการของคุณ</h1>
        <p style={{ marginTop: 16, color: 'var(--steel)', maxWidth: '60ch', fontSize: '1.02rem', marginBottom: 48 }}>
          โทรหรืออีเมลหาเราได้โดยตรง ทีมงานพร้อมให้คำปรึกษาและลงพื้นที่สำรวจหน้างาน
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-row">
              <div className="k">โทรศัพท์</div>
              <div className="v"><a href="tel:0988257519">098-825-7519</a> (คุณสมัคร)</div>
            </div>
            <div className="contact-row">
              <div className="k">อีเมล</div>
              <div className="v"><a href="mailto:siamerawan.inform@gmail.com">siamerawan.inform@gmail.com</a></div>
            </div>
            <div className="contact-row">
              <div className="k">ที่อยู่</div>
              <div className="v" style={{ fontWeight: 500, lineHeight: 1.6 }}>
                เลขที่ 779 หมู่ 1 ถ.สุขุมวิท ต.บางปู<br />
                อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280
              </div>
            </div>
            <div className="contact-row">
              <div className="k">เลขทะเบียน</div>
              <div className="v">0 1155 6202 974 9</div>
            </div>
            <div className="contact-row">
              <div className="k">เวลาทำการ</div>
              <div className="v">จันทร์–เสาร์ 08:00–17:00 น.</div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="แผนที่บริษัท สยาม เอราวัณ คอนสตรัคชั่น"
              src="https://www.google.com/maps?q=779+ม.1+Bang+Pu,+Mueang+Samut+Prakan+District,+Samut+Prakan+10280&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
