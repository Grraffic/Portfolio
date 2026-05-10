import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project, ProjectFormData } from '../types/project';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: ProjectFormData) => Promise<void>;
  editProject: Project | null;
}

const emptyForm: ProjectFormData = {
  title: '',
  description: '',
  tech_stack: [],
  github_url: '',
  live_url: '',
  image_url: '',
};

const ProjectFormModal = ({ isOpen, onClose, onSubmit, editProject }: ProjectFormModalProps) => {
  const [form, setForm] = useState<ProjectFormData>(emptyForm);
  const [techInput, setTechInput] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (editProject) {
      setForm({
        title: editProject.title,
        description: editProject.description,
        tech_stack: editProject.tech_stack ?? [],
        github_url: editProject.github_url ?? '',
        live_url: editProject.live_url ?? '',
        image_url: editProject.image_url ?? '',
      });
    } else {
      setForm(emptyForm);
    }
    setTechInput('');
  }, [editProject, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addTech = () => {
    const t = techInput.trim();
    if (t && !form.tech_stack.includes(t)) {
      setForm(prev => ({ ...prev, tech_stack: [...prev.tech_stack, t] }));
    }
    setTechInput('');
  };

  const removeTech = (tech: string) => {
    setForm(prev => ({ ...prev, tech_stack: prev.tech_stack.filter(t => t !== tech) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(form);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-navy-700 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-navy-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {editProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto max-h-[70vh]">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Title <span className="text-red-400">*</span></label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="My Awesome Project"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="What does this project do?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition resize-none"
                />
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Tech Stack</label>
                <div className="flex gap-2 mb-2">
                  <input
                    value={techInput}
                    onChange={e => setTechInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addTech(); } }}
                    placeholder="e.g. React"
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition"
                  />
                  <button type="button" onClick={addTech} className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition">
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.tech_stack.map(t => (
                    <span key={t} className="flex items-center gap-1.5 px-3 py-1 bg-violet-100 dark:bg-violet-600/20 text-violet-700 dark:text-violet-300 text-xs font-medium rounded-full">
                      {t}
                      <button type="button" onClick={() => removeTech(t)} className="hover:text-red-500 transition-colors">×</button>
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">GitHub URL</label>
                <input
                  name="github_url"
                  value={form.github_url}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition"
                />
              </div>

              {/* Live URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Live URL</label>
                <input
                  name="live_url"
                  value={form.live_url}
                  onChange={handleChange}
                  placeholder="https://myproject.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Image URL</label>
                <input
                  name="image_url"
                  value={form.image_url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-800 text-sm font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition"
                >
                  {submitting ? 'Saving…' : editProject ? 'Save Changes' : 'Add Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectFormModal;
