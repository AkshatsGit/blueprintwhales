import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Box, MapPin, Compass, ExternalLink, Star, X } from 'lucide-react';

export default function WorksCarousel({ portfolioData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = portfolioData.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const currentProj = portfolioData[currentIndex];

  return (
    <section style={{ padding: '80px 0', background: 'rgba(7, 13, 26, 0.7)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Box size={14} />
            <span>Featured Project Carousel</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Our Architectural Works <span className="text-gradient">& Renders</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Browse through our portfolio of executed 3D Revit models, 2D Vastu blueprints, and house interiors in Lucknow, Delhi, Ghaziabad, and Mumbai.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="glass-panel"
          style={{
            padding: '30px',
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid #00B4D8',
            boxShadow: '0 20px 50px rgba(0, 180, 216, 0.2)'
          }}
        >
          <div className="grid-2" style={{ alignItems: 'center', gap: '30px' }}>
            
            {/* Carousel Left Image */}
            <div style={{ position: 'relative', height: '360px', borderRadius: '14px', overflow: 'hidden', background: '#070D1A' }}>
              <img
                src={currentProj.image}
                alt={currentProj.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }}
              />

              <div style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(7, 13, 26, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <MapPin size={14} />
                <span>Architects in {currentProj.city}</span>
              </div>

              {currentProj.vastuCompliant && (
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: '#F59E0B',
                  color: '#070D1A',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  100% Vastu Approved
                </div>
              )}
            </div>

            {/* Carousel Right Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span className="badge-blueprint">{currentProj.category}</span>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Area: {currentProj.plotArea}</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FFF', marginBottom: '12px' }}>
                {currentProj.title}
              </h3>

              <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
                {currentProj.description}
              </p>

              {/* Softwares Badges */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Softwares Utilized:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentProj.softwares.map((sw, i) => (
                    <span key={i} style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(0, 180, 216, 0.12)',
                      border: '1px solid rgba(0, 180, 216, 0.3)',
                      color: '#38BDF8',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      ⚡ {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Review */}
              {currentProj.clientReview && (
                <div style={{
                  padding: '14px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  marginBottom: '24px',
                  fontSize: '0.875rem',
                  color: '#FFF',
                  fontStyle: 'italic'
                }}>
                  "{currentProj.clientReview}"
                </div>
              )}

              <button
                onClick={() => setActiveModalProject(currentProj)}
                className="btn-primary"
                style={{ padding: '12px 22px', fontSize: '0.875rem' }}
              >
                <span>View Full Architectural Blueprint Specs</span>
                <ExternalLink size={14} />
              </button>
            </div>

          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-20px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#070D1A',
              border: '1px solid #00B4D8',
              color: '#38BDF8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(0, 180, 216, 0.4)'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-20px',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#070D1A',
              border: '1px solid #00B4D8',
              color: '#38BDF8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(0, 180, 216, 0.4)'
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {portfolioData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: currentIndex === idx ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === idx ? '#00B4D8' : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>

        {/* Modal Popup */}
        {activeModalProject && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(7, 13, 26, 0.85)', backdropFilter: 'blur(16px)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
          }}>
            <div className="glass-panel" style={{
              maxWidth: '700px', width: '100%', padding: '30px', background: '#0F172A', border: '1px solid #00B4D8'
            }}>
              <button
                onClick={() => setActiveModalProject(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <X size={20} />
              </button>
              <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '10px' }}>{activeModalProject.title}</h3>
              <p style={{ color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>{activeModalProject.description}</p>
              <a href="#vastu-calculator" onClick={() => setActiveModalProject(null)} className="btn-primary" style={{ width: '100%' }}>
                Request Rate Quote for Similar Project
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
