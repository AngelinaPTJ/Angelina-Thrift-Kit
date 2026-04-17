import React from 'react';

export default function FilmGrainOverlay({ opacity = 0.1, className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none mix-blend-overlay z-10 ${className}`}
      style={{ opacity }}
    >
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
