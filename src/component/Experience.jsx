import React from 'react';
import { motion } from 'framer-motion';
import EXPERIENCE from '../data/Experience';
import SectionLayout from './SectionLayout';

const Experience = () => {
  // --- HIGH-VISIBILITY ANIMATION VARIANTS ---
  
  // Staggers the entire experience list
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 }
    }
  };

  // The main experience block slides in aggressively
  const blockSlide = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring", bounce: 0.2 } 
    }
  };

  // Staggers the bullet points INSIDE the card
  const bulletContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const bulletDrop = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <SectionLayout id="experience" title="02. Experience">
      <div className="max-w-5xl relative">
        
        {/* --- ANIMATED DRAWING TIMELINE --- */}
        {/* Static faint background line */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-0 w-[2px] bg-stone-100"></div>
        {/* Animated brown line that draws itself down as you scroll */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[7px] md:left-[11px] top-2 w-[2px] bg-amber-800/40 z-0"
        ></motion.div>

        <motion.div 
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24 md:space-y-32"
        >
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i} 
              variants={blockSlide} 
              className="relative pl-8 md:pl-20 group"
            >
              
              {/* --- HIGH-VISIBILITY TIMELINE NODE --- */}
              <div className="absolute left-[-1px] md:left-[3px] top-1.5 z-10">
                {/* Sonar pulse ring */}
                <span className="absolute -inset-2 rounded-full border border-amber-800/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Solid Dot */}
                <div className="relative w-4 h-4 rounded-full bg-stone-200 border-2 border-white group-hover:border-amber-200 group-hover:bg-amber-800 transition-all duration-300 shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"></div>
                </div>
              </div>

              {/* --- CONTENT GRID --- */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* LEFT COLUMN: Metadata & Company */}
                <div className="lg:col-span-4 flex flex-col pt-1">
                  <motion.span 
                    whileHover={{ x: 5 }}
                    className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-amber-800/80 mb-3 group-hover:text-amber-900 transition-colors duration-300 cursor-default"
                  >
                    {exp.period}
                  </motion.span>
                  <h4 className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">
                    {exp.company}
                  </h4>
                  
                  {/* Highly visible animated accent line */}
                  <div className="w-12 h-[2px] bg-stone-200 mt-6 group-hover:w-full group-hover:bg-amber-800 transition-all duration-700 ease-in-out"></div>
                </div>

                {/* RIGHT COLUMN: Role & Description */}
                <div className="lg:col-span-8">
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-6 group-hover:text-amber-900 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  
                  <p className="text-lg text-stone-700 leading-relaxed mb-8 font-light max-w-2xl">
                    {exp.desc}
                  </p>

                  {/* --- SPRING-LOADED ENGINEERED BOX --- */}
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white border-2 border-stone-100 group-hover:border-amber-900/20 group-hover:bg-amber-50/40 group-hover:shadow-[0_15px_40px_-15px_rgba(120,53,15,0.1)] transition-all duration-300 p-6 md:p-8 rounded-sm relative overflow-hidden"
                  >
                    {/* Animated corner accent in the box */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-amber-800/5 translate-x-4 -translate-y-4 rotate-45 group-hover:scale-[3] transition-transform duration-700"></div>

                    <motion.ul 
                      variants={bulletContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-5 relative z-10"
                    >
                      {exp.points.map((pt, idx) => (
                        <motion.li 
                          key={idx} 
                          variants={bulletDrop}
                          className="flex items-start gap-4 text-stone-700 text-base leading-relaxed font-light"
                        >
                          <span className="text-[10px] font-bold font-mono mt-1.5 text-stone-400 group-hover:text-amber-700 transition-colors duration-300">
                            0{idx + 1}
                          </span>
                          <span className="group-hover:text-stone-900 transition-colors duration-300">
                            {pt}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </SectionLayout>
  );
};

export default Experience;