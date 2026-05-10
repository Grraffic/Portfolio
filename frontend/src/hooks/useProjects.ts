import { useState, useEffect, useCallback } from 'react';
import type { Project, ProjectFormData } from '../types/project';
import { projectService } from '../services/projectService';

/**
 * useProjects
 * Handles all project data — fetch, create, update, delete.
 * Use this in any page that needs project data.
 */
const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await projectService.getAll();
      setProjects(data);
    } catch {
      setError('Failed to load projects. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, []);

  const createProject = async (formData: ProjectFormData): Promise<void> => {
    await projectService.create(formData);
    await fetchProjects();
  };

  const updateProject = async (id: string, formData: ProjectFormData): Promise<void> => {
    await projectService.update(id, formData);
    await fetchProjects();
  };

  const deleteProject = async (id: string): Promise<void> => {
    await projectService.delete(id);
    await fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    updateProject,
    deleteProject,
  };
};

export default useProjects;
