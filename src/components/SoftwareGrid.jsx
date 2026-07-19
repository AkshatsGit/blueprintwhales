import React, { useState } from 'react';
import { Cpu, Check, FileText, Zap, Award, Layers, Clock, ShieldCheck } from 'lucide-react';
import { INITIAL_SOFTWARES } from '../data/initialData';

export default function SoftwareGrid() {
  const [selectedSoftware, setSelectedSoftware] = useState(INITIAL_SOFTWARES[0]);

  return (
    <section id="softwares" className="scroll-reveal" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Cpu size={14} />
            <span>Enterprise Software Engineering Suite</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            30+ Heavy Softwares Mastered Across <span className="text-gradient">10+ Years Experience</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Our architectural team operates high-performance workstation clusters running enterprise 3D & 2D design suites. Every deliverable comes with native raw project files at reasonable rates.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <span style={{ fontSize: '0.9rem', color: '#38BDF8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} /> 30+ Architectural Softwares
            </span>
            <span style={{ fontSize: '0.9rem', color: '#F59E0B', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} /> 10+ Years Practice Experience
            </span>
          </div>
        </div>

        {/* Main Software Display Grid */}
        <div className="grid-2" style={{ alignItems: 'start', gap: '30px' }}>
          
          {/* Left: Software Cards with Logos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {INITIAL_SOFTWARES.map((sw, idx) => {
              const isSelected = selectedSoftware.name === sw.name;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedSoftware(sw)}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    cursor: 'pointer',
                    borderColor: isSelected ? sw.color : 'rgba(56, 189, 248, 0.25)',
                    background: isSelected ? 'linear-gradient(145deg, #0F223C, #264D78)' : 'linear-gradient(145deg, rgba(11, 25, 44, 0.94), rgba(30, 62, 98, 0.96))',
                    boxShadow: isSelected ? `0 0 25px ${sw.color}44` : 'none',
                    transform: isSelected ? 'translateY(-3px)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    {/* Actual Software Logo Image */}
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                    }}>
                      <img
                        src={sw.logo}
                        alt={sw.name}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: sw.color,
                      background: `${sw.color}18`,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: `1px solid ${sw.color}44`
                    }}>
                      ⚡ {sw.speed}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                    {sw.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{sw.category}</div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Inspector Panel */}
          <div className="glass-panel" style={{ padding: '30px', position: 'sticky', top: '100px', background: 'linear-gradient(145deg, #0B192C, #1E3E62)', border: `1px solid ${selectedSoftware.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#FFF',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
              }}>
                <img src={selectedSoftware.logo} alt={selectedSoftware.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>

              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF' }}>{selectedSoftware.name}</div>
                <div style={{ fontSize: '0.825rem', color: selectedSoftware.color, fontWeight: 600 }}>{selectedSoftware.category}</div>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedSoftware.description}
            </p>

            {/* Deliverable File Formats */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Deliverable Native Formats Provided to Client
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedSoftware.outputs.map((fmt, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'rgba(0, 180, 216, 0.12)',
                    border: '1px solid rgba(0, 180, 216, 0.3)',
                    color: '#38BDF8',
                    fontSize: '0.825rem',
                    fontWeight: 600
                  }}>
                    <FileText size={14} />
                    <span>{fmt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              padding: '16px',
              borderRadius: '10px',
              background: 'rgba(5, 11, 20, 0.6)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Zap size={20} color="#F59E0B" />
              <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                <strong>Reasonable Pricing Guarantee:</strong> Complete editable source project files ({selectedSoftware.outputs[0]}) included with no extra hidden licensing costs!
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
