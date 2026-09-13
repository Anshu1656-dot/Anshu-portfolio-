import { experience } from "@/data/site-data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Experience
          </h2>
          <p className="mt-3 text-mist">
            {experience.role}, growing {experience.org} to {experience.metric}.
          </p>
        </Reveal>

        <div className="relative mt-16 border-l border-white/10 pl-8 sm:pl-10">
          {experience.timeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-teal bg-ink sm:-left-[46px]" />
                <h3 className="font-display text-2xl text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-mist">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
