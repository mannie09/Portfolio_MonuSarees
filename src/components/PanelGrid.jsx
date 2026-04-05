import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MediaPanel from './MediaPanel';

// Texts extracted exactly point-for-point from the Stitch output HTML.
// (Due to sandboxing preventing raw HTML background-image scraping, placeholder visuals remain assigned to the exact Stitch panel text arrays)
const DATA_PANELS = [
  { id: 0, title: "The Banarasi Collection", subtitle: "Hand-loomed in the Heart of Kashi", category: "Heritage Weave", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqbabFDR20HMoQ5CMPFjJ7ODGuNsEobX-g8lvBap-o8f0oxFPxZylSMdEnyyntMXgCHnTiGTbiKFyEDQV7tF7xMw8orwug9u3zmm0RxQkkREFsPQpYU5VwhV47Yz6htNvSOThTuCyLCHHtMZv6dS74CYVWDAnTgOB2nN5M3jgenL92TSYtVw6K1o7SuWyMzVi5W49wI2sosEgJgSf0g4L18W-rb2XZCx_OySLixvEBPbXoSrbVOjdr2pCJHHVEkLW89JawUE4sJre1" },
  { id: 1, title: "Golden Zari Work", subtitle: "Antique Gold Threading on Pure Silk", category: "Metal Craft", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGugvXvnNw77knq96g6Zj3YNuJPSBnafqxDziFEariUCei-Tqjw1JpFC89p7VYPlzta8r6Z7B1viq9SExY2-ghHQ0qrXMZopdjkxr2NmYiFhEpMTyAAIDg0obIPpBSDaAA8UfcmmzRwB2EL6slzddcVKyghxQsPs4ydfzM7aSK_ZvQByrA4janoUr4os7iKdn2aX9BiFfYzA2wytoP5vocltMJCglZ7fOtXn0bOhkitxmGELCBax-r6ycp_mVScYi5B6M8t4yekKBo" },
  { id: 2, title: "The Ganga Series", subtitle: "Inspired by the Holy River's Morning Mist", category: "Nature's Muse", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpLxnp7zMs1iuQG95goR0E2ecN3z8ZFJQATdn1lizCwbtHXXDfwyiSJTzXwGK_qqW3ROAU60HfPT3m_Wj16Joqp5C-xfJdjoaECNaAJR0jnp0sl5sYnpr2qwIjrZjdObClCBpcEFPV-2FtQS73WUN3mF_E0YBcFNQ9T8BPnr0MGzK7cWKUJXU7nW11v7HAsLAnXKHpbEGw5u5bH6W5Hz_Grrogt12EW-bMH9h3cBn2s58saDhHFSVslbx6-NO7pzbT0e8ZisM5_Q_R" },
  { id: 3, title: "Meenakari Magic", subtitle: "Traditional Persian-Indian Fusion Weave", category: "Artisan Fusion", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6x6ojCRTDBc2fBF-cHMygHK2aG_NUWLq7lz1FP3naCinPZdolW9HXZVx_u3UnkJqAqyYANgo1ZaRjm5ZfE3drCZqaE5n3_rB3d8eDuOvk6NrQSJIy5-9BTAxxci4VIIwQ9sTamFr9cpIaLtiinFHs5sB8Ag5xE9ChWGu9Zxf8GpiPwn4iYzavNJ9PBOhsoa2lb0cV6ht84pFIhk9IV3rJ4BYblMBknCfduuta5FmX6UAETGRK3CdprfG9KnT2W7kxgVH6PVMol6hg" },
  { id: 4, title: "Zari Detail", subtitle: "Pure Craftsmanship", category: "Detail", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlAobecswZArUcyz8H5b-WYFTEgByttowCuS4rqDHbREFDO58r01xGzy35jKVTgD7fqe9YeOVGo1vGpK5kf7hCd3wBroONeQ4JXHKOMeE2VAlCzJ_UVLy7LaPxatem8Dp3lpA8VIIy3UFhboFsbfPYP7ETw1mIxzV5jRyCgMUlwgtZ05-qUE16zXm_zPa6U4o4DmTuYtqIjA0NmIETWSbMrJ27IUspIx8yUG87Sbh53-7U0BhcC_Bpmh6k6kTSZG69HzN_eO7Fdi-5" },
  { id: 5, title: "Varanasi Heritage", subtitle: "Since 1996", category: "Monu Sarees", type: "hero", src: "" },
  { id: 6, title: "Katan Silk Heritage", subtitle: "The Expression of Luxury", category: "The Ultimate", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByH7o3V9Rrzb7JvMk0J2zhht5MSj8fLI5gy9ZqlAMV1REF1WLy4QaygClrI8MFXcBAhRlQOzRFziPOIDc4I-DwWimiK0yKzMfEmGLlaLdM0A85nXmFtJxkKeFIjp-fmGf5LzkFzmXBdsok1b4IcuQayD_41bvLML02TTLMnd_MQdHykvBFclqCGSzAc7tFD4LjBFWZVWhzXjYwZYqBHhM7tuWC7aaXjL6EdWtZfU3r7BSRpJSbuwQ_m3QhSz0sTx597CwsNpfE76ud" },
  { id: 7, title: "The Master Weaver", subtitle: "Soul of Kashi", category: "Craftsmanship", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7fqVNxnFZY7xCnBwy2w6BFVUdzp7czrSCK32eiSuzExFlVL-cI7L04jBXFTLesyPDSHxuiWgUO-b9G3lDxzUEiain67a1Rt2AMMdJa55jQAd27quK9Ek3C1G2Yco0YL2Iy9mD4mVfeMKsmmpN0b9jI8wKTQ_TjQgIUbUdS9QIkcx1XU6m3hTMjM8sNHA-yuk7DjTudt4Y7IkM0JwoY2hKNJuLNm9JrlVaQXMh_yKpOhw7s3n-rjX_Msd1NlfJcThg7ASlCAv0HONC" },
  { id: 8, title: "Ganga Aarti", subtitle: "The Origin", category: "Aarti", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuClE28Xa-fk3-89yvvZdXW2MToakXWZwriyX1jytAZ65FtNUqEqdNKRi8Mjcwaa7ivYp4oCtRBlWLEIHs6Yet-JTFPDvdv3ewi45Fzo_l7jkcx200AZgeVREcC8T0C9Upod4A1Z9iPfIBUpZMp2bGX_2GMCTkBLq8Vefkinq-plToo-nwabRO-I-eknPiZLz9FzUsFB3f-17bFJh5ceOjgNskM4yhDgC4shDrqGpd0GA9xfgIOhwz_wjT_KZAURCn800WTMhDF1S6p2" },
  { id: 9, title: "Raw Silk Threads", subtitle: "Ethically Sourced & Hand-Loomed", category: "Vintage", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDraQWz8CZJ5YcbV71DPdjXH9Vt4K7feeFimbjfXONa-Abpk5BftghPQZItbVvbQyI4bV4bFTBqGw2rO8DvlMFbg7Ko5iGv4GAKkPKiFrg1z_gNfKHK3sQxVuAa4OJWeZujZ9HDyYslqB9kULOWxxKddM2z90TVyBGrNe_prA4QrgpSP0uoKsi1ln20c6dH_j1bBemBP0A7QkhaBp6hOYzEiq2IlQKrRXnE-8zTQ-7ZA9IrENQu_Tin3sOxL3o2WrF2NQ8jipmGqegB" },
  { id: 10, title: "The Legacy", subtitle: "Master Artisan at Work", category: "Legacy", type: "image", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRt3u3P791hlEB4lPyN0H8KjO2fIyYMj30nAEgq1FYm7tIagkkHqcLgsfPJMjmvDGXsTTJIn9WcjefGfsxk_TxqfExOxtQlH1Rk5Krezwvy1GroXZQx_kmDyA87UYLjCM6U90Xton0U7HQhcPeKpri_Vo9Mboascm3obNPj09Y7zkZniOwU-pdFH-1w4X9vgR9apYkHZi2wZnHKFpKdZTswAsfXANuC4lJWWP7rwPAHqRpr8T5TUmUDE2gvGABiv2e27BkRs7bcfv" }
];

const getExitDelay = () => Math.random() * 0.4;

const PanelGrid = ({ onToggleCinematic }) => {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  return (
    <motion.div 
      // STRICT ALAN MENKEN HORIZONTAL STRIP SEQUENCE FOR ALL DEVICES
      className="flex flex-row w-full h-[100dvh] relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
      onMouseLeave={() => setHoveredPanel(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      {DATA_PANELS.map((panel, index) => {
        // We use 9 total panels structurally extracted from the Stitch HTML
        const isCenter = index === 4; 
        const isHovered = hoveredPanel === index;
        
        let flexBase = isCenter ? 5 : 1;
        if (!isCenter && isHovered) {
          flexBase = 3.5;
        }

        return (
          <MediaPanel 
            key={panel.id}
            panel={panel}
            isCenter={isCenter}
            flexBase={flexBase}
            isHovered={isHovered}
            hoveredPanel={hoveredPanel}
            onHover={() => setHoveredPanel(index)}
            onToggleCinematic={isCenter ? onToggleCinematic : undefined}
            exitDelay={getExitDelay()}
          />
        );
      })}
    </motion.div>
  );
};

export default PanelGrid;
