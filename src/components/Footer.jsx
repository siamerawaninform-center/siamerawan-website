import { Link } from 'react-router-dom'
import { categories } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span className="brand-mark">SE</span>
              <div>
                <div style={{ fontWeight: 700 }}>บริษัท สยาม เอราวัณ คอนสตรัคชั่น จำกัด</div>
                <div className="brand-text-en">Siam Erawan Construction Co., Ltd.</div>
              </div>
            </div>
            <p style={{ color: '#c4beb3', fontSize: '0.92rem', maxWidth: '38ch' }}>
              ก่อตั้งปี พ.ศ. 2562 รับเหมาก่อสร้างงานอุตสาหกรรม อาคารพาณิชย์ และที่พักอาศัย
              ด้วยหลักการ "คุณภาพ ตรงเวลา ปลอดภัย"
            </p>
          </div>

          <div>
            <div className="footer-heading">บริการ</div>
            {categories.map((c) => (
              <div key={c.slug} style={{ marginBottom: 10 }}>
                <Link to="/services" style={{ color: '#e2ddd3', fontSize: '0.92rem' }}>
                  {c.th}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <div className="footer-heading">ติดต่อเรา</div>
            <p style={{ color: '#e2ddd3', fontSize: '0.92rem', marginBottom: 10 }}>
              779 ม.1 ถ.สุขุมวิท ต.บางปู<br />อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280
            </p>
            <p style={{ marginBottom: 6 }}>
              <a href="tel:0988257519" style={{ color: '#f2d97a' }}>098-825-7519 (คุณสมัคร)</a>
            </p>
            <p>
              <a href="mailto:siamerawan.inform@gmail.com" style={{ color: '#f2d97a' }}>
                siamerawan.inform@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Siam Erawan Construction Co., Ltd. เลขทะเบียนนิติบุคคล 0 1155 6202 974 9</span>
          <span>คุณภาพ · ตรงเวลา · ปลอดภัย</span>
        </div>
      </div>
    </footer>
  )
}
