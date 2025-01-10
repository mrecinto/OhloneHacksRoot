import React from 'react';
import { Bot, Leaf, Heart, Globe } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export function Tracks() {
  const tracks = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Build innovative solutions using artificial intelligence and machine learning."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Create projects that address environmental challenges and promote sustainability."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Develop applications that improve healthcare accessibility and patient care."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Impact",
      description: "Build solutions that make a positive impact on communities and society."
    }
  ];

  return (
    <section id="tracks" className="py-20 px-6">
      <div className="container mx-auto">
        <SectionTitle>Hackathon Tracks</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 mb-4">
                {track.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}