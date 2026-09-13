import { Play } from "lucide-react";
import FrameCorners from "./FrameCorners";

export default function PortfolioCard({ project, onWatch }) {
  const hasVideo = Boolean(project.youtubeId);
  const thumbnail = hasVideo
    ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
    : null;

  return (
    <div className="glass group relative flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-teal/20 via-ink-2 to-amber/10">
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-2xl text-paper/20">
              {project.category}
            </span>
          </div>
        )}
        <FrameCorners />
        <button
          type="button"
          onClick={onWatch}
          disabled={!hasVideo}
          aria-label={`Watch ${project.title}`}
          className="absolute inset-0 flex items-center justify-center transition-colors duration-300 group-hover:bg-ink/40 disabled:cursor-default"
        >
          {hasVideo && (
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/40 bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Play size={22} className="ml-1 text-paper" />
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-2xl text-paper">{project.title}</h3>
        <span className="text-sm text-teal">{project.category}</span>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-mist">
          {project.description}
        </p>
        <button
          type="button"
          onClick={onWatch}
          disabled={!hasVideo}
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-paper underline decoration-teal/50 underline-offset-4 transition-colors hover:decoration-amber disabled:text-mist disabled:decoration-transparent"
        >
          <Play size={14} />
          {hasVideo ? "Watch" : "Coming soon"}
        </button>
      </div>
    </div>
  );
}
