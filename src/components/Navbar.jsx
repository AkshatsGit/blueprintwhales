import React from 'react';
import { Sparkles, Settings, Download } from 'lucide-react';

export default function Navbar({ isAdminOpen, setIsAdminOpen }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(5, 11, 20, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '84px'
      }}>
        {/* Brand Logo with Official Image */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 0 16px rgba(0, 180, 216, 0.4)',
            background: '#070D1A'
          }}>
            <img
              src="/images/blueprint_whales_logo.jpg"
              alt="Blueprint Whales Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#FFF',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}>
              BLUEPRINT <span style={{ color: '#38BDF8' }}>WHALES</span>
            </div>
            <div style={{
              fontSize: '0.68rem',
              color: '#94A3B8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '4px'
            }}>
              Designing Spaces. Creating Possibilities.
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
          <a href="#official-rates" style={{ color: '#38BDF8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>Rate Cards</a>
          <a href="#services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Services</a>
          <a href="#softwares" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Softwares</a>
          <a href="#vastu-calculator" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Rate Estimator</a>
          <a href="#visualizer" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>2D vs 3D</a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Admin Switch Button */}
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            title="Toggle Admin Control Panel"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '10px',
              background: isAdminOpen ? 'rgba(245, 158, 11, 0.2)' : 'rgba(15, 34, 60, 0.8)',
              border: isAdminOpen ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.1)',
              color: isAdminOpen ? '#F59E0B' : '#94A3B8',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Settings size={15} color={isAdminOpen ? '#F59E0B' : '#94A3B8'} />
            <span>{isAdminOpen ? 'Close Admin' : 'Admin Panel'}</span>
          </button>

          {/* CTA Quote */}
          <a href="#official-rates" className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
            <Download size={16} />
            <span>Get Official Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
