import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-700 py-8 sm:py-10 mt-16 sm:mt-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RR
            </div>
            <span className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-200">
              Rafael<span className="text-violet-500 dark:text-violet-400">.</span>dev
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/" className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 text-sm transition-colors duration-200">Home</Link>
            <Link to="/projects" className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 text-sm transition-colors duration-200">Projects</Link>
            <a
              href="https://github.com/Grraffic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 text-sm transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:your@email.com"
              className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 text-sm transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 dark:text-slate-500 text-xs text-center transition-colors duration-200">
            © {currentYear} Rafael Ramos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
