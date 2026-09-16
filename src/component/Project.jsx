import PROJECTS from "../data/Project";
import SectionLayout from "./SectionLayout";
import { ArrowRight } from "lucide-react"; // Swapped to a straight arrow for a sleek look

const Projects = () => {
  return (
    <SectionLayout id="work" title="03. Selected Works">
      <div className="flex flex-col gap-28 md:gap-40">
        {PROJECTS.map((proj, i) => (
          <div 
            key={i} 
            className="group flex flex-col lg:flex-row gap-10 lg:gap-20"
          >
            {/* Left Column: Sticky-style Header & Link */}
            <div className="lg:w-1/3 flex flex-col items-start">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                {proj.category}
              </span>
              
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
                {proj.title}
              </h3>
              
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold text-gray-900 group/btn"
              >
                <span className="border-b-2 border-gray-900 pb-1 group-hover/btn:border-blue-600 group-hover/btn:text-blue-600 transition-colors">
                  View Live Project
                </span>
                <ArrowRight 
                  size={18} 
                  className="text-gray-900 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1.5 transition-all"
                />
              </a>
            </div>

            {/* Right Column: Content, Tech, and Feature Grid */}
            <div className="lg:w-2/3 flex flex-col">
              <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium">
                {proj.desc}
              </p>

              {/* Tech Stack Box */}
              <div className="mb-12">
                <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                  Technology Stack
                </h4>
                <div className="inline-block px-5 py-3 bg-gray-50 border border-gray-100 rounded-lg shadow-sm">
                  <span className="text-gray-800 font-semibold tracking-wide">
                    {proj.tech}
                  </span>
                </div>
              </div>

              {/* Features split into a 2-column Grid */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {proj.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      {/* Colored dot for bullets */}
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm" />
                      <span className="text-gray-700 text-base font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;