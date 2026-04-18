"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    gsap.set(element, { opacity: 0, y: 24 });

    const tween = gsap.to(element, {
      opacity: 1,
      y: 0,
      delay: delay / 1000,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
