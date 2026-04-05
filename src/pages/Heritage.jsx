import React from 'react';
import { Landmark } from 'lucide-react';

const Heritage = () => {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto animation-fade-in">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        <div className="md:col-span-7 relative">
          <div className="aspect-[4/5] bg-surface-variant overflow-hidden">
            <img 
              alt="Heritage Handloom" 
              className="w-full h-full object-cover grayscale-[30%] opacity-90 transition-transform duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5zcTj2ufPAll5S12sMFAN5DAYHz3Xm3uT_QthLbexft3zMvxKsdtP0lL2IKwAV1suFV_oXSuqE4EEhGqFDWLU_n0rltkmUU_ArLlgrW7vEde4vue0mzTYaTH-nfdNtESIRkr_rWbgQHzrso4cCMD7k1lFyyu0ZOqmQJN9grtmlqsAdSEKSmk7OItcDdWYE9f5XDJx777I6d9QIGdSOQDLt3gZ1Mh-PXZs3OBWP_nKfkVaX9S0TrWGYBMwxfwUAN5J92suoMHuBhlk"
            />
          </div>
          <div className="absolute -bottom-12 -right-8 md:-right-16 bg-surface p-8 md:p-12 max-w-sm ambient-shadow">
            <h2 className="font-headline text-3xl md:text-5xl text-primary leading-tight mb-4">The Custodians of Time</h2>
            <p className="text-on-surface text-sm leading-relaxed font-light mb-6">In the narrow lanes of Varanasi, history is not taught—it is woven. Every thread of Zari holds a thousand years of whispered secrets.</p>
            <a href="#" className="inline-block font-label text-[10px] tracking-[0.3em] uppercase text-secondary hover:text-primary transition-colors">View Archive —</a>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-center pt-24 md:pt-0">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-8">Established 1964</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary mb-12 leading-[1.1] tracking-tighter">Artisans & Heritage</h1>
          <div className="space-y-8 max-w-sm">
            <p className="text-on-surface leading-relaxed text-lg italic">"A saree is not just a garment; it is a canvas where the weaver paints with light and silk."</p>
            <div className="h-px w-24 bg-outline-variant opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Asymmetric Narrative Grid */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4 space-y-12 order-2 md:order-1">
            <div className="p-8 bg-surface-bright">
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-secondary mb-4 block">The Process</span>
              <h3 className="font-headline text-2xl text-primary mb-4">The Alchemy of Zari</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Real Zari is an alloy of silver and gold. We preserve the ancient technique of 'pattar' where silver is drawn into fine wires, then flattened and wound around silk yarn.</p>
              <button className="bg-primary-container text-white px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-all duration-300">Explore the Craft</button>
            </div>
            <div className="aspect-square bg-surface-variant overflow-hidden">
              <img 
                alt="Zari Detail" 
                className="w-full h-full object-cover grayscale-[20%]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEP7RlpB8UQ3WsdNW0uIrDjhfaTMaGjWgtvYAWbLWf9q35jUEOcvhDfsEap4e0iJ7Eklz1lo0F1KAl3PIcMAdfYERNzsY_3m4ElFA8U65o4j2wV9StxtWTDek6wwOjWhy6ab06oGDNPJPOjXKu8cWmdIrOrkUoXKoUnvXI3Zb7t_x2HYsbmAA4LZmziUDe3GdaHpSHD6R-SOSBCMCpoS7nbkhfnDtqqHlGYic-CybOB35LhRHAaQSCq_SVO_SLBmpfnMo7Kk0Pg8rr"
              />
            </div>
          </div>
          <div className="md:col-span-8 order-1 md:order-2">
            <div className="aspect-[16/9] bg-surface-variant overflow-hidden relative">
              <img 
                alt="Varanasi Riverbank" 
                className="w-full h-full object-cover brightness-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm76FA3geT_WchlAHxI1QPEAP8K8PbKB4M1JkS91MIY1dRab6oudVdOx22orUz_3jlfl1acoSyDZo8SqRPyiPXRGe9U1UE_zJPnRpDATrypr5lMlUJlFWlvDTXcUv6lHgo32Hjvfn2TzR7R_DGUX5CG9d05FiAiyswW2gBScczbeVwCYIMUSmr0vbV3ehcbDP-6qTgdgvx1DHjBnwclNtcjlnyQBqFDejovKFkd8TMxD1VXwqhuyUUMWSouSEB-FLnAC8KlWlf2Uc4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-headline text-xl">The Eternal City</p>
                <p className="font-label text-[10px] tracking-[0.2em] uppercase opacity-70">Source of Inspiration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weaver Spotlight: Bento Style */}
      <section className="mb-32">
        <h2 className="font-headline text-4xl text-primary mb-16 text-center tracking-tight">The Hands Behind the Warp</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[600px] ghost-border">
            <div>
              <span className="text-secondary font-label text-[10px] tracking-[0.3em] uppercase">Master Weaver</span>
              <h4 className="font-headline text-3xl mt-4 text-primary">Mubeen Ali</h4>
            </div>
            <div className="aspect-video bg-surface-variant mb-8 overflow-hidden">
              <img 
                alt="Portrait of an Artisan" 
                className="w-full h-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAUhzH1BlPI359WK6fgzX1ob9ULJZuqE4NMUy4-0K0sTQmkvJVCPaL-YbUUW4T_NuTzHauR7GCZtex7AcCEaK4eYXLZxukdXiaC6e4cNFNHNCX_sukIiVH3SVN733hMBwPUupvl6Ym2uZVReJ1xAqCnUyK-7waaG2RqpZjgEyk763aYREt75IyeOOkc8Psy_HQxp0C7n6_EzKK64BWpvjO-ltlBwL6I_4d91IOxKaL6ROjbYa54RnO9Bf64QuoiMPn0cuTXT3usXwd"
              />
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">Carrying a lineage of five generations, Mubeen specializes in the 'Kadhwa' technique, where each motif is woven individually without any loose threads on the back.</p>
          </div>
          
          {/* Card 2 (Hero Center) */}
          <div className="bg-primary-container text-white p-12 flex flex-col items-center text-center justify-center space-y-8 aspect-square md:aspect-auto md:h-[600px]">
            <Landmark className="text-secondary-container" size={48} strokeWidth={1} />
            <h3 className="font-headline text-4xl leading-tight">The Archival Promise</h3>
            <p className="text-sm font-light leading-relaxed max-w-xs text-white/80">We document every unique pattern in our library, ensuring that the visual language of 17th-century Banaras is never lost to the machine.</p>
            <div className="w-12 h-px bg-secondary-container"></div>
            <button className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary-container hover:text-white transition-colors">Join the Circle</button>
          </div>
          
          {/* Card 3 */}
          <div className="bg-surface p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[600px] ghost-border">
            <div className="aspect-[4/5] bg-surface-variant mb-8 overflow-hidden">
              <img 
                alt="Silk Skeins" 
                className="w-full h-full object-cover grayscale-[40%]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeRTIsPvVBsNkKcUM875MQeXmC6kFMXe0KekyGOFuWPuxdRawAbo2r5A0MguxVvCzOg-MYH4CVHNsWhQSKUYoGrnLScwrqNPst8Gc_Fy-UGTGetoQCgH-wAHHv27bwGr1c0KMppWo7dN_QFJcfqKVypWh5Egvm0FZHZuCKpoyA3UIKb4PioZgm8g2yFQxVTJtUNFrbuwP2g42vLWZrwgPiYfmBo5-xPzcpwiKtarApFnAcSo-8UmKXwu5ey6hPrpsgciNvw9GHCPmt"
              />
            </div>
            <div>
              <span className="text-secondary font-label text-[10px] tracking-[0.3em] uppercase">Material Origin</span>
              <h4 className="font-headline text-3xl mt-4 text-primary">Raw Mulberry</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-4">Sourced from the heart of Malda, our silk represents the highest grade of filament, providing a drape that feels like a second skin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Experience */}
      <section className="mb-32 relative h-[716px] flex items-center justify-center bg-surface-variant overflow-hidden">
        <img 
          alt="Weaving motion" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS2XKfQC5DBacenPxwnE46IFiV32CKcxRTC-PFOzaWkwMBCSIjEY6hng4KGwLXNIY-7hNuT2SAetTWQajWmCXrbwTx1AJ20j6YxlXtNM7YiRnvwYgsO8KMLIFqG4xbbVAeJTjo3G1h_P75wNH_qcMY_h53pM-ulxuzeVCaloC8v4FUoEU8uPtPSxEuwSGQ3oEqKoOFjGnpsidZ5jfC8N4p2cH5G7bMxNTJDT2WcMCeN8qL5d5_GgdJiXvNbJRH_EtOPYyyCT0BNSzr"
        />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8 leading-tight">Preserving the Unseen</h2>
          <p className="text-on-surface text-lg font-light leading-relaxed mb-12">Behind every six yards lies six months of human patience. We invite you to witness the slow movement of art.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary text-white px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-secondary">Request Studio Visit</button>
            <button className="border border-outline-variant/30 px-10 py-4 text-[10px] tracking-[0.3em] uppercase text-primary transition-all hover:bg-surface/50 backdrop-blur-sm">The Design Library</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Heritage;
