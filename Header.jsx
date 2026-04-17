import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '@/contexts/CartContext.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const location = useLocation();
  const { getCartItemCount } = useCart();
  const cartCount = getCartItemCount();

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/shop', label: 'SHOP' },
    { path: '/the-cut', label: 'THE CUT' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F2F0E9]/95 backdrop-blur-md border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex-shrink-0 group">
            <h1 className="font-archivo text-2xl sm:text-3xl text-foreground tracking-tighter group-hover:text-primary transition-colors">
              ANGELINA THRIFT KIT
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-archivo text-sm transition-all duration-200 relative ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform -skew-x-12" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart className="w-6 h-6 stroke-[2.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center font-archivo">
                  {cartCount}
                </span>
              )}
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 text-foreground hover:text-primary">
                  <Menu className="w-6 h-6 stroke-[2.5]" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#F2F0E9] border-l-4 border-foreground">
                <div className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`font-archivo text-2xl ${
                        location.pathname === link.path ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
