import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PolaroidFrame from '@/components/PolaroidFrame.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import { useCart } from '@/contexts/CartContext.jsx';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Your Kit - Angelina Thrift Kit</title>
        </Helmet>
        <div className="min-h-screen craft-paper flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-foreground/20 mb-6" />
            <h1 className="font-archivo text-5xl text-foreground mb-4 uppercase">Your kit is empty</h1>
            <PermanentMarkerText className="text-2xl text-muted-foreground mb-8">
              Time to go hunting.
            </PermanentMarkerText>
            <Button asChild size="lg" className="bg-primary text-white font-archivo text-xl rounded-none border-2 border-foreground analog-shadow hover:bg-foreground hover:-translate-y-1 transition-all">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Your Kit - Angelina Thrift Kit</title>
      </Helmet>

      <div className="min-h-screen craft-paper selection:bg-primary selection:text-white">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="font-archivo text-5xl md:text-7xl text-foreground mb-12 uppercase border-b-4 border-foreground pb-6">
            Your Kit
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border-4 border-foreground p-6 flex flex-col sm:flex-row gap-6 analog-shadow"
                >
                  <div className="w-32 flex-shrink-0">
                    <PolaroidFrame rotation={-2} className="p-2 pb-8">
                      <img src={item.image} alt={item.name} className="w-full aspect-square object-cover grayscale-[20%]" />
                    </PolaroidFrame>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-archivo text-2xl uppercase hover:text-primary transition-colors">{item.name}</h3>
                      </Link>
                      <PermanentMarkerText className="text-2xl text-primary mt-2 block">
                        ${item.price.toFixed(2)}
                      </PermanentMarkerText>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border-2 border-foreground">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-archivo">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-foreground/60 hover:text-primary transition-colors flex items-center font-archivo text-sm uppercase"
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-4 border-foreground p-8 sticky top-28 analog-shadow">
                <h2 className="font-archivo text-3xl uppercase mb-6 border-b-2 border-foreground pb-4">Summary</h2>
                
                <div className="space-y-4 mb-8 font-medium text-lg">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-foreground pt-4 mt-4">
                    <span className="font-archivo text-2xl">Total</span>
                    <PermanentMarkerText className="text-3xl text-primary">${total.toFixed(2)}</PermanentMarkerText>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary text-white font-archivo text-xl py-6 rounded-none border-2 border-foreground hover:bg-foreground transition-colors">
                  <Link to="/checkout">PROCEED TO CHECKOUT</Link>
                </Button>
                
                <div className="mt-6 text-center">
                  <Link to="/shop" className="font-archivo text-sm underline hover:text-primary uppercase">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
