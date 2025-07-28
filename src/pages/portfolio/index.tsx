import Projects from "./components/projects";
import Skills from "./components/skills";
import Summary from "./components/summary";
import Footer from "./components/footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Summary />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
