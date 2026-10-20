import fs from 'node:fs';

/**
 * Generates a clean, valid PDF 1.4 file for Madhulatha Athmakuri without external dependencies.
 */
function createPdf() {
  const content = [];

  // Helper to add text stream commands
  const lines = [
    { text: 'MADHULATHA ATHMAKURI', font: '/F2', size: 20, x: 50, y: 750 },
    { text: 'Interior Designer | Space Planning | AutoCAD | SketchUp | Revit', font: '/F1', size: 10, x: 50, y: 732 },
    { text: 'Location: Hyderabad, Telangana  |  Phone: +91-9701869325  |  Email: athmakurimadhulatha@gmail.com', font: '/F1', size: 9, x: 50, y: 718 },

    // Line separator
    { line: [50, 710, 545, 710] },

    // Professional Summary
    { text: 'PROFESSIONAL SUMMARY', font: '/F2', size: 11, x: 50, y: 692 },
    { text: 'Civil Engineering graduate (B.Tech, 8.17 CGPA) and working Interior Designer at LS Interiors, Hyderabad.', font: '/F1', size: 9, x: 50, y: 678 },
    { text: 'Combines a strong technical foundation in construction and structural layouts with hands-on design skills in AutoCAD,', font: '/F1', size: 9, x: 50, y: 666 },
    { text: 'SketchUp and Revit. Experienced in space planning, 2D drawings, 3D visualisation, material selection and site coordination.', font: '/F1', size: 9, x: 50, y: 654 },

    // Core Skills
    { text: 'CORE SKILLS', font: '/F2', size: 11, x: 50, y: 634 },
    { text: '- Design Software: AutoCAD (2D Drafting), SketchUp (3D Modelling), Revit', font: '/F1', size: 9, x: 50, y: 620 },
    { text: '- Interior Design: Space Planning, Furniture Layouts, 2D Working Drawings, 3D Visualisation, Mood Boards', font: '/F1', size: 9, x: 50, y: 608 },
    { text: '- Materials & Finishes: Material Selection, Colour Coordination, Finish Planning', font: '/F1', size: 9, x: 50, y: 596 },
    { text: '- Execution & Technical: Site Measurement, Site Coordination, Quality Checks, BOQ & Estimation, Vendor Coordination', font: '/F1', size: 9, x: 50, y: 584 },
    { text: '- Office Tools: Microsoft Excel, Microsoft PowerPoint', font: '/F1', size: 9, x: 50, y: 572 },
    { text: '- Professional: Client Communication, Creativity, Attention to Detail, Teamwork, Time Management, Leadership', font: '/F1', size: 9, x: 50, y: 560 },

    // Experience
    { text: 'PROFESSIONAL EXPERIENCE', font: '/F2', size: 11, x: 50, y: 540 },
    { text: 'Interior Designer | LS Interiors, Hyderabad', font: '/F2', size: 9.5, x: 50, y: 526 },
    { text: 'February 2026 - Present', font: '/F1', size: 9, x: 440, y: 526 },
    { text: '* Prepare space plans, furniture layouts and 2D working drawings in AutoCAD for interior projects.', font: '/F1', size: 8.5, x: 60, y: 512 },
    { text: '* Create 3D models and visualisations in SketchUp to help clients understand and approve design concepts.', font: '/F1', size: 8.5, x: 60, y: 500 },
    { text: '* Select materials, finishes and colour schemes that match client requirements, budget and project timelines.', font: '/F1', size: 8.5, x: 60, y: 488 },
    { text: '* Coordinate with site teams, vendors and clients to ensure designs are executed accurately on site.', font: '/F1', size: 8.5, x: 60, y: 476 },
    { text: '* Apply civil engineering knowledge to check dimensions, layouts and feasibility before execution.', font: '/F1', size: 8.5, x: 60, y: 464 },

    // Internship
    { text: 'Construction Intern | Panchayat Raj Department, Government of Andhra Pradesh', font: '/F2', size: 9.5, x: 50, y: 444 },
    { text: '11 May 2024 - 22 June 2024 (6 weeks)', font: '/F1', size: 9, x: 380, y: 444 },
    { text: '* Assisted in field construction and infrastructure work for government school buildings in Mudigubba Mandal.', font: '/F1', size: 8.5, x: 60, y: 430 },
    { text: '* Gained practical exposure to planning, structural layouts and on-site quality checks.', font: '/F1', size: 8.5, x: 60, y: 418 },
    { text: '* Worked with engineers and site workers to understand the complete project life cycle.', font: '/F1', size: 8.5, x: 60, y: 406 },
    { text: '* Awarded internship completion certificate issued by the Mandal Engineering Officer, Mudigubba.', font: '/F1', size: 8.5, x: 60, y: 394 },

    // Education
    { text: 'EDUCATION', font: '/F2', size: 11, x: 50, y: 374 },
    { text: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole, AP (2019 - 2025)', font: '/F2', size: 9.5, x: 50, y: 360 },
    { text: '- B.Tech in Civil Engineering: 2021 - 2025 | CGPA: 8.17', font: '/F1', size: 8.5, x: 60, y: 346 },
    { text: '- Pre-University Course (PUC / 12th): 2019 - 2021 | CGPA: 8.07', font: '/F1', size: 8.5, x: 60, y: 334 },
    { text: 'ZPH High School, Pathapadu, Prakasam District, Andhra Pradesh', font: '/F2', size: 9.5, x: 50, y: 320 },
    { text: '- SSC (10th): 2018 - 2019 | CGPA: 10.0 (Perfect Score)', font: '/F1', size: 8.5, x: 60, y: 306 },

    // Certifications & Activities
    { text: 'CERTIFICATIONS & ACTIVITIES', font: '/F2', size: 11, x: 50, y: 286 },
    { text: '- AutoCAD Workshop - Learn Delta (September 2024)', font: '/F1', size: 8.5, x: 60, y: 272 },
    { text: '- The Science of Construction Management - edX', font: '/F1', size: 8.5, x: 60, y: 260 },
    { text: '- Technical Games Coordinator - RGUKT Annual Fest 2023', font: '/F1', size: 8.5, x: 60, y: 248 },
    { text: '- Participant - Civil Engineering Symposium, 8 April 2024', font: '/F1', size: 8.5, x: 60, y: 236 },
    { text: '- Interests: Crafting and DIY decor | Travelling and exploring architecture and design trends', font: '/F1', size: 8.5, x: 60, y: 224 },
  ];

  let stream = 'q\n';
  for (const item of lines) {
    if (item.line) {
      const [x1, y1, x2, y2] = item.line;
      stream += `0.8 0.1 0.1 RG 1 w ${x1} ${y1} m ${x2} ${y2} l S\n`;
    } else {
      const escaped = item.text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
      stream += `BT ${item.font} ${item.size} Tf 0 0 0 rg ${item.x} ${item.y} Td (${escaped}) Tj ET\n`;
    }
  }
  stream += 'Q\n';

  const objects = [];
  const addObj = (str) => {
    objects.push(str);
    return objects.length;
  };

  const catalogId = 1;
  const pagesId = 2;
  const pageId = 3;
  const fontHelvId = 4;
  const fontBoldId = 5;
  const contentId = 6;

  const catalog = `<< /Type /Catalog /Pages ${pagesId} 0 R >>`;
  const pages = `<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`;
  const page = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 595 842] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${fontHelvId} 0 R /F2 ${fontBoldId} 0 R >> >> >>`;
  const fontHelv = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;
  const fontBold = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`;
  const contentObj = `<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`;

  const objs = [catalog, pages, page, fontHelv, fontBold, contentObj];

  let body = '%PDF-1.4\n';
  const xref = [0];

  for (let i = 0; i < objs.length; i++) {
    xref.push(body.length);
    body += `${i + 1} 0 obj\n${objs[i]}\nendobj\n`;
  }

  const xrefStart = body.length;
  body += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objs.length; i++) {
    body += `${String(xref[i]).padStart(10, '0')} 00000 n \n`;
  }
  body += `trailer\n<< /Size ${objs.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  fs.writeFileSync('public/assets/Madhulatha_Athmakuri_Resume.pdf', body, 'utf8');
  console.log('Successfully generated Madhulatha_Athmakuri_Resume.pdf');
}

createPdf();
