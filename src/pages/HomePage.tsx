import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategoryStrip } from '../components/CategoryStrip';
import { TrustStrip } from '../components/TrustStrip';
import { DealsSection } from '../components/DealsSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { Testimonial } from '../components/Testimonial';
import { NewsletterCTA } from '../components/NewsletterCTA';
import { CategoryItem, DealItem } from '../data/store';
import { useNavigate } from 'react-router-dom';

interface HomePageProps {
  onAddToCart: (deal: DealItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const handleSelectCategory = (category: CategoryItem) => {
    navigate(`/shop?category=${category.title}`);
  };

  const handleShopNow = () => {
    navigate('/shop');
  };

  const handleViewCollection = () => {
    navigate('/collections');
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection
        onShopNowClick={handleShopNow}
        onViewCollectionClick={handleViewCollection}
      />

      {/* 2. Category Strip */}
      <CategoryStrip onSelectCategory={handleSelectCategory} />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. Crazy Deals Section */}
      <DealsSection
        onAddToCart={onAddToCart}
        onExploreDeals={handleShopNow}
      />

      {/* 5. Benefits Section */}
      <BenefitsSection />

      {/* 6. Testimonial Section */}
      <Testimonial />

      {/* 7. Newsletter Section */}
      <NewsletterCTA />
    </div>
  );
};
