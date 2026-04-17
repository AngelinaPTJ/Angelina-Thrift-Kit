import React from 'react';
import { motion } from 'framer-motion';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';

export default function HangerDisplay({ title, description, image, annotations }) {
  return (
    <div className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="font-archivo text-4xl md:text-5xl uppercase mb-6">{title}</h3>
        <p className="text-lg font-medium text-foreground/80">{description}</p>
      </div>

      <div className="relative max-w-5xl mx-auto border-8 border-foreground bg-muted p-4 md:p-12 analog-shadow">
        <FilmGrainOverlay opacity={0.15} />
        
        <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border-4 border-foreground bg-white">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center grayscale-[10%] contrast-[1.1]"
          />
          
          {annotations.map((ann, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.2), type: "spring" }}
              className="absolute flex items-center gap-2 z-20 pointer-events-none"
              style={{ top: ann.top, left: ann.left }}
            >
              {ann.direction === 'left' && (
                <svg className="w-8 h-8 text-primary transform scale-x-[-1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
              
              <PermanentMarkerText 
                rotation={ann.rotation} 
                className="text-xl md:text-2xl bg-white/90 backdrop-blur-sm px-3 py-1 border-2 border-foreground whitespace-nowrap shadow-sm"
              >
                {ann.text}
              </PermanentMarkerText>

              {ann.direction === 'right' && (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative Tape */}
        <div className="absolute -top-4 left-1/4 w-32 h-8 bg-white/60 backdrop-blur-md transform -rotate-3 border border-foreground/10 z-30" />
        <div className="absolute -top-4 right-1/4 w-32 h-8 bg-white/60 backdrop-blur-md transform rotate-2 border border-foreground/10 z-30" />
      </div>
    </div>
  );
}
