import React from 'react';

export default function PolaroidFrame({ 
  children, 
  rotation = 0, 
  className = "",
  caption,
  badge
}) {
  return (
    <div 
      className={`bg-white p-3 pb-12 sm:pb-16 shadow-xl relative transition-transform duration-300 hover:scale-[1.02] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative w-full h-full overflow-hidden bg-muted">
        {children}
        {badge && (
          <div className="absolute top-2 right-2 z-20">
            {badge}
          </div>
        )}
      </div>
      {caption && (
        <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5">
          {caption}
        </div>
      )}
    </div>
  );
}
