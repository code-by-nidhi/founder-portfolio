"use client";

import { useState } from "react";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import SlideStack from "@/components/SlideStack";

// Survives client-side navigation, so coming back from a brand page skips the intro.
let introPlayed = false;

export default function Home() {
  const [introDone, setIntroDone] = useState(() => introPlayed);

  return (
    <main>
      {!introDone && <Intro
          onDone={() => {
            introPlayed = true;
            setIntroDone(true);
          }}
        />}
      <SlideStack>
        <Hero start={introDone} />
        <Brands />
      </SlideStack>
    </main>
  );
}
