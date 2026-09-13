import {
  Film,
  Clapperboard,
  Zap,
  BookOpen,
  Sparkles,
  Palette,
  Volume2,
  TrendingUp,
} from "lucide-react";
import { skills, tools } from "@/data/site-data";
import Reveal from "./Reveal";

const iconMap = {
  Film,
  Clapperboard,
  Zap,
  BookOpen,
  Sparkles,
  Palette,
  Volume2,
  TrendingUp,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">Skills</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 border-b border-white/5 py-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-teal/30 text-teal">
                    <Icon size={18} />
                  </span>
                  <span className="text-paper">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16">
            <p className="text-sm text-mist">Editing Tools</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="flex items-center gap-2 font-display text-xl text-paper"
                >
                  <span className="h-1.5 w-1.5 rounded-sm bg-amber" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
