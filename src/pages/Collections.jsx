import React from 'react';

const Collections = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Archive Title */}
      <header className="px-12 mb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="font-label text-[10px] tracking-[0.4em] uppercase text-secondary mb-4 block">The Archival Collection</span>
            <h1 className="font-headline text-6xl md:text-8xl text-primary leading-none tracking-tight">The Gallery</h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-xs">
              A curated selection of Varanasi's finest hand-woven heritage. Each piece is unique, documenting centuries of weaving technique.
            </p>
          </div>
        </div>
      </header>

      {/* Staggered Curator Grid / Horizontal Experience */}
      <section className="overflow-x-auto flex gap-12 px-12 pb-16 items-start">
        {/* Artifact 01 */}
        <div className="flex-none w-[450px] mt-12 group">
          <div className="relative bg-surface-variant aspect-[3/4] mb-8 overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="close-up of a deep maroon banarasi silk saree with intricate antique gold zari borders draped elegantly over a museum pedestal" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpk9cHHRYyvNOppCAaDhMN3kQ_hMzTfBLPkKReqJpnl3dV39dGGeOCiAOSQrtGtArDv2oXa1RXS-Jy0rulKvZBq-JbpoxvPzzR5l-KC13I76TF7g7CTMsnJCEUDG3m_8AcxBSSijdqX6o1Z3y8GjGUeLI7OjDC9n9wwrgI9EwgcCGR8mAEsTfTUH1usNRt3TlVPDatv4cwC6fU63Fzgjl3hIx31jnVh6B6vv89qMwlupjDH3Uek8ptjDSqhQ_tSBxpN0a-SXACl6QX" 
            />
            <div className="absolute top-6 left-6 mix-blend-difference text-white font-label text-[10px] tracking-widest uppercase">Ref. MS-ARCH-2024-01</div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-3xl text-primary">The Crimson Lotus</h3>
            <p className="font-headline italic text-on-surface-variant text-lg">The Ganga Series - Vol. 01</p>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant/20">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Pure Katan Silk</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">•</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Kadwa Technique</span>
            </div>
            <button className="w-full py-4 bg-primary-container text-white font-label text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-colors duration-500">
              Enquire for Curation
            </button>
          </div>
        </div>

        {/* Artifact 02 */}
        <div className="flex-none w-[550px] mt-32 group">
          <div className="relative bg-surface-variant aspect-square mb-8 overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="wide shot of a golden yellow silk saree with silver floral motifs hanging from the ceiling like an art installation in a minimalist gallery" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDeTsv99Xlm6I19bm2lmQB4coyIWKDcu1d7pI99QzlLUK-TePx2MsybVP3HabeLqbH-4OjSbigtZfGLag_Ff3xTi3T07mm1Q1oeN-shRK2qz45tpapp88w3VdEEVEQ34MNgFBd3uztCFo7DB7kUQbcg_A3RzLZ-wrA485Qz6i4u8-TxcjDcTr6syV67rT2agZA-a1CXBgPm-7-Zyi9q9A7n_MdlhIymwY_B8fvk8wv9885BPq85kXma_Vayh2VE1lyGVqFOQ0R-__" 
            />
            <div className="absolute top-6 left-6 mix-blend-difference text-white font-label text-[10px] tracking-widest uppercase">Ref. MS-ARCH-2024-04</div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-3xl text-primary">Morning Aarti Gold</h3>
            <p className="font-headline italic text-on-surface-variant text-lg">The Ganga Series - Vol. 04</p>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant/20">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Tissue Silk</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">•</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Real Zari</span>
            </div>
            <button className="w-full py-4 bg-primary-container text-white font-label text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-colors duration-500">
              Enquire for Curation
            </button>
          </div>
        </div>

        {/* Artifact 03 */}
        <div className="flex-none w-[450px] mt-0 group">
          <div className="relative bg-surface-variant aspect-[3/4] mb-8 overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="editorial shot of an emerald green saree with peacock motifs draped over a vintage wooden chair with dramatic shadows and golden sunlight" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX0s9VFKpA-r387ReJWbzHy-f7Cgl8iuJhLddX6WdAd6RlEDjR-u6xmVogK9KOlmJ3MeCIZ4f1nf1zW1igKwc9MYhw0mwIVgS4L-c-13unVoeDwxP1sF53S8zZXiYzl7FuJvgvnM2XJPbI8o4CkGUvNlZTa7TC-xYFPjruckndJD45iNXediYcNtgGTo4bGdH0NJwmDSAcjte5hmG-SmFhJgp3OOlBV6dM3z5JABxRbFhIGCnMl27Kh0AojszKfrENLAYDXooqKINC" 
            />
            <div className="absolute top-6 left-6 mix-blend-difference text-white font-label text-[10px] tracking-widest uppercase">Ref. MS-ARCH-2024-07</div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-3xl text-primary">Twilight Ghat</h3>
            <p className="font-headline italic text-on-surface-variant text-lg">The Ganga Series - Vol. 07</p>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant/20">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Upada Silk</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">•</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Meenakari Work</span>
            </div>
            <button className="w-full py-4 bg-primary-container text-white font-label text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-colors duration-500">
              Enquire for Curation
            </button>
          </div>
        </div>

        {/* Artifact 04 */}
        <div className="flex-none w-[500px] mt-24 group">
          <div className="relative bg-surface-variant aspect-[4/5] mb-8 overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="close up detail of intricate white thread work on a translucent pale pink silk fabric highlighting the texture and transparency" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn9TuBM2LX07jaaCsXcHD6H1aDc9sUMcycMQ8si9eIu45w4HO3NZlZxDfsOZQlz_0HjIL-tjjCuMdazkcNLXDBnqOEXYZdBwQ_WxONusV_kCAA0lf5de1FRxhJaOq14Mg2DzeqPXMUfceBAv8PDzwLEcvO5QmwtEEyZwyTAW4aaFZ-p-bY5cQtWZc0YlF7Tp8dyARlJS3WuX9Tlx9IldHqBf82zETttsukm6OO1UIRT9YpVTKD_jtZjXg8oKUGCsIC0cfgnns3h7E9" 
            />
            <div className="absolute top-6 left-6 mix-blend-difference text-white font-label text-[10px] tracking-widest uppercase">Ref. MS-ARCH-2024-12</div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-3xl text-primary">Mist over Banaras</h3>
            <p className="font-headline italic text-on-surface-variant text-lg">The Archive Series - Vol. 12</p>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant/20">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Organza Silk</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">•</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Jamdani Weave</span>
            </div>
            <button className="w-full py-4 bg-primary-container text-white font-label text-[10px] tracking-[0.3em] uppercase hover:bg-primary transition-colors duration-500">
              Enquire for Curation
            </button>
          </div>
        </div>
      </section>

      {/* Archive Detail Section */}
      <section className="mt-40 px-12 max-w-5xl mx-auto text-center">
        <h2 className="font-headline text-4xl text-primary mb-8">The Preservation Standard</h2>
        <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-12">
          Every saree in our Archive is authenticated by our master weavers and documented for its historical significance. We offer private consultations for connoisseurs seeking to build heritage collections.
        </p>
        <button className="inline-block px-12 py-6 bg-secondary-container text-on-secondary-container font-label text-xs tracking-[0.4em] uppercase hover:bg-secondary hover:text-white transition-all duration-500">
          Book Private Viewing
        </button>
      </section>
    </div>
  );
};

export default Collections;
