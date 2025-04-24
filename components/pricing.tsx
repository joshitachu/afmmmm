import { Check } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for creators just starting their journey",
      features: [
        "Profile setup & optimization",
        "Basic photoshoot (10 photos)",
        "Content calendar (1 month)",
        "Weekly check-ins",
        "Basic analytics",
      ],
      highlighted: false,
      cta: "Learn More",
    },
    {
      name: "Growth",
      description: "For creators ready to scale their business",
      features: [
        "Everything in Starter",
        "Advanced photoshoot (25 photos)",
        "Content calendar (3 months)",
        "Twice-weekly coaching calls",
        "Social media promotion",
        "Cross-platform strategy",
        "Detailed analytics & reports",
      ],
      highlighted: true,
      cta: "Most Popular",
    },
    {
      name: "Pro",
      description: "Comprehensive management for established creators",
      features: [
        "Everything in Growth",
        "Quarterly professional photoshoots",
        "Full content management",
        "Daily support & coaching",
        "Custom marketing campaigns",
        "Collaboration opportunities",
        "Advanced analytics & strategy",
        "Tax & financial planning",
      ],
      highlighted: false,
      cta: "Contact Us",
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Partnership Plans</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose the perfect partnership model to support your content creation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted ? "border-2 border-purple-500 shadow-xl relative" : "border border-gray-200 shadow-md"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-purple-600 text-white text-center py-2 font-medium">Most Popular</div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <p className="text-sm text-purple-600 font-medium">Customized partnership structure</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-purple-100 hover:bg-purple-200 text-purple-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
