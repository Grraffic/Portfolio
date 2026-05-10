import { useState, useMemo } from 'react';
import type { Project } from '../types/project';

/**
 * useProjectFilter
 * Filters a list of projects by tech stack selection.
 * Also derives the unique list of all techs used across all projects.
 */
const useProjectFilter = (projects: Project[]) => {
  const [activeFilter, setActiveFilter] = useState('');

  const allTechs = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech_stack))),
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter
        ? projects.filter((p) =>
            p.tech_stack.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
          )
        : projects,
    [projects, activeFilter]
  );

  const toggleFilter = (tech: string) => {
    setActiveFilter((prev) => (prev === tech ? '' : tech));
  };

  const clearFilter = () => setActiveFilter('');

  return {
    activeFilter,
    allTechs,
    filteredProjects,
    toggleFilter,
    clearFilter,
  };
};

export default useProjectFilter;
