// Initial State & Database for Blueprint Whales

export const INITIAL_PRICING_RATES = {
  vastu2D: 15,
  elevation3D: 25,
  fullInterior: 50,
  specialCompletePackage: 25,
  expressDeliveryDays: 3
};

export const OFFICIAL_RATE_CARD = [
  {
    id: 'rate-special-all-in-one',
    title: 'SPECIAL PACK: Complete Drawing Package (No Hidden Charges)',
    category: 'All-In-One Flagship Suite',
    originalRate: 30,
    rate: 25,
    unit: 'per sq. ft.',
    isFeatured: true,
    description: 'Complete 8-in-1 architectural & structural drawing package with zero hidden charges. Includes full municipal & contractor blueprints plus 3D front elevation render.',
    includes: [
      '1. 2D Layout Plan (Vastu Compliant Floor Map)',
      '2. Grid Line Plan (CAD Axis Coordinates)',
      '3. Structural Details (Foundation, Beam & Column Math)',
      '4. Electrical Plan (Wiring & Switchboard Layout)',
      '5. Plumbing & Sanitary Plan (Risers & Drainage)',
      '6. 2D Elevation Working Drawings',
      '7. Architectural Sectional Drawings',
      '8. 3D Front Elevation Render (Photorealistic 4K CGI)'
    ],
    badge: '★ Best Value Package'
  },
  {
    id: 'rate-stone-cladding',
    title: 'Stone Cladding Architectural Drawings',
    category: 'Facade & Exterior Cladding',
    originalRate: 35,
    rate: 30,
    unit: 'per sq. ft.',
    description: 'Detailed stone cladding architectural layout drawings, anchoring point details, stone joint specifications, and elevation pattern CAD maps.',
    badge: 'Stone Cladding'
  },
  {
    id: 'rate-stone-temple',
    title: 'Stone Temple Architectural Drawings',
    category: 'Heritage & Temple Architecture',
    originalRate: 55,
    rate: 45,
    unit: 'per sq. ft.',
    description: 'Traditional & modern stone temple 2D/3D architectural drawings, carving joinery details, shikhara elevation math, and Vastu directional geometry.',
    badge: 'Stone Temple'
  },
  {
    id: 'rate-vastu-consultancy',
    title: 'Dedicated Vastu Shastra Consultancy',
    category: 'Vastu Expert Consultation',
    originalRate: 6000,
    rate: 5000,
    unit: 'per plan',
    description: 'Comprehensive 16-zone Vastu directional alignment report, energy flow analysis, room positioning audit, and remedial structural guidelines.',
    badge: 'Vastu Consultancy'
  },
  {
    id: 'rate-1',
    title: 'Walkthrough Video (V-Ray High Render)',
    category: '3D Video Animation',
    originalRate: 6000,
    rate: 5000,
    unit: 'per floor',
    description: 'High-definition architectural 4K V-Ray walkthrough animation with custom lighting schedules, material texturing, and camera paths.',
    badge: '3D CGI Walkthrough'
  },
  {
    id: 'rate-2',
    title: 'Walkthrough Video (V-Ray, Enscape, Lumion, Revit HD)',
    category: 'Multi-Engine Ultra HD CGI',
    originalRate: 9500,
    rate: 8000,
    unit: 'per floor',
    description: 'Cinematic 60FPS video render across Lumion 12, Enscape, Revit, and V-Ray with atmospheric landscaping and daytime/dusk daylight simulations.',
    badge: 'Ultra HD Multi-Engine'
  },
  {
    id: 'rate-3',
    title: 'Detailed House Estimation & Quantity Survey',
    category: 'Estimation & Costing',
    originalRate: 6000,
    rate: 5000,
    unit: 'per plan',
    description: 'Full Bill of Quantities (BOQ), concrete/rebar volume estimations, brickwork counts, material rate breakdowns, and municipal budget sheets.',
    badge: 'BOQ Estimation'
  },
  {
    id: 'rate-4',
    title: 'Working Shop Drawings (A1 Size Sheet)',
    category: '2D CAD Shop Drawings',
    originalRate: 3500,
    rate: 3000,
    unit: 'per sheet A1 size',
    description: 'Ultra-precise contractor shop drawings, electrical single-line maps, plumbing risers, joinery details, and structural section views.',
    badge: 'A1 CAD Sheet'
  },
  {
    id: 'rate-5',
    title: 'SketchUp 3D Elevation Modeling',
    category: '3D Exterior Elevation',
    originalRate: 30,
    rate: 25,
    unit: 'per sq. ft.',
    description: 'Rapid 3D exterior facade massing, balcony detailing, tile texture application, and client review iterations.',
    badge: 'SketchUp 3D'
  },
  {
    id: 'rate-6',
    title: 'Complete Structural Consultancy',
    category: 'Structural Engineering',
    originalRate: 5000,
    rate: 4000,
    unit: 'with all structural drawings',
    description: 'Comprehensive structural safety consultancy including foundation layouts, column/beam reinforcement schedules, slab load calculations, and site safety approval blueprints.',
    badge: 'Structural Package'
  },
  {
    id: 'rate-7',
    title: 'ETABS Structural Load Calculation',
    category: 'Advanced Load Simulation',
    originalRate: 8,
    rate: 5,
    unit: 'per sq. ft.',
    description: 'ETABS finite element seismic load simulation, wind pressure calculations, moment distribution math, and column sizing reports.',
    badge: 'ETABS Analysis'
  },
  {
    id: 'rate-8',
    title: 'Front Elevation Modification & Detailing',
    category: 'Facade Redesign',
    originalRate: 4000,
    rate: 3000,
    unit: 'only front elevation with all details',
    description: 'Complete redesign of existing front elevation with modern architectural elements, lighting placement, stone cladding details, and paint color specs.',
    badge: 'Elevation Facelift'
  }
];

