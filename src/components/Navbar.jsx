import React from 'react';
import { Sparkles, Settings, Download } from 'lucide-react';

export default function Navbar({ isAdminOpen, setIsAdminOpen }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(5, 11, 20, 0.94)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '84px',
        gap: '12px'
      }}>
        {/* Brand Logo with Official Image - Mobile Shrink Fixed */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '46px',
            height: '46px',
            minWidth: '46px',
            minHeight: '46px',
            flexShrink: 0,
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1.5px solid rgba(56, 189, 248, 0.5)',
            boxShadow: '0 0 16px rgba(0, 180, 216, 0.4)',
            background: '#070D1A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/images/blueprint_whales_logo.jpg"
              alt="Blueprint Whales Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', flexShrink: 0 }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 1 }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)',
              fontWeight: 800,
              color: '#FFF',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}>
              BLUEPRINT <span style={{ color: '#38BDF8' }}>WHALES</span>
            </div>
            <div className="nav-subtitle" style={{
              fontSize: '0.65rem',
              color: '#94A3B8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '4px',
              whiteSpace: 'nowrap'
            }}>
              Designing Spaces. Creating Possibilities.
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <a href="#official-rates" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>Rate Cards</a>
          <a href="#services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Services</a>
          <a href="#softwares" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Softwares</a>
          <a href="#vastu-calculator" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Rate Estimator</a>
          <a href="#visualizer" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>2D vs 3D</a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          
          {/* Admin Switch Button */}
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            title="Toggle Admin Control Panel"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '10px',
              background: isAdminOpen ? 'rgba(245, 158, 11, 0.2)' : 'rgba(15, 34, 60, 0.8)',
              border: isAdminOpen ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.1)',
              color: isAdminOpen ? '#F59E0B' : '#94A3B8',
              fontSize: '0.825rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <Settings size={15} color={isAdminOpen ? '#F59E0B' : '#94A3B8'} />
            <span className="admin-btn-text">{isAdminOpen ? 'Close Admin' : 'Admin'}</span>
          </button>

          {/* CTA Quote */}
          <a href="#official-rates" className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.825rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <Download size={15} />
            <span>Get Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
