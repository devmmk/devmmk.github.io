import { Github, LinkedIn, Mail, Phone, TelegramIcon } from "@icons";
import pdfFile from '@assets/resume.pdf';

const Headline = () => (
  <header className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-4">
      
        {/*<img
          src="profile-photo.jpg"
          alt="M. Mahdi Kashani"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
        />*/}
        
        <h1 className="text-4xl sm:text-5xl font-bold">
          M. Mahdi Kashani
        </h1>
      </div>
      <h2 className="text-xl sm:text-2xl text-gray-400 mb-6">
        Back-End Engineer | Python Specialist
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 mb-8">
      Experienced Back-End Engineer with 4+ years of freelance expertise in Python-based development, specializing in RESTful APIs, data processing, and scalable web solutions. Passionate about delivering clean, maintainable code and building robust backend systems. Currently pursuing an Associate Degree in Software Engineering, committed to continuous learning and professional growth.
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
          <a
          href="tel:+989308552187"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <Phone />
        </a>
        <a
          href="https://t.me/+989308552187"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <TelegramIcon />
        </a>
      </div>
      <div className="mt-8">
        <a
          href={pdfFile}
          className="inline-block px-6 py-2 bg-[#1f2937] text-white rounded-md hover:bg-[#374151] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF Version
        </a>
      </div>
    </div>
  </header>
);export default Headline;
