import React, { useState, useRef } from 'react';
import { Eye, MoveHorizontal, Compass, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mode, setMode] = useState('exterior');
  const containerRef = useRef(null);

  const image2D = mode === 'exterior' ? '/images/dummy_2d_floorplan.png' : '/images/vastu_2d_plan.png';
  const image3D = mode === 'exterior' ? '/images/luxury_villa_3d.png' : '/images/house_interior_3d.png';

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section id="visualizer" className="scroll-reveal" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px' }}>
          <span className="badge-amber" style={{ marginBottom: '12px' }}>
            <MoveHorizontal size={14} />
            <span>Interactive 2D to 3D Live Transformation</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '14px' }}>
            Swipe Slider to Convert <span className="text-gradient-amber">2D CAD into 3D Renders</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Drag the handle left or right to transform raw 2D Vastu CAD floorplan blueprints into hyper-realistic 3D Revit elevations instantly.
          </p>

          {/* Mode Switcher */}
          <div style={{ display: 'inline-flex', gap: '6px', background: 'rgba(15, 23, 42, 0.8)', padding: '4px', borderRadius: '10px', marginTop: '14px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <button
              onClick={() => setMode('exterior')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                background: mode === 'exterior' ? '#F59E0B' : 'transparent',
                color: mode === 'exterior' ? '#070D1A' : '#94A3B8',
                fontWeight: 700,
                fontSize: '0.8rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Villa Exterior 3D
            </button>
            <button
              onClick={() => setMode('interior')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                background: mode === 'interior' ? '#F59E0B' : 'transparent',
                color: mode === 'interior' ? '#070D1A' : '#94A3B8',
                fontWeight: 700,
                fontSize: '0.8rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              House Interior 3D
            </button>
          </div>
        </div>

        {/* Interactive Hover Container - Mobile Height & View Optimized */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(240px, 45vw, 500px)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid rgba(56, 189, 248, 0.4)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65), 0 0 30px rgba(0, 180, 216, 0.2)',
            cursor: 'ew-resize',
            userSelect: 'none',
            background: '#070D1A'
          }}
        >
          {/* Base Layer: 3D Render (Right Side) */}
          <img
            src={image3D}
            alt="Finished 3D Architectural Render"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />

          {/* Right Label */}
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(7, 13, 26, 0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0, 180, 216, 0.4)',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.725rem',
            fontWeight: 700,
            color: '#38BDF8',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 5
          }}>
            <Sparkles size={12} />
            <span>3D CGI Render</span>
          </div>

          {/* Top Layer: 2D Blueprint (Clipped according to cursor position) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${sliderPosition}%`,
            height: '100%',
            overflow: 'hidden',
            borderRight: '3px solid #F59E0B',
            boxShadow: '4px 0 15px rgba(245, 158, 11, 0.5)',
            zIndex: 4
          }}>
            <img
              src={image2D}
              alt="Raw 2D Vastu CAD Floorplan Blueprint"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw',
                height: '100%',
                objectFit: 'cover',
                maxWidth: 'none'
              }}
            />

            {/* Left Label */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(7, 13, 26, 0.92)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.725rem',
              fontWeight: 700,
              color: '#F59E0B',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap'
            }}>
              <Compass size={12} />
              <span>2D CAD Blueprint</span>
            </div>
          </div>

          {/* Center Moving Divider Line Handle */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '4px',
            background: '#F59E0B',
            boxShadow: '0 0 16px #F59E0B',
            zIndex: 10,
            pointerEvents: 'none',
            transform: 'translateX(-50%)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#F59E0B',
              color: '#070D1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(245, 158, 11, 0.9)'
            }}>
              <MoveHorizontal size={18} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
