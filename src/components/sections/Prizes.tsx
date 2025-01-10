import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export function Prizes() {
  const prizes = [
    {
      icon: <Trophy className="w-12 h-12" />,
      place: "1st Place",
      prize: "$5,000",
      perks: ["Direct mentorship from industry leaders", "Fast-track interviews with top tech companies"]
    },
    {
      icon: <Award className="w-12 h-12" />,
      place: "2nd Place",
      prize: "$3,000",
      perks: ["Cloud credits worth $10,000", "1-year premium subscriptions to dev tools"]
    },
    {
      icon: <Medal className="w-12 h-12" />,
      place: "3rd Place",
      prize: "$2,000",
      perks: ["Cloud credits worth $5,000", "6-month premium subscriptions to dev tools"]
    }
  ];

  return (
    <section id="prizes" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <SectionTitle>Prizes & Rewards</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  {prize.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-2">{prize.place}</h3>
              <div className="text-3xl font-bold text-orange-500 mb-4">{prize.prize}</div>
              <ul className="text-gray-600 dark:text-gray-400">
                {prize.perks.map((perk, i) => (
                  <li key={i} className="mb-2">{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}