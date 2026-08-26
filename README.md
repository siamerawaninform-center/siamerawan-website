# Siam Erawan Construction — เว็บไซต์บริษัท

เว็บไซต์การตลาดของบริษัท สยาม เอราวัณ คอนสตรัคชั่น จำกัด
สร้างด้วย React + Vite เหมือนสไตล์ระบบ ERP เดิม deploy บน Vercel

## รันบนเครื่อง
npm install
npm run dev

## Build
npm run build

## หน้าเว็บ
- / หน้าแรก
- /services บริการ
- /portfolio ผลงาน (กรองตามหมวดได้)
- /portfolio/:id รายละเอียดโครงการ
- /contact ติดต่อเรา

## แก้ไขข้อมูลโครงการ
แก้ที่ src/data/projects.js — เพิ่มโครงการใหม่ให้เพิ่ม object ในอาร์เรย์ projects
และวางรูปที่ public/images/projects/<id>/0.jpg, 1.jpg, ...
