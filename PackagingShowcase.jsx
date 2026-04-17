import React from 'react';
import { motion } from 'framer-motion';
import FilmGrainOverlay from './FilmGrainOverlay.jsx';
import PermanentMarkerText from './PermanentMarkerText.jsx';

export default function PackagingShowcase() {
  const careSymbols = [
    { icon: "🧺", desc: "Machine Wash Cold" },
    { icon: "⨂", desc: "Do Not Bleach" },
    { icon: "◎", desc: "Tumble Dry Low" },
    { icon: "▭", desc: "Dry Flat" },
    { icon: "⏚", desc: "Cool Iron Only" },
    { icon: "℗", desc: "Dry Clean Ok" }
  ];

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        
        {/* The Tag Display */}
        <div className="relative w-full aspect-[4/5] md:aspect-square flex items-center justify-center p-8 bg-muted border-8 border-foreground analog-shadow overflow-hidden group">
          <FilmGrainOverlay opacity={0.2} />
          
          {/* Decorative Tape */}
          <div className="photo-tape w-32 h-8 -top-2 left-1/2 -translate-x-1/2 transform -rotate-2" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-[85%] max-w-sm"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/f3bc737e6e8a6cfc69075f290400b96c.jpg" 
              alt="Handmade Kraft Tag Design by Angelina" 
              className="w-full h-auto object-contain shadow-2xl filter contrast-125 sepia-[20%]"
            />
            
            <div className="absolute -bottom-8 -right-8 pointer-events-none">
              <PermanentMarkerText className="text-3xl text-primary bg-white px-3 border-2 border-foreground transform -rotate-12 analog-shadow">
                HELLO, I'M HANDMADE!
              </PermanentMarkerText>
            </div>
            
            <div className="absolute -top-6 -left-6 pointer-events-none">
              <svg className="w-16 h-16 text-primary transform -scale-x-100 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* The Narrative & Care Guide */}
        <div className="flex flex-col justify-center h-full space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-archivo text-5xl uppercase mb-6 leading-none">Made by Angelina</h3>
            <p className="text-lg font-medium text-foreground/80 leading-relaxed mb-6">
              Vintage shouldn't feel old when it arrives. Every piece in the archive is steam-cleaned, folded with acid-free tissue, and tagged by hand. We preserve the analog experience while maintaining modern hygiene and presentation standards.
            </p>
            <PermanentMarkerText as="p" className="text-2xl text-primary" rotation={-1}>
              PLEASE TAKE CARE OF ME.
            </PermanentMarkerText>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-foreground p-8 analog-shadow transform rotate-1"
          >
            <h4 className="font-archivo text-2xl uppercase mb-6 border-b-2 border-foreground pb-4">Decoding The Symbols</h4>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {careSymbols.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-10 h-10 border-2 border-foreground rounded-full text-lg font-bold bg-[#F2F0E9]">
                    {item.icon}
                  </span>
                  <span className="font-medium text-sm md:text-base uppercase">{item.desc}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-foreground/20 text-sm font-medium text-foreground/70">
              * Note: Natural fibers like heavy wool, silk, and raw denim require specific preservation techniques. When in doubt, spot clean or seek a professional.
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
