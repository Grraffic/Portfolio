import { useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import type { Project, ProjectFormData } from '../types/project';

const EMPTY_FORM: ProjectFormData = {
  title: '',
  description: '',
  tech_stack: [],
  github_url: '',
  live_url: '',
  image_url: '',
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectFormData) => Promise<void>;
  editProject?: Project | null;
}

const ProjectModal = ({ isOpen, onClose, onSubmit, editProject }: ProjectModalProps) => {
  const [form, setForm] = useState<ProjectFormData>(EMPTY_FORM);
  const [techInput, setTechInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editProject) {
      setForm({
        title: editProject.title,
        description: editProject.description || '',
        tech_stack: editProject.tech_stack || [],
        github_url: editProject.github_url || '',
        live_url: editProject.live_url || '',
        image_url: editProject.image_url || '',
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setError('');
    setTechInput('');
  }, [editProject, isOpen]);

  const handleAddTech = () => {
    const tech = techInput.trim();
    if (tech && !form.tech_stack.includes(tech)) {
      setForm((prev) => ({ ...prev, tech_stack: [...prev.tech_stack, tech] }));
    }
    setTechInput('');
  };

  const handleTechKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      handleAddTech();
    }
    if (e.key === 'Backspace' && !techInput && form.tech_stack.length > 0) {
      setForm((prev) => ({ ...prev, tech_stack: prev.tech_stack.slice(0, -1) }));
    }
  };

  const removeTech = (tech: string) => {
    setForm((prev) => ({ ...prev, tech_stack: prev.tech_stack.filter((t) => t !== tech) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError('Project title is required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await onSubmit(form);
      onClose();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/50 animate-slide-up max-h-[90vh] overflow-y-auto transition-colors duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-navy-700 transition-colors duration-200">
          <h2 className="text-slate-900 dark:text-white font-semibold text-lg transition-colors duration-200">
            {editProject ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-700 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label htmlFor="project-title" className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              Project Title <span className="text-violet-600 dark:text-violet-400">*</span>
            </label>
            <input
              id="project-title"
              type="text"
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              placeholder="e.g. E-Commerce Platform"
              className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="project-description" className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              Description
            </label>
            <textarea
              id="project-description"
              value={form.description}
              onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
              placeholder="What does this project do?"
              rows={3}
              className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200 resize-none"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              Tech Stack
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {form.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1 bg-violet-100 dark:bg-violet-600/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-xs px-2.5 py-1 rounded-full transition-colors duration-200"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTech(tech)}
                    className="text-violet-500 dark:text-violet-400 hover:text-violet-900 dark:hover:text-white ml-0.5 transition-colors"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                id="tech-input"
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleTechKeyDown}
                placeholder="Type tech & press Enter (e.g. React)"
                className="flex-1 bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4 py-2.5 bg-violet-100 dark:bg-violet-600/20 border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-600/40 rounded-xl text-sm transition-all duration-200"
              >
                Add
              </button>
            </div>
          </div>

          {/* GitHub URL */}
          <div>
            <label htmlFor="github-url" className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              GitHub URL
            </label>
            <input
              id="github-url"
              type="url"
              value={form.github_url}
              onChange={(e) => setForm((p) => ({ ...p, github_url: e.target.value }))}
              placeholder="https://github.com/you/repo"
              className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
            />
          </div>

          {/* Live URL */}
          <div>
            <label htmlFor="live-url" className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              Live Demo URL
            </label>
            <input
              id="live-url"
              type="url"
              value={form.live_url}
              onChange={(e) => setForm((p) => ({ ...p, live_url: e.target.value }))}
              placeholder="https://your-project.vercel.app"
              className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image-url" className="block text-slate-700 dark:text-slate-300 text-sm font-medium mb-1.5 transition-colors duration-200">
              Preview Image URL
            </label>
            <input
              id="image-url"
              type="url"
              value={form.image_url}
              onChange={(e) => setForm((p) => ({ ...p, image_url: e.target.value }))}
              placeholder="https://your-image.com/preview.png"
              className="w-full bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all duration-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 bg-slate-100 dark:bg-navy-700 hover:bg-slate-200 dark:hover:bg-navy-600 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl text-sm font-medium transition-all duration-200"
            >
              Cancel
            </button>
            <button
              id="submit-project-btn"
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/50 text-white rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </>
              ) : editProject ? 'Save Changes' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
