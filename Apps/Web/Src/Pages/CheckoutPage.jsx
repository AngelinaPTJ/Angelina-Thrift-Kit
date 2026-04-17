import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PermanentMarkerText from '@/components/PermanentMarkerText.jsx';
import { useCart } from '@/contexts/CartContext.jsx';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      toast.success('Order placed successfully! Check your email.');
      navigate('/');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen craft-paper flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          <PermanentMarkerText className="text-4xl mb-4">Nothing to checkout.</PermanentMarkerText>
          <Link to="/shop" className="font-archivo underline hover:text-primary">Back to Archive</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Angelina Thrift Kit</title>
      </Helmet>

      <div className="min-h-screen craft-paper selection:bg-primary selection:text-white">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Link to="/cart" className="inline-flex items-center font-archivo text-sm hover:text-primary mb-8 uppercase tracking-wide">
            <ArrowLeft className="w-5 h-5 mr-2 stroke-[3]" />
            Back to Kit
          </Link>

          <h1 className="font-archivo text-5xl md:text-7xl text-foreground mb-12 uppercase border-b-4 border-foreground pb-6">
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="bg-white border-4 border-foreground p-8 analog-shadow">
                <h2 className="font-archivo text-3xl uppercase mb-6">Shipping Info</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-archivo text-sm">Full Name</Label>
                    <Input id="name" required className="border-2 border-foreground rounded-none h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-archivo text-sm">Email</Label>
                    <Input id="email" type="email" required className="border-2 border-foreground rounded-none h-12" />
                  </div>
                  <div>
                    <Label htmlFor="address" className="font-archivo text-sm">Address</Label>
                    <Input id="address" required className="border-2 border-foreground rounded-none h-12" />
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-foreground p-8 analog-shadow">
                <h2 className="font-archivo text-3xl uppercase mb-6">Payment</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="card" className="font-archivo text-sm">Card Number</Label>
                    <Input id="card" required placeholder="0000 0000 0000 0000" className="border-2 border-foreground rounded-none h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="exp" className="font-archivo text-sm">Expiry</Label>
                      <Input id="exp" required placeholder="MM/YY" className="border-2 border-foreground rounded-none h-12" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="font-archivo text-sm">CVV</Label>
                      <Input id="cvv" required placeholder="123" className="border-2 border-foreground rounded-none h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-4 border-foreground p-8 sticky top-28 analog-shadow">
                <h2 className="font-archivo text-3xl uppercase mb-6 border-b-2 border-foreground pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <span className="font-medium">{item.name} x{item.quantity}</span>
                      <span className="font-archivo">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8 font-medium text-lg border-t-2 border-foreground pt-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-foreground pt-4 mt-4">
                    <span className="font-archivo text-2xl">Total</span>
                    <PermanentMarkerText className="text-3xl text-primary">${total.toFixed(2)}</PermanentMarkerText>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full bg-primary text-white font-archivo text-xl py-6 rounded-none border-2 border-foreground hover:bg-foreground transition-colors disabled:opacity-50"
                >
                  {isProcessing ? 'PROCESSING...' : 'PLACE ORDER'}
                </Button>
              </div>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
}
