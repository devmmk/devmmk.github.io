import { Github, LinkedIn, Mail } from "@icons";

const Headline = () => (
  <header className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        M. Mahdi Kashani
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-400 mb-6">
        Back-End Engineer
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-8">
      I am a Software Engineer and Backend Developer with over 4 years of freelance experience,
      I specialize in Python and have expanded my expertise to other tools and languages, constantly learning and improving.
      I'm currently living in Isfahan and studying Software Engineering at the associate degree level.
      </p>
      <div className="flex space-x-6">
        <a
          href="https://github.com/devmmk"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/mmkashani"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <LinkedIn />
        </a>
        <a
          href="mailto:mahdi.kashani2006@gmail.com"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Mail />
        </a>
      </div>
    </div>
  </header>
);

export default Headline;
