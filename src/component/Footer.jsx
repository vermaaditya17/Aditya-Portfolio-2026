import  PERSONAL_INFO  from "../data/PERSONAL_INFO.js";
import { Github, Linkedin } from "lucide-react"; 
const Footer = () => (
  <footer className="px-6 md:px-12 py-8 bg-stone-900 text-stone-400 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-[10px] uppercase tracking-widest">
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
    </div>
    <div className="flex gap-8">
      <a href="#" className="hover:text-stone-50 transition-colors"><Github size={18} /></a>
      <a href="#" className="hover:text-stone-50 transition-colors"><Linkedin size={18} /></a>
    </div>
  </footer>
);
export default Footer