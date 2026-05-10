import type { ProjectFormData } from '../types/project';
import useProjects from '../hooks/useProjects';
import useProjectModal from '../hooks/useProjectModal';
import useToast from '../hooks/useToast';
import ProjectCard from '../components/ProjectCard';
import ProjectFormModal from '../components/ProjectFormModal';

const Admin = () => {
  const { projects, loading, error, createProject, updateProject, deleteProject } = useProjects();
  const modal = useProjectModal();
  const { toast, showToast } = useToast();

  const handleSubmit = async (formData: ProjectFormData) => {
    if (modal.editingProject) {
      await updateProject(modal.editingProject.id, formData);
      showToast('Project updated successfully!', 'success');
    } else {
      await createProject(formData);
      showToast('Project added successfully!', 'success');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProject(id);
      showToast('Project deleted.', 'success');
    } catch {
      showToast('Failed to delete project.', 'error');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-navy-900 pt-24 pb-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 animate-fade-in">
          <div>
            <p className="text-violet-600 dark:text-violet-400 text-sm font-semibold uppercase tracking-widest mb-1 transition-colors duration-200">Dashboard</p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-200">Manage Projects</h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 transition-colors duration-200">
              {projects.length} project{projects.length !== 1 ? 's' : ''} total
            </p>
          </div>
          <button
            id="add-project-btn"
            onClick={modal.openAdd}
            className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Project
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl text-sm mb-6">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-24">
            <svg className="w-10 h-10 text-violet-500 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        )}

        {/* Empty */}
        {!loading && projects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-slate-300 dark:border-navy-700 rounded-2xl transition-colors duration-200">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-violet-100 dark:bg-violet-600/10 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center transition-colors duration-200">
              <svg className="w-8 h-8 text-violet-600 dark:text-violet-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-medium mb-2 transition-colors duration-200">No projects yet</p>
            <p className="text-slate-500 text-sm mb-6">Click "Add Project" to get started.</p>
            <button
              onClick={modal.openAdd}
              className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-sm"
            >
              Add Your First Project
            </button>
          </div>
        )}

        {/* Grid */}
        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEdit={modal.openEdit}
                onDelete={handleDelete}
                showActions={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Form Modal */}
      <ProjectFormModal
        isOpen={modal.isOpen}
        onClose={modal.close}
        onSubmit={handleSubmit}
        editProject={modal.editingProject}
      />

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-medium animate-slide-up ${
            toast.type === 'success'
              ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300'
              : 'bg-red-500/20 border border-red-500/30 text-red-300'
          }`}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {toast.type === 'success' ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
          {toast.message}
        </div>
      )}
    </main>
  );
};

export default Admin;
