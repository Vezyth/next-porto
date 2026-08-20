import FloatingNav from "./components/FloatingNav";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-10 pb-32">

        <section id="about">
        <Hero />
          
        </section>


        <section id="experience">
          
        </section>

        <section id="projects"></section>
        <Projects/>
        <section id="skills"></section>

        <section id="certifications"></section>

        <section id="contact"></section>
      </main>
        <FloatingNav />
    </div>
  );
}