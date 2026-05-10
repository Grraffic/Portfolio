const ProjectCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-2xl overflow-hidden shadow-sm h-[400px]">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-slate-200 dark:bg-navy-700/50"></div>
      {/* Content placeholder */}
      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="h-6 bg-slate-200 dark:bg-navy-700/50 rounded-md w-3/4"></div>
        <div className="space-y-2 flex-grow">
          <div className="h-4 bg-slate-200 dark:bg-navy-700/50 rounded-md w-full"></div>
          <div className="h-4 bg-slate-200 dark:bg-navy-700/50 rounded-md w-5/6"></div>
          <div className="h-4 bg-slate-200 dark:bg-navy-700/50 rounded-md w-4/6"></div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          <div className="h-6 w-16 bg-slate-200 dark:bg-navy-700/50 rounded-full"></div>
          <div className="h-6 w-20 bg-slate-200 dark:bg-navy-700/50 rounded-full"></div>
          <div className="h-6 w-14 bg-slate-200 dark:bg-navy-700/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
