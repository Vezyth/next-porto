import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-96 shrink-0 flex-col overflow-y-auto border-r border-zinc-800 bg-zinc-950 p-10 max-md:h-auto max-md:w-full max-md:border-b max-md:border-r-0">
      {/* Top */}
      <div className="space-y-6">
        {/* Profile */}
        <div className="space-y-5">
          
          <Image
            src="/profile.png"
            alt="Julius Kevin Raharjo"
            width={110}
            height={110}
            className="rounded-2xl object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Julius Kevin Raharjo
            </h1>

          </div>
        </div>

        {/* About */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            About
          </h2>

          <p className="leading-7 text-zinc-300">
            Software Engineer with experience in Laravel development, Linux
            infrastructure, and deploying production web applications.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Contact
          </h2>

          <div className="space-y-2">
            <a
              href="mailto:juliuskevinr12@gmail.com"
              className="block transition hover:text-white"
            >
              juliuskevinr12@gmail.com
            </a>

            <a
              href="https://github.com/Vezyth"
              className="block transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/..."
              className="block transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Laravel",
              "React",
              "Flutter",
              "PHP",
              "Linux",
              "NGINX",
              "MySQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>


    </aside>
  );
}