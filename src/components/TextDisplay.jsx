import React from 'react';
import { BellRing, ChevronDown } from 'lucide-react'; 

const TextDisplay = ({ panel, isCenter, isHovered, isMuted, onToggleCinematic }) => {
  if (isCenter) {
    return (
      <div 
        className="flex flex-col items-center justify-center w-full h-full text-center text-secondary-container relative z-20"
        onClick={(e) => { e.stopPropagation(); if (onToggleCinematic) onToggleCinematic(); }}
      >
        <div className="mb-8 scale-150">
          <BellRing size={48} className="fill-secondary-container stroke-secondary-container" strokeWidth={1} />
        </div>
        <h1 className="font-headline text-3xl tracking-tight mb-2 text-surface">
          Monu Sarees
        </h1>
        <div className="h-px w-12 bg-secondary-container/30 mb-4"></div>
        <p className="font-label text-[9px] uppercase tracking-[0.4em] leading-relaxed text-secondary-container">
          Varanasi Heritage<br/>Since 1996
        </p>
        <div className="mt-12 group cursor-pointer flex flex-col items-center">
          <p className="font-body text-[10px] uppercase tracking-widest text-secondary-container/60 group-hover:text-secondary-container transition-colors">
            Enter Vault
          </p>
          <ChevronDown className="mt-2 text-secondary-container animate-bounce" size={20} />
        </div>
      </div>
    );
  }

  // Panel hover effect styling based on Stitch HTML:
  // The panel text uses absolute positioning from the bottom with a gradient overlay.
  // We'll mimic this with an opacity transition driven by isHovered.
  return (
    <div 
      className={`absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-primary/80 to-transparent transition-opacity duration-600 ease-out z-20 pointer-events-none
        ${isHovered ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary-container mb-2">
        {panel.category}
      </p>
      <h3 className="font-headline text-2xl text-white">
        {panel.title}
      </h3>
      <p className="font-body text-xs text-white/70 mt-2">
        {panel.subtitle}
      </p>
    </div>
  );
};

export default TextDisplay;
