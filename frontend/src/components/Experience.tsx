import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript,
  SiNodedotjs, SiExpress, SiSupabase, SiTailwindcss,
  SiPostgresql, SiGit, SiVite, SiMongodb, SiFigma, SiPython,
  SiGithub, SiNpm, SiMongoose, SiReactrouter,
  SiShadcnui, SiClaude, SiOpenai
} from 'react-icons/si';
import { FaJava, FaVideo } from 'react-icons/fa';
import { DiPhotoshop } from 'react-icons/di';
import { TbBrandVscode } from 'react-icons/tb';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  Icon: IconType | React.FC<React.ComponentProps<'svg'>>;
  iconColor: string;
  glowColor: string;
  bgHover: string;
}

const CursorIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 20 22" width="1em" height="1em" fill="none" {...props}>
    <path fill="currentColor" d="M19.162 5.452 10.698.565a.88.88 0 0 0-.879 0L1.356 5.452a.74.74 0 0 0-.37.64v9.853a.74.74 0 0 0 .37.64l8.464 4.887a.879.879 0 0 0 .879 0l8.464-4.886a.74.74 0 0 0 .37-.64V6.091a.74.74 0 0 0-.37-.64Zm-.531 1.035L10.46 20.639c-.055.095-.201.056-.201-.055v-9.266a.52.52 0 0 0-.26-.45L1.975 6.237c-.096-.056-.057-.202.054-.202h16.34c.233 0 .378.252.262.453Z" />
  </svg>
);

const AntiGravityIcon = ({ className }: React.ComponentProps<'svg'>) => (
  <img
    src="/antigravity-color.svg"
    alt="Anti Gravity"
    className={className}
    style={{ width: '1em', height: '1em', objectFit: 'contain' }}
  />
);

const gridSkills: Skill[] = [
  { name: 'HTML', Icon: SiHtml5, iconColor: 'text-orange-400', glowColor: 'rgba(249,115,22,0.5)', bgHover: '' },
  { name: 'CSS', Icon: SiCss, iconColor: 'text-blue-400', glowColor: 'rgba(96,165,250,0.5)', bgHover: '' },
  { name: 'JavaScript', Icon: SiJavascript, iconColor: 'text-yellow-400', glowColor: 'rgba(250,204,21,0.5)', bgHover: '' },
  { name: 'React', Icon: SiReact, iconColor: 'text-cyan-400', glowColor: 'rgba(34,211,238,0.5)', bgHover: '' },
  { name: 'TypeScript', Icon: SiTypescript, iconColor: 'text-blue-500', glowColor: 'rgba(59,130,246,0.5)', bgHover: '' },
  { name: 'Node.js', Icon: SiNodedotjs, iconColor: 'text-green-400', glowColor: 'rgba(74,222,128,0.5)', bgHover: '' },
  { name: 'Express', Icon: SiExpress, iconColor: 'text-slate-300', glowColor: 'rgba(203,213,225,0.3)', bgHover: '' },
  { name: 'Supabase', Icon: SiSupabase, iconColor: 'text-emerald-400', glowColor: 'rgba(52,211,153,0.5)', bgHover: '' },
  { name: 'Tailwind', Icon: SiTailwindcss, iconColor: 'text-teal-400', glowColor: 'rgba(45,212,191,0.5)', bgHover: '' },
  { name: 'PostgreSQL', Icon: SiPostgresql, iconColor: 'text-indigo-400', glowColor: 'rgba(129,140,248,0.5)', bgHover: '' },
  { name: 'Git', Icon: SiGit, iconColor: 'text-red-400', glowColor: 'rgba(248,113,113,0.5)', bgHover: '' },
  { name: 'GitHub', Icon: SiGithub, iconColor: 'text-slate-100', glowColor: 'rgba(255,255,255,0.3)', bgHover: '' },
  { name: 'Vite', Icon: SiVite, iconColor: 'text-purple-400', glowColor: 'rgba(192,132,252,0.5)', bgHover: '' },
  { name: 'MongoDB', Icon: SiMongodb, iconColor: 'text-green-500', glowColor: 'rgba(34,197,94,0.5)', bgHover: '' },
  { name: 'Mongoose', Icon: SiMongoose, iconColor: 'text-red-600', glowColor: 'rgba(220,38,38,0.5)', bgHover: '' },
  { name: 'NPM', Icon: SiNpm, iconColor: 'text-red-500', glowColor: 'rgba(239,68,68,0.5)', bgHover: '' },
  { name: 'React Router', Icon: SiReactrouter, iconColor: 'text-red-400', glowColor: 'rgba(248,113,113,0.5)', bgHover: '' },
  { name: 'Figma', Icon: SiFigma, iconColor: 'text-pink-400', glowColor: 'rgba(244,114,182,0.5)', bgHover: '' },
  { name: 'Python', Icon: SiPython, iconColor: 'text-blue-500', glowColor: 'rgba(59,130,246,0.5)', bgHover: '' },
  { name: 'Java', Icon: FaJava, iconColor: 'text-orange-500', glowColor: 'rgba(249,115,22,0.5)', bgHover: '' },
  { name: 'Shadcn UI', Icon: SiShadcnui, iconColor: 'text-slate-900 dark:text-slate-100', glowColor: 'rgba(255,255,255,0.5)', bgHover: '' },
  { name: 'Photoshop', Icon: DiPhotoshop, iconColor: 'text-blue-500', glowColor: 'rgba(59,130,246,0.5)', bgHover: '' },
  { name: 'Premiere', Icon: FaVideo, iconColor: 'text-purple-500', glowColor: 'rgba(168,85,247,0.5)', bgHover: '' },
  { name: 'VS Code', Icon: TbBrandVscode, iconColor: 'text-blue-400', glowColor: 'rgba(96,165,250,0.5)', bgHover: '' },
  { name: 'Cursor', Icon: CursorIcon, iconColor: 'text-slate-800 dark:text-slate-200', glowColor: 'rgba(255,255,255,0.5)', bgHover: '' },
  { name: 'Anti Gravity', Icon: AntiGravityIcon, iconColor: 'text-violet-500', glowColor: 'rgba(139,92,246,0.5)', bgHover: '' },
  { name: 'Claude', Icon: SiClaude, iconColor: 'text-orange-400', glowColor: 'rgba(251,146,60,0.5)', bgHover: '' },
  { name: 'ChatGPT', Icon: SiOpenai, iconColor: 'text-emerald-500', glowColor: 'rgba(16,185,129,0.5)', bgHover: '' },
];

