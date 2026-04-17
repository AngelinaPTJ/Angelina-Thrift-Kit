import React from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame.jsx';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';

export default function StylingGuideCard({ title, tips, images }) {
  return (
    <div className="py-12 border-b-2 border-foreground/10 last:border-0">
      <div className="mb-10 text-center">
        <h3 className="font-archivo text-4xl md:text-5xl uppercase mb-4">{title}</h3>
        <PermanentMarkerText className="text-xl text-primary" rotation={-1}>
          Proportions are everything.
        </PermanentMarkerText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          {tips.map((tip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 border-2 border-foreground/20 hover:border-primary transition-colors bg-white"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-archivo">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-archivo text-lg uppercase mb-1">{tip.title}</h4>
                <p className="text-foreground/70 font-medium text-sm">{tip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
             <PermanentMarkerText className="text-4xl text-primary bg-white px-4 py-2 border-4 border-foreground transform -rotate-12 analog-shadow">
                VS
             </PermanentMarkerText>
          </div>
          
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <PolaroidFrame rotation={idx === 0 ? -3 : 2} caption={<PermanentMarkerText className="text-lg">{idx === 0 ? 'Too tight' : 'Just right'}</PermanentMarkerText>}>
                <FilmGrainOverlay opacity={0.15} />
                <img src={img} alt={`Styling example ${idx + 1}`} className="w-full aspect-[3/4] object-cover filter contrast-[1.1] grayscale-[15%]" />
              </PolaroidFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
