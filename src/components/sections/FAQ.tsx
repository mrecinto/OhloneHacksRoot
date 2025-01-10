import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function FAQ() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "Any student enrolled at Ohlone College or other Bay Area colleges is eligible to participate. We welcome students from all academic backgrounds!"
    },
    {
      question: "Do I need to know how to code?",
      answer: "While coding experience is helpful, we welcome participants with diverse skills including design, business, and project management."
    },
    {
      question: "How much does it cost?",
      answer: "The hackathon is completely free for all participants! We provide meals, snacks, and refreshments throughout the event."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, any personal items you'll need, and lots of enthusiasm! We'll provide everything else."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}