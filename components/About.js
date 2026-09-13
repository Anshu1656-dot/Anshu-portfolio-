import { personalInfo } from "@/data/site-data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">About</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="max-w-lg text-lg leading-relaxed text-mist">
              {personalInfo.aboutParagraph}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="space-y-4">
              {personalInfo.about.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-b border-white/5 pb-4 text-paper"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-teal" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
