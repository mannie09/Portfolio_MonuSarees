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
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-8 mix-blend-difference text-white">
        <button 
          onClick={() => setIsCinematic(false)}
          className="group flex flex-col items-center gap-2"
        >
          <Columns3 size={32} className={`transition-opacity ${!isCinematic ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />
          <span className="text-[8px] uppercase tracking-[0.2em] font-body opacity-0 group-hover:opacity-100 transition-opacity">
            Archive
          </span>
        </button>
        <button 
          onClick={() => setIsCinematic(true)}
          className="group flex flex-col items-center gap-2"
        >
          <Clapperboard size={32} className={`transition-opacity ${isCinematic ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`} />
          <span className="text-[8px] uppercase tracking-[0.2em] font-body opacity-0 group-hover:opacity-100 transition-opacity">
            Cinematic
          </span>
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
