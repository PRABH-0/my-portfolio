import Link from "next/link";
import { Playfair_Display, Geist } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`w-[94%] mx-auto border border-gray-300 bg-white mb-10 ${geist.className} mt-10`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 pb-10">

        {/* Left: Text + Email */}
        <div className="md:flex-row items-center gap-2 pl-10">
          <span className={`${playfair.className} text-gray-900 font-medium text-lg`}>
            Let's build something amazing!
          </span>
          <br />
          <a
            href="mailto:ps7584153@gmail.com"
            className="text-gray-500 hover:text-gray-900 transition max-w-4xl text-2xl"
          >
            ps7584153@gmail.com
          </a>
        </div>

        

        {/* Right: Social */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/"
            target="_blank"
            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition"
          >
            in
          </a>
        </div>

      </div>
    </footer>
  );
}
