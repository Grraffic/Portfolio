import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useProjects from '../hooks/useProjects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import TextDecrypt from '../components/TextDecrypt';
import type { Project } from '../types/project';
import Experience from '../components/Experience';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, loading } = useProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-200 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto px-2"
        >
          {/* Profile Image */}
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white dark:border-navy-800 shadow-xl dark:shadow-none">
            <img
              src="/profile-no-sunglasses.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight transition-colors duration-200">
              Hi, I'm{' '}
              <TextDecrypt
                text="Rafael Ramos"
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-violet-700 dark:from-violet-400 dark:to-violet-600 transition-colors duration-200"
              />
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 font-light transition-colors duration-200">
              Full-Stack Developer
            </p>

            {/* Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 sm:mb-10 transition-colors duration-200">
              I build clean, responsive web applications with modern technologies.
              Passionate about creating great user experiences and writing maintainable code.
              I leverage AI tools to accelerate development, while carefully reviewing and refining the code to ensure high quality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center md:justify-start gap-3">
              <Link
                id="view-projects-btn"
                to="/projects"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 text-center text-sm sm:text-base"
              >
                View My Projects
              </Link>
              <a
                id="download-resume-btn"
                href="/Rafael%20Ramos.pdf"
                download="Rafael_Ramos_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-white dark:bg-navy-800 hover:bg-slate-50 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-navy-700 hover:border-violet-500/50 transition-all duration-200 text-center text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-5 mt-8 sm:mt-12">
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
                href="https://www.facebook.com/xdraf56"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}

      </section>

      {/* Experience & Tools Section */}
      <Experience />

      {/* Featured Projects Section */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 bg-slate-50 dark:bg-navy-900 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              A quick look at some of my recent work. View all projects to see my full portfolio.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-80 bg-slate-200 dark:bg-navy-800 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} onClick={setSelectedProject} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-16 flex justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 bg-white dark:bg-navy-800 hover:bg-slate-50 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-navy-700 hover:border-violet-500/50 transition-all duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 bg-slate-900 dark:bg-[#0a0f1c] text-center transition-colors duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Let's work together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto px-2">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-1"
          >
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-8 mt-20">
            <a href="https://github.com/Grraffic" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.facebook.com/xdraf56" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </motion.div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
};

export default Home;
