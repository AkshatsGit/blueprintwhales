import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundCanvas from './components/BackgroundCanvas';
import RateCardQuote from './components/RateCardQuote';
import LandmarkEngineers from './components/LandmarkEngineers';
import SoftwareGrid from './components/SoftwareGrid';
import ServicesShowcase from './components/ServicesShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import VastuCostEstimator from './components/VastuCostEstimator';
import TestimonialsFaq from './components/TestimonialsFaq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

import { 
  OFFICIAL_RATE_CARD,
  INITIAL_SERVICES, 
  INITIAL_SOFTWARES, 
  INITIAL_PORTFOLIO, 
  INITIAL_PRICING_RATES, 
  INITIAL_INQUIRIES, 
  INITIAL_SEO_SETTINGS 
} from './data/initialData';

export default function App() {
  const [rateCard, setRateCard] = useState(() => {
    const saved = localStorage.getItem('bw_official_rates');
    return saved ? JSON.parse(saved) : OFFICIAL_RATE_CARD;
  });

  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('bw_inquiries');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('bw_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [rates, setRates] = useState(() => {
    const saved = localStorage.getItem('bw_rates');
    return saved ? JSON.parse(saved) : INITIAL_PRICING_RATES;
  });

  const [seoSettings, setSeoSettings] = useState(() => {
    const saved = localStorage.getItem('bw_seo');
    return saved ? JSON.parse(saved) : INITIAL_SEO_SETTINGS;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('bw_official_rates', JSON.stringify(rateCard));
  }, [rateCard]);

  useEffect(() => {
    localStorage.setItem('bw_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('bw_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem('bw_rates', JSON.stringify(rates));
  }, [rates]);

  useEffect(() => {
    localStorage.setItem('bw_seo', JSON.stringify(seoSettings));
  }, [seoSettings]);

  // Scroll Reveal Observer Effect
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [rateCard]);

  const handleAddInquiry = (newInquiry) => {
    setInquiries([newInquiry, ...inquiries]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Absolute Aesthetic Background Animation Canvas */}
      <BackgroundCanvas />

      {/* Toast Banner */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 2000,
          padding: '12px 20px',
          borderRadius: '12px',
          background: toast.type === 'success' ? '#10B981' : toast.type === 'warning' ? '#F59E0B' : '#00B4D8',
          color: '#070D1A',
          fontWeight: 700,
          fontSize: '0.9rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'slideUp 0.3s ease'
        }}>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Main Public Web App */}
      <Navbar
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero />
        <RateCardQuote rateCardData={rateCard} showToast={showToast} />
        <LandmarkEngineers />
        <SoftwareGrid />
        <ServicesShowcase />
        <BeforeAfterSlider />
        <VastuCostEstimator
          ratesData={rates}
          onSubmitInquiry={handleAddInquiry}
          showToast={showToast}
        />
        <TestimonialsFaq />
        <ContactForm
          onSubmitInquiry={handleAddInquiry}
          showToast={showToast}
        />
      </main>

      <Footer setIsAdminOpen={setIsAdminOpen} />

      {/* Backend Admin Control Panel Overlay */}
      {isAdminOpen && (
        <AdminPanel
          inquiries={inquiries}
          setInquiries={setInquiries}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          rateCard={rateCard}
          setRateCard={setRateCard}
          rates={rates}
          setRates={setRates}
          seoSettings={seoSettings}
          setSeoSettings={setSeoSettings}
          onClose={() => setIsAdminOpen(false)}
          showToast={showToast}
        />
      )}

    </div>
  );
}
