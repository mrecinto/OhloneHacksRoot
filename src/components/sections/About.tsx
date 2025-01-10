import React from 'react';
import { Zap, Users, Trophy } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "36 Hours of Innovation",
      description: "Join us for an intense weekend of coding, creativity, and collaboration."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "300+ Participants",
      description: "Connect with fellow developers, designers, and innovators from across the region."
    },
    {
      icon: <Trophy className="w-6 h-6 text-pink-500" />,
      title: "$10,000 in Prizes",
      description: "Compete for exciting prizes and opportunities to showcase your projects."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <SectionTitle>About the Event</SectionTitle>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Bolt.New Hackathon brings together the brightest minds at Ohlone Community College
          for a weekend of innovation, learning, and building amazing projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="inline-block p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}