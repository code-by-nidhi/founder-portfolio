import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, getBrand } from "@/lib/brands";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = getBrand((await params).slug);
  return { title: brand ? `${brand.name} — Gourav Gupta` : "Not found" };
}

const PORTRAIT_SRC = "/gourav.webp";

export default async function BrandPage({ params }: Props) {
  const brand = getBrand((await params).slug);
  if (!brand) notFound();

  const [from, to] = brand.colors;
  const others = BRANDS.filter((b) => b.slug !== brand.slug);
  const episodes = brand.sections;

  return (
    <main className="title-page" style={{ "--brand": from, "--brand-2": to } as React.CSSProperties}>
      <nav className="title-nav">
        <Link href="/#brands" className="title-back">
          ← Back
        </Link>
        <Link href="/" className="hero-logo">
          GG.
        </Link>
      </nav>

      {/* Billboard: details on the left, portrait on the right. */}
      <section className="billboard">
        <div className="billboard-art" aria-hidden>
          <span className="billboard-mark">{brand.mark}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="billboard-portrait" src={PORTRAIT_SRC} alt="" />
          <span className="billboard-chip billboard-chip-top">
            <strong>{brand.since ? `Since ${brand.since}` : brand.name}</strong>
            {brand.category}
          </span>
          <span className="billboard-chip billboard-chip-bottom">
            <strong>{episodes.length} Episodes</strong>
            Now streaming
          </span>
        </div>

        <div className="billboard-info">
          <span className="billboard-kicker">
            <b>G</b> SERIES
          </span>
          <h1 className="billboard-title">{brand.name}</h1>
          <span className="billboard-sub">The Series</span>

          <p className="billboard-meta">
            <span className="billboard-rating">U/A</span>
            {brand.since && <span>{brand.since} – Present</span>}
            <span>{brand.category}</span>
            <span>{episodes.length} Episodes</span>
            {brand.badge && <span className="billboard-badge">{brand.badge}</span>}
          </p>
          <p className="billboard-role">{brand.role}</p>
          <p className="billboard-desc">{brand.description}</p>

          <div className="billboard-actions">
            <a href="#episodes" className="btn-play">
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Intro
            </a>
            {brand.website ? (
              <a href={brand.website} target="_blank" rel="noreferrer" className="btn-ghost">
                Visit Website
              </a>
            ) : (
              <a href="#more" className="btn-ghost">
                More Like This
              </a>
            )}
            <a href="#episodes" className="btn-info" aria-label="Episodes">
              i
            </a>
          </div>
        </div>
      </section>

      <section className="title-row" id="more">
        <h2>Continue Exploring</h2>
        <div className="explore-row">
          {others.map((b, i) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="explore-card">
              <span
                className="explore-thumb"
                style={{ background: `linear-gradient(135deg, ${b.colors[0]}, ${b.colors[1]})` }}
              >
                <span>{b.mark}</span>
                <i style={{ width: `${30 + ((i * 23) % 60)}%` }} />
              </span>
              <strong>{b.name}</strong>
              <small>{b.tagline}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="title-row" id="episodes">
        <h2>Episodes</h2>
        <ol className="episodes">
          {episodes.map((ep, i) => (
            <li key={ep.title} className="episode">
              <span className="episode-num">{i + 1}</span>
              <span className="episode-thumb">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <div className="episode-body">
                <strong>{ep.title}</strong>
                {ep.text?.map((t) => <p key={t}>{t}</p>)}
                {ep.items && (
                  <ul>
                    {ep.items.map((it) => (
                      <li key={it.label}>
                        <b>{it.label}:</b> {it.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
