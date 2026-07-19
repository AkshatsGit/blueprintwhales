import React, { useState } from 'react';
import { 
  Users, Briefcase, DollarSign, Search, Filter, Trash2, Edit3, 
  CheckCircle2, Plus, Globe, Settings, X, Shield, Tag, FileText, Lock, Key
} from 'lucide-react';

export default function AdminPanel({ 
  inquiries, setInquiries, 
  portfolio, setPortfolio, 
  rateCard, setRateCard, 
  seoSettings, setSeoSettings, 
  onClose, showToast 
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('rateCard');
  const [searchQuery, setSearchQuery] = useState('');

  // New Rate Card Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('General');
  const [newRate, setNewRate] = useState('');
  const [newUnit, setNewUnit] = useState('per project');
  const [newDesc, setNewDesc] = useState('');
  const [showAddRateModal, setShowAddRateModal] = useState(false);

  // SEO Editing State
  const [tempSeo, setTempSeo] = useState({ ...seoSettings });

  // Handle Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim() && passwordInput.trim()) {
      setIsLoggedIn(true);
      setLoginError('');
      showToast('Logged into Blueprint Whales Admin Portal!', 'success');
    } else {
      setLoginError('Please enter valid credentials.');
    }
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter(inq => {
    return inq.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           inq.phone.includes(searchQuery) || 
           inq.city.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Handle lead status update
  const handleUpdateStatus = (id, newStatus) => {
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq);
    setInquiries(updated);
    showToast(`Lead ${id} updated to ${newStatus}`, 'info');
  };

  // Handle lead delete
  const handleDeleteInquiry = (id) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    setInquiries(updated);
    showToast(`Inquiry ${id} deleted`, 'warning');
  };

  // Handle Rate Item edit
  const handleRateChange = (id, val) => {
    const num = Math.max(0, parseInt(val) || 0);
    const updated = rateCard.map(item => item.id === id ? { ...item, rate: num } : item);
    setRateCard(updated);
    showToast(`Rate updated to ₹${num}`, 'info');
  };

  // Handle Add Rate Item
  const handleAddRateItem = (e) => {
    e.preventDefault();
    if (!newTitle || !newRate) {
      showToast('Title and rate are required!', 'warning');
      return;
    }
    const newItem = {
      id: `rate-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      originalRate: Number(newRate),
      rate: Number(newRate),
      unit: newUnit,
      description: newDesc || 'Official architectural service offering.',
      badge: newCategory
    };
    setRateCard([...rateCard, newItem]);
    setShowAddRateModal(false);
    showToast('New service rate card added to official list!', 'success');
  };

  // Delete Rate Item
  const handleDeleteRateItem = (id) => {
    setRateCard(rateCard.filter(r => r.id !== id));
    showToast('Rate card item removed', 'info');
  };

  // Save SEO
  const handleSaveSeo = (e) => {
    e.preventDefault();
    setSeoSettings(tempSeo);
    showToast('SEO Metadata & JSON-LD Schema saved!', 'success');
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(4, 8, 18, 0.96)', backdropFilter: 'blur(24px)',
      zIndex: 1000, display: 'flex', flexDirection: 'column', color: '#FFF'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 30px', background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/blueprint_whales_logo.jpg" alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
          <div style={{ padding: '4px 10px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid #F59E0B', color: '#F59E0B', fontWeight: 800, fontSize: '0.8rem' }}>
            ADMIN CONTROL DESK
          </div>
        </div>

        <button onClick={onClose} style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#FFF', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <X size={16} />
          <span>Exit Admin</span>
        </button>
      </div>

      {/* LOGIN LOCK SCREEN */}
      {!isLoggedIn ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-panel" style={{ maxWidth: '420px', width: '100%', padding: '36px', background: '#0F172A', border: '1px solid #00B4D8' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 180, 216, 0.15)', border: '1px solid #00B4D8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38BDF8', margin: '0 auto 16px' }}>
              <Lock size={24} />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#FFF', textAlign: 'center', marginBottom: '6px' }}>Admin Authorization</h3>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', textAlign: 'center', marginBottom: '24px' }}>Enter administrator credentials to manage rates and leads.</p>

            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>User ID</label>
                <input type="text" required placeholder="User ID" value={usernameInput} onChange={e => setUsernameInput(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#FFF' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '4px' }}>Password</label>
                <input type="password" required placeholder="Password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.3)', color: '#FFF' }} />
              </div>

              {loginError && <div style={{ color: '#EF4444', fontSize: '0.8rem', marginBottom: '12px', textAlign: 'center' }}>{loginError}</div>}

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px' }}>Login</button>
            </form>
          </div>
        </div>
      ) : (
        /* DASHBOARD */
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          
          {/* Sidebar */}
          <div style={{ width: '230px', background: 'rgba(15, 23, 42, 0.6)', borderRight: '1px solid rgba(56, 189, 248, 0.15)', padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button onClick={() => setActiveTab('rateCard')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: activeTab === 'rateCard' ? '#00B4D8' : 'transparent', color: activeTab === 'rateCard' ? '#070D1A' : '#CBD5E1', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
              <Tag size={18} />
              <span>Official Rate Cards</span>
            </button>
            <button onClick={() => setActiveTab('inquiries')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: activeTab === 'inquiries' ? '#00B4D8' : 'transparent', color: activeTab === 'inquiries' ? '#070D1A' : '#CBD5E1', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
              <Users size={18} />
              <span>Leads ({inquiries.length})</span>
            </button>
            <button onClick={() => setActiveTab('seo')} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: activeTab === 'seo' ? '#00B4D8' : 'transparent', color: activeTab === 'seo' ? '#070D1A' : '#CBD5E1', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
              <Globe size={18} />
              <span>SEO Settings</span>
            </button>
          </div>

          {/* Content Pane */}
          <div style={{ flex: 1, padding: '30px', overflowY: 'auto', background: '#070D1A' }}>
            
            {/* TAB: RATE CARD MANAGER */}
            {activeTab === 'rateCard' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#FFF' }}>Official Rate Cards Manager</h2>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>Update per-floor, per-sheet, and per-sq-ft service rates dynamically.</p>
                  </div>

                  <button onClick={() => setShowAddRateModal(true)} className="btn-primary" style={{ padding: '10px 18px' }}>
                    <Plus size={16} />
                    <span>Add New Service Rate</span>
                  </button>
                </div>

                <div className="grid-2" style={{ gap: '20px' }}>
                  {rateCard.map((item) => (
                    <div key={item.id} className="glass-panel" style={{ padding: '20px', background: 'rgba(15, 23, 42, 0.9)', border: '1px solid #00B4D8' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div>
                          <span style={{ fontSize: '0.75rem', color: '#38BDF8', background: 'rgba(0, 180, 216, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>{item.badge}</span>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginTop: '6px' }}>{item.title}</h4>
                        </div>
                        <button onClick={() => handleDeleteRateItem(item.id)} style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <p style={{ fontSize: '0.825rem', color: '#94A3B8', marginBottom: '14px' }}>{item.description}</p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ flex: 1 }}>
                          <label style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '4px' }}>Rate (₹ / {item.unit}):</label>
                          <input
                            type="number"
                            value={item.rate}
                            onChange={(e) => handleRateChange(item.id, e.target.value)}
                            style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', background: '#070D1A', border: '1px solid #00B4D8', color: '#F59E0B', fontWeight: 700, fontSize: '1rem' }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Rate Modal */}
                {showAddRateModal && (
                  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(7, 13, 26, 0.85)', backdropFilter: 'blur(12px)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '30px', background: '#0F172A' }}>
                      <h3 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '16px' }}>Add Service Rate Card Item</h3>
                      <form onSubmit={handleAddRateItem}>
                        <input type="text" required placeholder="Service Title *" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '12px' }}>
                          <input type="number" required placeholder="Rate (₹) *" value={newRate} onChange={e => setNewRate(e.target.value)} style={{ padding: '10px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF' }} />
                          <input type="text" placeholder="Unit (e.g. per floor, per sqft)" value={newUnit} onChange={e => setNewUnit(e.target.value)} style={{ padding: '10px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF' }} />
                        </div>
                        <textarea placeholder="Service Description..." rows="3" value={newDesc} onChange={e => setNewDesc(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', background: '#070D1A', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#FFF' }} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button type="submit" className="btn-primary" style={{ flex: 1 }}>Save Rate Item</button>
                          <button type="button" onClick={() => setShowAddRateModal(false)} className="btn-secondary" style={{ flex: 1 }}>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: INQUIRIES */}
            {activeTab === 'inquiries' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px' }}>Leads & Project Inquiries</h2>
                <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                    <thead>
                      <tr style={{ background: 'rgba(30, 41, 59, 0.8)', color: '#38BDF8' }}>
                        <th style={{ padding: '12px' }}>ID</th>
                        <th style={{ padding: '12px' }}>Client</th>
                        <th style={{ padding: '12px' }}>Scope</th>
                        <th style={{ padding: '12px' }}>Estimate</th>
                        <th style={{ padding: '12px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.map(inq => (
                        <tr key={inq.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                          <td style={{ padding: '12px', color: '#FFF', fontWeight: 700 }}>{inq.id}</td>
                          <td style={{ padding: '12px' }}>{inq.name}<br/><span style={{ fontSize: '0.75rem', color: '#38BDF8' }}>{inq.phone}</span></td>
                          <td style={{ padding: '12px', color: '#CBD5E1' }}>{inq.service}</td>
                          <td style={{ padding: '12px', color: '#F59E0B', fontWeight: 700 }}>{inq.estimatedCost}</td>
                          <td style={{ padding: '12px' }}>{inq.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: SEO */}
            {activeTab === 'seo' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '16px' }}>SEO Settings</h2>
                <form onSubmit={handleSaveSeo} className="glass-panel" style={{ padding: '24px', maxWidth: '600px' }}>
                  <input type="text" value={tempSeo.metaTitle} onChange={e => setTempSeo({ ...tempSeo, metaTitle: e.target.value })} style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', background: '#070D1A', border: '1px solid #00B4D8', color: '#FFF' }} />
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>Save SEO Settings</button>
                </form>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
