import { GraduationCap } from "lucide-react";
import { educations } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="mt-8 space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Education
      </h2>

      <div className="space-y-4">
        {educations.map((edu) => (
          <article
            key={edu.title + edu.institution}
            className="flex gap-4 rounded-xl border border-zinc-800 p-5 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/30"
          >
            {/* Icon */}
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
              <GraduationCap size={18} className="text-zinc-400" />
            </div>

            {/* Content */}
            <div className="min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-white">{edu.title}</h3>
                <span className="text-xs text-zinc-500">{edu.dateRange}</span>
              </div>

              <div className="flex flex-wrap gap-x-3 text-sm text-zinc-400">
                <span>{edu.institution}</span>
                <span className="text-zinc-700">·</span>
                <span>{edu.location}</span>
              </div>

              <p className="text-sm leading-6 text-zinc-400">
                {edu.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
