import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Schedule() {
  const schedule = [
    { day: "Day 1", time: "9:00 AM", event: "Check-in & Registration" },
    { day: "Day 1", time: "10:00 AM", event: "Opening Ceremony" },
    { day: "Day 1", time: "11:00 AM", event: "Team Formation" },
    { day: "Day 1", time: "12:00 PM", event: "Hacking Begins" },
    { day: "Day 1", time: "2:00 PM", event: "Workshop: AI Development" },
    { day: "Day 1", time: "5:00 PM", event: "Workshop: UI/UX Design" },
    { day: "Day 2", time: "10:00 AM", event: "Mentorship Sessions" },
    { day: "Day 2", time: "12:00 PM", event: "Project Submissions" },
    { day: "Day 2", time: "2:00 PM", event: "Project Presentations" },
    { day: "Day 2", time: "4:00 PM", event: "Awards Ceremony" }
  ];

  return (
    <section id="schedule" className="py-20 px-6 bg-gradient-to-b from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <SectionTitle>Event Schedule</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 mb-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
            >
              <div className="w-24 text-sm font-semibold text-orange-600 dark:text-orange-400">
                {item.day}
              </div>
              <div className="w-24 text-sm text-gray-600 dark:text-gray-400">
                {item.time}
              </div>
              <div className="flex-1 font-medium">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}