import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-navy-800 shadow-xl dark:shadow-none">
            <img 
              src="/profile-no-sunglasses.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-600/10 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400 text-sm px-4 py-1.5 rounded-full mb-8 transition-colors duration-200">
              <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse transition-colors duration-200" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors duration-200">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-700 dark:from-violet-400 dark:to-violet-600 transition-colors duration-200">
                Rafael Ramos
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-6 font-light transition-colors duration-200">
              Full-Stack Developer
            </p>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-10 transition-colors duration-200">
              I build clean, responsive web applications with modern technologies.
              Passionate about creating great user experiences and writing maintainable code.
            </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:justify-start gap-4">
            <Link
              id="view-projects-btn"
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              View My Projects
            </Link>
            <a
              id="contact-btn"
              href="mailto:your@email.com"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-navy-800 hover:bg-slate-50 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-navy-700 hover:border-violet-500/50 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-12">
            <a
              href="https://github.com/Grraffic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <span className="text-xs">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-slate-100/50 dark:bg-navy-800/50 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 transition-colors duration-200">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-200">
                Building things for the web
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4 transition-colors duration-200">
                I'm a developer who loves turning ideas into real products. I work across the full stack — from designing responsive UIs to building APIs and managing databases.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 transition-colors duration-200">
                Currently focused on building web applications using React, TypeScript, Node.js, and Supabase.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-500 dark:hover:text-violet-300 font-medium transition-colors duration-200 group"
              >
                See my work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right: Skills/Tech */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Express', icon: '🚂' },
                { name: 'Supabase', icon: '⚡' },
                { name: 'Tailwind CSS', icon: '🎨' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Git', icon: '🌿' },
                { name: 'Vite', icon: '⚡' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-xl px-4 py-3 hover:border-violet-500/40 hover:bg-slate-50 dark:hover:bg-navy-700 transition-all duration-200 group cursor-default shadow-sm dark:shadow-none"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium transition-colors duration-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
