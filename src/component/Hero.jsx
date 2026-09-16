import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Activity } from 'lucide-react';

const Hero = () => {
  const PERSONAL_INFO = { location: "INDORE, INDIA" };

   return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-6 md:px-12 bg-stone-50 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* --- LEFT CONTENT: Engineering Focus --- */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8 md:mb-10"
          >
            <Terminal size={14} className="text-stone-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-tight text-stone-900 mb-8"
          >
            Building robust <br className="hidden md:block"/>
            <span className="italic font-light text-stone-400">architectures.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light mb-12">
              Specialized in the MERN stack and Next.js. I write clean, scalable code and design resilient backend systems that power high-performance digital products.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#work"
                className="group flex items-center justify-between w-full sm:w-auto bg-stone-900 text-stone-50 px-8 py-4 hover:bg-stone-800 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest">Deployments & Works</span>
                <ArrowRight size={16} className="ml-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="https://github.com/vermaaditya17" target="_blank" rel="noreferrer" className="text-[11px] font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT: The API / Data Abstraction --- */}
        <div className="lg:col-span-5 relative w-full flex flex-col gap-4 mt-12 lg:mt-0">
          
          {/* Main IDE / Terminal Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white border border-stone-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-stone-100 bg-stone-50/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-300"></span>
                <span className="w-2 h-2 rounded-full bg-stone-200"></span>
                <span className="w-2 h-2 rounded-full bg-stone-200"></span>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400 flex items-center gap-2">
                <Database size={10} /> GET /api/v1/profile
              </span>
            </div>
            
            {/* Code Body */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm text-stone-600 leading-relaxed overflow-x-auto">
              <span className="text-stone-400">1</span> <span className="text-stone-900">{`{`}</span><br/>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="pl-4"
              >
                <span className="text-stone-400">2</span> <span className="text-stone-500">"status"</span>: <span className="text-emerald-600">200</span>,<br/>
                <span className="text-stone-400">3</span> <span className="text-stone-500">"data"</span>: {`{`}<br/>
                <span className="text-stone-400">4</span> &nbsp;&nbsp;<span className="text-stone-500">"engineer"</span>: <span className="text-stone-900">"Aditya Verma"</span>,<br/>
                <span className="text-stone-400">5</span> &nbsp;&nbsp;<span className="text-stone-500">"role"</span>: <span className="text-stone-900">"Full-Stack Architect"</span>,<br/>
                <span className="text-stone-400">6</span> &nbsp;&nbsp;<span className="text-stone-500">"stack"</span>: [<span className="text-stone-900">"React.js"</span>, <span className="text-stone-900">"Node.js"</span>, <span className="text-stone-900">"MongoDB"</span>,  <span className="text-stone-900">"SQL"</span>, <span className="text-stone-900">"Express.js"</span>,
                <span className="text-stone-900">"React-Native"</span>],<br/>
                <span className="text-stone-400">7</span> &nbsp;&nbsp;<span className="text-stone-500">"location"</span>: <span className="text-stone-900">"{PERSONAL_INFO.location}"</span><br/>
                <span className="text-stone-400">8</span> {`}`}<br/>
              </motion.div>
              <span className="text-stone-400">9</span> <span className="text-stone-900">{`}`}</span>
            </div>
          </motion.div>

          {/* System Metrics Mini-Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-stone-200 p-4 flex flex-col gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex justify-between items-center text-stone-400">
                <Activity size={14} />
                <span className="text-[9px] uppercase tracking-widest font-mono">System</span>
              </div>
              <span className="text-sm font-medium text-stone-900 font-mono">All Systems Operational</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-stone-900 text-stone-50 p-4 flex flex-col gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex justify-between items-center text-stone-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono text-stone-400">Status</span>
              </div>
              <span className="text-sm font-medium font-mono">Available for Roles</span>
            </motion.div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;