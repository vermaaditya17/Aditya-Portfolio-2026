import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Code, MapPin } from 'lucide-react';
import PERSONAL_INFO from '../data/PERSONAL_INFO';
import SKILLS_CATEGORIES from '../data/SKILL_CATEGORIES';
import SectionLayout from './SectionLayout';

const About = () => {
  // --- ANIMATION VARIANTS ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Helper to assign a specific icon to your skill categories
  const getCategoryIcon = (title) => {
    switch(title.toLowerCase()) {
      case 'frontend': return <Layers size={14} className="text-sky-500" />;
      case 'backend': return <Database size={14} className="text-sky-500" />;
      case 'core': return <Code size={14} className="text-sky-500" />;
      default: return <Code size={14} className="text-sky-500" />;
    }
  };

  return (
    <SectionLayout id="about" title="01. Background">
      <div className="max-w-5xl">
        
        {/* --- 1. OFFSET GRID: TEXT & COLORED METADATA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 mb-24 relative">
          
          {/* Main Typography */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 z-10 pt-4"
          >
            <motion.h3 
              variants={fadeUp} 
              className="text-3xl md:text-5xl text-stone-900 font-medium leading-[1.15] tracking-tight mb-8 max-w-2xl"
            >
              Deconstructing complex problems into <span className="text-sky-600 italic font-light">elegant</span>, high-performance solutions.
            </motion.h3>
            <motion.p 
              variants={fadeUp}
              className="text-lg md:text-xl text-stone-500 font-light max-w-xl leading-relaxed"
            >
              I bridge the gap between computational logic and intuitive interfaces. As a Full Stack Architect, my focus is engineering web ecosystems that are as scalable in the backend as they are precise in the frontend.
            </motion.p>
          </motion.div>

          {/* Light Colored Metadata Box (Overlaps slightly on desktop for an editorial feel) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:absolute lg:right-0 lg:top-12 lg:w-[320px] bg-sky-50 border border-sky-100 p-8 flex flex-col gap-8 shadow-[0_8px_30px_rgba(14,165,233,0.04)]"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={12} className="text-sky-600" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-600/80">
                  Current Base
                </span>
              </div>
              <p className="text-sm font-medium text-stone-900 tracking-wide uppercase">
                {PERSONAL_INFO.location}
              </p>
            </div>
            
            <div className="w-full h-[1px] bg-sky-200/50"></div>
            
            <div>
              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-sky-600/80 mb-3">
                Education
              </span>
              <p className="text-sm font-medium text-stone-900">
                IPS Academy
              </p>
              <p className="text-xs text-stone-500 mt-1">Batch of 2026</p>
            </div>
          </motion.div>
        </div>

        {/* --- 2. THE TECHNICAL PILLARS (Skills) --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-between mb-8">
            <h4 className="text-[10px] font-bold text-stone-900 uppercase tracking-[0.2em]">
              Technical Architecture
            </h4>
            {/* Minimal visual ruler line */}
            <div className="hidden md:flex items-center gap-1 opacity-40">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`w-[1px] bg-stone-400 ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}></div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="group relative flex flex-col bg-white border border-stone-200 p-8 transition-all duration-500 hover:border-sky-200 hover:shadow-[0_8px_30px_rgba(14,165,233,0.06)]"
              >
                {/* Soft background color fill on hover */}
                <div className="absolute inset-0 bg-sky-50/0 group-hover:bg-sky-50/50 transition-colors duration-500 pointer-events-none"></div>
                
                {/* Header */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-stone-900">
                    {cat.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-50 group-hover:bg-white flex items-center justify-center border border-stone-100 group-hover:border-sky-100 transition-colors duration-300">
                    {getCategoryIcon(cat.title)}
                  </div>
                </div>
                
                {/* Skills List */}
                <ul className="relative z-10 flex flex-col gap-3">
                  {cat.skills.map((skill, idx) => (
                    <li 
                      key={idx} 
                      className="text-sm font-light text-stone-600 flex items-center gap-3 group/item"
                    >
                      <span className="w-3 h-[1px] bg-stone-200 group-hover/item:bg-sky-400 group-hover/item:w-5 transition-all duration-300"></span>
                      <span className="group-hover/item:text-stone-900 transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionLayout>
  );
};

export default About;