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
    <div className={geist.className}>
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
                src="/experience.jpg"
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