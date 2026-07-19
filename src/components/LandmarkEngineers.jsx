import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Building2, Train } from 'lucide-react';
import { LANDMARK_ENGINEERS } from '../data/initialData';

export default function LandmarkEngineers() {
  return (
    <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, rgba(7, 13, 26, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)', borderTop: '1px solid rgba(56, 189, 248, 0.15)', borderBottom: '1px solid rgba(56, 189, 248, 0.15)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <span className="badge-amber" style={{ marginBottom: '12px' }}>
            <Award size={14} />
            <span>Master Engineering Leadership</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Engineers Behind <span className="text-gradient-amber">Ram Mandir & Bullet Train Projects</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Our core architectural team features senior chartered structural engineers and BIM leads who contributed structural calculations and BIM layouts for historic megastructures including the <strong>Ayodhya Ram Mandir Complex</strong> and the <strong>Ahmedabad-Mumbai High-Speed Bullet Train Terminals</strong>.
          </p>
        </div>

        {/* Engineers Cards Grid */}
        <div className="grid-3" style={{ gap: '24px' }}>
          {LANDMARK_ENGINEERS.map((eng, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '28px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                background: 'rgba(15, 23, 42, 0.9)',
                position: 'relative'
              }}
            >
              {/* Badge Overlay */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#F59E0B',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <Sparkles size={12} />
                <span>{eng.badge}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                {eng.role}
              </h3>
              <div style={{ fontSize: '0.85rem', color: '#38BDF8', fontWeight: 600, marginBottom: '16px' }}>
                {eng.title} • {eng.experience}
              </div>

              {/* Landmark Projects Badge Box */}
              <div style={{
                background: '#070D1A',
                borderRadius: '10px',
                padding: '14px',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F59E0B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  🏛️ Landmark Project Contributions:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {eng.projects.map((proj, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={14} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.5 }}>
                <strong>Specialization:</strong> {eng.specialization}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
