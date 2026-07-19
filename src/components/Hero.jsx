import React, { useState } from 'react';
import { Box, Compass, Eye, Sparkles, CheckCircle2, ArrowRight, Award, Globe } from 'lucide-react';

export default function Hero() {
  const [activeViewMode, setActiveViewMode] = useState('3d');

  const views = {
    '3d': {
      title: '3D Building Architecture & BIM',
      subtitle: 'Rendered in Autodesk Revit, Rhino 3D & Lumion 12',
      image: '/images/luxury_villa_3d.png',
      badge: '3D Villa Elevation Render',
      tags: ['Revit BIM Level 2', 'Solar Daylight Study', '4K Video Walkthrough']
    },
    '2d': {
      title: '2D Vastu Compliant CAD Blueprint Draft',
      subtitle: 'Drafted in AutoCAD Architecture with Precise Directions',
      image: '/images/dummy_2d_floorplan.png',
      badge: '2D Technical Vastu Blueprint',
      tags: ['Ishanya Water Alignment', 'Agneya Kitchen Vector', 'Column Load Math']
    },
    'interior': {
      title: 'Modern House Interior Architectural Design',
      subtitle: 'Created with SketchUp Pro, 3ds Max & V-Ray CGI',
      image: '/images/house_interior_3d.png',
      badge: '3D House Living Room Interior',
      tags: ['Custom Millwork Specs', 'False Ceiling Lighting', 'Material Schedule']
    }
  };

  const activeView = views[activeViewMode];

  return (
    <section style={{ padding: '40px 0 60px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '30px' }}>
          
          {/* Hero Left Content */}
          <div>
            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-blueprint" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                <Globe size={12} />
                <span>Remote Studio Desk</span>
              </span>
              <span className="badge-amber" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                <Award size={12} />
                <span>Ayodhya Structural Engineers</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              Architects & 3D Vastu Blueprint Designers <br />
              <span className="text-gradient">Precision Blueprints. Breathtaking 3D Realities.</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#94A3B8',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '560px'
            }}>
              Blueprint Whales is the best designing architects network in Lucknow, Agra, Kanpur, Noida, and Rajasthan cities, providing premium 3D renders, Vastu blueprints, and house interior layouts remotely.
            </p>

            {/* CTA Group */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <a href="#vastu-calculator" className="btn-primary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                <Sparkles size={16} />
                <span>Estimate Project Cost</span>
              </a>
              <a href="#official-rates" className="btn-secondary" style={{ padding: '12px 22px', fontSize: '0.9rem' }}>
                <span>Rates & Services</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Live Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(56, 189, 248, 0.15)'
            }}>
              <div>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#38BDF8', fontFamily: 'var(--font-heading)' }}>30+</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Heavy Softwares</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-heading)' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: '#10B981', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Vastu Compliant</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Interactive Preview */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div className="glass-panel" style={{ padding: '16px', position: 'relative' }}>
              
              {/* Tabs */}
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '12px',
                background: 'rgba(7, 13, 26, 0.8)',
                padding: '4px',
                borderRadius: '10px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                overflowX: 'auto'
              }}>
                <button
                  onClick={() => setActiveViewMode('3d')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                    padding: '8px 10px', borderRadius: '6px',
                    background: activeViewMode === '3d' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === '3d' ? '#070D1A' : '#94A3B8',
                    fontWeight: 700, fontSize: '0.775rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap'
                  }}
                >
                  <Box size={14} />
                  <span>3D Villa</span>
                </button>

                <button
                  onClick={() => setActiveViewMode('2d')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                    padding: '8px 10px', borderRadius: '6px',
                    background: activeViewMode === '2d' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === '2d' ? '#070D1A' : '#94A3B8',
                    fontWeight: 700, fontSize: '0.775rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap'
                  }}
                >
                  <Compass size={14} />
                  <span>2D CAD</span>
                </button>

                <button
                  onClick={() => setActiveViewMode('interior')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                    padding: '8px 10px', borderRadius: '6px',
                    background: activeViewMode === 'interior' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === 'interior' ? '#070D1A' : '#94A3B8',
                    fontWeight: 700, fontSize: '0.775rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap'
                  }}
                >
                  <Eye size={14} />
                  <span>Interior</span>
                </button>
              </div>

              {/* View Frame */}
              <div style={{
                position: 'relative', borderRadius: '10px', overflow: 'hidden',
                border: '1px solid rgba(56, 189, 248, 0.3)', height: 'clamp(200px, 35vw, 320px)', background: '#070D1A'
              }}>
                <img
                  src={activeView.image}
                  alt={activeView.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
                  loading="lazy"
                />

                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px',
                  background: 'linear-gradient(to top, rgba(7, 13, 26, 0.95), transparent)'
                }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>{activeView.title}</div>
                  <div style={{ fontSize: '0.775rem', color: '#CBD5E1', marginBottom: '6px' }}>{activeView.subtitle}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {activeView.tags.map((t, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.675rem', padding: '2px 6px', borderRadius: '4px',
                        background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#E2E8F0'
                      }}>
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '12px', fontSize: '0.75rem', color: '#64748B', textAlign: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
              }}>
                <CheckCircle2 size={13} color="#10B981" />
                <span>Municipal approval blueprint formats compliant nationwide</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
