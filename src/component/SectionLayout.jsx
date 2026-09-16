
const SectionLayout = ({ title, children, id, className = "" }) => (
  <section id={id} className={`pt-32 pb-24 px-6 md:px-12 border-b border-stone-200 ${className}`}>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4 lg:col-span-3 relative">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-900 md:sticky md:top-32">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8 lg:col-span-9">
        {children}
      </div>
    </div>
  </section>
);
export default SectionLayout