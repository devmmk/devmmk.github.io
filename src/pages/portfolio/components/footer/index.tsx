const Footer = () => (
  <footer className="bg-[color:var(--bg-secondary)] py-16 sm:py-20">
    <div className="container mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[color:var(--text-primary)]">Get In Touch</h2>
      <p className="text-[color:var(--text-primary)] mb-8 max-w-2xl mx-auto">
        I'm always interested in hearing about new opportunities and collaborations.
        Let's discuss how we can work together!
      </p>
      <a
        href="mailto:mahdi.kashani2006@gmail.com"
        className="inline-flex items-center bg-[color:var(--accent-primary)] text-[color:var(--text-accent)] px-8 py-3 rounded-lg hover:bg-[color:var(--hover-primary)] transition-colors duration-300 font-medium shadow-[0_4px_12px_var(--shadow-color)]"
      >
        Contact Me
      </a>
      <div className="mt-12 pt-8 border-t border-[color:var(--text-secondary)]/60 text-[color:var(--text-secondary)] text-sm">
        <p>&copy; {new Date().getFullYear()} Mahdi Kashani. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
