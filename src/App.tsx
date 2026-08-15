import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { MobileMenu } from './components/MobileMenu';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { SearchPage } from './pages/SearchPage';

import { CRAZY_DEALS, Product, DealItem } from './data/store';
import { CheckCircle } from 'lucide-react';

const AppContent: React.FC = () => {
  const navigate = useNavigate();

  // Cart initialized with 3 items matching reference badge count '3'
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      ...CRAZY_DEALS[1], // iPhone 14 Pro Max
      quantity: 1,
    },
    {
      ...CRAZY_DEALS[0], // AirPods Pro 2
      quantity: 1,
    },
    {
      ...CRAZY_DEALS[2], // Apple Watch Series 8
      quantity: 1,
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (productOrDeal: Product | DealItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === productOrDeal.id);
      if (existing) {
        return prev.map((item) =>
          item.id === productOrDeal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...productOrDeal, quantity: 1 }];
    });
    showToast(`Added ${productOrDeal.title} to Cart!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#DFFF00] selection:text-black">
      <ScrollToTop />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#DFFF00] text-black px-5 py-3 rounded-xl shadow-[0_0_25px_rgba(223,255,0,0.5)] font-bold text-xs sm:text-sm animate-bounce">
          <CheckCircle className="w-4 h-4 text-black stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                items={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            }
          />
          <Route path="/search" element={<SearchPage onAddToCart={handleAddToCart} />} />
          <Route path="*" element={<HomePage onAddToCart={handleAddToCart} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => {
          navigate(`/product/${product.slug}`);
        }}
      />

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
