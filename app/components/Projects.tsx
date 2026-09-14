"use client";

import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });
  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();
  return (
    <section id="projects" className="mt-8 space-y-4">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Projects
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="rounded-full border border-zinc-700 p-3 transition hover:bg-zinc-800"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              className="rounded-full border border-zinc-700 p-3 transition hover:bg-zinc-800"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-6 flex">
          {projects.map((project) => (
            <div key={project.id} className="min-w-0 flex-[0_0_80%] pl-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-3"></div>
    </section>
  );
}
