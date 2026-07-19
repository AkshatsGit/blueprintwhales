import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactForm({ onSubmitInquiry, showToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Pan-India');
  const [plotArea, setPlotArea] = useState('2400 Sq. Ft.');
  const [selectedSoftwares, setSelectedSoftwares] = useState(['Autodesk Revit', 'AutoCAD Architecture']);
  const [vastuRequired, setVastuRequired] = useState(true);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const softwareOptions = ['Autodesk Revit', 'AutoCAD Architecture', 'Rhino 3D', 'SketchUp Pro', '3ds Max + V-Ray', 'Lumion 12'];

  const toggleSoftware = (sw) => {
    if (selectedSoftwares.includes(sw)) {
      setSelectedSoftwares(selectedSoftwares.filter(s => s !== sw));
    } else {
      setSelectedSoftwares([...selectedSoftwares, sw]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Name and phone number are required!', 'warning');
      return;
    }

    const newInquiry = {
      id: `INQ-${Math.floor(100 + Math.random() * 900)}`,
      name,
      phone,
      email: email || 'N/A',
      city,
      plotSize: plotArea,
      service: `Custom Architecture Project (${selectedSoftwares.join(', ')})`,
      vastuRequired,
      message: message || 'Architectural project inquiry submitted via contact form.',
      estimatedCost: 'Custom Rate Card',
      status: 'New',
      date: new Date().toISOString().split('T')[0]
    };

    onSubmitInquiry(newInquiry);
    setSubmitted(true);
    showToast('Inquiry submitted to Blueprint Whales Admin Portal!', 'success');
  };

  return (
    <section id="contact" className="scroll-reveal" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
          
          {/* Left Info */}
          <div>
            <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
              <ShieldCheck size={14} />
              <span>Direct Architectural Consultation</span>
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
              Ready to Build Your <span className="text-gradient">Architectural Vision?</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '32px' }}>
              Fill out the project blueprint form below. Our principal architects will review your dimensions and provide initial 2D Vastu layout guidance.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(0, 180, 216, 0.15)', border: '1px solid rgba(0, 180, 216, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Direct Helpline (Call Any Time)</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFF' }}>+91 79921 59067</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Architectural Desk Email</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>contact@blueprintwhales.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Regional Studios</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>Regional Studios Across India</div>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '20px', background: 'rgba(11, 25, 44, 0.8)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38BDF8', marginBottom: '8px' }}>
                ⚡ Fast Track Guarantee:
              </div>
              <div style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                2D Vastu CAD draft proposals are generated within 24 hours of plot survey submission.
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-panel" style={{ padding: '36px', background: 'linear-gradient(145deg, #0B192C, #1E3E62)', border: '1px solid #00B4D8' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#FFF', marginBottom: '8px' }}>Inquiry Submitted Successfully!</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Thank you! Our principal architect will contact you directly to start drafting your 2D/3D project.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Submit Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFF', marginBottom: '20px' }}>
                  Project Specification Form
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '6px' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        background: '#050B14', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '6px' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 79921 59067"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        background: '#050B14', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '6px' }}>City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow, Delhi, Mumbai"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        background: '#050B14', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '6px' }}>Plot / Built-up Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 2400 Sq. Ft."
                      value={plotArea}
                      onChange={e => setPlotArea(e.target.value)}
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        background: '#050B14', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Software Preferences */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '8px' }}>
                    Select Preferred Softwares for Your Deliverable:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {softwareOptions.map(sw => {
                      const isSel = selectedSoftwares.includes(sw);
                      return (
                        <button
                          key={sw}
                          type="button"
                          onClick={() => toggleSoftware(sw)}
                          style={{
                            padding: '8px 10px', borderRadius: '6px', fontSize: '0.775rem', fontWeight: 600, textAlign: 'left',
                            background: isSel ? 'rgba(0, 180, 216, 0.2)' : 'rgba(5, 11, 20, 0.6)',
                            border: isSel ? '1px solid #00B4D8' : '1px solid rgba(255, 255, 255, 0.1)',
                            color: isSel ? '#38BDF8' : '#94A3B8', cursor: 'pointer'
                          }}
                        >
                          {isSel ? '✓ ' : '+ '}{sw}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.825rem', color: '#94A3B8', marginBottom: '6px' }}>Project Requirements</label>
                  <textarea
                    rows="3"
                    placeholder="Describe your plot orientation, floor count, Vastu needs, or specific design preferences..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{
                      width: '100%', padding: '10px 14px', borderRadius: '8px',
                      background: '#050B14', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none', resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={18} />
                  <span>Submit Inquiry to Principal Architect</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
