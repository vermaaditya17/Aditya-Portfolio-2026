import { useState } from "react";
import PERSONAL_INFO from "../data/PERSONAL_INFO.js";
import SectionLayout from "./SectionLayout";
import { ArrowRight, Mail } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("Send Message");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message Sent");
      setTimeout(() => setStatus("Send Message"), 3000);
    }, 1000);
  };

  return (
    <SectionLayout id="contact" title="04. Contact" className="border-b-0">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Context & Direct Contact */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Let's start a conversation.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Have a project in mind, a question, or just want to connect? Fill out the form or reach out to me directly via email.
          </p>
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group inline-flex items-center gap-4 text-sm font-bold text-gray-900"
          >
            <Mail size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
            <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-colors pb-0.5">
              {PERSONAL_INFO.email}
            </span>
          </a>
        </div>

        {/* Right Column: Simple & Minimal Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-200 py-2 text-gray-900 text-lg focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-gray-200 py-2 text-gray-900 text-lg focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-gray-200 py-2 text-gray-900 text-lg resize-none focus:border-blue-600 focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-gray-900 text-white px-8 py-4 hover:bg-blue-600 transition-colors duration-300"
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  {status}
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
          </form>
        </div>
        
      </div>
    </SectionLayout>
  );
};

export default Contact;