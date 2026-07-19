import React, { useState } from 'react';
import { Calculator, Compass, Sparkles, MapPin, CheckCircle2, Send, Clock, Globe } from 'lucide-react';

export default function VastuCostEstimator({ ratesData, onSubmitInquiry, showToast }) {
  const [plotArea, setPlotArea] = useState(2400);
  const [serviceType, setServiceType] = useState('full'); // 'vastu2D', 'elevation3D', 'fullInterior', 'full'
  const [vastuChecked, setVastuChecked] = useState(true);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [userCity, setUserCity] = useState('Lucknow');

  // Form lead inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Global uniform rates
  const globalRates = ratesData.vastu2D ? ratesData : { vastu2D: 15, elevation3D: 30, fullInterior: 50, expressDeliveryDays: 3 };

  // Calculate pricing
  const calculateTotal = () => {
    let ratePerSqFt = 0;
    if (serviceType === 'vastu2D') ratePerSqFt = globalRates.vastu2D;
    else if (serviceType === 'elevation3D') ratePerSqFt = globalRates.elevation3D;
    else if (serviceType === 'fullInterior') ratePerSqFt = globalRates.fullInterior;
    else if (serviceType === 'full') ratePerSqFt = globalRates.vastu2D + globalRates.elevation3D + (globalRates.fullInterior * 0.4);

    if (vastuChecked && serviceType !== 'vastu2D') ratePerSqFt += 3;
    if (expressDelivery) ratePerSqFt *= 1.15;

    const total = Math.round(plotArea * ratePerSqFt);
    return { total, ratePerSqFt: Math.round(ratePerSqFt) };
  };

  const { total, ratePerSqFt } = calculateTotal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please enter your name and phone number!', 'warning');
      return;
    }

    const newInquiry = {
      id: `INQ-${Math.floor(100 + Math.random() * 900)}`,
      name,
      phone,
      email: email || 'N/A',
      city: userCity || 'Pan-India',
      plotSize: `${plotArea} Sq. Ft.`,
      service: serviceType === 'vastu2D' ? '2D Vastu Blueprint' : serviceType === 'elevation3D' ? '3D Revit Render' : serviceType === 'fullInterior' ? '3D Interior Design' : 'Full Architecture & Vastu Package',
      vastuRequired: vastuChecked,
      message: notes || `Inquiry for ${plotArea} sq ft property in ${userCity}. Estimated budget ₹ ${total.toLocaleString('en-IN')}`,
      estimatedCost: `₹ ${total.toLocaleString('en-IN')}`,
      status: 'New',
      date: new Date().toISOString().split('T')[0]
    };

    onSubmitInquiry(newInquiry);
    setSubmitted(true);
    showToast(`Inquiry submitted successfully! ID: ${newInquiry.id}`, 'success');
  };

  return (
    <section id="vastu-calculator" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Calculator size={14} />
            <span>Transparent Nationwide Rates</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Uniform Remote <span className="text-gradient">Project Rate Calculator</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Because our architectural work is conducted remotely online, we offer transparent per-square-foot rates across Lucknow, Delhi NCR, Ghaziabad, Mumbai, and every city in India.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', color: '#F59E0B', fontWeight: 600, fontSize: '0.85rem', marginTop: '12px' }}>
            <Globe size={14} />
            <span>Same Reasonable Rates for All Locations — Executed Remotely</span>
          </div>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid-2" style={{ gap: '30px', alignItems: 'start' }}>
          
          {/* Left: Controls */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px', color: '#FFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={20} color="#F59E0B" />
              <span>1. Project Dimensions & Scope</span>
            </h3>

            {/* Plot Area Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 600, color: '#94A3B8' }}>Built-Up / Plot Area:</label>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#F59E0B', fontFamily: 'var(--font-heading)' }}>
                  {plotArea.toLocaleString()} Sq. Ft.
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="15000"
                step="100"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  accentColor: '#00B4D8',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B' }}>
                <span>600 Sq Ft (Small Plot)</span>
                <span>3,500 Sq Ft (Villa)</span>
                <span>15,000 Sq Ft (Commercial)</span>
              </div>
            </div>

            {/* Service Scope */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#94A3B8', marginBottom: '8px' }}>
                Required Architectural Scope:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {[
                  { id: 'vastu2D', label: '2D Vastu CAD Map', rate: globalRates.vastu2D },
                  { id: 'elevation3D', label: '3D Revit Elevation', rate: globalRates.elevation3D },
                  { id: 'fullInterior', label: '3D House Interior', rate: globalRates.fullInterior },
                  { id: 'full', label: 'Full Blueprint & 3D Suite', rate: 'Best Value' }
                ].map(srv => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceType(srv.id)}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      textAlign: 'left',
                      background: serviceType === srv.id ? 'rgba(0, 180, 216, 0.2)' : 'rgba(30, 41, 59, 0.5)',
                      border: serviceType === srv.id ? '1px solid #00B4D8' : '1px solid rgba(255, 255, 255, 0.1)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: serviceType === srv.id ? '#FFF' : '#CBD5E1' }}>
                      {srv.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: serviceType === srv.id ? '#38BDF8' : '#64748B', marginTop: '2px' }}>
                      {typeof srv.rate === 'number' ? `₹${srv.rate} / sq.ft` : srv.rate}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.875rem', color: '#CBD5E1' }}>
                <input
                  type="checkbox"
                  checked={vastuChecked}
                  onChange={(e) => setVastuChecked(e.target.checked)}
                  style={{ accentColor: '#F59E0B', width: '16px', height: '16px' }}
                />
                <span>Include 100% Vastu Shastra Compass Verification Report</span>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.875rem', color: '#CBD5E1' }}>
                <input
                  type="checkbox"
                  checked={expressDelivery}
                  onChange={(e) => setExpressDelivery(e.target.checked)}
                  style={{ accentColor: '#00B4D8', width: '16px', height: '16px' }}
                />
                <span>Express Delivery ({globalRates.expressDeliveryDays || 3} Days Priority Deliverable Output)</span>
              </label>
            </div>

          </div>

          {/* Right: Summary & Form */}
          <div className="glass-panel" style={{ padding: '30px', background: 'rgba(15, 23, 42, 0.95)', border: '1px solid #00B4D8' }}>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15) 0%, rgba(7, 13, 26, 0.8) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '14px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Uniform Remote Rate Investment:
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span className="text-gradient">₹ {total.toLocaleString('en-IN')}</span>
                <span style={{ fontSize: '0.9rem', color: '#38BDF8', fontWeight: 500 }}>
                  (~ ₹{ratePerSqFt} / sq.ft)
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                <Clock size={14} />
                <span>Estimated Turnaround: {expressDelivery ? '3 Days (Express)' : '7 to 10 Days'}</span>
              </div>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                <CheckCircle2 size={40} color="#10B981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '8px' }}>Inquiry Submitted!</h4>
                <p style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '16px' }}>
                  Our architectural desk will contact you directly to start your 2D/3D project layout.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-secondary">
                  Calculate Another Rate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h4 style={{ fontSize: '1.1rem', color: '#FFF', fontWeight: 700, marginBottom: '14px' }}>
                  Lock In Rate & Request Design Work
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(7, 13, 26, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(7, 13, 26, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your City (e.g. Lucknow, Delhi)"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(7, 13, 26, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(7, 13, 26, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <textarea
                    placeholder="Project details (e.g. plot orientation, floor count, house interior needs)..."
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', background: 'rgba(7, 13, 26, 0.8)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', fontSize: '0.875rem', outline: 'none', resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={16} />
                  <span>Send Direct Project Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
