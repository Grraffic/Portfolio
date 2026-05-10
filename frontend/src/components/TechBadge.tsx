// Maps tech names to Tailwind colors for visual distinction
const techColors: Record<string, string> = {
  react: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30 hover:bg-cyan-200 dark:hover:bg-cyan-500/40',
  typescript: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30 hover:bg-blue-200 dark:hover:bg-blue-500/40',
  javascript: 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-500/30 hover:bg-yellow-200 dark:hover:bg-yellow-500/40',
  nodejs: 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/30 hover:bg-green-200 dark:hover:bg-green-500/40',
  'node.js': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/30 hover:bg-green-200 dark:hover:bg-green-500/40',
  express: 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-500/30 hover:bg-gray-200 dark:hover:bg-gray-500/40',
  supabase: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-200 dark:hover:bg-emerald-500/40',
  postgresql: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30 hover:bg-indigo-200 dark:hover:bg-indigo-500/40',
  tailwind: 'bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-500/30 hover:bg-teal-200 dark:hover:bg-teal-500/40',
  tailwindcss: 'bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-500/30 hover:bg-teal-200 dark:hover:bg-teal-500/40',
  vite: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30 hover:bg-purple-200 dark:hover:bg-purple-500/40',
  html: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/30 hover:bg-orange-200 dark:hover:bg-orange-500/40',
  css: 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-500/30 hover:bg-pink-200 dark:hover:bg-pink-500/40',
  python: 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-400/30 hover:bg-blue-200 dark:hover:bg-blue-400/40',
  mongodb: 'bg-green-100 dark:bg-green-600/20 text-green-700 dark:text-green-200 border-green-200 dark:border-green-600/30 hover:bg-green-200 dark:hover:bg-green-600/40',
  next: 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white border-slate-200 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/20',
  'next.js': 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white border-slate-200 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/20',
  git: 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-500/30 hover:bg-red-200 dark:hover:bg-red-500/40',
};

const getColor = (tech: string) => {
  const key = tech.toLowerCase().replace(/\s+/g, '');
  return techColors[key] || 'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/30 hover:bg-violet-200 dark:hover:bg-violet-500/40';
};

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getColor(tech)} transition-all duration-200 hover:scale-105 cursor-default`}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
