"use client";

import { useEffect, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation (1s)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none fixed z-[9998] rounded-full animate-ripple"
          style={{
            left: ripple.x - 14,
            top: ripple.y - 14,
            width: 28,
            height: 28,
            background: "rgba(26, 83, 173, 0.4)",
          }}
        />
      ))}

      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {/* Mid-size cursor */}
        <div className="relative w-5 h-5">
          {/* Outer Light Border */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #cfefff, #5fa8d3)",
              clipPath: "polygon(0 0, 100% 50%, 55% 60%, 35% 100%, 30% 65%)",
            }}
          />

          {/* Inner Dark Body */}
          <div
            className="absolute inset-[2px]"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
              clipPath: "polygon(0 0, 100% 50%, 55% 60%, 35% 100%, 30% 65%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