const Experience = () => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 bg-slate-100 dark:bg-[#0d1424] transition-colors duration-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 items-center md:items-start w-full">

          {/* Top: Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">Experience</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
              My Journey
            </h2>

            <div className="relative border-l-2 border-slate-300 dark:border-slate-700/50 pl-6 ml-3">
              <div className="absolute w-3 h-3 bg-teal-500 dark:bg-teal-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
              <div className="mb-2 text-sm text-teal-600 dark:text-teal-400 font-semibold tracking-wide">Feb 2026 — May 2026</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">IT Support Intern</h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-3 text-sm sm:text-base">LIPAD Corporation (Clark International Airport)</p>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Provided comprehensive technical support including hardware and software installation, driver configuration, and basic troubleshooting to maintain seamless airport operations.
              </p>
            </div>
          </motion.div>

          {/* Bottom: Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col w-full"
          >
            <p className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">Technologies</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
              Tools I Use
            </h2>

            <div className="relative flex flex-wrap gap-2 sm:gap-3 md:gap-4 w-full justify-center">

              {/* Ghost watermark icon — centered behind all cards on hover */}
              {hoveredSkill && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <hoveredSkill.Icon
                    className={`text-[30rem] opacity-10 transition-all duration-500 ${hoveredSkill.iconColor}`}
                    style={{ filter: `drop-shadow(0 0 60px ${hoveredSkill.glowColor})` }}
                  />
                </div>
              )}

              {gridSkills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ ['--glow' as string]: skill.glowColor } as React.CSSProperties}
                  className="relative z-10 group flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl cursor-default
                    bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10
                    shadow-sm dark:shadow-none
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:border-slate-300 dark:hover:border-white/25 hover:bg-slate-50 dark:hover:bg-white/10
                    hover:[box-shadow:0_0_22px_4px_var(--glow)]"
                >
                  <skill.Icon className={`text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 ${skill.iconColor}`} />
                  <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-xs font-medium text-center leading-tight transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
