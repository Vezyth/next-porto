import Image from "next/image";
import Link from "next/link";
import { Briefcase, Calendar } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
  href={`/projects/${project.slug}`}
  className="block"
>
  <article className="space-y-3 rounded-xl border border-zinc-800 p-4 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/30">
    <Image
      src={project.image}
      alt={project.title}
      width={1200}
      height={675}
      className="aspect-video w-full rounded-lg object-cover"
    />

    <div className="space-y-2">
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <div className="flex items-center gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{project.year}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Briefcase size={14} />
          <span>{project.role}</span>
        </div>
      </div>

      <p className="line-clamp-2 text-sm text-zinc-400">
        {project.description}
      </p>
    </div>
  </article>
</Link>
  );
}