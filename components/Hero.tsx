"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

// Edit these to change the hero content.
const NAME = "GOURAV GUPTA";
const BOTTOM_TEXT = "FOUNDER · EDUCATOR · MENTOR";
const PROFILE_SRC = "/gourav.webp";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Hero() {
  const [scope, animate] = useAnimate<HTMLElement>();

  // Non-breaking spaces so the gap between words keeps its width as an inline-block.
  const letters = NAME.replace(/ /g, " ").split("");
  // First word flies in from the left, the rest from the right.
  const half = NAME.includes(" ") ? NAME.indexOf(" ") : Math.ceil(letters.length / 2);

  useEffect(() => {
    const hero = scope.current;
    const title = hero.querySelector<HTMLElement>("[data-title]")!;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animate("[data-left], [data-right], [data-portrait], [data-glow], [data-fade]", { opacity: 1 }, { duration: 0 });
      return;
    }

    // offsetTop ignores transforms, so this stays correct if the effect re-runs.
    const centerOffset = hero.clientHeight / 2 - (title.offsetTop + title.offsetHeight / 2);

    const run = async () => {
      animate(title, { y: centerOffset }, { duration: 0 });

      // 1. Letters fly in from the left and right, meeting in the middle of the screen.
      await Promise.all([
        animate(
          "[data-left]",
          { x: ["-70vw", "0vw"], opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"] },
          { duration: 1.1, ease: EASE_OUT, delay: stagger(0.07, { from: "last" }) }
        ),
        animate(
          "[data-right]",
          { x: ["70vw", "0vw"], opacity: [0, 1], filter: ["blur(12px)", "blur(0px)"] },
          { duration: 1.1, ease: EASE_OUT, delay: stagger(0.07) }
        ),
      ]);

      // 2. The whole word moves up to its place at the top.
      await animate(title, { y: 0 }, { duration: 1, ease: EASE_IN_OUT, delay: 0.25 });

      // 3. Glow and portrait rise in.
      animate("[data-glow]", { opacity: [0, 1], scale: [0.5, 1] }, { duration: 1.4, ease: EASE_OUT });
      await animate(
        "[data-portrait]",
        { y: [160, 0], opacity: [0, 1], scale: [0.94, 1] },
        { duration: 1.2, ease: EASE_OUT }
      );

      // 4. Supporting details.
      animate("[data-fade]", { y: [16, 0], opacity: [0, 1] }, { duration: 0.7, ease: EASE_OUT, delay: stagger(0.12) });
    };

    run();
  }, [animate, scope]);

  return (
    <section ref={scope} className="hero">
      <nav className="hero-nav">
        <span className="hero-logo" data-fade>
          GG.
        </span>
        <a href="#contact" className="hero-cta" data-fade>
          BOOK A CALL
        </a>
      </nav>

      <div className="hero-heading">
        <h1 className="hero-title" data-title aria-label={NAME}>
          {letters.map((char, i) => (
            <span key={i} className="hero-letter" aria-hidden {...(i < half ? { "data-left": "" } : { "data-right": "" })}>
              {char}
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-glow" data-glow />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-portrait" src={PROFILE_SRC} alt="Portrait of Gourav Gupta" data-portrait />

      <div className="hero-bottom">
        <span className="hero-dot" data-fade />
        <p data-fade>{BOTTOM_TEXT}</p>
      </div>
    </section>
  );
}
