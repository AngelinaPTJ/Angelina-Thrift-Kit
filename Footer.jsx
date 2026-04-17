import React from 'react';
import { Link } from 'react-router-dom';
import PermanentMarkerText from './PermanentMarkerText.jsx';
import HandDrawnDivider from './HandDrawnDivider.jsx';

export default function Footer() {
  return (
    <footer className="bg-[#F2F0E9] pt-16 pb-8 overflow-hidden relative">
      <HandDrawnDivider color="hsl(var(--foreground))" strokeWidth={2} className="opacity-30 absolute top-0 left-0 w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5">
            <PermanentMarkerText as="h2" className="text-4xl text-foreground mb-4 leading-none" rotation={-2}>
              ANGELINA THRIFT KIT
            </PermanentMarkerText>
            <p className="text-foreground/80 max-w-sm font-medium mt-4">
              Curating genuine vintage and analog fashion pieces. Heavy wear, real stories, no fast fashion.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-archivo text-lg mb-4 text-foreground">THE ARCHIVE</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/shop" className="text-foreground/80 hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link to="/the-cut" className="text-foreground/80 hover:text-primary transition-colors">The Cut</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-archivo text-lg mb-4 text-foreground">CONTACT & INFO</h3>
            <ul className="space-y-3 font-medium">
              <li className="text-foreground/80">info@angelinathriftkit.com</li>
              <li className="text-foreground/80">1-800-VINTAGE</li>
              <li className="pt-4">
                <PermanentMarkerText className="text-sm" color="text-foreground">
                  Follow the hunt:
                </PermanentMarkerText>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="font-archivo text-sm hover:text-primary">INSTAGRAM</a>
                  <a href="#" className="font-archivo text-sm hover:text-primary">TIKTOK</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t-2 border-foreground/20 font-medium text-sm text-foreground/60">
          <p>© 2026 Angelina Thrift Kit. Analog only.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground">Privacy</Link>
            <Link to="#" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
