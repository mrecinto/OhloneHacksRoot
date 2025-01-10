import React from 'react';
import { Timer } from './Timer';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Mission Peak at sunset */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501594907352-04cda38ebc29")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/30 via-purple-500/30 to-pink-500/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Innovate, Create, Elevate
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join us at Mission Peak's doorstep for the Bay Area's most inspiring hackathon
        </p>
        
        <Timer />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#register"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-colors"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-sm transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}