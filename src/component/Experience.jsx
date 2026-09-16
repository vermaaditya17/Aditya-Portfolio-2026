import EXPERIENCE from "../data/Experience"
import SectionLayout from "./SectionLayout";

const Experience = () => {
  return (
    <SectionLayout id="experience" title="02. Experience">
      <div className="space-y-16">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-xs font-medium text-stone-500 uppercase tracking-widest pt-1.5">
                {exp.period}
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-medium text-stone-900 tracking-tight">
                  {exp.role}
                </h3>
                <span className="block text-stone-500 mt-1">{exp.company}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="hidden lg:block"></div>
              <div className="lg:col-span-3 max-w-2xl">
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {exp.desc}
                </p>
                <ul className="space-y-3">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                      <span className="text-stone-300 mt-0.5">—</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
export default Experience