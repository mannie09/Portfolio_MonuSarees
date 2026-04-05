import React from 'react';
import { PenTool } from 'lucide-react';

const Weavers = () => {
  return (
    <main className="pt-32 pb-24 animation-fade-in">
      {/* Hero Section: Portrait Centric */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-0 relative">
        <div className="md:col-span-1 hidden md:flex flex-col justify-end pb-24">
          <span className="writing-vertical text-secondary font-headline tracking-[0.5em] uppercase text-[10px] opacity-40">
            ESTABLISHED VARANASI 1974
          </span>
        </div>
        
        <div className="md:col-span-7 relative">
          <div className="aspect-[4/5] bg-surface-variant overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale contrast-125" 
              alt="cinematic monochrome close-up portrait of an elderly Indian master weaver with deep wrinkles and a serene expression in a sunlit studio" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAyfdfwdzCFyJgMHUDHAmyZV7urOTDHfW7gk6r09jveXQTiCC6sO3y7zerGNOnZ_pcQ_UzY67_1mrRydBGwmPmIqbfVwnRVB6LpvIdgY3IVHq3iFxT4LsKuN_PaCc5dabIPnkO2xcooR1M-uI9wsnGNd5FVUBAcvdtQxT2OYQRiUpW_KkNqeKBtVxxUhWac9MoLdoOqF2sr95DgNVEAdw5URHuTGn50vQHHY8LUJiyLrrX0S2YKemrTr-0C0YDZ5O5eqWiZTcGq5uU"
            />
          </div>
          {/* Overlapping Decorative Element */}
          <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-primary-container p-8 hidden md:block">
            <div className="border border-outline-variant/20 h-full w-full flex flex-col justify-between p-4">
              <span className="text-on-primary-container font-headline text-4xl">01</span>
              <div className="text-on-primary-container/60 text-[10px] uppercase tracking-[0.2em]">Master Rank Archive No. 4022</div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-4 mt-12 md:mt-24 md:pl-16 flex flex-col justify-center">
          <h2 className="font-headline text-secondary text-sm uppercase tracking-[0.4em] mb-4">The Master Weaver</h2>
          <h1 className="font-headline text-6xl md:text-8xl text-primary leading-tight mb-8">Bishnu<br/>Prasad</h1>
          <p className="text-on-surface-variant leading-relaxed mb-12 max-w-sm">
            A custodian of the Katan Silk heritage for over five decades. Prasad's hands move with a rhythm inherited from seven generations of Benarasi weavers.
          </p>
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="w-12 h-[1px] bg-secondary group-hover:w-20 transition-all duration-500"></span>
            <span className="font-headline text-secondary uppercase tracking-widest text-xs">View Works</span>
          </div>
        </div>
      </section>

      {/* Craftsman's Note Section */}
      <section className="mt-48 bg-surface-bright py-32 border-y border-outline-variant/10">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="mb-12 flex justify-center">
            <PenTool className="text-secondary opacity-80" size={40} strokeWidth={1} />
          </div>
          <blockquote className="font-headline italic text-3xl md:text-5xl text-primary-container leading-snug mb-12">
            "The loom is not just a machine; it is a conversation between the weaver and the thread. If you listen closely, the silk tells you how it wishes to be draped."
          </blockquote>
          <cite className="font-label uppercase tracking-[0.3em] text-secondary text-xs not-italic">— A Note from the Archive, 1998</cite>
        </div>
      </section>

      {/* Signature Techniques Layout */}
      <section className="mt-48 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-24">
          <div>
            <h3 className="font-headline text-4xl text-primary mb-4">Signature Techniques</h3>
            <div className="h-1 w-24 bg-secondary"></div>
          </div>
          <div className="hidden md:block text-right">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Authentication ID</p>
            <p className="font-headline text-secondary italic">#MS-KATAN-77</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          {/* Technique 1 */}
          <div className="space-y-8">
            <div className="aspect-video bg-surface-variant overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                alt="macro photography of golden silk threads being woven on a traditional wooden handloom with soft warm lighting" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxrBnAfzgr3DP8Sm_0CyGqwZ1kBgfmK8EuP0ypMtjEdviFFai3PLw_lwCns1zQQCEQUFp-M0cD5p7dFkOslRO4ip-Xee-SH5xPy-xuaeMmYDF57iONaPVuvO9TXoas7Zl9-1Tt4Cveie5JdQN58MdGcRckJR3uB0BawmbwleyQ17G8fSJohMjqWbntolkQ1bDR0u7W4siu2XLWS5WHhHmBd9N7U13xlOeZhc-KgJEKbh_wwEsPMXhAvVlpuPg2HsGeIQCihS5GKdmU"
              />
            </div>
            <div className="max-w-md">
              <h4 className="font-headline text-2xl text-primary mb-4">Katan Silk Heritage</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Utilizing high-twist silk yarns, Prasad achieves a characteristic crispness and durability that defines the true Katan. Each saree requires forty-five days of focused immersion at the loom.
              </p>
            </div>
          </div>
          
          {/* Technique 2 */}
          <div className="space-y-8 md:mt-32">
            <div className="aspect-square bg-surface-variant overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                alt="close-up of intricate zari floral patterns on a deep maroon silk background showing fine craftsmanship" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlAobecswZArUcyz8H5b-WYFTEgByttowCuS4rqDHbREFDO58r01xGzy35jKVTgD7fqe9YeOVGo1vGpK5kf7hCd3wBroONeQ4JXHKOMeE2VAlCzJ_UVLy7LaPxatem8Dp3lpA8VIIy3UFhboFsbfPYP7ETw1mIxzV5jRyCgMUlwgtZ05-qUE16zXm_zPa6U4o4DmTuYtqIjA0NmIETWSbMrJ27IUspIx8yUG87Sbh53-7U0BhcC_Bpmh6k6kTSZG69HzN_eO7Fdi-5"
              />
            </div>
            <div className="max-w-md">
              <h4 className="font-headline text-2xl text-primary mb-4">Real Zari Kadwa</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                The 'Kadwa' technique involves weaving each motif individually into the silk. Unlike other methods, there are no loose threads on the back, creating a masterpiece of structural integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section: Archival Document Style */}
      <section className="mt-48 mb-24 max-w-4xl mx-auto px-6">
        <div className="border-t border-outline-variant/30 pt-24">
          <h3 className="font-headline text-center text-3xl mb-16 text-primary">The Archival Timeline</h3>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-baseline group">
              <div className="font-headline text-secondary text-2xl shrink-0 w-24 opacity-50 group-hover:opacity-100 transition-opacity">1974</div>
              <div>
                <h5 className="font-label font-bold uppercase tracking-widest text-xs mb-2 text-primary">Initiation</h5>
                <p className="text-on-surface-variant text-sm border-l border-secondary/20 pl-4 py-1">Prasad begins his apprenticeship under his grandfather, Master Weaver Harishchandra.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-baseline group">
              <div className="font-headline text-secondary text-2xl shrink-0 w-24 opacity-50 group-hover:opacity-100 transition-opacity">1992</div>
              <div>
                <h5 className="font-label font-bold uppercase tracking-widest text-xs mb-2 text-primary">The Royal Commission</h5>
                <p className="text-on-surface-variant text-sm border-l border-secondary/20 pl-4 py-1">Commissioned to recreate a 19th-century Mughal floral pattern for the National Textile Archive.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-baseline group">
              <div className="font-headline text-secondary text-2xl shrink-0 w-24 opacity-50 group-hover:opacity-100 transition-opacity">2018</div>
              <div>
                <h5 className="font-label font-bold uppercase tracking-widest text-xs mb-2 text-primary">Master Guardian</h5>
                <p className="text-on-surface-variant text-sm border-l border-secondary/20 pl-4 py-1">Awarded the 'Shilp Guru' title for his lifelong contribution to preserving Varanasi weaving traditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Weavers;
