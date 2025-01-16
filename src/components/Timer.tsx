import React from 'react';

export function Timer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const hackathonDate = new Date('2025-02-22T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
            <span className="text-3xl font-bold">{value}</span>
          </div>
          <span className="text-sm mt-2 block capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
}