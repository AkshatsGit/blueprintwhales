import React, { useState } from 'react';
import { Box, Compass, Layout, Map, CheckCircle2, ArrowRight, Shield, Layers, FileCode } from 'lucide-react';
import { INITIAL_SERVICES } from '../data/initialData';

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(INITIAL_SERVICES[0].id);

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Box': return <Box size={24} color="#38BDF8" />;
      case 'Compass': return <Compass size={24} color="#F59E0B" />;
      case 'Layout': return <Layout size={24} color="#10B981" />;
      case 'Map': return <Map size={24} color="#8B5CF6" />;
      default: return <Layers size={24} color="#38BDF8" />;
    }
  };

  return (
    <section id="services" style={{ padding: '80px 0', background: 'rgba(7, 13, 26, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Layers size={14} />
            <span>End-to-End Architectural Solutions</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Everything an Architect Does — <span className="text-gradient">Under One Roof</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            From 2D Vastu layout maps to high-rise 3D Revit models, blueprints, structural engineering, and house interior design delivered remotely across Lucknow, Delhi NCR, Ghaziabad, Mumbai, and all India.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid-4" style={{ gap: '20px', marginBottom: '40px' }}>
          {INITIAL_SERVICES.map((srv) => {
            const isActive = activeTab === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className="glass-panel"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderColor: isActive ? '#00B4D8' : 'rgba(56, 189, 248, 0.15)',
                  background: isActive ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.7)',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Badge */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px', fontSize: '0.75rem', fontWeight: 700,
                  padding: '3px 8px', borderRadius: '6px',
                  background: srv.id === '2d-vastu' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(0, 180, 216, 0.15)',
                  color: srv.id === '2d-vastu' ? '#F59E0B' : '#38BDF8',
                  border: srv.id === '2d-vastu' ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(0, 180, 216, 0.3)'
                }}>
                  {srv.badge}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  {getIcon(srv.iconName)}
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                  {srv.title}
                </h3>

                <div style={{ fontSize: '0.85rem', color: '#38BDF8', fontWeight: 600, marginBottom: '12px' }}>
                  {srv.tagline}
                </div>

                <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '16px' }}>
                  {srv.description}
                </p>

                <div style={{ fontSize: '0.8rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Click to view details</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Service Detail Box */}
        {(() => {
          const detail = INITIAL_SERVICES.find(s => s.id === activeTab);
          if (!detail) return null;
          return (
            <div className="glass-panel" style={{ padding: '32px', background: 'rgba(15, 23, 42, 0.95)', border: '1px solid #00B4D8' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span className="badge-blueprint">{detail.badge}</span>
                    <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Delivery: Online Remote Workspace</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FFF', marginBottom: '12px' }}>
                    {detail.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '24px' }}>
                    {detail.description}
                  </p>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Key Capabilities:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                      {detail.features.map((feat, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                          <CheckCircle2 size={16} color="#10B981" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="#vastu-calculator" className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                    <span>Book {detail.title}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div style={{
                  background: '#070D1A', padding: '24px', borderRadius: '16px',
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <FileCode size={20} color="#F59E0B" />
                    <span style={{ fontWeight: 700, color: '#FFF', fontSize: '1rem' }}>Software Stack Utilized</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {detail.softwares.map((sw, i) => (
                      <span key={i} style={{
                        padding: '6px 12px', borderRadius: '8px',
                        background: 'rgba(0, 180, 216, 0.12)', border: '1px solid rgba(0, 180, 216, 0.3)',
                        color: '#38BDF8', fontSize: '0.85rem', fontWeight: 600
                      }}>
                        ⚡ {sw}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    padding: '16px', borderRadius: '10px',
                    background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)',
                    fontSize: '0.85rem', color: '#FCD34D', lineHeight: 1.5
                  }}>
                    🏛️ <strong>Vastu Guarantee:</strong> Every layout plan undergoes dual verification by registered CAD architects and certified Vastu Shastra experts.
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
