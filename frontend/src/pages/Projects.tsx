import useProjects from '../hooks/useProjects';
import useProjectFilter from '../hooks/useProjectFilter';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects, loading, error } = useProjects();
  const { activeFilter, allTechs, filteredProjects, toggleFilter, clearFilter } = useProjectFilter(projects);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 transition-colors duration-200">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-200">My Projects</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto transition-colors duration-200">
            A collection of things I've built — from web apps to APIs.
          </p>
        </div>

        {/* Tech Filter */}
        {allTechs.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10 animate-slide-up">
            <button
              id="filter-all"
              onClick={clearFilter}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
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
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
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

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-4">
              <svg className="w-10 h-10 text-violet-500 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors duration-200">Loading projects…</p>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={() => {}}
                onDelete={() => {}}
                showActions={false}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
