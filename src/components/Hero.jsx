import React, { useState } from 'react';
import { Box, Compass, Eye, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award, Globe } from 'lucide-react';

export default function Hero() {
  const [activeViewMode, setActiveViewMode] = useState('3d'); // '3d', '2d', 'interior'

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
    <section style={{ padding: '60px 0 80px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <div>
            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <span className="badge-blueprint">
                <Globe size={14} />
                <span>Remote Architectural Studio • All India</span>
              </span>
              <span className="badge-amber">
                <Award size={14} />
                <span>Ram Mandir & Bullet Train Project Engineers</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: '20px'
            }}>
              Architects & 3D Vastu Blueprint Designers <br />
              <span className="text-gradient">Precision Blueprints. Breathtaking 3D Realities.</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: '1.1rem',
              color: '#94A3B8',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '560px'
            }}>
              Blueprint Whales delivers 2D Vastu floorplans, 3D Revit building renders, and modern house interiors remotely to clients in <strong>Lucknow</strong>, <strong>Delhi NCR</strong>, <strong>Ghaziabad</strong>, <strong>Mumbai</strong>, and nationwide at uniform reasonable rates.
            </p>

            {/* CTA Group */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <a href="#vastu-calculator" className="btn-primary" style={{ padding: '14px 28px' }}>
                <Sparkles size={18} />
                <span>Calculate Uniform Rate</span>
              </a>
              <a href="#portfolio" className="btn-secondary" style={{ padding: '14px 28px' }}>
                <span>Explore Works & Renders</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Live Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(56, 189, 248, 0.15)'
            }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#38BDF8', fontFamily: 'var(--font-heading)' }}>30+</div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>3D/2D Heavy Softwares</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-heading)' }}>10+</div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Years Architectural Exp</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#10B981', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Vastu Directional</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Interactive Preview */}
          <div>
            <div className="glass-panel" style={{ padding: '20px', position: 'relative' }}>
              
              {/* Tabs */}
              <div style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '16px',
                background: 'rgba(7, 13, 26, 0.8)',
                padding: '6px',
                borderRadius: '12px',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                <button
                  onClick={() => setActiveViewMode('3d')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    padding: '8px 12px', borderRadius: '8px',
                    background: activeViewMode === '3d' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === '3d' ? '#070D1A' : '#94A3B8',
                    fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer'
                  }}
                >
                  <Box size={16} />
                  <span>3D Villa Render</span>
                </button>

                <button
                  onClick={() => setActiveViewMode('2d')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    padding: '8px 12px', borderRadius: '8px',
                    background: activeViewMode === '2d' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === '2d' ? '#070D1A' : '#94A3B8',
                    fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer'
                  }}
                >
                  <Compass size={16} />
                  <span>2D CAD Blueprint</span>
                </button>

                <button
                  onClick={() => setActiveViewMode('interior')}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    padding: '8px 12px', borderRadius: '8px',
                    background: activeViewMode === 'interior' ? '#00B4D8' : 'transparent',
                    color: activeViewMode === 'interior' ? '#070D1A' : '#94A3B8',
                    fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer'
                  }}
                >
                  <Eye size={16} />
                  <span>House Interior</span>
                </button>
              </div>

              {/* View Frame */}
              <div style={{
                position: 'relative', borderRadius: '12px', overflow: 'hidden',
                border: '1px solid rgba(56, 189, 248, 0.3)', height: '350px', background: '#070D1A'
              }}>
                <img
                  src={activeView.image}
                  alt={activeView.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
                />

                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px',
                  background: 'linear-gradient(to top, rgba(7, 13, 26, 0.95), transparent)'
                }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF' }}>{activeView.title}</div>
                  <div style={{ fontSize: '0.825rem', color: '#CBD5E1', marginBottom: '8px' }}>{activeView.subtitle}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {activeView.tags.map((t, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.725rem', padding: '3px 8px', borderRadius: '4px',
                        background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#E2E8F0'
                      }}>
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '14px', fontSize: '0.8rem', color: '#64748B', textAlign: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}>
                <CheckCircle2 size={14} color="#10B981" />
                <span>Municipal approval blueprints compliant for all Indian municipal boards</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
