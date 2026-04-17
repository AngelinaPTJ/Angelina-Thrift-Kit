import React from 'react';
import { motion } from 'framer-motion';
import PolaroidFrame from './PolaroidFrame.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';

export default function KitBundle({ title, description, price, items, stylingTip }) {
  return (
    <div className="bg-white border-4 border-foreground p-6 md:p-12 analog-shadow mb-16 relative overflow-hidden">
      <div className="scrapbook-overlay"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-20">
        <div>
          <h3 className="font-archivo text-4xl md:text-5xl uppercase mb-2">{title}</h3>
          <p className="text-foreground/70 font-medium text-lg max-w-xl">{description}</p>
        </div>
        <div className="text-right">
          <span className="font-archivo text-sm text-foreground/60 block mb-1">BUNDLE VALUE</span>
          <PermanentMarkerText className="text-5xl text-primary">{price}</PermanentMarkerText>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-20">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <PolaroidFrame 
              rotation={idx % 2 === 0 ? -2 : 1.5} 
              caption={<PermanentMarkerText className="text-sm">{item.name}</PermanentMarkerText>}
              className="h-full"
            >
              <FilmGrainOverlay opacity={0.1} />
              <img src={item.image} alt={item.name} className="w-full aspect-square object-cover grayscale-[20%]" />
            </PolaroidFrame>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-[#F2F0E9] border-4 border-foreground p-6 relative z-20 transform -rotate-1">
        <PermanentMarkerText className="absolute -top-4 -left-4 text-3xl text-primary bg-white px-2 border-2 border-foreground transform -rotate-6">
          Kit Tip!
        </PermanentMarkerText>
        <p className="font-medium text-lg pt-4 pl-4">{stylingTip}</p>
      </div>
    </div>
  );
}
