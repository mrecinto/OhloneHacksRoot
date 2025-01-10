import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Sponsors() {
  const sponsors = [
    {
      tier: "Platinum",
      logos: [
        { name: "Tech Corp", url: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=200" },
        { name: "Innovation Labs", url: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=200" }
      ]
    },
    {
      tier: "Gold",
      logos: [
        { name: "Dev Solutions", url: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=200" },
        { name: "Cloud Systems", url: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=200" },
        { name: "AI Research", url: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=200" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 px-6">
      <div className="container mx-auto">
        <SectionTitle>Our Sponsors</SectionTitle>
        {sponsors.map((tier, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">{tier.tier} Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {tier.logos.map((logo, i) => (
                <div 
                  key={i}
                  className="w-40 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}