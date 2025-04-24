import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            AFM Management is dedicated to empowering female creators in the premium content industry with professional
            support, guidance, and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="mb-4 text-purple-600">Our Mission</h3>
            <p className="mb-6 text-gray-700">
              We believe every creator deserves professional support to build a sustainable business. Our mission is to
              provide the tools, knowledge, and support network needed to thrive in the competitive content creation
              landscape.
            </p>

            <h3 className="mb-4 text-purple-600">Our Approach</h3>
            <p className="text-gray-700">
              We take a holistic approach to content management, focusing on brand development, content strategy, and
              business growth. Our team of experts works closely with you to create a personalized plan that aligns with
              your unique goals and vision.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/team-image.jpg"
              alt="AFM Management Team"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-600 p-6 rounded-lg shadow-lg">
              <p className="text-white font-bold text-xl">10+ Years</p>
              <p className="text-white text-sm">Industry Experience</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-600 mb-2">500+</p>
            <p className="text-gray-700">Creators Supported</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-600 mb-2">$10M+</p>
            <p className="text-gray-700">Revenue Generated</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-600 mb-2">15+</p>
            <p className="text-gray-700">Platform Experts</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <p className="text-3xl font-bold text-purple-600 mb-2">24/7</p>
            <p className="text-gray-700">Creator Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
