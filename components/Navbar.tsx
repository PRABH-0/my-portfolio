import Link from "next/link";
import { Playfair_Display, Geist } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    // Outer wrapper gives initial top gap
    <div className="mt-[40px] mb-10">

      {/* Actual sticky navbar */}
      <header className="sticky top-0 z-50 mx-[40px] bg-white border border-gray-300 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-12 py-6">

          {/* Logo / Name - Playfair */}
          <div className={`flex items-center space-x-2 text-xl font-black tracking-tight ${playfair.className}`}>
            <Link href="/" className="hover:opacity-70 transition text-gray-700">
              Prabhjot Singh
            </Link>
          </div>

          {/* Menu - Geist */}
          <ul className={`hidden md:flex items-center space-x-8 text-sm font-medium ${geist.className}`}>
            <li>
              <Link href="/" className="hover:opacity-70 transition">Work</Link>
            </li>
            <li>
              <Link href="/process" className="hover:opacity-70 transition">Process</Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-70 transition">About me</Link>
            </li>
            <li>
              <a href="/Prabh_Resume.pdf" target="_blank" className="hover:opacity-70 transition">
                Resume
              </a>
            </li>
          </ul>

          {/* Right Buttons - Geist */}
          <div className={`flex items-center space-x-3 ${geist.className}`}>
            <a
              href="mailto:prabh@example.com"
              className="px-4 py-1.5 text-sm rounded-full border border-black/20 hover:bg-black/5 transition"
            >
              prabh@example.com
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 hover:bg-black/5 transition"
            >
              in
            </a>
          </div>

        </nav>
      </header>

    </div>
  );
}
