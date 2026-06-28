const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Terminal size={20} className="text-cyan-500" />
        <span className="font-mono font-bold text-white tracking-widest">AV_SYSTEMS</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-mono text-gray-400">
        <a href="#about" className="hover:text-cyan-400 transition-colors">[ ABOUT ]</a>
        <a href="#experience" className="hover:text-cyan-400 transition-colors">[ EXPERIENCE ]</a>
        <a href="#work" className="hover:text-cyan-400 transition-colors">[ WORK ]</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">[ CONTACT ]</a>
      </div>
    </div>
  </nav>
);
export default Navbar