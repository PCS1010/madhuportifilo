/**
 * Central portfolio data — generated from Madhulatha Athmakuri's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Madhulatha Athmakuri',
  displayName: 'Madhulatha Athmakuri',
  firstName: 'MADHULATHA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN ATHMAKURI ORIGINAL',
  role: 'Interior Designer & Space Planner',
  tagline: ['Interior Designer', 'Space Planning', 'AutoCAD • SketchUp • Revit'],
  intro:
    'Civil Engineering graduate (B.Tech, 8.17 CGPA) and working Interior Designer at LS Interiors, Hyderabad. Combines a strong technical foundation in construction and structural layouts with hands-on design skills in AutoCAD, SketchUp and Revit. Experienced in space planning, 2D drawings, 3D visualisation, material selection and site coordination.',
  location: 'Hyderabad, Telangana',
  phone: '+91-9701869325',
  email: 'athmakurimadhulatha@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/madhulatha-athmakuri',
    github: 'https://github.com',
  },
  resumePdf: '/assets/Madhulatha_Athmakuri_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Madhulatha Athmakuri',
  },
  interests: ['Crafting and DIY decor', 'Travelling & exploring architecture', 'Contemporary design trends'],
};

export const education = [
  {
    school: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    place: 'Ongole, Prakasam District, AP',
    degree: 'B.Tech — Civil Engineering',
    period: '2021 – 2025',
    score: 'CGPA 8.17',
  },
  {
    school: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    place: 'Ongole, Prakasam District, AP',
    degree: 'Pre-University Course (PUC / 12th)',
    period: '2019 – 2021',
    score: 'CGPA 8.07',
  },
  {
    school: 'ZPH High School',
    place: 'Pathapadu, Prakasam District, AP',
    degree: 'Secondary School Certificate (SSC / 10th)',
    period: '2018 – 2019',
    score: 'CGPA 10.0',
  },
];

export const experience = [
  {
    company: 'LS Interiors',
    role: 'Interior Designer',
    place: 'Hyderabad, Telangana',
    period: 'February 2026 – Present',
    points: [
      'Prepare space plans, furniture layouts and 2D working drawings in AutoCAD for residential and commercial interior projects.',
      'Create 3D models and visualisations in SketchUp to help clients understand and approve design concepts.',
      'Select materials, finishes and colour schemes that match client requirements, budget constraints and project timelines.',
      'Coordinate with site teams, vendors and clients to ensure designs are executed accurately on site.',
      'Apply civil engineering knowledge to verify dimensions, structural layouts and feasibility before site execution.',
    ],
  },
  {
    company: 'Panchayat Raj Department, Govt of AP',
    role: 'Construction Intern',
    place: 'Mudigubba Mandal, Ananthapuramu, AP',
    period: '11 May 2024 – 22 June 2024 (6 weeks)',
    points: [
      'Assisted in field construction and infrastructure development work for government school buildings.',
      'Gained practical exposure to structural layout planning, site measurements, and on-site quality checks.',
      'Collaborated with senior engineers and site teams to supervise the complete project execution lifecycle.',
      'Received official internship completion certificate issued by the Mandal Engineering Officer, Mudigubba.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
  image?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    id: 'space-planning-working-drawings',
    title: 'Space Planning & Working Drawings',
    year: '2026',
    genre: 'Interior Design • AutoCAD • Space Planning',
    logline: 'Full-scope space planning, furniture layouts, and precise 2D architectural working drawings in AutoCAD for residential and commercial interiors.',
    stack: ['AutoCAD', 'Space Planning', '2D Drafting', 'Working Drawings', 'BOQ & Estimation'],
    build: [
      'Drafted comprehensive space plans, ergonomic furniture layouts, and 2D working drawings in AutoCAD for diverse interior typologies.',
      'Applied civil engineering dimensional verifications and structural checks before on-site execution, eliminating layout mismatches.',
    ],
    features: [
      'AutoCAD 2D Drafting & Working Drawings',
      'Ergonomic Space Planning & Furniture Layouts',
      'Site Measurement & Dimension Verification',
      'Bill of Quantities (BOQ) & Cost Estimation',
      'Vendor & Site Team Coordination',
    ],
    metrics: [
      { value: '100%', label: 'site dimension accuracy' },
      { value: 'AutoCAD', label: 'precision 2D drafting' },
      { value: 'Zero', label: 'structural layout rework' },
      { value: 'Complete', label: 'BOQ & material estimates' },
      { value: 'Client-Ready', label: 'working detail drawings' },
    ],
    image: '/assets/projects/interior-1.jpeg',
    gallery: ['/assets/projects/interior-1.jpeg', '/assets/projects/interior-2.jpeg'],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: '3d-visualisation-material-finishes',
    title: '3D Visualization & Finishes',
    year: '2026',
    genre: '3D Modeling • SketchUp • Revit • Aesthetics',
    logline: 'Photorealistic 3D visualisations in SketchUp with curated mood boards, material selection, and finish planning matching client budgets.',
    stack: ['SketchUp', 'Revit', '3D Modeling', 'Material Selection', 'Mood Boards', 'Finish Planning'],
    build: [
      'Built realistic 3D models and spatial visualisations in SketchUp, conveying lighting and spatial depth to accelerate client concept approval.',
      'Formulated bespoke mood boards, material palettes, and finish schedules tailored to client aesthetic requirements and timelines.',
    ],
    features: [
      'SketchUp 3D Spatial Modelling',
      'Revit BIM & Architectural Drafting',
      'Concept Presentations & Mood Boards',
      'Material, Fabric & Finish Planning',
      'Color Palette & Lighting Coordination',
    ],
    metrics: [
      { value: 'Faster', label: 'client concept approvals' },
      { value: 'SketchUp', label: '3D modeling & render prep' },
      { value: 'Revit', label: 'architectural modeling' },
      { value: 'Curated', label: 'finish & material schedules' },
      { value: 'End-to-End', label: 'mood boards to reality' },
    ],
    image: '/assets/projects/interior-3.jpeg',
    gallery: ['/assets/projects/interior-3.jpeg', '/assets/projects/interior-4.jpeg'],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'school-infrastructure-structural-layouts',
    title: 'School Infrastructure & Layouts',
    year: '2024',
    genre: 'Civil Engineering • Infrastructure • Quality Assurance',
    logline: 'Field construction management, structural layouts, and on-site quality assurance for government school infrastructure.',
    stack: ['Site Coordination', 'Quality Checks', 'Structural Layouts', 'Govt of AP', 'Civil Engineering'],
    build: [
      'Supervised field construction and infrastructure development for public school buildings under the Panchayat Raj Department, AP.',
      'Conducted on-site quality checks, structural layout verifications, and multi-team coordination across the 6-week execution lifecycle.',
    ],
    features: [
      'Structural layout planning & verification',
      'Field site supervision & quality control',
      'Civil construction lifecycle management',
      'Panchayat Raj Dept. certified completion',
    ],
    metrics: [
      { value: '6 Weeks', label: 'intensive field supervision' },
      { value: 'Govt AP', label: 'Panchayat Raj Department' },
      { value: '100%', label: 'quality inspection compliance' },
      { value: 'Full Cycle', label: 'planning to execution' },
    ],
    image: '/assets/projects/interior-5.jpeg',
    gallery: ['/assets/projects/interior-5.jpeg', '/assets/projects/interior-6.jpeg'],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ssc-topper',
    title: '10.0 CGPA (Perfect Score)',
    org: 'ZPH High School, Pathapadu',
    detail: 'Achieved a perfect 10.0 CGPA in the Secondary School Certificate (SSC) Board examinations.',
    laurel: 'Perfect 10.0 CGPA',
  },
  {
    id: 'civil-engineering-grad',
    title: '8.17 CGPA in Civil Engineering',
    org: 'RGUKT Ongole',
    detail: 'Graduated from the prestigious 6-year integrated B.Tech programme with an 8.17 CGPA in Civil Engineering.',
    laurel: 'Civil Engineering Graduate',
  },
  {
    id: 'fest-coordinator',
    title: 'Technical Games Coordinator',
    org: 'RGUKT Annual Fest 2023',
    detail: 'Coordinated and led technical games and engineering competitions for hundreds of festival attendees.',
    laurel: 'Annual Fest Coordinator',
  },
  {
    id: 'civil-symposium',
    title: 'Symposium Participant',
    org: 'Civil Engineering Symposium 2024',
    detail: 'Participated in advanced discussions on structural layouts, modern construction, and civil infrastructure.',
    laurel: 'Technical Symposium',
  },
  {
    id: 'govt-internship',
    title: 'MEO Certified Field Intern',
    org: 'Panchayat Raj Dept, Govt of AP',
    detail: 'Awarded official internship completion certificate by the Mandal Engineering Officer, Mudigubba.',
    laurel: 'Government Certification',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Learn Delta', name: 'AutoCAD Workshop (September 2024)', link: '#' },
  { issuer: 'edX', name: 'The Science of Construction Management', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'software',
    title: 'Design Software',
    subtitle: 'AutoCAD, SketchUp & Revit',
    skills: [
      { name: 'AutoCAD (2D)', mono: 'AC', note: 'Primary' },
      { name: 'SketchUp (3D)', mono: 'SU', note: '3D Model' },
      { name: 'Revit', mono: 'Rv' },
    ],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Planning, layouts & visualization',
    skills: [
      { name: 'Space Planning', mono: 'Sp', note: 'Core' },
      { name: 'Furniture Layouts', mono: 'Fl' },
      { name: '2D Working Drawings', mono: 'Wd' },
      { name: '3D Visualisation', mono: '3D' },
      { name: 'Mood Boards', mono: 'Mb' },
      { name: 'Concept Presentations', mono: 'Cp' },
    ],
  },
  {
    id: 'materials',
    title: 'Materials & Finishes',
    subtitle: 'Selection, palettes & textures',
    skills: [
      { name: 'Material Selection', mono: 'Ms' },
      { name: 'Colour Coordination', mono: 'Cc' },
      { name: 'Finish Planning', mono: 'Fp' },
    ],
  },
  {
    id: 'execution',
    title: 'Execution & Site',
    subtitle: 'Civil engineering & site delivery',
    skills: [
      { name: 'Site Measurement', mono: 'Sm' },
      { name: 'Site Coordination', mono: 'Sc' },
      { name: 'Quality Checks', mono: 'Qc' },
      { name: 'BOQ & Estimation', mono: 'Bq' },
      { name: 'Vendor Coordination', mono: 'Vc' },
      { name: 'Construction Management', mono: 'Cm' },
    ],
  },
  {
    id: 'tools',
    title: 'Office & Productivity',
    subtitle: 'Documentation & schedules',
    skills: [
      { name: 'Microsoft Excel', mono: 'Xl' },
      { name: 'Microsoft PowerPoint', mono: 'Pp' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'Leadership & client delivery',
    skills: [
      { name: 'Client Communication', mono: 'Cc' },
      { name: 'Creativity', mono: 'Cr' },
      { name: 'Attention to Detail', mono: 'Ad' },
      { name: 'Teamwork', mono: 'Tw' },
      { name: 'Time Management', mono: 'Tm' },
      { name: 'Leadership', mono: 'Ld' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'AutoCAD (2D)': ['AutoCAD Workshop – Learn Delta', 'LS Interiors Working Drawings'],
  'SketchUp (3D)': ['LS Interiors 3D Spatial Visualisations'],
  Revit: ['Civil Engineering Curriculum & 3D Modeling'],
  'Space Planning': ['LS Interiors Residential & Commercial Projects'],
  'Furniture Layouts': ['LS Interiors Working Drawings'],
  '2D Working Drawings': ['LS Interiors AutoCAD Deliverables'],
  '3D Visualisation': ['LS Interiors Client Presentations'],
  'Mood Boards': ['LS Interiors Concept Approvals'],
  'Concept Presentations': ['LS Interiors Client Meetings'],
  'Material Selection': ['LS Interiors Material Schedules'],
  'Colour Coordination': ['LS Interiors Aesthetic Schemes'],
  'Finish Planning': ['LS Interiors Interior Deliverables'],
  'Site Measurement': ['LS Interiors & Panchayat Raj Dept'],
  'Site Coordination': ['LS Interiors & Panchayat Raj Dept'],
  'Quality Checks': ['Panchayat Raj Dept Government Schools', 'LS Interiors Execution'],
  'BOQ & Estimation': ['LS Interiors Project Costing & Schedules'],
  'Vendor Coordination': ['LS Interiors On-Site Execution'],
  'Construction Management': ['The Science of Construction Management – edX', 'Govt of AP Internship'],
  'Microsoft Excel': ['BOQ, Estimations & Measurement Sheets'],
  'Microsoft PowerPoint': ['Concept & Mood Board Presentations'],
  'Client Communication': ['LS Interiors Concept Sign-Offs'],
  Leadership: ['Technical Games Coordinator – RGUKT Fest 2023'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2019',
    synopsis: 'Secondary School Certificate at ZPH High School, Pathapadu, Prakasam District — graduating with a perfect 10.0 CGPA.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Perfect Score',
        description: 'Secondary School Certificate (SSC / 10th) at ZPH High School, Pathapadu — scoring 10.0/10.0 CGPA.',
        tags: ['SSC', '10.0 CGPA', 'Board Topper'],
        runtime: '2018 – 2019',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'RGUKT Engineering',
    period: '2019 – 2025',
    synopsis: 'Six-year Integrated B.Tech Programme in Civil Engineering at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Pre-University Course',
        description: 'Completed PUC (12th equivalent) at RGUKT Ongole with an 8.07 CGPA in science and mathematics.',
        tags: ['PUC', 'RGUKT Ongole', '8.07 CGPA'],
        runtime: '2019 – 2021',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Civil Engineering B.Tech',
        description: 'Bachelor of Technology in Civil Engineering — 8.17 CGPA, building in-depth knowledge of structural layouts, materials, and construction.',
        tags: ['B.Tech', 'Civil Engineering', '8.17 CGPA'],
        runtime: '2021 – 2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'Fest Coordinator & Symposium',
        description: 'Technical Games Coordinator at RGUKT Annual Fest 2023 and Participant in the Civil Engineering Symposium 2024.',
        tags: ['Leadership', 'Annual Fest', 'Symposium'],
        runtime: 'RGUKT Campus',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Field Infrastructure',
    period: 'May 2024 – June 2024',
    synopsis: 'Six weeks of intensive field construction and infrastructure supervision with the Panchayat Raj Department, Government of Andhra Pradesh.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Field Engineer',
        description: 'Assisted in field construction and school infrastructure development across Mudigubba Mandal, Ananthapuramu District.',
        tags: ['Panchayat Raj Dept', 'Govt of AP', 'Infrastructure'],
        runtime: '6 weeks',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Quality & Structural Execution',
        description: 'Conducted structural layout checks, verified on-site dimensions, and received completion certification from the Mandal Engineering Officer.',
        tags: ['Structural Layouts', 'Quality Checks', 'MEO Certified'],
        runtime: 'Mudigubba Mandal',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Interior Design Arc',
    period: '2024 – 2026',
    synopsis: 'Professional training in AutoCAD and Construction Management, stepping into LS Interiors, Hyderabad as an Interior Designer.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Design Credentials',
        description: 'Completed AutoCAD Workshop by Learn Delta and The Science of Construction Management by edX.',
        tags: ['AutoCAD', 'edX', 'Construction Mgmt'],
        runtime: 'Certifications',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'LS Interiors — Space Planning',
        description: 'Designing space plans, furniture layouts, and 2D working drawings in AutoCAD for residential and commercial interiors.',
        tags: ['LS Interiors', 'Space Planning', 'AutoCAD'],
        runtime: 'Feb 2026 – Present',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: '3D Visualization & Site Coordination',
        description: 'Creating 3D models in SketchUp, curating mood boards & finishes, and coordinating with site teams and vendors.',
        tags: ['SketchUp 3D', 'Material Selection', 'Site Execution'],
        runtime: 'Hyderabad',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Designing aesthetic, functional and client-ready spaces combining civil engineering rigor with spatial elegance.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Transformation',
        description: 'Crafting bespoke residential and commercial environments, DIY decor, and exploring progressive architectural trends.',
        tags: ['Interior Architecture', 'Residential', 'Commercial', 'DIY Decor'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Drafting Tool', title: 'AutoCAD (2D)', detail: 'Precision working drawings & furniture layouts • Learn Delta Certified', palette: amber },
  { label: '3D Visualisation', title: 'SketchUp', detail: 'Photorealistic 3D models & spatial concepts', palette: crimson },
  { label: 'Current Production', title: 'LS Interiors', detail: 'Interior Designer • Hyderabad, Telangana', palette: ocean },
  { label: 'Core Expertise', title: 'Space Planning', detail: 'Ergonomic layouts & 2D working drawings', palette: violet },
  { label: 'Academic High', title: 'Perfect 10.0 CGPA', detail: 'Secondary School Certificate (SSC / 10th)', palette: jade },
  { label: 'Engineering Degree', title: 'B.Tech Civil', detail: '8.17 CGPA • RGUKT Ongole', palette: amber },
  { label: 'Field Supervision', title: 'Govt of AP', detail: 'Panchayat Raj Dept • School Infrastructure', palette: crimson },
  { label: 'Construction Credential', title: 'Construction Mgmt', detail: 'The Science of Construction Management • edX', palette: ocean },
  { label: 'Site Execution', title: 'Site Coordination', detail: 'Quality checks, BOQ estimation & vendor coordination', palette: jade },
  { label: 'Creative Passion', title: 'DIY & Architecture', detail: 'Crafting, decor & modern architectural trends', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Civil Engineering',
    lines: ['Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole', '2021 – 2025 · Integrated 6-Year Programme'],
    chips: ['CGPA 8.17', '10.0 in SSC'],
  },
  {
    kicker: 'Current Role',
    title: 'LS Interiors, Hyderabad',
    lines: ['Interior Designer · Space Planning & Execution', 'February 2026 – Present · Hyderabad, Telangana'],
    chips: ['Space Planning', 'AutoCAD', 'SketchUp', 'Site Coordination'],
  },
  {
    kicker: 'Design Software',
    title: 'AutoCAD, SketchUp & Revit',
    lines: ['2D Working Drawings & Architectural Drafting in AutoCAD', '3D Spatial Modeling & Visualisation in SketchUp & Revit'],
    chips: ['AutoCAD', 'SketchUp', 'Revit', 'Excel', 'PowerPoint'],
  },
  {
    kicker: 'Expertise',
    title: 'Space Planning & Finishes',
    lines: ['Ergonomic Furniture Layouts & Working Drawings', 'Material Selection, Colour Coordination & Finish Schedules', 'Bill of Quantities (BOQ) & Measurement Checks'],
  },
  {
    kicker: 'Field Experience',
    title: 'Panchayat Raj Dept, Govt of AP',
    lines: ['Construction Intern · Government School Buildings', 'Structural Layout Planning, Quality Checks & MEO Certification'],
  },
  {
    kicker: 'Certifications',
    title: 'Verified Credentials',
    lines: ['AutoCAD Workshop — Learn Delta', 'The Science of Construction Management — edX'],
  },
  {
    kicker: 'Creative Vision',
    title: 'Functional & Aesthetic',
    lines: ['Combining civil engineering rigor with spatial interior elegance', 'Crafting, DIY Decor & Exploring Architectural Trends'],
  },
];

export type ProfileId = 'madhulatha' | 'recruiter' | 'designer' | 'client';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'madhulatha',
      name: 'Madhulatha',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Experience, education & skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'designer',
      name: 'Designer',
      blurb: 'Space planning, 3D work & drawings first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'client',
      name: 'Client',
      blurb: '3D visuals, space transformation & story',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Civil Engineer & Interior Designer', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Works', card: 'Featured Works', meta: `${projects.length} Works • Interior & Civil`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Milestones', card: 'Achievements', meta: `${achievements.length} Milestones • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & contact', palette: violet },
};
