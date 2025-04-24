import { Camera, Calendar, Settings, BarChart3, HeadphonesIcon } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Camera className="h-10 w-10 text-purple-600" />,
      title: "Profile Photo & Branding",
      description:
        "Professional photoshoots and brand identity development to make your profile stand out from the competition.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-purple-600" />,
      title: "Content Planning & Coaching",
      description:
        "Strategic content calendars and personalized coaching to help you create engaging content that converts.",
    },
    {
      icon: <Settings className="h-10 w-10 text-purple-600" />,
      title: "Technical Onboarding & Optimization",
      description: "Complete platform setup and profile optimization to maximize visibility and earnings potential.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-purple-600" />,
      title: "Marketing & Growth",
      description:
        "Targeted social ads, collaboration opportunities, and funnel building to grow your subscriber base.",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-purple-600" />,
      title: "24/7 Support & Financial Reports",
      description:
        "Round-the-clock support and detailed financial reporting to help you track and maximize your earnings.",
    },
  ]

  return (
    <section id="services" className="section-padding bg-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Comprehensive solutions to help you launch, manage, and grow your premium content business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
