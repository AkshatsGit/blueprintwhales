import React, { useState, useRef } from 'react';
import { Eye, MoveHorizontal, Compass, Sparkles, Layers } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mode, setMode] = useState('exterior'); // 'exterior', 'interior'
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
    <section id="visualizer" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="badge-amber" style={{ marginBottom: '12px' }}>
            <MoveHorizontal size={14} />
            <span>Interactive 2D to 3D Live Transformation</span>
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '16px' }}>
            Move Cursor to Convert <span className="text-gradient-amber">2D CAD into 3D Renders</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Move your mouse left or right over the frame below to transform raw 2D Vastu CAD floorplan blueprints into hyper-realistic 3D Revit models instantly.
          </p>

          {/* Mode Switcher */}
          <div style={{ display: 'inline-flex', gap: '8px', background: 'rgba(15, 23, 42, 0.8)', padding: '6px', borderRadius: '12px', marginTop: '16px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <button
              onClick={() => setMode('exterior')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background: mode === 'exterior' ? '#F59E0B' : 'transparent',
                color: mode === 'exterior' ? '#070D1A' : '#94A3B8',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Villa Exterior 3D
            </button>
            <button
              onClick={() => setMode('interior')}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background: mode === 'interior' ? '#F59E0B' : 'transparent',
                color: mode === 'interior' ? '#070D1A' : '#94A3B8',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              House Interior 3D
            </button>
          </div>
        </div>

        {/* Interactive Hover Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            borderRadius: '20px',
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
            top: '20px',
            right: '20px',
            background: 'rgba(7, 13, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 180, 216, 0.5)',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#38BDF8',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 5
          }}>
            <Sparkles size={16} />
            <span>3D Revit / Lumion Photorealistic Render</span>
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
              top: '20px',
              left: '20px',
              background: 'rgba(7, 13, 26, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(245, 158, 11, 0.5)',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#F59E0B',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}>
              <Compass size={16} />
              <span>2D Technical CAD Blueprint Layout</span>
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
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#F59E0B',
              color: '#070D1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 24px rgba(245, 158, 11, 0.9)'
            }}>
              <MoveHorizontal size={24} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
