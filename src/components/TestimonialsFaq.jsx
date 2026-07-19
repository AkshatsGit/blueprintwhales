import React, { useState } from 'react';
import { Star, HelpCircle, ChevronDown, ChevronUp, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsFaq({ selectedCity }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajnish Srivastava',
      city: 'Lucknow (Gomti Nagar)',
      project: '3D Villa Elevation & 2D Vastu Plan',
      rating: 5,
      comment: 'Blueprint Whales made our Lucknow dream house floor map and 3D Revit elevation in just 4 days. Their Vastu compass alignment was 100% accurate, and rates were very reasonable!'
    },
    {
      name: 'Simran & Kapil Mehta',
      city: 'Delhi (South Ext)',
      project: 'Luxury Interior 3D CGI Renders',
      rating: 5,
      comment: 'We got 3ds Max + V-Ray renders for our 4BHK apartment in Delhi. The lighting and marble texture work felt like actual photography! Highly recommended.'
    },
    {
      name: 'Alok Tyagi',
      city: 'Ghaziabad (Indirapuram)',
      project: 'Commercial Complex Blueprints',
      rating: 5,
      comment: 'They provided full AutoCAD DWG blueprints and Rhino 3D facade models for our commercial plot in Ghaziabad. Extremely professional architectural software work.'
    }
  ];

  const faqs = [
    {
      q: 'Which 3D & 2D architectural software source files do you deliver?',
      a: 'We provide complete native project files including Autodesk Revit (.RVT, .IFC), AutoCAD (.DWG, .DXF), Rhino 3D (.3DM), SketchUp Pro (.SKP), 3ds Max (.MAX), as well as high-resolution 4K PDFs and video walkthroughs.'
    },
    {
      q: 'How is 100% Vastu Shastra compliance calculated for 2D maps?',
      a: 'Our Vastu specialists overlay a 16-zone Vastu directional grid on your plot coordinates to position the entrance (North-East), kitchen (Agneya), master bedroom (Nairutya), and water bodies (Ishanya) with exact mathematical precision.'
    },
    {
      q: 'Do your blueprints comply with Lucknow (LDA), Delhi (DDA), Ghaziabad (GDA), and Mumbai (BMC) municipal norms?',
      a: 'Yes! All structural blueprints, setbacks, floor-area ratios (FAR), and column load maps adhere strictly to local development authority bylaws across Lucknow, Delhi NCR, and Mumbai.'
    },
    {
      q: 'Why are your architectural rates more reasonable than traditional firms?',
      a: 'By leveraging cloud rendering clusters, parametric parametric scripts in Grasshopper, and automated BIM workflows, we eliminate unnecessary overhead while delivering enterprise-grade architectural quality.'
    },
    {
      q: 'What is the standard turnaround time for a 2D Vastu plan or 3D render?',
      a: 'Standard 2D Vastu CAD floor plans take 2 to 3 days. Full 3D Revit building renders take 4 to 6 days. Express delivery is available upon request.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'rgba(7, 13, 26, 0.4)' }}>
      <div className="container">
        
        {/* Testimonials Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="badge-amber" style={{ marginBottom: '12px' }}>
            <Quote size={14} />
            <span>Verified Client Ratings</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Trusted by Homeowners & Developers in <span className="text-gradient-amber">{selectedCity}</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid-3" style={{ gap: '24px', marginBottom: '80px' }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px', color: '#F59E0B' }}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" />)}
              </div>

              <p style={{ fontSize: '0.925rem', color: '#E2E8F0', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
                "{t.comment}"
              </p>

              <div style={{ borderTop: '1px solid rgba(56, 189, 248, 0.15)', paddingTop: '14px' }}>
                <div style={{ fontWeight: 700, color: '#FFF', fontSize: '1rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#38BDF8' }}>📍 {t.city}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>{t.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="badge-blueprint" style={{ marginBottom: '12px' }}>
              <HelpCircle size={14} />
              <span>Architectural FAQ</span>
            </span>
            <h3 style={{ fontSize: '2rem', color: '#FFF' }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '20px',
                    cursor: 'pointer',
                    borderColor: isOpen ? '#00B4D8' : 'rgba(56, 189, 248, 0.15)'
                  }}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? '#38BDF8' : '#FFF' }}>
                      {faq.q}
                    </div>
                    {isOpen ? <ChevronUp size={20} color="#38BDF8" /> : <ChevronDown size={20} color="#94A3B8" />}
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(56, 189, 248, 0.15)', fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
