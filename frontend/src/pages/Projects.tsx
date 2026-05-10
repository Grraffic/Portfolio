import { useState } from 'react';
import useProjects from '../hooks/useProjects';
import useProjectFilter from '../hooks/useProjectFilter';
import ProjectCard from '../components/ProjectCard';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import ProjectModal from '../components/ProjectModal';
import type { Project } from '../types/project';

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const { activeFilter, allTechs, filteredProjects, toggleFilter, clearFilter } = useProjectFilter(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-20 sm:pt-24 pb-16 sm:pb-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-200">Portfolio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-200">My Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto transition-colors duration-200">
            A collection of things I've built — from web apps to APIs.
          </p>
        </div>

        {/* Tech Filter */}
        {allTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-8 sm:mb-10 animate-slide-up">
            <button
              id="filter-all"
              onClick={clearFilter}
              className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                !activeFilter
                  ? 'bg-violet-600 border-violet-600 text-white shadow-sm'
                  : 'bg-transparent border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-400 hover:border-violet-500/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-transparent'
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                id={`filter-${tech.toLowerCase()}`}
                onClick={() => toggleFilter(tech)}
                className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                  activeFilter === tech
                    ? 'bg-violet-600 border-violet-600 text-white shadow-sm'
                    : 'bg-transparent border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-400 hover:border-violet-500/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-transparent'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Loading Skeletons */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 flex items-center justify-center transition-colors duration-200 shadow-sm dark:shadow-none">
              <svg className="w-10 h-10 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium mb-2 transition-colors duration-200">No projects yet</p>
            <p className="text-slate-500 text-sm">
              {activeFilter
                ? `No projects use "${activeFilter}". Try a different filter.`
                : 'Head to the Admin page to add your first project.'}
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
                showActions={false}
              />
            ))}
          </div>
        )}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
};

export default Projects;
