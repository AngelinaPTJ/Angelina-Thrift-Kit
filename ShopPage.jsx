import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PolaroidFrame from '@/components/PolaroidFrame.jsx';
import FilmGrainOverlay from '@/components/FilmGrainOverlay.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import HandDrawnDivider from '@/components/HandDrawnDivider.jsx';
import { products, categories, conditions, sortOptions } from '@/data/products.js';

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [priceRange, setPriceRange] = useState([15, 150]);
  const [sortBy, setSortBy] = useState('newest');

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleCondition = (cond) => {
    setSelectedConditions(prev => 
      prev.includes(cond) ? prev.filter(c => c !== cond) : [...prev, cond]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedConditions([]);
    setPriceRange([15, 150]);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedConditions.length > 0) {
      filtered = filtered.filter(p => selectedConditions.includes(p.condition));
    }
    
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [selectedCategories, selectedConditions, priceRange, sortBy]);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-archivo text-lg mb-4">Category</h3>
        <div className="space-y-3">
          {categories.filter(c => c.value !== 'all').map(cat => (
            <div key={cat.value} className="flex items-center space-x-2">
              <Checkbox 
                id={`cat-${cat.value}`} 
                checked={selectedCategories.includes(cat.value)}
                onCheckedChange={() => toggleCategory(cat.value)}
              />
              <label htmlFor={`cat-${cat.value}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {cat.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-archivo text-lg mb-4">Condition</h3>
        <div className="space-y-3">
          {conditions.filter(c => c.value !== 'all').map(cond => (
            <div key={cond.value} className="flex items-center space-x-2">
              <Checkbox 
                id={`cond-${cond.value}`} 
                checked={selectedConditions.includes(cond.value)}
                onCheckedChange={() => toggleCondition(cond.value)}
              />
              <label htmlFor={`cond-${cond.value}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {cond.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-archivo text-lg mb-4">Price Range: ${priceRange[0]} - ${priceRange[1]}</h3>
        <Slider
          defaultValue={[15, 150]}
          max={150}
          min={15}
          step={5}
          value={priceRange}
          onValueChange={setPriceRange}
          className="w-full"
        />
      </div>

      <Button variant="outline" onClick={clearFilters} className="w-full border-2 border-foreground font-archivo">
        Clear Filters
      </Button>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Shop Archive - Angelina Thrift Kit</title>
      </Helmet>

      <div className="min-h-screen craft-paper selection:bg-primary selection:text-white">
        <Header />

        <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          
          {/* Page Header */}
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h1 className="font-archivo text-7xl md:text-9xl text-foreground uppercase leading-none tracking-tighter drop-shadow-sm">
                The Archive
              </h1>
              <PermanentMarkerText color="text-primary" rotation={-2} className="text-3xl mt-4 ml-2 md:ml-8 block">
                Contact Sheet No. 1
              </PermanentMarkerText>
            </div>
          </div>

          {/* Narrative / Curation Storytelling Section */}
          <div className="mb-24 space-y-16 lg:space-y-24 border-y-8 border-foreground py-16 relative">
            <div className="scrapbook-overlay"></div>
            
            {/* The Found Objects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} className="relative">
                <div className="photo-tape w-24 h-8 -top-4 right-10 transform rotate-3" />
                <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/293059814d237fe21c632aaa7c7dcc11.png" alt="Found objects grid" className="w-full border-4 border-foreground analog-shadow" />
                <PermanentMarkerText className="absolute -bottom-6 -right-4 text-3xl text-primary bg-white px-2 border-2 border-foreground transform -rotate-6">
                  Twelve Curated Artifacts.
                </PermanentMarkerText>
              </motion.div>
              <div className="prose prose-xl prose-headings:font-archivo text-foreground/80">
                <h2 className="text-5xl text-foreground uppercase mb-6">The Found Objects Grid</h2>
                <p className="font-medium">Every piece in the archive earns its place. We dig through thousands of garments to find the exact denim fade, the perfect leather weight, and the knit that refuses to pill. You aren't just buying clothes; you're adopting history.</p>
              </div>
            </div>

            {/* Tags Don't Lie & Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 prose prose-xl prose-headings:font-archivo text-foreground/80">
                <h2 className="text-5xl text-foreground uppercase mb-6">We Found It So You Didn't Have To</h2>
                <p className="font-medium">Curating vintage is an exhausting, dusty process. We filter out the noise, the fast-fashion donations, and the damaged goods. Our pricing reflects not just the garment, but the provenance of the hunt.</p>
                <div className="mt-8 flex gap-4">
                  <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/d834a11fb28fd811426701f015ef9c60.png" alt="Tags don't lie" className="w-1/2 border-4 border-foreground analog-shadow filter grayscale-[20%]" />
                  <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/493bcc33ab10bf2634c5905d41c3ca50.png" alt="Pricing guide" className="w-1/2 border-4 border-foreground analog-shadow filter grayscale-[20%]" />
                </div>
              </div>
              <motion.div initial={{opacity: 0, x: 20}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} className="order-1 lg:order-2 relative">
                <div className="photo-tape w-32 h-8 -top-3 left-1/2 transform -rotate-2 -translate-x-1/2" />
                <img src="https://horizons-cdn.hostinger.com/1912002f-e863-4654-9315-313637d9e727/a062229246a25d5d6237c0d379dc70d5.png" alt="Provenance of the hunt" className="w-full border-4 border-white analog-shadow" />
                <PermanentMarkerText className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white bg-primary px-4 py-2 border-4 border-foreground -rotate-12 shadow-xl whitespace-nowrap">
                  Tags Don't Lie!
                </PermanentMarkerText>
              </motion.div>
            </div>
          </div>

          {/* Filtering and Grid Logic */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-foreground">
             <h2 className="font-archivo text-3xl uppercase">The Collection</h2>
             <div className="flex items-center gap-4 w-full md:w-auto">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden border-2 border-foreground font-archivo">
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#F2F0E9] border-r-4 border-foreground overflow-y-auto">
                  <div className="mt-8">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex-1 md:w-48">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="border-2 border-foreground rounded-none font-medium h-10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="border-2 border-foreground rounded-none">
                    {sortOptions.map(opt => (
                      <SelectItem key={opt.value} value={opt.value} className="font-medium">{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <aside className="hidden md:block w-64 flex-shrink-0">
              <FilterContent />
            </aside>

            <div className="flex-1">
              {filteredAndSortedProducts.length === 0 ? (
                <div className="py-32 text-center">
                  <PermanentMarkerText className="text-4xl text-muted-foreground">Nothing found here.</PermanentMarkerText>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {filteredAndSortedProducts.map((product, i) => {
                    const rotate = (i % 3 === 0) ? -1 : (i % 2 === 0) ? 1.5 : -0.5;
                    const isSoldOut = product.status === 'SOLD';
                    
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (i % 6) * 0.1 }}
                      >
                        <Link to={`/product/${product.id}`} className="block group">
                          <PolaroidFrame 
                            rotation={rotate}
                            className={isSoldOut ? "opacity-80" : ""}
                            caption={
                              <PermanentMarkerText className="text-3xl text-foreground">
                                ${product.price}
                              </PermanentMarkerText>
                            }
                          >
                            <FilmGrainOverlay opacity={0.15} />
                            <div className="relative">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className={`w-full aspect-[4/5] object-cover filter contrast-[1.1] transition-all duration-300 ${isSoldOut ? 'grayscale' : 'grayscale-[10%] group-hover:grayscale-0'}`}
                              />
                              
                              {isSoldOut && (
                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10">
                                  <PermanentMarkerText 
                                    rotation={-15} 
                                    className="text-6xl md:text-7xl text-primary marker-strike tracking-widest drop-shadow-md"
                                  >
                                    SOLD
                                  </PermanentMarkerText>
                                </div>
                              )}
                              {product.status === 'NEW' && !isSoldOut && (
                                <div className="absolute top-2 left-2 z-20">
                                  <PermanentMarkerText 
                                    className="text-xl text-primary bg-[#F2F0E9] px-2 py-1 transform -rotate-12 border-2 border-foreground"
                                  >
                                    NEW!
                                  </PermanentMarkerText>
                                </div>
                              )}
                            </div>
                          </PolaroidFrame>
                          
                          <div className="mt-4 px-2">
                            <h3 className="font-archivo text-xl uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center justify-between mt-2 font-medium text-sm text-foreground/60 uppercase">
                              <span>{product.size}</span>
                              <span>{product.era}</span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <HandDrawnDivider className="mt-24 opacity-40" strokeWidth={2} />
        </main>

        <Footer />
      </div>
    </>
  );
}
