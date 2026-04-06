import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Columns3, Clapperboard } from 'lucide-react';
import PanelGrid from '../components/PanelGrid';
import CinematicHero from '../components/CinematicHero';

const Home = () => {
  const [isCinematic, setIsCinematic] = useState(false);

  return (
    <>
      {/* View Toggle Controls */}
      <div className="fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center p-2 rounded-full backdrop-blur-xl bg-surface/80 border border-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <button 
          onClick={() => setIsCinematic(false)}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${!isCinematic ? 'bg-primary text-surface shadow-lg' : 'text-on-surface-variant/60 hover:text-primary hover:bg-surface-container-high'}`}
          aria-label="Archive View"
        >
          <Columns3 size={24} strokeWidth={2.5} />
          
          {/* Tooltip */}
          <div className="absolute left-full ml-4 px-4 py-2 rounded bg-primary text-surface text-[10px] uppercase tracking-[0.3em] font-label opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
            Archive Grid
            <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] border-[6px] border-transparent border-r-primary w-0 h-0"></div>
          </div>
        </button>

        {/* Separator */}
        <div className="w-8 h-[1px] bg-secondary/20 my-2"></div>

        <button 
          onClick={() => setIsCinematic(true)}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${isCinematic ? 'bg-primary text-surface shadow-lg' : 'text-on-surface-variant/60 hover:text-primary hover:bg-surface-container-high'}`}
          aria-label="Cinematic View"
        >
          <Clapperboard size={24} strokeWidth={2.5} />
          
          {/* Tooltip */}
          <div className="absolute left-full ml-4 px-4 py-2 rounded bg-primary text-surface text-[10px] uppercase tracking-[0.3em] font-label opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
            Cinematic
            <div className="absolute top-1/2 -translate-y-1/2 -left-[4px] border-[6px] border-transparent border-r-primary w-0 h-0"></div>
          </div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isCinematic ? (
          <PanelGrid key="archive" />
        ) : (
          <CinematicHero key="cinematic" />
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
