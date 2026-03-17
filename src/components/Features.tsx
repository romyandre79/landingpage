export default function Features({ dict }: { dict: any }) {
  const icons = [
    (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  ];

  return (
    <section id="features" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-6">{dict.features.tagline}</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-8">{dict.features.title}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {dict.features.items.map((feature: any, idx: number) => (
            <div 
              key={idx} 
              className="p-10 bg-zinc-900/50 backdrop-blur-sm rounded-[32px] border border-zinc-800/80 hover:border-primary/20 transition-all hover:shadow-[0_20px_50px_rgba(234,75,113,0.08)] group"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-[17px] font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
