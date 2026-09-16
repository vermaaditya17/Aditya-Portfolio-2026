import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 pointer-events-none">
      
      {/* Left Corner: Brand Name */}
      <div className="pointer-events-auto z-10">
        <a 
          href="#" 
          className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:opacity-60 transition-opacity"
        >
          Aditya Verma
        </a>
      </div>

      {/* Center: Glassy Liquid Navigation Pill */}
      <div className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 items-center p-1.5 bg-stone-100/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <nav className="flex items-center gap-1 pl-1 pr-1">
          {['About', 'Experience', 'Work', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-semibold uppercase tracking-widest text-stone-500 hover:text-stone-900 px-5 py-2.5 rounded-full hover:bg-white/70 hover:shadow-sm transition-all duration-300 ease-out"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Corner (Mobile Only): Menu Trigger */}
      <div className="md:hidden pointer-events-auto z-10">
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900 hover:opacity-60 transition-opacity">
          Menu
        </button>
      </div>

    </header>
  );
};

export default Navbar;