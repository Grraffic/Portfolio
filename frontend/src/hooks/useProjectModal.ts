import { useState } from 'react';
import type { Project } from '../types/project';

/**
 * useProjectModal
 * Controls the Add/Edit project modal state.
 * Keeps track of which project is being edited (or null for "add" mode).
 */
const useProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const openAdd = () => {
    setEditingProject(null);
    setIsOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditingProject(project);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setEditingProject(null);
  };

  return {
    isOpen,
    editingProject,
    openAdd,
    openEdit,
    close,
  };
};

export default useProjectModal;
