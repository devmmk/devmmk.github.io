import { skills } from "./constants";

const Skills = () => (
  <section className="bg-[color:var(--bg-secondary)] py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl font-bold mb-12 text-center text-[color:var(--text-primary)]">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-[color:var(--bg-tertiary)]/80 backdrop-blur-sm rounded-lg p-6 hover:bg-[color:var(--bg-tertiary)] transition-colors duration-300 border border-[color:var(--border-color)]/50 shadow-[0_4px_12px_var(--shadow-color)]">
            <h3 className="text-xl font-semibold mb-4 text-[color:var(--text-secondary)]">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-[color:var(--bg-primary)]/90 px-3 py-1 rounded-full text-sm text-[color:var(--text-primary)] border border-[color:var(--border-color)]/60 hover:bg-[color:var(--accent-primary)] hover:text-[color:var(--text-accent)] transition-colors duration-300 cursor-default shadow-[0_2px_6px_var(--shadow-color)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
