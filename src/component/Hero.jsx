
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full border-l border-white/10 pl-8 md:pl-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-mono text-cyan-500 text-sm mb-4 tracking-widest"
        >
          // INITIALIZING PORTFOLIO PROTOCOL v2.0
        </motion.div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.9]">
          <DecoderText text="ADITYA" className="block" />
          <DecoderText text="VERMA" className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white" />
        </h1>

        <motion.p 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-12"
        >
          MERN STACK SPECIALIST & <br/>
          <span className="text-white font-bold">FULL STACK ENGINEER</span>
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mb-12">
          {["REACT.JS", "NODE.JS", "NEXT.JS", "MONGODB"].map((tech, i) => (
            <motion.div 
              key={tech}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="border border-white/20 text-center py-2 text-xs font-mono text-gray-300 hover:bg-white/5 hover:border-cyan-500 transition-colors"
            >
              {tech}
            </motion.div>
          ))}
        </div>

        <motion.a 
          href="#work"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-4 uppercase tracking-widest transition-all"
        >
          View Database <ArrowUpRight size={18} />
        </motion.a>
      </div>
    </section>
  );
};
export default Hero