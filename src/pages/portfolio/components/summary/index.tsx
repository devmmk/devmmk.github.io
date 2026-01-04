import { Github, LinkedIn, Mail, Phone, Telegram } from "@icons";
import profilePic from '@assets/profile.jpg';
import pdfFile from '@assets/resume.pdf';

const Summary = () => (
  <header className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <img
          src={profilePic}
          alt="Mahdi Kashani"
          className="w-24 h-24 rounded-full mr-4 border-2 border-[color:var(--accent-primary)] flex-shrink-0 sm:w-32 sm:h-32 sm:mr-6"
        />
        <div>
          <h1 className="text-2xl text-[color:var(--text-primary)] mb-1 sm:text-4xl sm:mb-2">
            Mahdi Kashani
          </h1>
          <h2 className="text-base text-[color:var(--text-secondary)] sm:text-xl sm:text-2xl">
            Full Stack Developer & Software Engineer
          </h2>
        </div>
      </div>
      <p className="text-lg sm:text-xl text-[color:var(--text-primary)] mb-8">
        Experienced Full Stack Developer with 4+ years of freelance experience in Python, PHP, and modern JavaScript frameworks.
        Skilled in building scalable server-side applications, REST APIs, database-driven systems, and responsive front-end interfaces.
        Currently expanding into DevOps and cloud deployments to strengthen end-to-end delivery.
      </p>
      <div className="flex flex-wrap gap-6 mb-8">
        <a
          href="https://github.com/devmmk"
          className="hover:text-[color:var(--hover-primary)] transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <div className="text-[color:var(--text-primary)]">
            <Github />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mmkashani"
          className="hover:text-[color:var(--hover-primary)] transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <div className="text-[color:var(--text-primary)]">
            <LinkedIn />
          </div>
        </a>
        <a
          href="mailto:mahdi.kashani2006@gmail.com"
          className="hover:text-[color:var(--hover-primary)] transition-colors duration-300"
          aria-label="Email Contact"
        >
          <div className="text-[color:var(--text-primary)]">
            <Mail />
          </div>
        </a>
        <a
          href="tel:+989308552187"
          className="hover:text-[color:var(--hover-primary)] transition-colors duration-300"
          aria-label="Phone Contact"
        >
          <div className="text-[color:var(--text-primary)]">
            <Phone />
          </div>
        </a>
        <a
          href="https://t.me/devmmk"
          className="hover:text-[color:var(--hover-primary)] transition-colors duration-300"
          aria-label="Telegram Contact"
        >
          <div className="text-[color:var(--text-primary)]">
            <Telegram />
          </div>
        </a>
      </div>
      <div>
        <a
          href={pdfFile}
          className="inline-block px-6 py-2 bg-[color:var(--accent-primary)] text-[color:var(--text-accent)] rounded-md hover:bg-[color:var(--hover-primary)] transition-colors duration-300 shadow-[0_4px_12px_var(--shadow-color)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  </header>
);

export default Summary;
