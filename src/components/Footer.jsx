import React from 'react';
import { Settings, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ setIsAdminOpen }) {
  return (
    <footer style={{
      background: '#040812',
      borderTop: '1px solid rgba(56, 189, 248, 0.2)',
      padding: '60px 0 30px',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        
        {/* Top Footer Row */}
        <div className="grid-3" style={{ gap: '40px', marginBottom: '40px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img src="/images/blueprint_whales_logo.jpg" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>
                  BLUEPRINT <span style={{ color: '#38BDF8' }}>WHALES</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Designing Spaces. Creating Possibilities.
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '16px' }}>
              <strong>Blueprint Whales</strong> is the best designing architects network in Lucknow, Agra, Kanpur, Noida, Rajasthan cities, and nationwide, specializing in hyper-realistic 3D building renders, 100% Vastu compliant 2D floorplan blueprints, and bespoke interior/exterior architecture.
            </p>

            <button
              onClick={() => setIsAdminOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid #F59E0B',
                color: '#F59E0B',
                fontSize: '0.775rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Settings size={14} />
              <span>Admin Portal Login</span>
            </button>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Software Deliverables
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '0.85rem', color: '#CBD5E1' }}>
              <div>• Autodesk Revit (.RVT)</div>
              <div>• AutoCAD Architecture (.DWG)</div>
              <div>• Rhino 3D Surface (.3DM)</div>
              <div>• SketchUp Pro (.SKP)</div>
              <div>• 3ds Max + V-Ray (.MAX)</div>
              <div>• Lumion 12 Video (.MP4)</div>
              <div>• ETABS Load Analysis</div>
              <div>• 2D Vastu Floor Maps</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Studio Contact & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#38BDF8" />
                <span>Helpline: <strong>+91 79921 59067</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#F59E0B" />
                <span>contact@blueprintwhales.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#10B981" />
                <span>Regional Studios Across India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Local SEO Cities Grid */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          marginBottom: '20px',
          fontSize: '0.8rem',
          color: '#64748B',
          lineHeight: 1.6
        }}>
          <strong>Best Designing Architects Network Serviced Locations:</strong> Lucknow | Agra | Kanpur | Noida | Gurgaon | Delhi NCR | Jaipur | Jodhpur | Udaipur | Kota | Bikaner | Ajmer | Rajasthan Cities | Mumbai | Bangalore | Hyderabad | Chennai | Pune | Pan-India Remote Architectural Desk.
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Blueprint Whales. All Rights Reserved. Complete Architectural & Engineering Desk.
          </div>
          <div>
            Zero Hidden Charges Guarantee &nbsp;|&nbsp; Direct Helpline: +91 79921 59067
          </div>
        </div>

      </div>
    </footer>
  );
}
