import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FilmGrainOverlay from '@/components/FilmGrainOverlay.jsx';
import HandDrawnDivider from '@/components/HandDrawnDivider.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import PolaroidFrame from '@/components/PolaroidFrame.jsx';
import { products } from '@/data/products.js';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Angelina Thrift Kit | Analog Archive</title>
      </Helmet>

      <div className="min-h-screen craft-paper selection:bg-primary selection:text-white overflow-hidden">
        <Header />

        <main>
          {/* Manifesto Hero Section */}
          <section className="relative w-full h-[85vh] md:h-[95vh] bg-foreground overflow-hidden border-b-8 border-foreground">
            <FilmGrainOverlay opacity={0.25} />
            <img 
              src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/980fa9ae44086213561a462d47d2452f.png" 
              alt="Start a collection, not a storage space manifesto" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-4 max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="font-archivo text-5xl md:text-7xl lg:text-9xl text-white uppercase leading-none tracking-tighter mix-blend-overlay opacity-90 mb-4">
                  Start A Collection
                </h2>
                <PermanentMarkerText 
                  as="div"
                  color="text-primary" 
                  className="text-3xl md:text-5xl lg:text-6xl drop-shadow-2xl bg-white/10 backdrop-blur-sm px-6 py-2 inline-block border-2 border-white/20 transform -rotate-2"
                >
                  Not a storage space.
                </PermanentMarkerText>
              </motion.div>
            </div>
          </section>

          {/* History Is Better Than New Collage */}
          <section className="py-24 bg-[#F2F0E9] relative">
            <div className="scrapbook-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <h2 className="font-archivo text-6xl md:text-8xl uppercase leading-[0.85] mb-8 text-foreground mix-blend-multiply">
                    History Is <br/>
                    <span className="text-primary">Better</span> <br/>
                    Than New
                  </h2>
                  <p className="font-medium text-xl text-foreground/80 max-w-md mb-8 leading-relaxed">
                    Fast fashion fills landfills. True vintage fills archives. We source heavy leathers, rigid denims, and intact knits that have already proven their durability. 
                  </p>
                  <Link 
                    to="/the-cut" 
                    className="inline-flex items-center font-archivo text-xl border-b-4 border-foreground hover:text-primary hover:border-primary transition-colors pb-1"
                  >
                    READ THE SYLLABUS <ArrowRight className="ml-2 w-6 h-6 stroke-[3]" />
                  </Link>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="photo-tape w-40 h-10 -top-4 left-1/2 -translate-x-1/2 transform rotate-1" />
                  <img 
                    src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/1366bee5eb4b2cc751fe927eb916e5fb.png" 
                    alt="Vintage magazine collage" 
                    className="w-full h-auto border-8 border-white analog-shadow contrast-125 filter grayscale-[10%]"
                  />
                  <div className="absolute -bottom-8 -left-4">
                    <PermanentMarkerText className="text-4xl text-white bg-foreground px-4 py-2 border-4 border-white transform rotate-3">
                      Circa 1990s.
                    </PermanentMarkerText>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <HandDrawnDivider color="hsl(var(--foreground))" strokeWidth={4} className="my-8 opacity-50" />

          {/* Featured Latest Finds */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-archivo text-5xl md:text-7xl text-foreground uppercase">Artifacts</h2>
                <PermanentMarkerText color="text-primary" rotation={2} className="text-2xl mt-2 block">
                  Fresh out the bins.
                </PermanentMarkerText>
              </div>
              <Link to="/shop" className="font-archivo text-lg border-b-4 border-foreground hover:text-primary hover:border-primary transition-colors pb-1">
                VIEW ALL ARCHIVE
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              {featuredProducts.map((product, index) => {
                const rotations = [-2, 1.5, -1];
                const r = rotations[index % rotations.length];
                
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Link to={`/product/${product.id}`} className="block group">
                      <PolaroidFrame 
                        rotation={r}
                        caption={
                          <PermanentMarkerText className="text-2xl text-foreground">
                            ${product.price}
                          </PermanentMarkerText>
                        }
                      >
                        <FilmGrainOverlay opacity={0.12} />
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full aspect-[4/5] object-cover filter grayscale-[20%] contrast-125 group-hover:grayscale-0 transition-all duration-500"
                        />
                        {product.status === 'NEW' && (
                          <div className="absolute top-4 left-4 z-20">
                            <PermanentMarkerText 
                              className="text-3xl text-primary bg-[#F2F0E9] px-2 py-1 transform -rotate-12 border-2 border-foreground"
                            >
                              NEW!
                            </PermanentMarkerText>
                          </div>
                        )}
                      </PolaroidFrame>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Are You Ready Conversion Section */}
          <section className="relative py-32 mt-20 border-t-8 border-foreground overflow-hidden">
            <FilmGrainOverlay opacity={0.3} />
            <img 
              src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/8eac5f71afb6c8be00347fc27e456eaf.png" 
              alt="Are you ready magazine spread" 
              className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] opacity-40 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
            
            <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-archivo text-6xl md:text-9xl uppercase mb-8 drop-shadow-lg text-balance">
                  Are You Ready?
                </h2>
                <PermanentMarkerText className="text-3xl md:text-5xl text-foreground bg-white px-6 py-2 transform rotate-2 inline-block border-4 border-foreground analog-shadow mb-12">
                  To hunt the archive.
                </PermanentMarkerText>
                <div>
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-foreground font-archivo text-2xl border-4 border-foreground hover:bg-foreground hover:text-white transition-all duration-300 analog-shadow hover:-translate-y-1 active:translate-y-0 active:shadow-none"
                  >
                    ENTER THE ARCHIVE <ArrowRight className="ml-3 w-8 h-8 stroke-[3]" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
