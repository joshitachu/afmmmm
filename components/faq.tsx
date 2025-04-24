"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Faq() {
  const faqs = [
    {
      question: "Which content platforms do you work with?",
      answer:
        "We work with all major premium content subscription platforms including OnlyFans, Fansly, MYM, and more. Our team has expertise across multiple platforms to help you choose the best fit for your content and audience.",
    },
    {
      question: "How do payments and commissions work?",
      answer:
        "We charge a monthly management fee plus a small commission on your earnings. The commission percentage varies by plan and decreases as your earnings grow. All payments are processed securely, and you'll receive detailed financial reports to track your income.",
    },
    {
      question: "What about privacy and content security?",
      answer:
        "We take privacy extremely seriously. All your content and personal information are handled with strict confidentiality. We implement robust security measures to protect your data and content from unauthorized access or leaks.",
    },
    {
      question: "Do I need to have an existing following to work with you?",
      answer:
        "No, we work with creators at all stages. Whether you're just starting out or already have an established following, our services are tailored to meet you where you are and help you grow from there.",
    },
    {
      question: "Can I cancel my management plan at any time?",
      answer:
        "Yes, all our management plans are month-to-month with no long-term contracts required. You can upgrade, downgrade, or cancel your plan at any time with 30 days' notice.",
    },
    {
      question: "What makes AFM Management different from other agencies?",
      answer:
        "We focus exclusively on female creators and take a holistic approach to content management. Our team includes experts in photography, content strategy, marketing, and financial planning, providing comprehensive support for every aspect of your content business.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Find answers to common questions about our services, platforms, and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
