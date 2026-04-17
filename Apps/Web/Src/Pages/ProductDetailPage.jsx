import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PolaroidFrame from '@/components/PolaroidFrame.jsx';
import FilmGrainOverlay from '@/components/FilmGrainOverlay.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import { products } from '@/data/products.js';
import { useCart } from '@/contexts/CartContext.jsx';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen craft-paper flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          <PermanentMarkerText className="text-4xl mb-4">Item not found.</PermanentMarkerText>
          <Link to="/shop" className="font-archivo underline hover:text-primary">Back to Archive</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.status === 'SOLD') {
      toast.error('This item is already sold.');
      return;
    }
    addToCart(product, quantity);
    toast.success('Added to your kit.');
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${product.name} | Angelina Thrift Kit`}</title>
      </Helmet>

      <div className="min-h-screen bg-[#F2F0E9] selection:bg-primary selection:text-white">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          <div className="scrapbook-overlay"></div>
          
          <Link to="/shop" className="relative z-10 inline-flex items-center font-archivo text-sm hover:text-primary mb-12 uppercase tracking-wide">
            <ArrowLeft className="w-5 h-5 mr-2 stroke-[3]" />
            Return to Archive
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full bg-white p-8 md:p-12 border-8 border-foreground analog-shadow"
            >
              <h1 className="font-archivo text-5xl md:text-7xl text-foreground leading-none tracking-tighter uppercase mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-10">
                <PermanentMarkerText className="text-5xl text-primary">
                  ${product.price.toFixed(2)}
                </PermanentMarkerText>
                <div className="h-12 w-[3px] bg-foreground transform rotate-12 opacity-20" />
                <span className="font-archivo text-xl text-foreground uppercase border-2 border-foreground px-3 py-1 bg-[#F2F0E9]">
                  {product.condition} Condition
                </span>
              </div>
              
              <div className="mb-6 inline-block">
                <PermanentMarkerText className="text-xl text-foreground bg-primary/20 px-2 transform -rotate-1">
                  Preloved Start from 5K!
                </PermanentMarkerText>
              </div>

              <div className="prose prose-lg text-foreground/80 font-medium mb-12">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-12 border-t-4 border-b-4 border-foreground py-8">
                <div>
                  <span className="block font-archivo text-sm text-foreground/60 mb-1">ERA</span>
                  <span className="font-medium text-xl uppercase">{product.era}</span>
                </div>
                <div>
                  <span className="block font-archivo text-sm text-foreground/60 mb-1">SIZE</span>
                  <span className="font-medium text-xl uppercase">{product.size}</span>
                </div>
                <div>
                  <span className="block font-archivo text-sm text-foreground/60 mb-1">CATEGORY</span>
                  <span className="font-medium text-xl uppercase">{product.category}</span>
                </div>
                <div>
                  <span className="block font-archivo text-sm text-foreground/60 mb-1">MATERIAL</span>
                  <span className="font-medium text-xl uppercase">Vintage Stock</span>
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="font-archivo text-lg">QTY</span>
                  <div className="flex items-center border-4 border-foreground bg-[#F2F0E9]">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors active:bg-foreground active:text-white"
                      disabled={product.status === 'SOLD'}
                    >
                      <Minus className="w-5 h-5 stroke-[3]" />
                    </button>
                    <span className="w-12 text-center font-archivo text-xl">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors active:bg-foreground active:text-white"
                      disabled={product.status === 'SOLD'}
                    >
                      <Plus className="w-5 h-5 stroke-[3]" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.status === 'SOLD'}
                  className="w-full bg-primary text-white font-archivo text-2xl py-5 border-4 border-primary hover:bg-foreground hover:border-foreground transition-all duration-300 analog-shadow active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {product.status === 'SOLD' ? 'SOLD OUT' : 'ADD TO KIT'}
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[500px] flex items-center justify-center"
            >
              <PolaroidFrame rotation={2} className="w-full max-w-lg z-20 relative analog-shadow">
                <FilmGrainOverlay opacity={0.15} />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full aspect-[4/5] object-cover filter contrast-[1.1] ${product.status === 'SOLD' ? 'grayscale' : 'grayscale-[10%]'}`}
                />
                {product.status === 'SOLD' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10">
                    <PermanentMarkerText 
                      rotation={-15} 
                      className="text-6xl md:text-7xl text-primary marker-strike tracking-widest drop-shadow-md"
                    >
                      SOLD
                    </PermanentMarkerText>
                  </div>
                )}
              </PolaroidFrame>
            </motion.div>
          </div>

          {/* Narrative/Care Instruction Section */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 border-t-8 border-foreground pt-16">
             <div className="lg:col-span-5 relative">
               <div className="photo-tape w-24 h-8 -top-4 right-10 transform rotate-3" />
               <img 
                 src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/f3bc737e6e8a6cfc69075f290400b96c.jpg" 
                 alt="Handmade Kraft Tag" 
                 className="w-full border-4 border-white analog-shadow filter contrast-125 sepia-[10%] transform -rotate-2" 
               />
               <PermanentMarkerText className="absolute bottom-4 right-4 text-2xl text-primary bg-white px-2 border-2 border-foreground transform -rotate-12">
                 Please Take Care Of Me!
               </PermanentMarkerText>
             </div>
             
             <div className="lg:col-span-7 flex flex-col justify-center bg-white p-8 md:p-12 border-4 border-foreground analog-shadow">
                <h3 className="font-archivo text-4xl uppercase mb-6">The Provenance of the Hunt</h3>
                <p className="font-medium text-lg text-foreground/80 mb-8 leading-relaxed">
                  Every piece in the Angelina Thrift Kit is treated as an artifact. We found it so you didn't have to. Our pricing reflects the hours spent in dust-filled bins, the preservation process, and the assurance of quality. 
                </p>
                
                <h4 className="font-archivo text-2xl uppercase mb-4 border-b-2 border-foreground pb-2">Care Instructions</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">🧺</span>
                    <span className="font-archivo text-xs uppercase">Wash Cold</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">⨂</span>
                    <span className="font-archivo text-xs uppercase">No Bleach</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">◎</span>
                    <span className="font-archivo text-xs uppercase">Tumble Low</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">▭</span>
                    <span className="font-archivo text-xs uppercase">Dry Flat</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">⏚</span>
                    <span className="font-archivo text-xs uppercase">Cool Iron</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border-2 border-foreground/20 text-center bg-[#F2F0E9]">
                    <span className="text-2xl mb-2">℗</span>
                    <span className="font-archivo text-xs uppercase">Dry Clean Ok</span>
                  </div>
                </div>
             </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="border-t-8 border-foreground pt-16 relative z-10">
              <h2 className="font-archivo text-4xl mb-12 uppercase text-center md:text-left">Similar Finds</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {relatedProducts.map((rp, i) => (
                  <Link key={rp.id} to={`/product/${rp.id}`} className="block group">
                    <PolaroidFrame rotation={i % 2 === 0 ? -1 : 2} caption={<PermanentMarkerText className="text-2xl">${rp.price}</PermanentMarkerText>}>
                      <FilmGrainOverlay opacity={0.1} />
                      <img 
                        src={rp.image} 
                        alt={rp.name}
                        className="w-full aspect-square object-cover filter contrast-[1.1] grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
                      />
                    </PolaroidFrame>
                    <h3 className="font-archivo text-lg mt-4 uppercase group-hover:text-primary bg-white p-2 border-2 border-foreground inline-block">{rp.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </main>
        <Footer />
      </div>
    </>
  );
}
