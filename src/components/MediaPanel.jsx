import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextDisplay from './TextDisplay';

const MediaPanel = ({ panel, isCenter, flexBase, isHovered, hoveredPanel, onHover, onToggleCinematic, exitDelay }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => setIsInView(entry.isIntersecting));
      },
      { threshold: 0.6 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldPlay = isHovered || (isInView && window.innerWidth <= 768);
    if (panel.type === 'video' && videoRef.current) {
      if (shouldPlay) {
        videoRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, isInView, panel.type]);

  const anyHovered = hoveredPanel !== null;
  const isMuted = !isCenter && !isHovered && anyHovered;

  let filterString = "grayscale(100%) contrast(0.8) brightness(0.9)";
  if (isHovered || isCenter || !anyHovered || (isInView && window.innerWidth <= 768)) {
    filterString = "grayscale(0%) contrast(1) brightness(1)";
  }

  const centerGradient = null; // Removed old centerGradient as TextDisplay now provides content context

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={onHover}
      exit={{ scale: 0.9, opacity: 0, transition: { duration: 1.2, delay: exitDelay, ease: [0.2, 0.8, 0.2, 1] } }}
      
      // Removed exact width breakpoints to ensure the Flex handles it elegantly per Apple Menken behavior
      // Min-width assigned for mobile to enforce the horizontal swipe gallery
      className={`relative h-[100dvh] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] group cursor-pointer flex flex-col justify-end snap-center min-w-[25vw] md:min-w-0`}
      style={{
        flex: flexBase,
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full z-0 transition-all duration-700 ease-monu-ease"
        style={{ filter: filterString }}
      >
        {isCenter ? (
           <div className="w-full h-full silk-gradient" />
        ) : panel.type === 'video' ? (
          <video 
            ref={videoRef}
            src={panel.src} 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src={panel.src} 
            alt={panel.title} 
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        )}
      </div>

      {centerGradient}
      
      {/* Strict container pinning so content text never breaks sequence styling */}
      <TextDisplay 
        panel={panel}
        isCenter={isCenter} 
        isHovered={isHovered} 
        isMuted={isMuted}
        onToggleCinematic={onToggleCinematic}
      />
    </motion.div>
  );
};

export default MediaPanel;
