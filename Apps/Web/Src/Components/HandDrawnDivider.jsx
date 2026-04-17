import React from 'react';

export default function HandDrawnDivider({ className = "", color = "currentColor", strokeWidth = 3 }) {
  return (
    <div className={`w-full overflow-hidden flex justify-center py-8 ${className}`}>
      <svg 
        width="200" 
        height="20" 
        viewBox="0 0 200 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <path 
          d="M5 10Q25 15 45 8T85 12T125 7T165 13T195 9" 
          stroke={color} 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          className="path-scribble"
        />
        <path 
          d="M10 12Q30 7 50 14T90 9T130 15T170 8T190 11" 
          stroke={color} 
          strokeWidth={strokeWidth - 1} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
