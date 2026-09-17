import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, GitBranch, ExternalLink } from 'lucide-react';
import { projects } from '@/app/data/projects';

interface ProjectDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetail({
  params,
}: ProjectDetailProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Project not found
          </h1>

          <Link
            href="/"
            className="inline-block text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    // 1. Changed to a fixed viewport height (h-[100dvh]) to lock the application size
    <div className="h-[100dvh] bg-zinc-950 text-white">
      {/* 2. Used flex-col for mobile stacking, keeping grid for desktop */}
      <div className="flex h-full flex-col lg:grid lg:grid-cols-3">

        {/* LEFT COLUMN - Desktop Sidebar */}
        <aside
          className="
            hidden
            h-full
            overflow-y-auto
            border-r
            border-zinc-800
            px-8
            py-8
            lg:col-span-1
            lg:flex
            lg:flex-col
          "
        >
          {/* Back Button */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>

          <div className="mb-8 h-px bg-zinc-800" />

          {/* Year */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Year
            </p>
            <p className="text-base text-white">{project.year}</p>
          </div>

          {/* Role */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Role
            </p>
            <p className="text-base text-white">{project.role}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300 transition-colors hover:border-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="my-8 h-px bg-zinc-800" />

          {/* Links */}
          <div className="space-y-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <GitBranch size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} className="ml-auto" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
                <ExternalLink size={12} className="ml-auto" />
              </a>
            )}
          </div>
        </aside>

        {/* MOBILE HEADER */}
        <div
          className="
            flex
            shrink-0
            items-center
            border-b
            border-zinc-800
            px-5
            py-4
            lg:hidden
          "
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* RIGHT COLUMN - Content */}
        <main
          className="
            flex-1
            min-w-0
            overflow-y-auto
            px-5
            py-8
            sm:px-8
            md:px-12
            md:py-12
            lg:col-span-2
            lg:px-12
            lg:py-16
          "
        >
          <div className="mx-auto max-w-3xl space-y-10 md:space-y-12">
            
            {/* Title */}
            <div>
              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                  md:text-5xl
                "
              >
                {project.title}
              </h1>
            </div>

            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* MOBILE METADATA CARD - Hidden on Desktop */}
            <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:hidden">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Year</p>
                  <p className="text-sm text-white">{project.year}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Role</p>
                  <p className="text-sm text-white">{project.role}</p>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.liveDemo) && (
                <>
                  <div className="h-px bg-zinc-800" />
                  <div className="flex flex-wrap gap-6 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        <GitBranch size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* SECTION 1: Summary Callout */}
            <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-zinc-200">
                {project.description}
              </p>
            </section>

            {/* SECTION 2: Problem Statement */}
            {project.problem && (
              <section className="space-y-3">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Background & Challenge
                </h2>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {project.problem}
                </p>
              </section>
            )}

            {/* SECTION 3: Key Architectural Solutions */}
            {project.solution && project.solution.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Key Technical Solutions
                </h2>
                <div className="grid gap-3">
                  {project.solution.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 rounded-lg border border-zinc-800/80 bg-zinc-950 p-4 transition-colors hover:border-zinc-700"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-mono font-medium text-zinc-400">
                        0{idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 4: Impact & Stack */}
            
              {/* SECTION 4: Impact */}
            {project.impact && (
              <section>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Impact
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {project.impact}
                  </p>
                </div>
              </section>
            )}
           
          </div>
        </main>
      </div>
    </div>
  );
}