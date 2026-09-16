import PROJECTS from "../data/Project"
import SectionLayout from "./SectionLayout";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <SectionLayout id="work" title="03. Selected Works">
      <div className="space-y-24">
        {PROJECTS.map((proj, i) => (
          <div key={i} className="group flex flex-col gap-6 border-t border-stone-200 pt-8 first:border-0 first:pt-0">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h3 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
                {proj.title}
              </h3>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">
                {proj.category}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-4">
              <div className="md:col-span-7 max-w-xl">
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Tech Stack:</span>
                  <span className="text-xs text-stone-900">{proj.tech}</span>
                </div>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 hover:opacity-70 transition-opacity"
                >
                  View Live Demo <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="md:col-span-5 border-l border-stone-200 pl-6 md:pl-8">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-6">
                  Architecture & Features
                </h4>
                <ul className="space-y-3">
                  {proj.features.map((feat, idx) => (
                    <li key={idx} className="text-sm text-stone-600 flex items-start gap-3">
                       <span className="w-1 h-1 rounded-full bg-stone-300 mt-2 shrink-0"></span>
                       <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
export default Projects