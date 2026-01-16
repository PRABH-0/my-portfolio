"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Geist } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
});

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isPaused = useRef(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // Project images for carousel
  const projectImages = [
    "/snera images/snera-1.png",
    "/snera images/snera-5.png",
    "/snera images/snera-2.png",
    "/snera images/snera-3.png",
    "/snera images/snera-4.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide every 5 seconds with pause on hover
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only start auto-slide if not paused by hover
    if (!isCarouselPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === projectImages.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isCarouselPaused, projectImages.length]);

  // Skills marquee animation
  useEffect(() => {
    let animationId: number;

    const move = () => {
      if (trackRef.current && !isPaused.current) {
        positionRef.current -= 0.9; // speed
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;

        if (Math.abs(positionRef.current) >= trackRef.current.scrollWidth / 2) {
          positionRef.current = 0;
        }
      }
      animationId = requestAnimationFrame(move);
    };

    move();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  // Handle hover events
  const handleMouseEnter = () => {
    setIsCarouselPaused(true);
  };

  const handleMouseLeave = () => {
    setIsCarouselPaused(false);
  };

  return (
    <div className={`${geist.className} min-h-screen flex justify-center`}>
      <div className="w-full max-w-7xl bg-white border border-gray-200 shadow-sm rounded-2xl my-10 mx-4">
        
        {/* ================= HERO ================= */}
        <section className="w-full mx-auto my-[40px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-[60px]">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-600 pt-8">*Software Developer</p>

              <h1
                className={`${playfair.className} text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight pt-8`}
              >
                Building Scalable Web Applications for Modern Systems
              </h1>
            </div>

            <div className="flex flex-col items-center pt-20 pr-[40px]">
              <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src="/Prabh (1).jpg"
                  alt="Prabhjot Singh"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="pt-[100px]">
          <hr className="border-gray-300 mb-10" />

          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              className="flex whitespace-nowrap gap-12 text-lg font-medium text-gray-800"
              onMouseEnter={() => (isPaused.current = true)}
              onMouseLeave={() => (isPaused.current = false)}
            >
              <Skill icon="/angular.jfif" label="Angular" />
              <Skill icon="/nextjs.png" label="Next.js" />
              <Skill icon="/TS.png" label="TypeScript" />
              <Skill icon="/dotnet.png" label=".NET" />
              <Skill icon="/laravel.png" label="Laravel" />
              <Skill icon="/sql.png" label="SQL" />
              <Skill icon="/git.png" label="Git" />

              {/* Duplicate for seamless loop */}
              <Skill icon="/angular.jfif" label="Angular" />
              <Skill icon="/nextjs.png" label="Next.js" />
              <Skill icon="/TS.png" label="TypeScript" />
              <Skill icon="/dotnet.png" label=".NET" />
              <Skill icon="/laravel.png" label="Laravel" />
              <Skill icon="/sql.png" label="SQL" />
              <Skill icon="/git.png" label="Git" />
            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="pt-[40px]">
          <hr className="border-gray-300 mb-12" />

          <h2
            className={`${playfair.className} text-3xl font-semibold text-gray-900 mb-4 ml-20`}
          >
            Experience
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 px-[60px]">
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/Pizone.jpeg"
                  alt="Work Experience"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-gray-800">
                Software Developer — Pizone Infotech
              </h3>

              <p className="text-sm text-gray-500 mb-4">Aug 2023 – Present</p>

              <p className="text-gray-700 leading-relaxed">
                Worked on a large-scale enterprise application using Angular for
                frontend development and .NET Web API for backend services. Built
                reusable components, integrated REST APIs, and collaborated with
                senior developers to deliver production-ready features.
              </p>

              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                <li>Developed responsive UI components in Angular</li>
                <li>Consumed and tested APIs using .NET backend</li>
                <li>Worked with SQL databases and debugging tools</li>
                <li>Used Git for version control and team collaboration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="pt-[120px] mb-20">
          <hr className="border-gray-300 mb-12" />

          <h2
            className={`${playfair.className} text-3xl font-semibold text-gray-900 mb-4 pl-15`}
          >
            Projects
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 px-[60px]">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold text-gray-800">
                SNERA — Skill-Based Collaboration Platform
              </h3>

              <p className="text-sm text-gray-500 mb-4">Personal Project</p>

              <p className="text-gray-700 leading-relaxed">
                SNERA is a skills-based collaboration platform designed to connect
                students and freshers with complementary technical skills to work
                on real-world projects.
              </p>
            </div>

            {/* Image Carousel */}
            <div className="w-full md:w-1/2 relative">
              <div 
                className="rounded-xl overflow-hidden border border-gray-200 relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={projectImages[currentImageIndex]}
                  alt={`SNERA Project - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transition-opacity duration-500"
                />

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/60"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image Counter with hover hint */}
              <div className="text-center mt-2 text-sm text-gray-600 flex items-center justify-center gap-2">
                <span>
                  {currentImageIndex + 1} / {projectImages.length}
                </span>
                <span className="text-xs text-gray-400">
                  (Hover to pause)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CURIOUS ================= */}
        <section className="pt-[60px] pb-24">
          <hr className="border-gray-300 mb-12" />

          <h2
            className={`${playfair.className} text-3xl font-semibold text-gray-900 mb-8 pl-20`}
          >
            Curious?
          </h2>

          <div className="max-w-6xl mx-auto px-6 space-y-4">
            
            {/* Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-600 font-medium bg-white hover:bg-gray-50 transition cursor-none"
              >
                <span className={playfair.className}>
                  How do you approach scalable application design?
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === 0 ? "−" : "+"}
                </span>
              </button>

              {openIndex === 0 && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  I focus on modular architecture, separating frontend and backend responsibilities,
                  and designing APIs that scale with user demand while keeping performance and maintainability in mind.
                </div>
              )}
            </div>

            {/* Item 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-600 font-medium bg-white hover:bg-gray-50 transition cursor-none"
              >
                <span className={playfair.className}>
                  How do you handle real-world project challenges?
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === 2 ? "−" : "+"}
                </span>
              </button>

              {openIndex === 2 && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  I break problems into smaller tasks, debug step by step, research best practices,
                  and collaborate closely with teammates to deliver stable and reliable solutions.
                </div>
              )}
            </div>

            {/* Item 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-600 font-medium bg-white hover:bg-gray-50 transition cursor-none"
              >
                <span className={playfair.className}>
                  How do you choose the right technology for a project?
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === 3 ? "−" : "+"}
                </span>
              </button>

              {openIndex === 3 && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  I choose tools based on scalability, maintainability, project requirements, and team experience.
                  For example, Angular or Next.js for modern UIs and .NET or Laravel for reliable backend services.
                </div>
              )}
            </div>

            {/* Item 5 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-gray-600 font-medium bg-white hover:bg-gray-50 transition cursor-none"
              >
                <span className={playfair.className}>
                  How do you continue learning and improving as a developer?
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === 4 ? "−" : "+"}
                </span>
              </button>

              {openIndex === 4 && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  I keep improving by building projects, exploring new frameworks, reading documentation,
                  and solving real-world problems. I regularly reflect on my work to write better and more efficient code.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="pt-[80px] pb-32">
          <hr className="border-gray-300 mb-12" />

          <h2
            className={`${playfair.className} text-3xl font-semibold text-gray-900 mb-8 pl-20`}
          >
            Contact Me
          </h2>

          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Left: Text */}
            <div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of something meaningful. Feel free to reach out through any of the
                platforms below.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether it's about development, collaboration, or just a friendly conversation —
                I'd love to connect.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:prabhjot@example.com"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>Email</span>
                <span className="text-gray-500">prabhjot@example.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>LinkedIn</span>
                <span className="text-gray-500">/in/yourprofile</span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>GitHub</span>
                <span className="text-gray-500">@yourusername</span>
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition cursor-none"
              >
                <span>Twitter</span>
                <span className="text-gray-500">@yourhandle</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function Skill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-2 bg-gray-100 rounded-full">
      <Image src={icon} alt={label} width={20} height={20} />
      <span className="text-gray-800">{label}</span>
    </div>
  );
}