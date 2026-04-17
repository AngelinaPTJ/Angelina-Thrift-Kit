import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import { CartProvider } from '@/contexts/CartContext.jsx';
import HomePage from './pages/HomePage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import TheCutPage from './pages/TheCutPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/the-cut" element={<TheCutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F0E9] border-8 border-foreground m-4 p-8 text-center">
               <h1 className="font-archivo text-6xl text-foreground mb-4 uppercase">404 - Archive Not Found</h1>
               <a href="/" className="font-marker text-2xl text-primary hover:underline">Take me back</a>
            </div>
          } />
        </Routes>
        <Toaster 
          toastOptions={{
            className: 'font-archivo rounded-none border-2 border-foreground bg-white text-foreground',
          }} 
        />
      </CartProvider>
    </Router>
  );
}

export default App;
