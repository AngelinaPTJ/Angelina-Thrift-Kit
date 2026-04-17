import React from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';

export default function VintageTagGuide({ title, era, details, image, rotation = 0 }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-[#F2F0E9] p-8 border-4 border-foreground analog-shadow">
      <motion.div 
        className="w-full md:w-2/5 flex-shrink-0"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <PolaroidFrame rotation={rotation}>
          <FilmGrainOverlay opacity={0.2} />
          <img src={image} alt={`Vintage tag from ${era}`} className="w-full aspect-square object-cover contrast-125" />
        </PolaroidFrame>
      </motion.div>

      <div className="w-full md:w-3/5 space-y-6">
        <div className="flex items-end gap-4 border-b-4 border-foreground pb-4">
          <h4 className="font-archivo text-3xl uppercase">{title}</h4>
          <PermanentMarkerText className="text-2xl text-primary mb-1">{era}</PermanentMarkerText>
        </div>
        
        <div className="space-y-4">
          {details.map((detail, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center font-archivo text-sm bg-white">
                {idx + 1}
              </div>
              <div>
                <p className="font-medium text-foreground/90">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
