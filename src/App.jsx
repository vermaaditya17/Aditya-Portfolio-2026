import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  ArrowUpRight, Github, Linkedin, Mail, Code2, Cpu, Globe, Database, Send, 
  Terminal, MapPin, Download, Monitor, Layers, Zap, Server, Layout, 
  ShieldCheck, GitBranch, Coffee, Briefcase, Braces, FileCode, Command, 
  Hash, HardDrive, Share2
} from 'lucide-react';
import EXPERIENCE from './data/Experience';
import PROJECTS  from './data/Project';
import emailjs from "@emailjs/browser"

// --- 1. DATA CONFIGURATION ---

const PERSONAL_INFO = {
  name: "ADITYA VERMA",
  role: "FULL STACK ARCHITECT",
  email: "vermaadityaav3@gmail.com",
  location: "INDORE, INDIA",
  status: "ONLINE // AVAILABLE"
};

const SKILLS_CATEGORIES = [
  {
    title: "FRONTEND ENGINEERING",
    icon: <Layout className="text-cyan-400" />,
    skills: ["React.js", "Next.js 14", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Bootstrap 5"]
  },
  {
    title: "BACKEND ARCHITECTURE",
    icon: <Server className="text-cyan-400" />,
    skills: ["Node.js Runtime", "Express.js", "MongoDB (NoSQL)", "REST API Design", "JWT Auth", "Mongoose"]
  },
  {
    title: "COMPUTATIONAL LOGIC",
    icon: <Cpu className="text-cyan-400" />,
    skills: ["Data Structures", "Algorithms (DSA)", "JavaScript (ES6+)", "System Design", "Optimization"]
  }
];



// --- 2. UTILITY COMPONENTS ---

const DecoderText = ({ text, className }) => {
  const [display, setDisplay] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

const GridBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  return (
    <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
    </div>
  );
};

const SectionTitle = ({ number, title }) => (
  <motion.div 
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="flex items-baseline gap-4 mb-16 border-b border-cyan-900/30 pb-4"
  >
    <span className="text-cyan-500 font-mono text-xl">0{number}.</span>
    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">{title}</h2>
  </motion.div>
);

const Card = ({ children, className="" }) => (
  <div className={`bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 relative group ${className}`}>
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    {children}
  </div>
);

// --- 3. MAIN SECTIONS ---

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

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <SectionTitle number="1" title="System Identity" />
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
          <p>
            <strong className="text-white">ID:</strong> Aditya Verma<br/>
            <strong className="text-white">Base:</strong> {PERSONAL_INFO.location}<br/>
            <strong className="text-white">Education:</strong> IPS Academy (2026 Batch)
          </p>
          <p>
            I am a <span className="text-cyan-400">Full Stack Architect</span> engineered to build robust web ecosystems. My core runs on the <strong className="text-white">MERN Stack</strong>, optimized for scalability and speed.
          </p>
          <p>
            Currently upgrading my neural network with <strong className="text-white">Next.js 14</strong> and <strong className="text-white">Advanced DSA</strong>. My mission is to deconstruct complex problems and reassemble them into elegant digital solutions.
          </p>
        </div>

        <div className="grid gap-4">
          {SKILLS_CATEGORIES.map((cat, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-cyan-500/10 rounded">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white tracking-wider">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs font-mono bg-white/5 border border-white/10 px-2 py-1 text-gray-400">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative z-10 max-w-5xl mx-auto">
      <SectionTitle number="2" title="Execution Logs" />
      
      <div className="space-y-12">
        {EXPERIENCE.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col md:flex-row gap-8 border-l border-cyan-900/50 pl-8 md:pl-12 relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
            
            <div className="md:w-1/4">
              <div className="font-mono text-cyan-500 text-sm mb-1">{exp.period}</div>
              <div className="text-xs text-gray-500 font-mono">{exp.id}</div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                <Briefcase size={14} /> {exp.company}
              </div>
              <p className="text-gray-400 mb-4 italic">{exp.desc}</p>
              <ul className="space-y-2">
                {exp.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 font-mono">
                    <span className="text-cyan-500 mt-1">›</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <SectionTitle number="3" title="Deployed Units" />
      
      <div className="grid gap-16">
        {PROJECTS.map((proj, i) => (
          <Card key={i} className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-white/10 pb-8">
              <div>
                <div className="font-mono text-cyan-500 text-xs mb-2">{proj.id} // {proj.category}</div>
                <h3 className="text-4xl font-black text-white mb-4">{proj.title}</h3>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 w-fit">
                  <Code2 size={12} /> {proj.tech}
                </div>
              </div>
              <div className="md:text-right max-w-md">
                <p className="text-gray-300 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Hash size={14} className="text-cyan-500"/> Core Features
                </h4>
                <ul className="space-y-2">
                  {proj.features.map((feat, idx) => (
                    <li key={idx} className="text-sm text-gray-500 font-mono border-l border-white/10 pl-4">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-end justify-start md:justify-end">
              <a 
  href={proj.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-3 bg-white text-black font-bold px-6 py-3 hover:bg-cyan-400 transition-colors uppercase text-sm tracking-widest w-fit"
>
  Initialize Demo <ArrowUpRight size={16} />
</a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <SectionTitle number="4" title="System Capabilities" />
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "FULL STACK DEV", icon: <Layers size={32} />, desc: "End-to-end MERN application development from schema to UI." },
          { title: "API ARCHITECTURE", icon: <Share2 size={32} />, desc: "RESTful API design with secure authentication and rate limiting." },
          { title: "PERFORMANCE OPS", icon: <Zap size={32} />, desc: "Frontend optimization, caching strategies, and load balancing." },
        ].map((s, i) => (
          <Card key={i} className="p-8 hover:bg-cyan-900/10">
            <div className="text-cyan-500 mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState("TRANSMIT DATA");

  const handleSubmit = (e) => {
  e.preventDefault();

  setStatus("SENDING...");

  emailjs
    .sendForm(
      "service_uqp4c1q",
      "template_0pz7q17",
      form.current,
      "Hdp_cuZupf1gMVCKP"
    )
    .then(() => {
      alert(
        "🚀 TRANSMISSION SUCCESSFUL!\n\nThank you for contacting me.\nI'll get back to you shortly."
      );

      setStatus("TRANSMISSION COMPLETE");

      form.current.reset();

      setTimeout(() => {
        setStatus("TRANSMIT DATA");
      }, 3000);
    })
    .catch((error) => {
      console.error(error);

      alert("❌ Transmission Failed. Please try again.");

      setStatus("TRANSMIT DATA");
    });
};

  return (
   <section id="contact" className="py-32 px-6 relative z-10 max-w-4xl mx-auto">
  <Card className="p-12 border-t-4 border-t-cyan-500">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-cyan-500 text-black">
        <Mail size={24} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">
          ESTABLISH UPLINK
        </h2>
        <p className="text-gray-500 text-sm font-mono">
          SECURE CHANNEL TO {PERSONAL_INFO.email}
        </p>
      </div>
    </div>

    <form
      ref={form}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">

        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-500 uppercase">
            INPUT: IDENTITY
          </label>

          <input
            type="text"
            name="name"
            placeholder="ENTER NAME"
            required
            className="w-full bg-black border border-white/10 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-mono"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-cyan-500 uppercase">
            INPUT: FREQUENCY
          </label>

          <input
            type="email"
            name="email"
            placeholder="ENTER EMAIL"
            required
            className="w-full bg-black border border-white/10 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-mono"
          />
        </div>

      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-cyan-500 uppercase">
          INPUT: DATA PACKET
        </label>

        <textarea
          rows="6"
          name="message"
          placeholder="TYPE MESSAGE..."
          required
          className="w-full bg-black border border-white/10 p-4 text-white focus:border-cyan-500 outline-none transition-colors font-mono resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-4 uppercase tracking-widest transition-all flex items-center justify-center gap-3"
      >
        {status}
        <Send size={16} />
      </button>
    </form>
  </Card>
</section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-[#020202] text-center relative z-10">
    <div className="flex justify-center gap-8 mb-8 text-gray-500">
      <Github className="hover:text-cyan-400 cursor-pointer transition-colors" />
      <Linkedin className="hover:text-cyan-400 cursor-pointer transition-colors" />
      <Monitor className="hover:text-cyan-400 cursor-pointer transition-colors" />
    </div>
    <div className="text-gray-600 text-xs font-mono">
      <p>SYSTEM STATUS: ONLINE // OPERATOR: ADITYA VERMA</p>
      <p className="mt-2">© 2026. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

// --- MAIN APP ---

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <GridBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
