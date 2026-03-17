export default function Features() {
  const features = [
    {
      title: "Self-host or Cloud",
      description: "Keep your data on-premises or scale instantly on our managed infrastructure.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Build Node-by-Node",
      description: "Visual workflow designer that makes complex logic simple to implement.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Extensible with Code",
      description: "Write custom JavaScript or Python scripts directly within your workflows.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-32 bg-grey-50 dark:bg-[#08090a]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-6">Unmatched Flexibility</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-brand-black dark:text-white mb-8">The open platform for AI-powered automation</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white rounded-[32px] border border-zinc-100 hover:border-primary/20 transition-all hover:shadow-[0_20px_50px_rgba(234,75,113,0.08)] group dark:bg-zinc-900 dark:border-zinc-800"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all dark:bg-zinc-800">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-brand-black mb-4 dark:text-white">{feature.title}</h4>
              <p className="text-zinc-600 leading-relaxed text-[17px] dark:text-zinc-400 font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
