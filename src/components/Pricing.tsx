export default function Pricing() {
  const tiers = [
    {
      name: "Community",
      price: "0",
      description: "Fair-code and free for personal use.",
      features: ["Unlimited Workflows", "200+ Integrations", "Self-hosted", "Community Support", "API Access"],
      buttonText: "Download Now",
      highlight: false,
    },
    {
      name: "Desktop",
      price: "49",
      description: "Power automation on your local machine.",
      features: ["All Community Features", "No-code UI", "Local File Access", "Desktop Notifications", "Premium Nodes"],
      buttonText: "Start Desktop Trial",
      highlight: true,
    },
    {
      name: "Cloud",
      price: "120",
      description: "Scale your automation in the cloud.",
      features: ["Managed Infrastructure", "24/7 Availability", "Priority Support", "High Concurrency", "White-glove Service"],
      buttonText: "Go Cloud",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Simple Pricing</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-brand-black dark:text-white mb-8">Pay for what you use</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative p-10 rounded-[40px] border-2 ${
                tier.highlight
                  ? "border-primary shadow-2xl shadow-primary/5"
                  : "border-zinc-100 dark:border-zinc-800"
              } flex flex-col h-full bg-white dark:bg-zinc-900 transition-all hover:translate-y-[-8px]`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Recommended
                </div>
              )}
              <div className="mb-10">
                <h4 className="text-2xl font-black text-brand-black dark:text-white mb-3">{tier.name}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-[15px] font-medium leading-relaxed mb-8">{tier.description}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black text-brand-black dark:text-white tracking-tight">${tier.price}</span>
                  <span className="text-zinc-400 font-bold">/mo</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-4 text-zinc-700 dark:text-zinc-300 text-[15px] font-medium">
                    <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center dark:bg-zinc-800">
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
                    : "bg-brand-black text-white hover:bg-zinc-800 dark:bg-white dark:text-brand-black"
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
