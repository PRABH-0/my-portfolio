"use client";

import Image from "next/image";
import { Playfair_Display, Geist } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <div className={`${geist.className} min-h-screen flex justify-center `}>
      
      {/* White Card Layout */}
      <div className="w-full max-w-[94%] bg-white border border-gray-200 shadow-sm  my-10 mx-4">

        {/* ================= ABOUT ================= */}
        <section className="pt-[100px] pb-20">
          <h1
            className={`${playfair.className} text-4xl font-semibold text-gray-900 mb-10 pl-20`}
          >
            About Me
          </h1>

          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Hi, I’m <span className="font-medium text-gray-800">Prabhjot Singh</span>, 
                a passionate Software Developer with experience in building scalable and 
                maintainable web applications.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                I specialize in <span className="font-medium text-gray-800">Angular, Next.js, and .NET</span>, 
                focusing on clean architecture, reusable components, and performance-driven development.
                I enjoy turning complex problems into simple, elegant solutions.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                I’ve worked on enterprise-level applications, collaborated with cross-functional teams,
                and built systems that are reliable, scalable, and easy to maintain.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                My goal is to continue growing as a full-stack engineer while contributing to meaningful
                products that solve real-world problems.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border border-gray-200">
                <Image
                  src="/Prabh (1).jpg"
                  alt="Prabhjot Singh"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="pt-[40px] pb-32">
          <hr className="border-gray-300 mb-12" />

          <h2
            className={`${playfair.className} text-3xl font-semibold text-gray-900 mb-8 pl-20`}
          >
            Contact Me
          </h2>

          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

           

            {/* Right: Social Links */}
            <div className="flex flex-col space-y-4">

              <a
                href="mailto:prabh@example.com"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>Email</span>
                <span className="text-gray-500">ps7584153@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/"
                target="_blank"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>LinkedIn</span>
                <span className="text-gray-500">Prabhjot Singh</span>
              </a>

              <a
                href="https://github.com/PRABH-0"
                target="_blank"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>GitHub</span>
                <span className="text-gray-500">@PRABH-0</span>
              </a>


            </div>
             {/* Left: Text */}
            <div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                I’m always open to discussing new projects, collaboration opportunities,
                or creative ideas. Feel free to reach out through any of the platforms below.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether it’s about development, teamwork, or just a friendly conversation —
                I’d be happy to connect.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
