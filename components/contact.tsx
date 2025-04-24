"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", date: "", message: "" })
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Start Your Journey Today</h2>
            <p className="mb-8 text-gray-700">
              Ready to take your content creation to the next level? Schedule a free consultation with our team to
              discuss your goals and how we can help you achieve them.
            </p>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
              <Image src="/og-image.jpg" alt="Content creator consultation" fill className="object-cover" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">Available for consultations</p>
              </div>
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium text-sm"
              >
                View our full calendar →
              </Link>
            </div>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl shadow-md">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  We've received your request and will contact you shortly to schedule your free consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-purple-600 font-medium hover:text-purple-800"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Request Free Consultation</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Request Consultation"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
