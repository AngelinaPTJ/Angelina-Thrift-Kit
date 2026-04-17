import React from 'react';

export default function PermanentMarkerText({ 
  children, 
  className = "", 
  as: Component = "span",
  color = "text-foreground",
  rotation = 0
}) {
  return (
    <Component 
      className={`font-marker ${color} ${className}`}
      style={{ 
        display: 'inline-block',
        transform: rotation ? `rotate(${rotation}deg)` : 'none'
      }}
    >
      {children}
    </Component>
  );
}
