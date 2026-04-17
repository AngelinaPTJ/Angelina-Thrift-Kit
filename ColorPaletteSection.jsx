import React from 'react';
import { motion } from 'framer-motion';
import PermanentMarkerText from './PermanentMarkerText.jsx';

export default function ColorPaletteSection({ season, description, palettes, image }) {
  return (
    <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="font-archivo text-4xl uppercase mb-4 flex items-center">
          {season} 
          <PermanentMarkerText className="ml-4 text-primary text-2xl lowercase tracking-normal" rotation={-5}>
            tones
          </PermanentMarkerText>
        </h3>
        <p className="text-lg font-medium text-foreground/80 mb-10 text-balance">
          {description}
        </p>

        <div className="space-y-8">
          {palettes.map((palette, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-archivo text-sm text-foreground/60 mb-3">{palette.name}</h4>
              <div className="flex flex-wrap gap-4">
                {palette.colors.map((color, cIdx) => (
                  <div key={cIdx} className="relative group">
                    <div 
                      className="w-16 h-16 rounded-none border-4 border-foreground analog-shadow transition-transform group-hover:-translate-y-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <PermanentMarkerText className="text-sm bg-white px-2 py-1 border-2 border-foreground whitespace-nowrap">
                        {color.label}
                      </PermanentMarkerText>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] bg-muted border-8 border-foreground analog-shadow overflow-hidden transform rotate-1">
        <img 
          src={image} 
          alt={`${season} color inspiration`}
          className="absolute inset-0 w-full h-full object-cover filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <PermanentMarkerText className="text-3xl text-white" rotation={-2}>
            Build your base.
          </PermanentMarkerText>
        </div>
      </div>
    </div>
  );
}
