import prisma from "@/app/lib/prisma";
import Link from "next/link";

export default async function StudentsPage() {
  const students = await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
  });

  const activeCount = students.filter((s) => s.status).length;

  return (
    <main className="mx-auto max-w-6xl p-6">
      {/* Header & Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            ระบบจัดการข้อมูลนักศึกษา
          </h1>
          <p className="mt-1 text-gray-600">
            เรียกดู เพิ่ม แก้ไข และจัดการสถานะของนักศึกษาในระบบ
          </p>
        </div>
        <Link
          href="/students/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
        >
          + เพิ่มนักศึกษาใหม่
        </Link>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-3xl">🎓</span>
          <div>
            <p className="text-sm font-medium text-gray-500">นักศึกษาทั้งหมด</p>
            <p className="text-2xl font-bold text-gray-900">{students.length} คน</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-3xl">🟢</span>
          <div>
            <p className="text-sm font-medium text-gray-500">กำลังศึกษาอยู่</p>
            <p className="text-2xl font-bold text-green-600">{activeCount} คน</p>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {students.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <span className="text-5xl mb-3">📁</span>
            <h3 className="text-lg font-semibold text-gray-900">
              ยังไม่มีข้อมูลนักศึกษา
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              เริ่มต้นเพิ่มข้อมูลนักศึกษาคนแรกเข้าระบบได้เลย
            </p>
            <Link
              href="/students/create"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              + เพิ่มนักศึกษา
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">รหัสนักศึกษา</th>
                  <th className="px-6 py-4 font-semibold">ชื่อ-นามสกุล</th>
                  <th className="px-6 py-4 font-semibold">อีเมล</th>
                  <th className="px-6 py-4 font-semibold">สาขาวิชา</th>
                  <th className="px-6 py-4 font-semibold">ชั้นปี</th>
                  <th className="px-6 py-4 font-semibold">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {student.studentCode}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {student.email || "-"}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {student.major}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      ปี {student.year}
                    </td>
                    <td className="px-6 py-4">
                      {student.status ? (
                        <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          กำลังศึกษา
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                          พ้นสภาพ
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}