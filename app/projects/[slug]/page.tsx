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
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3">

        {/* LEFT COLUMN - Desktop Sidebar */}
        <aside
          className="
            hidden
            lg:col-span-1
            lg:flex
            lg:flex-col
            overflow-hidden
            border-r
            border-zinc-800
            px-8
            py-8
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

            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                01 Overview
              </h2>

              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                {project.description}
              </p>
            </section>

            {/* Features */}
            <section className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                02 Features
              </h2>

              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 text-zinc-600">•</span>
                  <span>
                    Dynamic role and permission management system
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-zinc-600">•</span>
                  <span>
                    Reusable navigation components with access control
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 text-zinc-600">•</span>
                  <span>
                    Database-driven permission architecture
                  </span>
                </li>
              </ul>
            </section>

            {/* Technical Details */}
            <section className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                03 Technical Details
              </h2>

              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                Built with {project.technologies.join(', ')}. The project
                focuses on scalability, maintainability, and a user-centric
                design approach.
              </p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}