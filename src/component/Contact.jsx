import { useState } from "react";
import PERSONAL_INFO from "../data/PERSONAL_INFO.JS";
import SectionLayout from "./SectionLayout";
import { Mail } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("Submit Inquiry");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
        setStatus("Message Sent");
        setTimeout(() => setStatus("Submit Inquiry"), 3000);
    }, 1000);
  };

  return (
    <SectionLayout id="contact" title="04. Contact" className="border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight mb-6">
            Let's build something exceptional.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Whether you have a project in mind, a role to fill, or just want to discuss software architecture, feel free to reach out.
          </p>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-4 text-sm font-medium text-stone-900 group"
          >
            <Mail size={18} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
            <span className="relative">
              {PERSONAL_INFO.email}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-stone-200 group-hover:bg-stone-900 transition-colors"></span>
            </span>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 outline-none transition-colors text-lg"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 outline-none transition-colors text-lg"
            />
          </div>
          <div className="relative">
            <textarea
              rows="1"
              name="message"
              placeholder="Project details or message..."
              required
              className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 placeholder:text-stone-400 focus:border-stone-900 outline-none transition-colors text-lg resize-none min-h-[40px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="group flex items-center justify-between w-full bg-stone-900 text-stone-50 px-6 py-4 hover:bg-stone-800 transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">{status}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </SectionLayout>
  );
};
export default Contact