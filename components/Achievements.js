import { achievements } from "@/data/site-data";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Achievements
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
            {achievements.map((item, i) => (
              <div
                key={item.label}
                className="px-2 text-center sm:px-6 sm:text-left"
              >
                <div
                  className={`font-display text-4xl sm:text-5xl ${
                    i % 2 === 0 ? "text-teal" : "text-amber"
                  }`}
                >
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-mist">{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
