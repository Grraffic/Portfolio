import axios from 'axios';
import type { Project, ProjectFormData } from '../types/project';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    const { data } = await api.get('/projects');
    return data.data;
  },

  getById: async (id: string): Promise<Project> => {
    const { data } = await api.get(`/projects/${id}`);
    return data.data;
  },

  create: async (project: ProjectFormData): Promise<Project> => {
    const { data } = await api.post('/projects', project);
    return data.data;
  },

  update: async (id: string, project: Partial<ProjectFormData>): Promise<Project> => {
    const { data } = await api.put(`/projects/${id}`, project);
    return data.data;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/projects/${id}`);
  },
};
