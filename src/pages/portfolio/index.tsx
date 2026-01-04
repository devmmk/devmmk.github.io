import Projects from "./components/projects";
import Skills from "./components/skills";
import Summary from "./components/summary";
import Experience from "./components/experience";
import Footer from "./components/footer";
import ThemeToggle from "@components/ThemeToggle";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] relative">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
