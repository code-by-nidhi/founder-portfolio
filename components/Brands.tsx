"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRANDS } from "@/lib/brands";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Brands() {
  return (
    <section className="brands" id="brands">
      <motion.h2
        className="brands-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        Who&apos;s watching?
      </motion.h2>

      <div className="brands-row">
        {BRANDS.map((b, i) => (
          <motion.div
            key={b.slug}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.07 }}
          >
            <Link href={`/brands/${b.slug}`} className="brand-card">
              <span
                className="brand-avatar"
                style={{ background: `linear-gradient(145deg, ${b.colors[0]}, ${b.colors[1]})` }}
              >
                {b.badge && <span className="brand-badge">{b.badge}</span>}
                <span className="brand-mark">{b.mark}</span>
              </span>
              <span className="brand-name">{b.name}</span>
              <span className="brand-tagline">{b.tagline}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="brands-note">Every brand tells a different side of the same story — pick one to explore.</p>
    </section>
  );
}
