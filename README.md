### 📄 **ส่วนที่ 1: โค้ดสำหรับสร้างไฟล์** **README.md**

ให้สร้างไฟล์ชื่อ **README.md** ไว้ที่โฟลเดอร์นอกสุดของโปรเจกต์ (`my-app/README.md`) แล้วคัดลอกข้อความด้านล่างนี้ไปวางได้เลยครับ:

```
# 🎓 Student Management System (Next.js + Prisma + SQLite)

ระบบจัดการข้อมูลนักศึกษา (Student Management Application) พัฒนาด้วย **Next.js (App Router)**, **Prisma ORM** และ **SQLite** พร้อมตกแต่งหน้าตาผู้ใช้ด้วย **Tailwind CSS**

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend &amp; Backend Framework:** Next.js 15+ (App Router &amp; Server Actions)
- **Language:** TypeScript
- **Database:** SQLite
- **ORM:** Prisma Client (v7) &amp; `@prisma/adapter-better-sqlite3`
- **Styling:** Tailwind CSS

---

## ✨ ฟีเจอร์การใช้งาน (Features)

- 📋 **READ (แสดงรายการ):** แสดงตารางรายชื่อนักศึกษา สรุปจำนวนนักศึกษาทั้งหมดในระบบ และแสดงสถานะการศึกษา (กำลังศึกษา / พ้นสภาพ)
- ➕ **CREATE (เพิ่มข้อมูล):** ฟอร์มกรอกข้อมูลนักศึกษาใหม่ ได้แก่ รหัสนักศึกษา, ชื่อ-นามสกุล, อีเมล, สาขาวิชา, ชั้นปี และสถานะการศึกษา

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (Setup &amp; Installation)

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

```

### 2\. ติดตั้ง Dependencies

```
npm install

```

### 3\. ตั้งค่า Environment Variable (`.env`)

สร้างไฟล์ `.env` ไว้ที่โฟลเดอร์หลักของโปรเจกต์ (หากยังไม่มี) และเพิ่มบรรทัดนี้ลงไป:

```
DATABASE_URL="file:./dev.db"

```

### 4\. ซิงค์ Database Schema และ Generate Prisma Client

```
# รัน Migration เพื่อสร้างฐานข้อมูล SQLite
npx prisma migrate dev --name init

# สั่ง Generate Prisma Client
npx prisma generate

```

### 5\. รันโปรเจกต์ในโหมด Development

```
npm run dev

```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](https://www.google.com/url?sa=E&amp;q=http%3A%2F%2Flocalhost%3A3000) (ระบบจะนำทางไปยังหน้า `/students` อัตโนมัติ)

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
my-app/
├── app/
│   ├── generated/prisma/  # โฟลเดอร์ Prisma Client ที่สร้างจากการ Generate
│   ├── lib/
│   │   └── prisma.ts      # ไฟล์เชื่อมต่อ Prisma Client Singleton
│   ├── students/
│   │   ├── create/
│   │   │   └── page.tsx   # หน้าฟอร์มเพิ่มข้อมูลนักศึกษา (Create)
│   │   └── page.tsx       # หน้าแสดงรายการนักศึกษา (Read)
│   ├── globals.css        # ไฟล์ตั้งค่า Tailwind CSS
│   ├── layout.tsx         # Component โครงสร้างหลักของหน้าเว็บ (Navbar)
│   └── page.tsx           # หน้า Root (Redirect ไป /students)
├── prisma/
│   ├── migrations/        # ประวัติการจัดการ DB Migration
│   ├── dev.db             # ไฟล์ฐานข้อมูล SQLite
│   └── schema.prisma      # โครงสร้างตารางข้อมูล Student
├── .env                   # ไฟล์เก็บค่า Config และ Database URL
└── package.json
```