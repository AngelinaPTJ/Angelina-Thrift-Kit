import React from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame.jsx';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';

export default function MaterialCard({ 
  title, 
  description, 
  image, 
  features, 
  annotation, 
  reversed = false 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center py-12`}
    >
      <div className="w-full lg:w-1/2 relative">
        <PolaroidFrame rotation={reversed ? 2 : -2} className="w-full max-w-md mx-auto">
          <FilmGrainOverlay opacity={0.2} />
          <img 
            src={image} 
            alt={`${title} texture detail`} 
            className="w-full aspect-square object-cover grayscale-[30%] contrast-125"
          />
          {annotation && (
            <div className={`absolute ${reversed ? 'top-1/4 right-0 translate-x-1/4' : 'top-1/3 left-0 -translate-x-1/4'} z-20 flex flex-col items-center pointer-events-none`}>
              <PermanentMarkerText rotation={reversed ? 10 : -10} color="text-primary" className="text-2xl lg:text-3xl bg-white px-3 py-1 border-2 border-foreground shadow-sm">
                {annotation}
              </PermanentMarkerText>
              <svg className={`w-12 h-16 text-primary mt-2 ${reversed ? 'transform -scale-x-100' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </PolaroidFrame>
      </div>

      <div className="w-full lg:w-1/2 prose prose-lg prose-headings:font-archivo text-foreground">
        <h3 className="text-4xl md:text-5xl uppercase mb-6">{title}</h3>
        <p className="font-medium text-foreground/80 text-balance">{description}</p>
        
        <div className="mt-8 bg-muted/50 border-4 border-foreground p-6 relative analog-shadow transform rotate-1">
          <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 flex items-center justify-center font-archivo rotate-12 border-2 border-foreground">
            !
          </div>
          <ul className="list-none pl-0 space-y-4 m-0">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <PermanentMarkerText className="text-primary mr-4 mt-1" rotation={-5}>*</PermanentMarkerText>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
