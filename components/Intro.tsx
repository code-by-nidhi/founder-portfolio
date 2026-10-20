"use client";

import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.7, 0, 0.84, 0];

// Streaming-style intro: a red "G" pops in, glows, then zooms through the screen.
export default function Intro({ onDone }: { onDone: () => void }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    document.body.style.overflow = "";
    onDone();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const run = async () => {
      // 1. The letter drops in from large to its resting size.
      await animate(
        "[data-intro-g]",
        { scale: [2.4, 1], opacity: [0, 1], filter: ["blur(18px)", "blur(0px)"] },
        { duration: 0.9, ease: EASE_OUT }
      );

      // 2. Light streaks sweep across it while it glows.
      animate("[data-intro-streaks]", { opacity: [0, 1, 0], x: ["-30%", "30%"] }, { duration: 1.1, ease: "easeInOut" });
      await animate(
        "[data-intro-g]",
        { textShadow: ["0 0 0px rgba(229,9,20,0)", "0 0 60px rgba(229,9,20,0.9)", "0 0 20px rgba(229,9,20,0.5)"] },
        { duration: 1.1 }
      );

      // 3. Zoom through the letter and reveal the site.
      animate("[data-intro-g]", { scale: 60, opacity: [1, 1, 0] }, { duration: 1, ease: EASE_IN });
      await animate(scope.current, { opacity: 0 }, { duration: 0.5, delay: 0.6 });
      finish();
    };

    run();
    return () => {
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={scope} className="intro" onClick={finish} role="presentation">
      <span className="intro-g" data-intro-g>
        G
      </span>
      <span className="intro-streaks" data-intro-streaks aria-hidden />
      <span className="intro-skip">Click to skip</span>
    </div>
  );
}
