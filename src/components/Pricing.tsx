export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small teams and startups.",
      features: ["Up to 5 Projects", "Basic AI Analysis", "Community Support", "10GB Storage", "Custom Domain"],
      buttonText: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Pro",
      price: "99",
      description: "For growing businesses needing more power.",
      features: ["Unlimited Projects", "Advanced AI Insights", "Priority Email Support", "100GB Storage", "API Access", "Custom Integrations"],
      buttonText: "Get Pro Now",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "299",
      description: "Full power for large scale operations.",
      features: ["All Pro Features", "Dedicated Account Manager", "24/7 Phone Support", "Unlimited Storage", "SSO & SAML", "Custom AI Models"],
      buttonText: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-tight text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">Choose the right plan for you</h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Simple, transparent pricing that scales with your business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-3xl border ${
                tier.highlight
                  ? "border-indigo-600 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-600"
                  : "border-zinc-200 dark:border-zinc-800"
              } flex flex-col h-full bg-white dark:bg-zinc-900 transition-all hover:scale-[1.02]`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{tier.name}</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">${tier.price}</span>
                  <span className="text-zinc-500 dark:text-zinc-500">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center space-x-3 text-zinc-700 dark:text-zinc-300 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
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
