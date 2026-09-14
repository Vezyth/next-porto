import { Briefcase } from "lucide-react";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="mt-8 space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Experience
      </h2>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={exp.title + exp.company}
            className="flex gap-4 rounded-xl border border-zinc-800 p-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/30"
          >
            {/* Icon */}
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900">
              <Briefcase size={18} className="text-zinc-400" />
            </div>

            {/* Content */}
            <div className="min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-white">{exp.title}</h3>
                <span className="text-xs text-zinc-500">{exp.dateRange}</span>
              </div>

              <div className="flex flex-wrap gap-x-3 text-sm text-zinc-400">
                <span>{exp.company}</span>
                <span className="text-zinc-700">·</span>
                <span>{exp.location}</span>
              </div>

              <p className="text-sm leading-6 text-zinc-400">
                {exp.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
