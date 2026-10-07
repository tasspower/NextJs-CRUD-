import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Student Management System",
  description: "Next.js CRUD Student Management Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navigation Bar */}
        <header className="border-b bg-white shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/students"
              className="flex items-center gap-2.5 font-bold text-xl text-blue-600"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                S
              </span>
              <span>Student Hub</span>
            </Link>

            <nav className="flex items-center gap-4">
              <Link
                href="/students"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                รายชื่อนักศึกษา
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}