const services = [
  {
    title: "Audit",
    description:
      "Understand how work really happens. We map workflows, data, and decisions before writing a single line of code.",
  },
  {
    title: "Build",
    description:
      "Design and implement fit-for-purpose AI systems. No generic templates—only what your operation actually needs.",
  },
  {
    title: "Integrate",
    description:
      "Ensure AI is used, trusted, and sustained. Technology without adoption is just a cost center.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">One outcome: AI your team actually uses.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:bg-slate-800/80 transition-colors"
            >
              <div className="text-cyan-400 text-lg font-bold mb-4">0{index + 1}</div>
              <h3 className="heading-3 text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
