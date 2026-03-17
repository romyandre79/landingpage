export default function Pricing({ dict }: { dict: any }) {
  const tiers = [
    {
      id: "community",
      features: ["Unlimited Workflows", "200+ Integrations", "Self-hosted", "Community Support", "API Access"],
      price: "0",
      highlight: false,
    },
    {
      id: "desktop",
      features: ["All Community Features", "No-code UI", "Local File Access", "Desktop Notifications", "Premium Nodes"],
      price: "49",
      highlight: true,
    },
    {
      id: "cloud",
      features: ["Managed Infrastructure", "24/7 Availability", "Priority Support", "High Concurrency", "White-glove Service"],
      price: "120",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">{dict.pricing.tagline}</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-8">{dict.pricing.title}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => {
            const tierDict = (dict.pricing.tiers as any)[tier.id];
            return (
              <div
                key={idx}
                className={`relative p-10 rounded-[40px] border-2 ${
                  tier.highlight
                    ? "border-primary shadow-2xl shadow-primary/5 bg-zinc-900/80"
                    : "border-zinc-800/80 bg-zinc-900/50"
                } backdrop-blur-md flex flex-col h-full transition-all hover:translate-y-[-8px]`}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                    {dict.pricing.recommended}
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-white mb-3">{tierDict.name}</h3>
                  <p className="text-zinc-400 text-[15px] font-medium leading-relaxed mb-8">{tierDict.description}</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-5xl font-black text-white tracking-tight">${tier.price}</span>
                    <span className="text-zinc-500 font-bold">{dict.pricing.per_month}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center space-x-4 text-zinc-300 text-[15px] font-medium">
                      <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-2xl font-bold transition-all text-[15px] ${
                    tier.highlight
                      ? "bg-primary text-white hover:bg-[#d43d63] shadow-lg shadow-primary/10"
                      : "bg-white text-black hover:bg-zinc-100"
                  }`}
                >
                  {tierDict.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
