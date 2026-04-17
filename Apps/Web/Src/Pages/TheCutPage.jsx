import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HandDrawnDivider from '@/components/HandDrawnDivider.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import FilmGrainOverlay from '@/components/FilmGrainOverlay.jsx';

// Import subcomponents
import MaterialCard from '@/components/MaterialCard.jsx';
import StylingGuideCard from '@/components/StylingGuideCard.jsx';
import ColorPaletteSection from '@/components/ColorPaletteSection.jsx';
import HangerDisplay from '@/components/HangerDisplay.jsx';
import KitBundle from '@/components/KitBundle.jsx';
import VintageTagGuide from '@/components/VintageTagGuide.jsx';
import PackagingShowcase from '@/components/PackagingShowcase.jsx';

const ExpandableSection = ({ title, id, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="scroll-mt-28 mb-8 border-4 border-foreground bg-white analog-shadow overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 bg-[#F2F0E9] hover:bg-[#E8E5D8] transition-colors focus:outline-none border-b-4 border-transparent"
        style={{ borderBottomColor: isOpen ? 'hsl(var(--foreground))' : 'transparent' }}
      >
        <h2 className="font-archivo text-3xl md:text-5xl uppercase text-left">{title}</h2>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-10 h-10 stroke-[3] text-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="p-6 md:p-12 relative overflow-hidden">
              <div className="scrapbook-overlay"></div>
              <div className="relative z-10">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function TheCutPage() {
  const toc = [
    { id: "teasers", title: "0. The Studio" },
    { id: "materials", title: "1. Fabric & Materials" },
    { id: "styling", title: "2. The Styling Guide" },
    { id: "color", title: "3. Color Theory" },
    { id: "proportions", title: "4. Proportions" },
    { id: "kits", title: "5. Kit Bundles" },
    { id: "tags", title: "6. Tag Anatomy" },
    { id: "packaging", title: "7. The Archive Box" },
  ];

  return (
    <>
      <Helmet>
        <title>The Cut - Education | Angelina Thrift Kit</title>
      </Helmet>

      <div className="min-h-screen bg-[#F2F0E9] selection:bg-primary selection:text-white">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          
          <div className="text-center mb-16">
            <h1 className="font-archivo text-6xl md:text-8xl text-foreground uppercase tracking-tighter mb-4">
              THE CUT
            </h1>
            <PermanentMarkerText className="text-2xl md:text-3xl text-primary" rotation={-2}>
              A syllabus on analog construction.
            </PermanentMarkerText>
          </div>

          <div className="bg-white border-4 border-foreground p-8 mb-20 analog-shadow transform rotate-1 max-w-3xl mx-auto">
            <h2 className="font-archivo text-2xl mb-6 border-b-4 border-foreground pb-4 inline-block">INDEX</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {toc.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="font-medium text-lg hover:text-primary hover:underline transition-colors flex items-center"
                  >
                    <span className="font-archivo mr-3">{item.title.split('.')[0]}.</span>
                    {item.title.split('.')[1]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 0: The Studio Teasers (NEW) */}
          <ExpandableSection title="The Studio" id="teasers" defaultOpen={true}>
            <div className="mb-12">
               <p className="text-xl font-medium leading-relaxed max-w-3xl">
                 Pieces for women who demand personality over production. The studio is constantly sourcing premiums and curating the next editorial drop.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} className="relative">
                <div className="photo-tape w-24 h-8 -top-3 left-1/4 transform -rotate-6" />
                <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/54449ddeaaa81f3495d5e46f95f084e1.png" alt="Coming 2U Live" className="w-full border-4 border-foreground analog-shadow" />
                <PermanentMarkerText className="absolute -bottom-6 -right-2 text-3xl text-white bg-primary px-3 py-1 border-2 border-foreground transform rotate-6">
                  Coming 2U Live!
                </PermanentMarkerText>
              </motion.div>

              <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} className="relative">
                 <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/7d8b5dc2d141308d669d3e278f8d136e.png" alt="Get anything you'll like" className="w-full border-4 border-foreground analog-shadow filter grayscale-[20%]" />
                 <div className="mt-8 bg-white p-6 border-4 border-foreground transform -rotate-1">
                   <h3 className="font-archivo text-2xl uppercase mb-2">Premiums Have Entered</h3>
                   <p className="font-medium text-foreground/80">Get anything you'll like. We don't just sell clothes; we curate editorial pieces that stand on their own.</p>
                 </div>
              </motion.div>
            </div>
            
            <div className="relative h-64 md:h-96 w-full border-8 border-white analog-shadow overflow-hidden group">
               <FilmGrainOverlay opacity={0.2} />
               <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/8eac5f71afb6c8be00347fc27e456eaf.png" alt="Magazine Spread" className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <PermanentMarkerText className="text-4xl md:text-6xl text-white drop-shadow-xl" rotation={-2}>Historical Context Matters.</PermanentMarkerText>
               </div>
            </div>
          </ExpandableSection>

          {/* Section 1: Materials */}
          <ExpandableSection title="Fabric & Materials" id="materials">
            <div className="max-w-4xl mb-12">
              <p className="text-xl font-medium leading-relaxed">
                Before fast fashion, fabrics had weight. We source garments constructed from natural fibers that were built to break in, not break down.
              </p>
            </div>
            
            <MaterialCard 
              title="Heavy Leather"
              description="True vintage leather tells a story through its patina. It wasn't chemically softened to simulate age; it was broken in by decades of elements, movement, and life."
              image="https://images.unsplash.com/photo-1591363381206-cf5f6c5384fa"
              annotation="Natural Grain"
              features={[
                "Look for full grain, not 'Genuine Leather' (bonded scraps)",
                "Check stress points for cracking vs natural creasing",
                "Heavy brass hardware is a strong indicator of quality"
              ]}
            />
            
            <HandDrawnDivider className="opacity-20" />
            
            <MaterialCard 
              reversed
              title="The Denim Weave"
              description="Pre-1990s denim was loomed, not mass-extruded. It holds weight, resists tear, and forms structural fades based on the wearer's anatomy."
              image="https://images.unsplash.com/photo-1660190703669-61ba06e9ef80"
              annotation="Selvedge Edge"
              features={[
                "100% rigid cotton—no elastic or poly-blends",
                "Check inside outseam for red-line selvedge",
                "Single-stitch hems indicate older, more durable methods"
              ]}
            />
          </ExpandableSection>

          {/* Section 2: Styling Guide */}
          <ExpandableSection title="The Styling Guide" id="styling">
            <StylingGuideCard 
              title="Layering 101"
              tips={[
                { title: "Length Variation", desc: "Never have two bottom hemlines end at the exact same spot. Stagger layers to create depth." },
                { title: "Texture Mixing", desc: "Pair rigid fabrics (denim/leather) with soft ones (silk/mohair) to prevent looking stiff." },
                { title: "The 1/3 Rule", desc: "Tuck or crop your tops to maintain a 1/3 top to 2/3 bottom visual ratio." }
              ]}
              images={[
                "https://images.unsplash.com/photo-1569705001578-d24d9c95b960",
                "https://images.unsplash.com/photo-1572727739878-ed77a47bb947"
              ]}
            />
          </ExpandableSection>

          {/* Section 3: Color Theory */}
          <ExpandableSection title="Color Theory" id="color">
            <ColorPaletteSection 
              season="Autumn"
              description="Earthy, grounded tones dominate vintage archives. They pair effortlessly because they exist together in nature. Always anchor brights with a strong neutral."
              image="https://images.unsplash.com/photo-1650177043873-ca284558be52"
              palettes={[
                {
                  name: "The Core Neutrals",
                  colors: [
                    { hex: "#2C2C2C", label: "Faded Charcoal" },
                    { hex: "#D2C5B3", label: "Oatmeal" },
                    { hex: "#8B7355", label: "Camel" }
                  ]
                }
              ]}
            />
          </ExpandableSection>

          {/* Section 4: Proportions */}
          <ExpandableSection title="Proportions & Hierarchy" id="proportions">
            <HangerDisplay 
              title="The Anatomy of a Fit"
              description="How pieces interact on the hanger translates to how they interact on the body. Notice the varied textures and strategic color blocking."
              image="https://images.unsplash.com/photo-1688233814692-8d5e32148572"
              annotations={[
                { text: "Heavy Base Layer", top: "20%", left: "10%", direction: "right", rotation: -5 },
                { text: "Texture Contrast", top: "50%", left: "60%", direction: "left", rotation: 4 }
              ]}
            />
          </ExpandableSection>

          {/* Section 5: The Kits */}
          <ExpandableSection title="The Kit Bundles" id="kits">
             <div className="max-w-4xl mb-12">
              <p className="text-xl font-medium leading-relaxed">
                Sometimes you need the whole look. We curate full kits designed to take the guesswork out of vintage styling.
              </p>
            </div>
            <KitBundle 
              title="The Essentials Kit"
              description="The foundational pieces every archive needs. One heavy jacket, perfect denim, a layering tee, and a structured accessory."
              price="$285"
              stylingTip="Keep the tee tucked. Let the jacket do the talking. The boots tie the leather tone together."
              items={[
                { name: "Leather Moto", image: "https://images.unsplash.com/photo-1591363381206-cf5f6c5384fa" },
                { name: "501 Denim", image: "https://images.unsplash.com/photo-1660190703669-61ba06e9ef80" },
                { name: "White Basic", image: "https://images.unsplash.com/photo-1572727739878-ed77a47bb947" },
                { name: "Leather Belt", image: "https://images.unsplash.com/photo-1673168871203-7fe0f7193eb8" }
              ]}
            />
          </ExpandableSection>

          {/* Section 6: Tags */}
          <ExpandableSection title="Tag Anatomy" id="tags">
            <div className="mb-12">
              <p className="text-xl font-medium max-w-3xl">
                The tag is the passport of the garment. It tells us when it was made, where it came from, and how it was constructed.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <VintageTagGuide 
                title="The Black Tab"
                era="1980s Era"
                image="https://images.unsplash.com/photo-1693631561710-c3afb1c6449c"
                rotation={-2}
                details={[
                  "Made in USA marking indicates pre-1990s production",
                  "Care instructions are woven, not printed",
                  "Single-stitch attachment at the collar"
                ]}
              />
            </div>
          </ExpandableSection>

          {/* Section 7: Packaging */}
          <ExpandableSection title="The Archive Box" id="packaging">
            <PackagingShowcase />
          </ExpandableSection>

        </main>
        <Footer />
      </div>
    </>
  );
}
