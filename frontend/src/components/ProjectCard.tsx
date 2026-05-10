import { useState } from 'react';
import type { Project } from '../types/project';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
  onClick?: (project: Project) => void;
  showActions?: boolean;
}

const ProjectCard = ({ project, onEdit, onDelete, onClick, showActions = false }: ProjectCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (onDelete && window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
      setIsDeleting(true);
      onDelete(project.id);
    }
  };

  return (
    <div 
      onClick={() => onClick && onClick(project)}
      className={`group bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 animate-fade-in ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-navy-700 dark:to-navy-900 overflow-hidden transition-colors duration-200">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-violet-100 dark:bg-violet-600/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center transition-colors duration-200">
                <svg className="w-8 h-8 text-violet-500 dark:text-violet-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-slate-500 text-xs">No image</p>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-navy-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 transition-colors duration-200">
            {project.description}
          </p>
        )}

        {/* Tech Stack */}
        {project.tech_stack && project.tech_stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech_stack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}

        {/* Links + Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-navy-700 transition-colors duration-200">
          <div className="flex items-center gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                id={`github-link-${project.id}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs font-medium transition-colors duration-200 group/link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                id={`live-link-${project.id}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-violet-600 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300 text-xs font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>

          {/* Admin Actions */}
          {showActions && (
            <div className="flex items-center gap-2">
              <button
                id={`edit-btn-${project.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit && onEdit(project);
                }}
                className="p-1.5 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 rounded-lg transition-all duration-200"
                title="Edit project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button
                id={`delete-btn-${project.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                disabled={isDeleting}
                className="p-1.5 text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all duration-200 disabled:opacity-50"
                title="Delete project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
