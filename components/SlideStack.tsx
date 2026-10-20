"use client";

import { Children, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wraps each child in a full-screen slide. While the next slide scrolls in over it,
// the current one stays pinned and is pushed back (shrinks, rounds, dims and gains an outline).
// Elements marked with data-shrink inside a slide shrink further for extra depth.
export default function SlideStack({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".slide");

      slides.slice(0, -1).forEach((slide, i) => {
        const next = slides[i + 1];
        const inner = slide.firstElementChild as HTMLElement;
        const nextInner = next.firstElementChild as HTMLElement;
        // scrub: 1 eases the motion so it trails the scroll slightly instead of jumping with it.
        const scroll = { trigger: next, start: "top bottom", end: "top top", scrub: 1 };

        ScrollTrigger.create({
          trigger: slide,
          start: "top top",
          endTrigger: next,
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        // Explicit start values: tweening a filter from "none" makes GSAP start at brightness(0),
        // which blacks the slide out the moment scrolling begins.
        gsap.fromTo(
          inner,
          {
            scale: 1,
            y: 0,
            borderRadius: 0,
            filter: "brightness(1)",
            boxShadow: "0 0 0 1px rgba(241, 239, 233, 0)",
          },
          {
            scale: 0.84,
            y: "-3vh",
            borderRadius: 32,
            filter: "brightness(0.6)",
            boxShadow: "0 0 0 1px rgba(241, 239, 233, 0.18)",
            ease: "none",
            scrollTrigger: scroll,
          }
        );

        gsap.fromTo(
          slide.querySelectorAll("[data-shrink]"),
          { scale: 1, opacity: 1 },
          { scale: 0.55, opacity: 0.5, ease: "power2.out", scrollTrigger: scroll }
        );

        // The incoming slide arrives with rounded top corners that flatten as it lands.
        gsap.fromTo(
          nextInner,
          { borderTopLeftRadius: 48, borderTopRightRadius: 48 },
          { borderTopLeftRadius: 0, borderTopRightRadius: 0, ease: "none", scrollTrigger: scroll }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="slide-stack">
      {Children.map(children, (child) => (
        <div className="slide">{child}</div>
      ))}
    </div>
  );
}
