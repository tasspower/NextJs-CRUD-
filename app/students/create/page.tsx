import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function createStudent(formData: FormData) {
  "use server";

  const studentCode = formData.get("studentCode") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const major = formData.get("major") as string;
  const year = Number(formData.get("year"));
  const status = formData.get("status") === "true";

  await prisma.student.create({
    data: {
      studentCode,
      name,
      email: email || null,
      major,
      year,
      status,
    },
  });

  revalidatePath("/students");
  redirect("/students");
}

export default function CreateStudentPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      {/* Header & Back Button */}
      <div className="mb-6">
        <Link
          href="/students"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-4 transition"
        >
          ← ย้อนกลับหน้าหลัก
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          เพิ่มนักศึกษาใหม่
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          กรอกข้อมูลนักศึกษาเพื่อบันทึกลงฐานข้อมูล
        </p>
      </div>

      {/* Form */}
      <form
        action={createStudent}
        className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label
            htmlFor="studentCode"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            รหัสนักศึกษา <span className="text-red-500">*</span>
          </label>
          <input
            id="studentCode"
            type="text"
            name="studentCode"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            ชื่อ-นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            อีเมล
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="major"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            สาขาวิชา <span className="text-red-500">*</span>
          </label>
          <input
            id="major"
            type="text"
            name="major"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="year"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            ชั้นปี <span className="text-red-500">*</span>
          </label>
          <input
            id="year"
            type="number"
            name="year"
            min="1"
            max="8"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            สถานะ
          </label>
          <select
            id="status"
            name="status"
            defaultValue="true"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="true">กำลังศึกษา</option>
            <option value="false">พ้นสภาพ</option>
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 transition"
          >
            บันทึกข้อมูล
          </button>
          <Link
            href="/students"
            className="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            ยกเลิก
          </Link>
        </div>
      </form>
    </main>
  );
}