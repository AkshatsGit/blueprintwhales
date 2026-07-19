import React, { useState } from 'react';
import { MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

export default function LocationHub() {
  const [activeTabCity, setActiveTabCity] = useState('Lucknow');

  const locationDetails = {
    Lucknow: {
      title: 'Architects & 3D Vastu Blueprint Designers in Lucknow',
      badge: 'Lucknow SEO Hub',
      areas: ['Gomti Nagar', 'Hazratganj', 'Alambagh', 'Indira Nagar', 'Mahanagar', 'Sushant Golf City'],
      description: 'Blueprint Whales provides premier architectural design work in Lucknow remotely online. We specialize in LDA (Lucknow Development Authority) compliant 2D floor maps, Vastu directional alignment, and 3D Revit facade elevation renders.',
      highlights: [
        'LDA Municipal Map Approval Standards',
        '100% Vastu Orientations for East-Facing & North-Facing Plots',
        'Express 24-Hour 2D Blueprint Delivery in Lucknow',
        'Same Reasonable Remote Rates Across All Locations'
      ]
    },
    Delhi: {
      title: 'Architectural & House Interior Design Work in Delhi NCR',
      badge: 'Delhi NCR SEO Hub',
      areas: ['Vasant Vihar', 'Greater Kailash', 'Dwarka', 'Rohini', 'South Extension', 'Chhatarpur'],
      description: 'Delivering world-class 3D architectural modeling and luxury house interior space design across Delhi NCR. Our team handles complex parametric facades in Rhino 3D and high-resolution CGI renders in 3ds Max.',
      highlights: [
        'DDA & MCD Building Bylaw Blueprint Standards',
        'Luxury Villa 3D Elevation & Landscape Integration',
        'House Interior Space & Lighting Optimization',
        'Revit BIM Level 2 Clash Detection'
      ]
    },
    Ghaziabad: {
      title: 'Architectural & 3D Design Work in Ghaziabad',
      badge: 'Ghaziabad SEO Hub',
      areas: ['Indirapuram', 'Vaishali', 'Raj Nagar Extension', 'Vasundhara', 'Crossings Republik'],
      description: 'Top architectural designers serving Ghaziabad remotely. We craft 2D Vastu site blueprints, floor planning, structural load calculations, and photorealistic SketchUp 3D renderings for homeowners and commercial developers.',
      highlights: [
        'GDA (Ghaziabad Development Authority) Map Alignment',
        'Structural Column & Beam Detailing CAD Drawings',
        'Commercial Shop & High-Rise Floor Maps',
        'Flat Per Sq Ft Architectural Rates Nationwide'
      ]
    },
    Mumbai: {
      title: 'High-Rise Architectural & 3D Interior Design in Mumbai',
      badge: 'Mumbai SEO Hub',
      areas: ['Bandra', 'Worli', 'Juhu', 'Andheri', 'Powai', 'Lower Parel', 'Thane'],
      description: 'Expert 3D architectural renders and space-saving house interior design for Mumbai apartments, penthouses, and commercial spaces. High-end CGI rendering using 3ds Max, V-Ray, and Lumion.',
      highlights: [
        'BMC Blueprint Standards & Space Optimization',
        'Compact Luxury Modular Kitchen & Living Room 3D Renders',
        'High-Resolution 4K Video Flythroughs for Developers',
        '360-Degree Panoramic VR Architectural Views'
      ]
    },
    NoidaGurgaon: {
      title: 'Architectural & Villa Design in Noida & Gurgaon',
      badge: 'Noida & Gurgaon Hub',
      areas: ['Noida Sector 62', 'Greater Noida West', 'Golf Course Road Gurgaon', 'DLF Phase 5', 'Cyber City'],
      description: 'High-speed remote 3D Revit modeling and 2D Vastu blueprint drafting for luxury villas and corporate office interiors in Noida and Gurgaon.',
      highlights: [
        'Noida Authority & HUDA Compliant Blueprint Maps',
        'Parametric Glass & Steel Facade 3D Renders',
        'Full Turnkey CAD Working Drawings',
        'Uniform Rates for All NCR Clients'
      ]
    },
    BangaloreHyderabad: {
      title: 'Architects & 3D Render Designers in Bangalore & Hyderabad',
      badge: 'South India SEO Hub',
      areas: ['Indiranagar Bangalore', 'Whitefield', 'Koramangala', 'Gachibowli Hyderabad', 'Jubilee Hills', 'HITEC City'],
      description: 'Serving Bangalore and Hyderabad remotely with contemporary villa 3D elevation renders, 2D Vastu floorplans, and modern house interior designs.',
      highlights: [
        'BBMP & GHMC Standards Blueprint Layouts',
        'IT Park & Modern Residential Architecture',
        'Revit BIM Project Source File Export',
        'Seamless Online Video Consultation'
      ]
    }
  };

  const currentLoc = locationDetails[activeTabCity] || locationDetails['Lucknow'];

  return (
    <section id="locations" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
            <Globe size={14} />
            <span>All-India Remote Architectural SEO Hub</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Catering to Clients in <span className="text-gradient">Every City Across India</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Whether you are searching for architects in Lucknow, design work in Delhi, Ghaziabad, Mumbai, Noida, Gurgaon, Bangalore, or Hyderabad — Blueprint Whales executes all 2D blueprints and 3D renders remotely online at uniform reasonable rates.
          </p>

          {/* City Selector Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
            {[
              { id: 'Lucknow', label: '📍 Lucknow' },
              { id: 'Delhi', label: '📍 Delhi NCR' },
              { id: 'Ghaziabad', label: '📍 Ghaziabad' },
              { id: 'Mumbai', label: '📍 Mumbai' },
              { id: 'NoidaGurgaon', label: '📍 Noida & Gurgaon' },
              { id: 'BangaloreHyderabad', label: '📍 Bangalore & Hyderabad' }
            ].map(cty => (
              <button
                key={cty.id}
                onClick={() => setActiveTabCity(cty.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  background: activeTabCity === cty.id ? '#00B4D8' : 'rgba(30, 41, 59, 0.6)',
                  border: activeTabCity === cty.id ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: activeTabCity === cty.id ? '#070D1A' : '#CBD5E1',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cty.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Location Detail Panel */}
        <div className="glass-panel" style={{ padding: '36px', background: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge-amber" style={{ marginBottom: '12px' }}>{currentLoc.badge}</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#FFF', marginBottom: '14px' }}>
                {currentLoc.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '24px' }}>
                {currentLoc.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94A3B8', marginBottom: '10px', textTransform: 'uppercase' }}>
                  Coverage Areas Catered Remotely:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentLoc.areas.map((area, idx) => (
                    <span key={idx} style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'rgba(0, 180, 216, 0.1)',
                      border: '1px solid rgba(0, 180, 216, 0.25)',
                      color: '#38BDF8',
                      fontSize: '0.825rem',
                      fontWeight: 600
                    }}>
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#vastu-calculator" className="btn-primary">
                <span>Request Architectural Blueprint Quote</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div style={{
              background: '#070D1A',
              padding: '28px',
              borderRadius: '16px',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={20} color="#F59E0B" />
                <span>Remote Architectural Service Advantages</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentLoc.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.925rem', color: '#E2E8F0', lineHeight: 1.4 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
