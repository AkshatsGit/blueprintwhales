import React, { useState } from 'react';
import { Box, Compass, MapPin, Cpu, ExternalLink, X, CheckCircle2, Star } from 'lucide-react';

export default function PortfolioShowcase({ portfolioData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCityFilter, setSelectedCityFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', '3D Models & Exterior', '2D Vastu Plans', 'Interior Design', 'Commercial'];
  const cities = ['All', 'Lucknow', 'Delhi', 'Ghaziabad', 'Mumbai'];

  // Filter projects
  const filteredProjects = portfolioData.filter(proj => {
    const categoryMatch = selectedCategory === 'All' || proj.category === selectedCategory;
    const cityMatch = selectedCityFilter === 'All' || proj.city === selectedCityFilter;
    return categoryMatch && cityMatch;
  });

  return (
    <section id="portfolio" style={{ padding: '80px 0', background: 'rgba(7, 13, 26, 0.6)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Box size={14} />
            <span>Executed Architectural Works</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Featured Portfolio of <span className="text-gradient">3D Renders & Blueprints</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Explore verified architectural design projects executed in Lucknow, Delhi, Ghaziabad, Mumbai, and nationwide.
          </p>

          {/* Category & City Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  background: selectedCategory === cat ? '#00B4D8' : 'rgba(30, 41, 59, 0.6)',
                  border: selectedCategory === cat ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: selectedCategory === cat ? '#070D1A' : '#CBD5E1',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
            <span style={{ fontSize: '0.825rem', color: '#64748B', fontWeight: 600 }}>Filter Location:</span>
            {cities.map(cty => (
              <button
                key={cty}
                onClick={() => setSelectedCityFilter(cty)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: selectedCityFilter === cty ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                  border: selectedCityFilter === cty ? '1px solid #F59E0B' : '1px solid transparent',
                  color: selectedCityFilter === cty ? '#F59E0B' : '#94A3B8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {cty}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid-3" style={{ gap: '24px' }}>
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel"
              style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setActiveModalProject(proj)}
            >
              {/* Card Image */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden', background: '#070D1A' }}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* City Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(7, 13, 26, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#38BDF8',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <MapPin size={12} />
                  <span>{proj.city}</span>
                </div>

                {/* Vastu Tag */}
                {proj.vastuCompliant && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(245, 158, 11, 0.9)',
                    color: '#070D1A',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '0.725rem',
                    fontWeight: 800
                  }}>
                    Vastu Approved
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '4px' }}>{proj.category} • {proj.plotArea}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {proj.description}
                </p>

                {/* Softwares Badge */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {proj.softwares.map((sw, i) => (
                    <span key={i} style={{
                      fontSize: '0.725rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(0, 180, 216, 0.1)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      color: '#38BDF8'
                    }}>
                      {sw}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '0.8rem', color: '#F59E0B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>View Full Architectural Blueprint Specs</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Popup */}
        {activeModalProject && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(7, 13, 26, 0.85)',
            backdropFilter: 'blur(16px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div className="glass-panel" style={{
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '30px',
              position: 'relative',
              background: '#0F172A',
              border: '1px solid #00B4D8'
            }}>
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', background: '#070D1A' }}>
                <img src={activeModalProject.image} alt={activeModalProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span className="badge-blueprint">{activeModalProject.category}</span>
                <span className="badge-amber">📍 {activeModalProject.city} Project</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                {activeModalProject.title}
              </h3>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '16px' }}>
                Address: {activeModalProject.address} | Area: {activeModalProject.plotArea}
              </div>

              <p style={{ fontSize: '1rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '20px' }}>
                {activeModalProject.description}
              </p>

              {/* Client Review */}
              {activeModalProject.clientReview && (
                <div style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F59E0B" />)}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#FFF', italic: 'true' }}>
                    "{activeModalProject.clientReview}"
                  </div>
                </div>
              )}

              <a href="#vastu-calculator" onClick={() => setActiveModalProject(null)} className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                <span>Request Similar Design Work for Your Plot</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
