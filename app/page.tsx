import FloatingNav from "./components/FloatingNav";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/MobileSidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden max-md:flex-col">

      {/* Desktop Sidebar */}
      <aside className="shrink-0 max-md:hidden">
        <Sidebar />
      </aside>

      {/* Mobile Hamburger + Sidebar */}
      <MobileSidebar/>

      <main
        className="
          min-w-0
          flex-1
          overflow-y-auto
          px-10
          py-10
          pb-32

          max-lg:px-6
          max-lg:py-8

          max-md:h-auto
          max-md:overflow-visible
          max-md:px-5
          max-md:py-6
          max-md:pb-28
        "
      >
        <section id="about">
          <Hero />
        </section>

        <Projects />

        <Experience />

        <Education />

        <section id="skills" />
        <section id="certifications" />
        <section id="contact" />
      </main>

      <FloatingNav />
    </div>
  );
}