export const INITIAL_SOFTWARES = [
  {
    name: 'Autodesk Revit',
    category: '3D BIM Architecture',
    logo: 'https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg',
    description: 'Full Building Information Modeling (BIM) for structural precision, clash detection, and detailed construction documentation.',
    outputs: ['.RVT', '.IFC', '.DWG', 'BIM Models'],
    speed: 'High-Speed Enterprise Render',
    color: '#00B4D8'
  },
  {
    name: 'AutoCAD Architecture',
    category: '2D Drafting & Blueprints',
    logo: 'https://cdn.worldvectorlogo.com/logos/autocad.svg',
    description: 'Industry standard for ultra-precise 2D blueprints, working drawings, Vastu layouts, and structural detailing.',
    outputs: ['.DWG', '.DXF', '.PDF', 'Cad Maps'],
    speed: 'Instant 24-hr Turnaround',
    color: '#38BDF8'
  },
  {
    name: 'Rhino 3D + Grasshopper',
    category: 'Parametric & Organic 3D',
    logo: 'https://cdn.worldvectorlogo.com/logos/rhinoceros-3d.svg',
    description: 'Advanced 3D surface modeling, complex curved roofs, parametric facades, and algorithmic architectural designs.',
    outputs: ['.3DM', '.OBJ', '.STEP', 'Complex Facades'],
    speed: 'Complex Geometry Suite',
    color: '#F59E0B'
  },
  {
    name: 'SketchUp Pro',
    category: 'Rapid 3D Spatial Design',
    logo: 'https://cdn.worldvectorlogo.com/logos/sketchup.svg',
    description: 'Fast spatial modeling for interior layouts, exterior massing, client review iterations, and cabinetry detailing.',
    outputs: ['.SKP', '.DAE', '3D Schematics'],
    speed: 'Real-Time Layout Engine',
    color: '#10B981'
  },
  {
    name: '3ds Max + V-Ray',
    category: 'High-End Architectural CGI',
    logo: 'https://cdn.worldvectorlogo.com/logos/autodesk-3ds-max.svg',
    description: 'Photorealistic CGI renders, material textures, ray-traced reflections, and cinematic lighting setups.',
    outputs: ['8K Still CGI', 'HDR Renders', '.MAX'],
    speed: 'Ray-Traced Precision',
    color: '#8B5CF6'
  },
  {
    name: 'Lumion & Enscape',
    category: 'Real-Time 3D Rendering',
    logo: 'https://cdn.worldvectorlogo.com/logos/lumion.svg',
    description: 'Real-time architectural video walkthroughs, atmospheric foliage rendering, seasonal daylight simulations.',
    outputs: ['4K MP4 Walkthroughs', '360 Panorama VR'],
    speed: '60 FPS Video Export',
    color: '#EC4899'
  }
];

export const LANDMARK_ENGINEERS = [
  {
    role: 'Senior Structural & Vastu Principal',
    title: 'Chartered Structural Engineering Desk',
    experience: '18+ Years Experience',
    projects: ['Ayodhya Ram Mandir Complex Structural Calculations', 'Town & City Masterplan Blueprints'],
    specialization: 'Parametric CAD Load Calculations, Beam Math & Ancient Vastu Geometry',
    badge: 'Structural Engineering Lead'
  },
  {
    role: 'Chief BIM & High-Speed Transit Architect',
    title: 'High-Speed Infrastructure & BIM Desk',
    experience: '14+ Years Experience',
    projects: ['Ahmedabad-Mumbai Bullet Train Rail Terminal Layouts', 'Mumbai Trans Harbour Link Integration'],
    specialization: 'Autodesk Revit BIM Level 3, Rhino 3D & 4K Lumion Flythroughs',
    badge: 'Infrastructure Architecture Lead'
  },
  {
    role: 'Head of Spatial Interior Design',
    title: 'Luxury Residential & Commercial Interior Desk',
    experience: '12+ Years Experience',
    projects: ['Luxury Penthouse Spatial Design', 'Modern Residence Interior Suite', 'Bespoke Executive Office'],
    specialization: '3ds Max, V-Ray CGI Lighting, Millwork Detailing & Acoustic Planning',
    badge: 'Interior Architecture Lead'
  }
];

