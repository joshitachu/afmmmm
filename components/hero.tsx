import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom section-padding flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-purple-600">Be the Star</span> of Your Own Content
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg">
            We help you professionally launch, grow, and monetize your premium content. Expert guidance every step of
            the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary text-center">
              Start Free Consultation
            </Link>
            <Link href="#services" className="btn-secondary text-center">
              Our Services
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="/hero-image.jpg"
              alt="Content creator working with professional equipment"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-gray-900">Trusted by</p>
            <p className="text-2xl font-bold text-purple-600">500+ Creators</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  )
}
