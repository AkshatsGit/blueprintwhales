import React, { useState } from 'react';
import { Tag, Download, CheckCircle2, FileText, Sparkles, Calculator, ShieldCheck, Zap, Star, Phone } from 'lucide-react';

export default function RateCardQuote({ rateCardData, showToast }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Toggle selection or update quantity
  const handleToggle = (id) => {
    setSelectedItems(prev => {
      if (prev[id]) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      } else {
        return { ...prev, [id]: 1 };
      }
    });
  };

  const handleQtyChange = (id, qty) => {
    const num = Math.max(1, parseInt(qty) || 1);
    setSelectedItems(prev => ({
      ...prev,
      [id]: num
    }));
  };

  // Calculate grand total
  const calculateTotal = () => {
    let sum = 0;
    Object.keys(selectedItems).forEach(id => {
      const item = rateCardData.find(r => r.id === id);
      if (item) {
        sum += item.rate * selectedItems[id];
      }
    });
    return sum;
  };

  const grandTotal = calculateTotal();

  // Printable A4 PDF Window Generator
  const handleDownloadPdfQuote = () => {
    if (Object.keys(selectedItems).length === 0) {
      showToast('Please select at least one service card to generate a quote!', 'warning');
      return;
    }

    const dateStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    const quoteId = `BW-QUOTE-${Math.floor(10000 + Math.random() * 90000)}`;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      showToast('Please allow popups to generate your A4 PDF quote!', 'warning');
      return;
    }

    let rowsHtml = '';
    Object.keys(selectedItems).forEach((id, index) => {
      const item = rateCardData.find(r => r.id === id);
      const qty = selectedItems[id];
      const lineTotal = item.rate * qty;
      let includesHtml = '';
      if (item.includes) {
        includesHtml = `<ul style="margin: 4px 0 0 16px; padding: 0; font-size: 11px; color: #475569;">${item.includes.map(inc => `<li>${inc}</li>`).join('')}</ul>`;
      }

      rowsHtml += `
        <tr style="border-bottom: 1px solid #E2E8F0;">
          <td style="padding: 10px; font-size: 13px;">${index + 1}</td>
          <td style="padding: 10px; font-size: 13px;">
            <strong>${item.title}</strong>
            <div style="font-size: 11px; color: #64748B;">${item.description}</div>
            ${includesHtml}
          </td>
          <td style="padding: 10px; font-size: 13px; text-align: center;">${qty} (${item.unit})</td>
          <td style="padding: 10px; font-size: 13px; text-align: right;">₹ ${item.rate.toLocaleString('en-IN')}</td>
          <td style="padding: 10px; font-size: 13px; text-align: right; font-weight: bold;">₹ ${lineTotal.toLocaleString('en-IN')}</td>
        </tr>
      `;
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Blueprint Whales - Official A4 Quotation ${quoteId}</title>
        <style>
          @page { size: A4; margin: 20mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #0F172A; margin: 0; padding: 20px; background: #FFF; }
          .header-container { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #00B4D8; padding-bottom: 15px; margin-bottom: 20px; }
          .logo-box { display: flex; alignItems: center; gap: 12px; }
          .logo-img { width: 54px; height: 54px; border-radius: 10px; object-fit: cover; }
          .brand-title { font-size: 24px; font-weight: 800; color: #070D1A; letter-spacing: -0.5px; }
          .brand-subtitle { font-size: 11px; color: #00B4D8; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
          .quote-meta { text-align: right; font-size: 12px; color: #475569; }
          .blue-line { height: 2px; background: linear-gradient(90deg, #00B4D8, #38BDF8); margin: 15px 0; }
          .client-box { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th { background: #0F172A; color: #FFF; padding: 10px; font-size: 12px; text-transform: uppercase; text-align: left; }
          .total-box { background: #F0F9FF; border: 2px solid #00B4D8; border-radius: 10px; padding: 16px; text-align: right; margin-bottom: 30px; }
          .total-price { font-size: 24px; font-weight: 800; color: #00B4D8; }
          .footer-container { border-top: 2px solid #00B4D8; padding-top: 15px; margin-top: 30px; font-size: 11px; color: #64748B; display: flex; justify-content: space-between; align-items: center; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 20px; text-align: right;">
          <button onclick="window.print()" style="background: #00B4D8; color: #FFF; border: none; padding: 10px 20px; font-weight: bold; border-radius: 6px; cursor: pointer;">Print / Save as PDF</button>
        </div>

        <div class="header-container">
          <div class="logo-box">
            <img src="/images/blueprint_whales_logo.jpg" class="logo-img" alt="Logo" />
            <div>
              <div class="brand-title">BLUEPRINT WHALES</div>
              <div class="brand-subtitle">Designing Spaces. Creating Possibilities.</div>
            </div>
          </div>
          <div class="quote-meta">
            <strong style="color: #00B4D8; font-size: 14px;">OFFICIAL ESTIMATE QUOTATION</strong><br>
            <strong>Quote ID:</strong> ${quoteId}<br>
            <strong>Date:</strong> ${dateStr}
          </div>
        </div>

        <div class="client-box">
          <strong>Client Details:</strong> ${clientName || 'Valued Client'} &nbsp;|&nbsp; <strong>Contact Phone:</strong> ${clientPhone || 'N/A'}<br>
          <strong>Architectural Desk Helpline:</strong> +91 79921 59067 &nbsp;|&nbsp; <strong>Service Model:</strong> Remote Online Work (Zero Hidden Charges)
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 5%;">#</th>
              <th style="width: 50%;">Service Description</th>
              <th style="width: 15%; text-align: center;">Qty / Unit</th>
              <th style="width: 15%; text-align: right;">Rate (₹)</th>
              <th style="width: 15%; text-align: right;">Subtotal (₹)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <div class="total-box">
          <div style="font-size: 12px; color: #475569; text-transform: uppercase;">Total Estimated Investment</div>
          <div class="total-price">₹ ${grandTotal.toLocaleString('en-IN')}</div>
          <div style="font-size: 11px; color: #10B981; margin-top: 4px;">✓ Includes Native Source Files (.RVT, .DWG, .SKP) & Vastu Verification</div>
        </div>

        <div class="footer-container">
          <div>
            <strong>Blueprint Whales Architectural Studio</strong><br>
            Regional Studios Across India &nbsp;|&nbsp; For any queries call on: <strong>+91 79921 59067</strong>
          </div>
          <div style="text-align: right;">
            Email: contact@blueprintwhales.com<br>
            Website: www.blueprintwhales.com
          </div>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    showToast(`A4 PDF Quote Window generated for ${quoteId}!`, 'success');
  };

  return (
    <section id="official-rates" className="scroll-reveal" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Tag size={14} />
            <span>Official Rate Cards & Quotation</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Transparent Architectural <span className="text-gradient">Service Cards</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Select your required architectural services below to build a customized estimate. Instant downloadable A4 PDF quote provided with zero hidden charges. Direct Helpline: <strong>+91 79921 59067</strong>.
          </p>
        </div>

        {/* Featured Special Complete Package Banner */}
        {(() => {
          const specialPkg = rateCardData.find(r => r.isFeatured);
          if (!specialPkg) return null;
          const isSelected = !!selectedItems[specialPkg.id];

          return (
            <div
              className="glass-panel scroll-reveal"
              style={{
                padding: '32px',
                marginBottom: '40px',
                border: '2px solid #F59E0B',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(11, 25, 44, 0.98) 100%)',
                boxShadow: '0 0 35px rgba(245, 158, 11, 0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                <div style={{ maxWidth: '700px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span className="badge-amber">
                      <Star size={14} fill="#F59E0B" />
                      <span>{specialPkg.badge}</span>
                    </span>
                    <span style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: 700 }}>
                      ✓ NO HIDDEN CHARGES GUARANTEE
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
                    {specialPkg.title}
                  </h3>

                  <p style={{ fontSize: '0.975rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '20px' }}>
                    {specialPkg.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                    {specialPkg.includes && specialPkg.includes.map((inc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
                        <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                        <span style={{ fontWeight: 600 }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: '#050B14',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  textAlign: 'center',
                  minWidth: '260px'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Complete Package Rate:
                  </div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#F59E0B', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '6px', marginBottom: '14px' }}>
                    <span>₹ {specialPkg.rate}</span>
                    <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 500 }}>/ sq. ft.</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggle(specialPkg.id)}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: isSelected ? '#10B981' : 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                      boxShadow: '0 4px 20px rgba(245, 158, 11, 0.4)'
                    }}
                  >
                    {isSelected ? '✓ Special Package Selected' : '+ Select Complete Special Pack'}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Regular Services Cards Grid */}
        <div className="grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
          {rateCardData.filter(r => !r.isFeatured).map((item) => {
            const isSelected = !!selectedItems[item.id];
            return (
              <div
                key={item.id}
                className="glass-panel scroll-reveal"
                style={{
                  padding: '24px',
                  borderColor: isSelected ? '#38BDF8' : 'rgba(56, 189, 248, 0.25)',
                  background: isSelected ? 'linear-gradient(145deg, #0F223C, #264D78)' : 'linear-gradient(145deg, rgba(11, 25, 44, 0.94), rgba(30, 62, 98, 0.96))',
                  boxShadow: isSelected ? '0 0 25px rgba(56, 189, 248, 0.35)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(0, 180, 216, 0.15)',
                      color: '#38BDF8',
                      border: '1px solid rgba(0, 180, 216, 0.3)'
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                      ₹ {item.rate.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>/ {item.unit}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={() => handleToggle(item.id)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '8px',
                        background: isSelected ? '#00B4D8' : 'rgba(15, 34, 60, 0.8)',
                        border: isSelected ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: isSelected ? '#050B14' : '#CBD5E1',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {isSelected ? '✓ Added to Quote' : '+ Add to Quote'}
                    </button>

                    {isSelected && (
                      <input
                        type="number"
                        min="1"
                        value={selectedItems[item.id]}
                        onChange={(e) => handleQtyChange(item.id, e.target.value)}
                        style={{
                          width: '55px',
                          padding: '8px',
                          borderRadius: '8px',
                          background: '#050B14',
                          border: '1px solid #00B4D8',
                          color: '#FFF',
                          fontWeight: 700,
                          textAlign: 'center'
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Downloadable Quote Summary Card */}
        <div className="glass-panel scroll-reveal" style={{ padding: '30px', background: 'linear-gradient(145deg, #0B192C, #1E3E62)', border: '1px solid #00B4D8' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Calculator size={20} color="#F59E0B" />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF' }}>
                  Custom Rate Quote Summary
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', marginBottom: '16px' }}>
                Enter your details to generate and download an official printable A4 PDF quote statement. For any queries call on: <strong>+91 79921 59067</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    padding: '10px 14px', borderRadius: '8px', background: '#050B14',
                    border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  style={{
                    padding: '10px 14px', borderRadius: '8px', background: '#050B14',
                    border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF', outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{
              background: '#050B14',
              padding: '24px',
              borderRadius: '14px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '4px' }}>
                Total Estimated Quote ({Object.keys(selectedItems).length} Services Selected)
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
                <span className="text-gradient">₹ {grandTotal.toLocaleString('en-IN')}</span>
              </div>

              <button
                type="button"
                onClick={handleDownloadPdfQuote}
                className="btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                <Download size={18} />
                <span>Download Official A4 PDF Quote</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