export const INITIAL_SERVICES = [
  {
    id: '3d-modeling',
    title: '3D Building Renders & Walkthroughs',
    tagline: 'Hyper-Realistic Revit, Rhino 3D & Lumion Modeling',
    description: 'Ultra-detailed 3D interior & exterior architectural visualization with physically based rendering, dynamic lighting, and immersive 4K video walkthroughs.',
    softwares: ['Autodesk Revit', 'Rhino 3D', '3ds Max', 'Lumion 12', 'V-Ray', 'Enscape'],
    features: ['BIM Level 2 Standard', 'Solar & Shadow Studies', 'Photorealistic Lighting', '4K Cinematic Flythroughs'],
    badge: 'Popular',
    iconName: 'Box'
  },
  {
    id: '2d-vastu',
    title: '2D Vastu Floor Plans & Blueprints',
    tagline: '100% Vastu Shastra Compliant CAD Drafting',
    description: 'Precision 2D architectural blueprints, structural layout maps, beam calculations, and Vastu directional alignment (Ishanya, Agneya, Nairutya, Vayavya).',
    softwares: ['AutoCAD Architecture', 'Revit 2D', 'MicroStation'],
    features: ['Vastu Compass Verification', 'Municipal Approval Ready', 'Column & Load Mapping', 'Room Ratio Optimization'],
    badge: 'Certified Vastu',
    iconName: 'Compass'
  },
  {
    id: 'interior-design',
    title: 'Modern House & Residential Interior Design',
    tagline: 'Custom Millwork, Moodboards & Space Planning',
    description: 'Bespoke residential and commercial interior architecture, modular kitchen layouts, ceiling designs, false lighting schedules, and custom material specs.',
    softwares: ['SketchUp Pro', '3ds Max', 'Blender', 'Photoshop'],
    features: ['3D Modular Kitchens', 'False Ceiling Layouts', 'Material Rate Specs', 'Electrical & Plumbing Maps'],
    badge: 'Bespoke',
    iconName: 'Layout'
  },
  {
    id: 'site-mapping',
    title: 'Site Mapping & Topographical Survey',
    tagline: 'Master Site Planning & Land Layouts',
    description: 'Comprehensive 2D/3D land mapping, contour analysis, parking logistics, landscape integration, and municipal zoning compliance blueprints.',
    softwares: ['Civil 3D', 'Rhino 3D', 'AutoCAD'],
    features: ['Contour Elevation Maps', 'Drainage & Slope Analysis', 'FSI/FAR Calculations', 'Urban Zoning Maps'],
    badge: 'Engineering',
    iconName: 'Map'
  }
];

export const INITIAL_PORTFOLIO = [];

export const INITIAL_INQUIRIES = [
  {
    id: 'INQ-101',
    name: 'Vikramaditya Sharma',
    city: 'Pan-India',
    phone: '+91 79921 59067',
    email: 'vikram.sharma@example.com',
    plotSize: '2400 Sq. Ft.',
    service: 'Special Complete Drawing Package (25 rs/sqft)',
    vastuRequired: true,
    message: 'Need the complete 8-in-1 drawing package for my plot.',
    estimatedCost: '₹ 60,000',
    status: 'New',
    date: '2026-07-19'
  }
];

export const INITIAL_SEO_SETTINGS = {
  metaTitle: 'Blueprint Whales | Top Architectural Designers - 3D Renders, 2D Vastu & Blueprints Across India',
  metaDescription: 'Online architectural studio serving clients nationwide across India. 3D Revit building models, 2D Vastu blueprints & house interior design at uniform reasonable rates. Call Helpline: +91 79921 59067.',
  primaryKeywords: 'Architects in Lucknow, Architectural designers Delhi, 3D Building Design Ghaziabad, 2D Vastu Floor Plans Mumbai, Architects Noida, Architectural firm Gurgaon, House interior design Bangalore, 3D Renders Hyderabad, Remote architectural desk India',
  schemaOrgCity: 'Pan-India Regional Studios',
  contactPhone: '+91 79921 59067',
  contactEmail: 'contact@blueprintwhales.com'
};
