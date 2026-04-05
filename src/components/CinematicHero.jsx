import React from 'react';
import { motion } from 'framer-motion';

const CinematicHero = () => {
  return (
    <motion.div 
      className="flex flex-col w-full min-h-screen bg-surface text-on-surface"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Curated Storytelling Section */}
      <section className="bg-surface-container-low py-32 px-12 md:px-24 flex-grow flex items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-variant overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRt3u3P791hlEB4lPyN0H8KjO2fIyYMj30nAEgq1FYm7tIagkkHqcLgsfPJMjmvDGXsTTJIn9WcjefGfsxk_TxqfExOxtQlH1Rk5Krezwvy1GroXZQx_kmDyA87UYLjCM6U90Xton0U7HQhcPeKpri_Vo9Mboascm3obNPj09Y7zkZniOwU-pdFH-1w4X9vgR9apYkHZi2wZnHKFpKdZTswAsfXANuC4lJWWP7rwPAHqRpr8T5TUmUDE2gvGABiv2e27BkRs7bcfv"
                alt="Master Artisan"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
            {/* Artistic Asymmetry */}
            <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-primary-container p-8 hidden md:block">
              <p className="text-secondary-container font-headline text-xl mb-4 italic">
                "Every thread carries the whisper of the ancestors."
              </p>
              <p className="text-white/60 font-body text-[10px] uppercase tracking-widest">
                — Pandit Ram Narayan, Master Weaver
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <p className="font-label text-xs uppercase tracking-[0.4em] text-secondary">
              The Digital Curator
            </p>
            <h2 className="font-headline text-5xl text-primary leading-tight">
              The Archival <br/>Precision of Silk
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed font-light">
              Founded in 1996, Monu Sarees is not merely a label, but a custodian of a thousand-year-old weaving tradition. Each piece in our vault is curated like an artifact, representing the pinnacle of Varanasi’s hand-loom mastery.
            </p>
            <div className="pt-8">
              <button className="bg-primary-container text-white px-10 py-4 font-label text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500">
                Explore The Archive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface w-full py-16 px-12 border-t ghost-border flex flex-col md:flex-row justify-between items-end">
        <div className="flex flex-col gap-8 w-full md:w-auto">
          <span className="font-headline text-sm uppercase tracking-widest text-primary-container">
            Monu Sarees
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-on-surface/60 font-body text-[10px] tracking-widest leading-relaxed hover:text-primary transition-colors">The Archive</a>
            <a href="#" className="text-on-surface/60 font-body text-[10px] tracking-widest leading-relaxed hover:text-primary transition-colors">Shipping & Returns</a>
            <a href="#" className="text-on-surface/60 font-body text-[10px] tracking-widest leading-relaxed hover:text-primary transition-colors">Contact Us</a>
            <a href="#" className="text-on-surface/60 font-body text-[10px] tracking-widest leading-relaxed hover:text-primary transition-colors">Certifications</a>
          </div>
        </div>
        <div className="mt-12 md:mt-0 text-right">
          <p className="text-on-surface/60 font-body text-[10px] tracking-widest leading-relaxed">
            © 2026 Monu Sarees. Varanasi Heritage | Since 1996. Ethically Sourced & Hand-Loomed.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default CinematicHero;
