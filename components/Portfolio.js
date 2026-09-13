"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { portfolioProjects } from "@/data/site-data";
import PortfolioCard from "./PortfolioCard";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="portfolio"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Portfolio
          </h2>
          <p className="mt-3 max-w-lg text-mist">
            A selection of edits across styles — swap in your own reels any
            time from the site&apos;s data file.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onWatch={() => project.youtubeId && setActive(project)}
            />
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-ink-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 rounded-full bg-ink/80 p-2 text-paper hover:bg-ink"
            >
              <X size={18} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
