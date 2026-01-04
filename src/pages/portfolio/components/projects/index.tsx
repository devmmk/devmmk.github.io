import { ExternalLink } from "@icons";
import { projects } from "./constants";

const Projects = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-[color:var(--text-primary)]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[color:var(--bg-tertiary)]/80 backdrop-blur-sm rounded-lg p-6 hover:bg-[color:var(--bg-tertiary)] transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border border-[color:var(--border-color)]/60 shadow-[0_4px_12px_var(--shadow-color)] flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-[color:var(--text-secondary)]">{project.title}</h3>
                <p className="text-[color:var(--text-primary)] mb-4 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[color:var(--bg-primary)]/90 text-[color:var(--text-primary)] px-2 py-1 rounded text-xs border border-[color:var(--border-color)]/60 shadow-[0_2px_6px_var(--shadow-color)] hover:bg-[color:var(--accent-primary)] hover:text-[color:var(--text-accent)] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-[color:var(--text-secondary)] hover:text-[color:var(--hover-primary)] transition-colors duration-300 font-medium m-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <div className="text-[color:var(--text-secondary)]"><ExternalLink /></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
