import React from 'react';
import { Outlet } from 'react-router-dom';
import { BellRing } from 'lucide-react';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className="w-[100dvw] min-h-[100dvh] relative bg-surface overflow-x-hidden">
      <Navbar />
      
      <main className="w-full relative min-h-screen">
        <Outlet />
      </main>

      {/* Floating Action Button */}
      <button 
        className="fixed bottom-12 right-12 w-16 h-16 bg-primary-container text-secondary-container flex items-center justify-center rounded-full z-50 transition-transform duration-300 hover:scale-110" 
        style={{ boxShadow: '0 20px 40px rgba(74, 4, 4, 0.15)' }}
      >
        <BellRing size={32} strokeWidth={2} />
      </button>

      {/* Footer */}
      <footer className="w-full py-16 px-12 flex flex-col items-center gap-8 border-t border-[#1B1C19]/5 bg-[#FBF9F4] dark:bg-stone-950">
        <div className="flex gap-12 font-['Work_Sans'] text-[10px] tracking-[0.3em] uppercase text-stone-400">
          <a className="hover:text-[#210000] underline-offset-4 underline transition-all duration-300" href="#">The Silk Road</a>
          <a className="hover:text-[#210000] underline-offset-4 underline transition-all duration-300" href="#">Preservation Care</a>
          <a className="hover:text-[#210000] underline-offset-4 underline transition-all duration-300" href="#">Legal</a>
          <a className="hover:text-[#210000] underline-offset-4 underline transition-all duration-300" href="#">Contact</a>
        </div>
        <p className="font-['Work_Sans'] text-[10px] tracking-[0.3em] uppercase text-stone-500">
            © MMXXIV Monu Sarees Archival Collection
        </p>
      </footer>
    </div>
  );
};

export default Layout;
