"use client";

import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const faqs = [
  { q: "Can I take a stadium tour on matchdays?", a: "Stadium tours are heavily restricted on matchdays. We offer a specialized Matchday Tour, but standard tours are not available. Please check the booking portal in advance." },
  { q: "How do I buy tickets for a match?", a: "All official match tickets are sold exclusively through momoticketing.com. We do not sell tickets at the stadium on matchdays." },
  { q: "Is the stadium accessible for wheelchair users?", a: "Yes, the Akii-Bua Olympic Stadium is fully accessible. We have dedicated elevators, wheelchair spaces in the stands, and barrier-free restrooms throughout the venue." },
  { q: "Can I bring a bag or backpack?", a: "For security reasons, bags larger than A4 size are strictly prohibited. You can store oversized luggage at the drop-off points near the entrances for a fee of UGX 500." },
  { q: "How do I get to the stadium using public transport?", a: "The stadium is easily accessible via matatus and buses running along the Lira-Kamdini Highway. Alight at the stadium stage, a short walk from the main entrance. On matchdays, special shuttle buses also operate from the Lira Central Market." },
  { q: "Are guided tours available in English?", a: "Yes, our standard Arena Tours are conducted in English, Luganda, and Swahili. Audio guides for the museum are available in multiple languages including English and Luganda." },
  { q: "Can I bring my own food and drinks?", a: "Outside food and beverages are not allowed inside the stadium. We have numerous catering kiosks and the main stadium restaurant offering a wide variety of meals and refreshments." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about your visit."
      image="/arena_interior.png"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]}
    >
      <div className="max-w-4xl mx-auto mt-4">
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-arena-primary bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-bold uppercase tracking-wider transition-colors ${openIndex === idx ? 'text-arena-primary' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl font-light transition-transform duration-300 shrink-0 ml-4 ${openIndex === idx ? 'rotate-45 text-arena-primary' : 'text-gray-400'}`}>
                  +
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="w-10 h-1 bg-arena-red mb-4 rounded" />
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">Still have questions?</p>
          <a href="/contact" className="inline-block border-2 border-arena-primary text-arena-primary font-bold uppercase tracking-wider py-3 px-8 rounded hover:bg-arena-red hover:text-white transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
