import React, { useState, useEffect } from 'react';
import { Bell, Menu, X, LayoutGrid } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`glass-panel flex justify-between items-center w-full px-6 md:px-12 py-6 fixed top-0 ${isMenuOpen ? 'z-40' : 'z-50'} transition-all duration-500`}>
        <div className="flex items-center gap-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-headline tracking-tighter text-primary hover:text-secondary transition-colors duration-300">Monu Sarees</Link>
        </div>
        <div className="hidden md:flex gap-12">
          <Link to="/heritage" className={`${isActive('/heritage') ? 'text-primary border-b border-secondary pb-1' : 'text-on-surface opacity-70 border-b border-transparent pb-1'} font-headline uppercase tracking-[0.2em] text-xs hover:text-secondary hover:opacity-100 transition-all duration-300`}>Heritage</Link>
          <Link to="/collections" className={`${isActive('/collections') ? 'text-primary border-b border-secondary pb-1' : 'text-on-surface opacity-70 border-b border-transparent pb-1'} font-headline uppercase tracking-[0.2em] text-xs hover:text-secondary hover:opacity-100 transition-all duration-300`}>Gallery</Link>
          <Link to="/weavers" className={`${isActive('/weavers') ? 'text-primary border-b border-secondary pb-1' : 'text-on-surface opacity-70 border-b border-transparent pb-1'} font-headline uppercase tracking-[0.2em] text-xs hover:text-secondary hover:opacity-100 transition-all duration-300`}>Weavers</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-primary hover:scale-95 transition-transform duration-300">
            <Bell size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-primary flex items-center gap-2 hover:opacity-70 transition-opacity duration-300"
          >
            <span className="font-label text-xs tracking-widest uppercase hidden md:inline">Menu</span>
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div className={`fixed inset-0 z-[100] bg-primary-container flex flex-col items-center justify-between py-24 px-8 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        
        {/* Texture Layer */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, rgba(33,0,0,1) 0%, rgba(74,4,4,0) 100%)' }}></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none silk-texture"></div>

        {/* Close Button */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-4 text-secondary-container transition-transform duration-300 hover:scale-105"
          >
            <span className="font-label text-xs tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity hidden md:inline">Close</span>
            <X size={36} strokeWidth={1} />
          </button>
        </div>

        {/* Side Archive Numbers */}
        <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-12 font-label text-[10px] tracking-[0.5em] uppercase text-secondary-container/30 writing-vertical rotate-180">
          <span>Vol. 1996 — 2024</span>
          <span>Varanasi Heritage</span>
        </div>

        {/* Main Navigation Links */}
        <nav className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center space-y-4 md:space-y-8 mt-12 md:mt-0">
          <div className="group flex flex-col items-center w-full">
            <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="reveal-text block font-headline text-4xl md:text-7xl text-secondary-container link-glow transition-all duration-700 ease-out hover:tracking-wider">
              The Collection
            </Link>
            <div className="h-[1px] w-0 bg-secondary-container transition-all duration-500 group-hover:w-48 mt-2"></div>
          </div>
          <div className="group flex flex-col items-center w-full">
            <Link to="/weavers" onClick={() => setIsMenuOpen(false)} className="reveal-text block font-headline text-4xl md:text-7xl text-secondary-container link-glow transition-all duration-700 ease-out hover:tracking-wider">
              Artisans
            </Link>
            <div className="h-[1px] w-0 bg-secondary-container transition-all duration-500 group-hover:w-48 mt-2"></div>
          </div>
          <div className="group flex flex-col items-center w-full">
            <Link to="/heritage" onClick={() => setIsMenuOpen(false)} className="reveal-text block font-headline text-4xl md:text-7xl text-secondary-container link-glow transition-all duration-700 ease-out hover:tracking-wider">
              Our Heritage
            </Link>
            <div className="h-[1px] w-0 bg-secondary-container transition-all duration-500 group-hover:w-48 mt-2"></div>
          </div>
          <div className="group flex flex-col items-center w-full">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="reveal-text block font-headline text-4xl md:text-7xl text-secondary-container link-glow transition-all duration-700 ease-out hover:tracking-wider">
              The Loom
            </Link>
            <div className="h-[1px] w-0 bg-secondary-container transition-all duration-500 group-hover:w-48 mt-2"></div>
          </div>
        </nav>

        {/* Footer info in Overlay */}
        <footer className="relative z-10 flex flex-col items-center gap-6 mt-12 md:mt-0">
          <div className="w-px h-16 bg-secondary-container/20"></div>
          <div className="text-secondary-container/60 hover:text-secondary-container transition-colors duration-500 cursor-pointer">
            <LayoutGrid size={32} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary-container/40">Ethically Sourced</span>
            <span className="font-headline italic text-sm text-secondary-container mt-1">Monu Sarees</span>
          </div>
        </footer>

        {/* Background Decorative Image */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/3 h-1/2 md:h-2/3 opacity-5 pointer-events-none grayscale">
          <img 
            alt="Handloom weaving background" 
            className="w-full h-full object-cover object-bottom" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZD9eWggFOs0-kOjqH6cYFH67UQEiAKFIJPD0X_OT2u6WY4-SHz7J7yZbyCkQagnAfSENtX36tl3WPIeKAONVXH6mgTge06TfT7A7tSyZGTxZt4oNWBdyJFdVZpD9wE-IU-J60FWTHp_y6YGKYiC-ET5KxkawQfpzd2l4GmoNYmkAI179a0RpG4tlIM3qaR6bheJILJn7Uf3illb4Ea-MrWZ-FUdtqswVZ5UbfeaWVTuQLPZb8__WHipknfDdKkiDfsM0hVXSlsFp"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
