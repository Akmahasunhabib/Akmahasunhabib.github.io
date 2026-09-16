// Content for the portfolio. Edit this file to update everything.
window.PORTFOLIO = {
  name: "A K M Ahasun Habib",
  role: "Ph.D. Student · Mechanical & Aerospace Engineering",
  tagline: "Architected materials, computational materials science, AI/ML for materials design, and additive manufacturing.",
  shortBio: "I am a Ph.D. student in the Department of Mechanical and Aerospace Engineering at Texas Tech University, working under the supervision of Prof. Paul F. Egan at the M3D Lab. My research investigates multi-material lattice mechanics and bio-ink printability, integrating FEM, machine learning, and high-performance computing for materials optimization.",
  longBio: [
    "I am a Ph.D. student in the Department of Mechanical and Aerospace Engineering at Texas Tech University (CGPA 3.956/4.00), advised by Prof. Paul F. Egan at the M3D Lab. My doctoral research investigates multi-material lattice mechanics and bio-ink printability, integrating finite element methods, machine learning, and high-performance computing for materials optimization.",
    "My work explores structure-property relationships in architected materials through computational modeling and experimental validation. I develop optimized lattice architectures by integrating finite element analysis, data-driven topology optimization, and AI-based material design strategies. I also investigate rheological and mechanical behavior of bio-inks to improve extrusion-based additive manufacturing.",
    "Prior to my Ph.D., I spent over three years at Avery Dennison as a Global Product Development Officer, where I led materials selection and property analysis for adhesive polymers, RFID inlays, and specialty coatings — bridging industry experience with my academic research."
  ],
  location: "Lubbock, Texas",
  interests: [
    "Architected Materials",
    "Computational Materials Science",
    "AI/ML for Materials Design",
    "3D Printing & Additive Manufacturing",
    "Material Informatics",
    "Lattice Mechanics"
  ],
  education: [
    {
      degree: "Ph.D. in Mechanical Engineering",
      school: "Texas Tech University",
      years: "2023 — Present",
      detail: "CGPA 3.956/4.00. Research focus: multi-material lattice mechanics and bio-ink printability, integrating FEM, machine learning, and HPC for materials optimization. Advisor: Prof. Paul F. Egan (M3D Lab)."
    },
    {
      degree: "M.S. in Mechanical Engineering",
      school: "Texas Tech University",
      years: "2026",
      detail: "CGPA 3.96/4.00."
    },
    {
      degree: "B.Sc. in Industrial & Production Engineering",
      school: "Bangladesh University of Engineering & Technology (BUET)",
      years: "Graduated 2018",
      detail: "CGPA 3.28/4.00. Thesis: Criteria-Based Local Vendor Selection Process Using PSO Fuzzy-AHP and PROMETHEE Method — A Case of Dairy Production Company."
    }
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      org: "M3D Lab · Texas Tech University",
      years: "Sep 2023 — Present",
      detail: "Exploring structure-property relationships in multi-material lattice mechanics and bio-ink printability. Developing optimized lattice architectures via FEA, data-driven topology optimization, and AI-based material design. Applying dislocation dynamics modeling and phase-field simulations for microstructural analysis."
    },
    {
      role: "Graduate Part-Time Instructor (GPTI)",
      org: "Mechanical & Aerospace Engineering Dept. · Texas Tech University",
      years: "Fall 2023 — Fall 2024",
      detail: "Delivered lectures and supervised undergraduates in the Materials and Mechanics Laboratory. Oversaw mechanical testing, microstructure analysis, and material deformation experiments. Evaluated student performance on material characterization techniques."
    },
    {
      role: "Global Product Development Officer",
      org: "Avery Dennison · Bangladesh",
      years: "Mar 2018 — Aug 2021",
      detail: "Led materials selection and property analysis for adhesive polymers, RFID inlays, and specialty coatings. Designed and tested novel polymer-based composites under various environmental and mechanical conditions. Re-engineered product formulations with advanced polymer blends and sustainable alternatives."
    }
  ],
  // Each project may carry:
  //   media: "assets/research/xxx.png|.gif|.mp4"  (image, GIF, or short video)
  //   caption: figure caption shown under the media
  //   doi: DOI of the related paper (renders a "Read the paper" link)
  //   viz: built-in illustrative animation (dispatch-viz.jsx) shown until real
  //        media is supplied. Drop a real figure/video into media to replace it.
  projects: [
    {
      title: "Multi-Material Lattice Mechanics & Bio-Ink Printability",
      viz: "lattice",
      media: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g001.png",
      figures: [
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g001.png", caption: "Cube and BC unit cells combined into a heterogeneous lattice." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g003.png", caption: "Stochastic mixtures: 25/75, 50/50 and 75/25 Cube–BC lattices." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g004.png", caption: "Deterministic layouts: Layers 0°, Layers 90°, Rows 0°, Rows 90°." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g005.png", caption: "Printing biocompatible photopolymer lattices on a Formlabs SLA printer." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g006.png", caption: "Microscopy of printed Cube, BC–Cube and BC unit cells with beam diameter measurements." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g007.png", caption: "Compression testing of printed lattice specimens on an Instron." },
        { src: "https://pub.mdpi-res.com/designs/designs-10-00088/article_deploy/html/images/designs-10-00088-g011.png", caption: "Deterministic lattices — printed samples, stress–strain curves and elastic moduli." }
      ],
      doi: "10.3390/designs10040088",
      caption: "Figures from Habib, Briguiet & Egan, Designs 2026 (open access, CC BY).",
      tag: "Architected Materials · ML",
      blurb: "Investigating structure-property relationships in multi-material lattices through computational modeling, FEA, and AI-driven topology optimization for materials performance.",
      year: "2023–Present"
    },
    {
      title: "3D Food Printing Defect Detection with CNN + Image Analysis",
      viz: "foodprint",
      media: "assets/fig-food-fidelity.png",
      figures: [
        { src: "assets/fig-food-fidelity.png", caption: "CAD overhang design printed as high- and low-fidelity pea-protein parts." },
        { src: "assets/fig-food-contours.png", caption: "Manual ImageJ contour overlay vs. automated SAM segmentation mask for rounded, cubic and overhang prints." }
      ],
      doi: "10.1016/j.afres.2026.102424",
      caption: "Figures from Habib et al., Applied Food Research 2026 (open access, CC BY).",
      tag: "AI/ML · Additive Manufacturing",
      blurb: "Developed a machine learning model with CNN and image analysis to detect 3D food printing defects from CAD designs, integrating a GUI for real-time printability prediction and material optimization. Graduate project, Texas Tech University.",
      year: "2025"
    },
    {
      title: "Heterogeneous Architected Materials Optimization",
      viz: "hetero",
      media: "assets/fig-hetero-lattice.png",
      figures: [
        { src: "assets/fig-hetero-lattice.png", caption: "Heterogeneous lattice combining Cube and Body-Centered unit cells." },
        { src: "assets/fig-hetero-prints.png", caption: "Homogeneous and heterogeneous lattices as CAD models and 3D-printed specimens." }
      ],
      doi: "10.1007/s00366-024-02081-0",
      caption: "Figures from Arefin et al., Engineering with Computers 2025.",
      tag: "Mechanics · Optimization",
      blurb: "Multi-objective optimization of heterogeneous lattice structures combining FEA, simulation, and experiments — published in Engineering with Computers, vol. 41(2).",
      year: "2024"
    },
    {
      title: "3D-Printed Bone Tissue Scaffolds with Tunable Anisotropy",
      viz: "scaffold",
      media: "assets/fig-scaffold-cage.png",
      figures: [
        { src: "assets/fig-scaffold-cage.png", caption: "Anisotropic BC-Tetra unit cell → hierarchical scaffold → spinal fusion cage application." },
        { src: "assets/fig-scaffold-fea.png", caption: "FEA of lattices with varied unit-cell aspect ratio and predicted vs. experimental modulus." }
      ],
      doi: "10.1016/j.bea.2025.100170",
      caption: "Figures from Masud et al., Biomedical Engineering Advances 2025 (open access, CC BY).",
      tag: "Biomedical · Mechanics",
      blurb: "Mechanical design of 3D-printed bone tissue scaffolds with tunable anisotropy for orthopedic applications.",
      year: "2025"
    },
    {
      title: "Influence of Physical Parameters on the Free Vibration Response of a Cantilever Beam",
      viz: "beam",
      media: "assets/fig-beam-setup.png",
      figures: [
        { src: "assets/fig-beam-setup.png", caption: "Experimental configuration: an Aluminum 6061 cantilever bar driven by an electrodynamical shaker, with a neodymium lumped mass m at distance d and accelerometers recording input and output response." },
        { src: "assets/fig-beam-schematic.png", caption: "Illustration of the phenomenon and expected output — the magnification factor M = |A₀/Aᵢ| peaks when resonance is reached." },
        { src: "assets/fig-beam-frf.png", caption: "Calibration tests with no mass: |FFT(V)| spectra across five repeated signals, with the first three measured modes marked against the analytical prediction." },
        { src: "assets/fig-beam-massmag.png", caption: "Effect of lumped-mass magnitude at fixed position — spectra for m = 18 g, 36 g and 54 g." },
        { src: "assets/fig-beam-masspos.png", caption: "Effect of lumped-mass position at fixed mass — spectra for d = l/3, 2l/3 and l." }
      ],
      caption: "Experimental modal analysis, Texas Tech University.",
      tag: "Structural Mechanics · Modal Analysis",
      blurb: "Built a repeatable experimental protocol to measure the free vibration response of a cantilever beam, using a frequency sweep and FFT of the magnification factor to extract natural modes. Quantified how the magnitude and position of a lumped mass shift the first three natural frequencies.",
      year: "2022"
    },
    {
      title: "Automated Weeder Blade Material Characterization",
      viz: "blade",
      media: "assets/fig-weeder-assembly.png",
      figures: [
        { src: "assets/fig-weeder-assembly.png", caption: "Full assembly of the agricultural weeder with sprayer — chain-driven cutting blades, wheel-powered transmission, and tank-fed spray arms." },
        { src: "assets/fig-weeder-frame.png", caption: "Assembly of the main body: platform, handlebars and drive wheels." },
        { src: "assets/fig-weeder-parts.png", caption: "Component models — handlebar and drive wheel." },
        { src: "assets/fig-weeder-cutter.png", caption: "Rotary weed-cutting blade wheel." },
        { src: "assets/fig-weeder-fea.png", caption: "Static nodal von Mises stress analysis of the cutter wheel, evaluated against the 170 MPa yield strength of the selected material." }
      ],
      caption: "CAD models and FEA from the design analysis (B.Sc. project, BUET).",
      tag: "Materials · Agricultural",
      blurb: "Analyzed wear mechanisms and mechanical performance of a DC motor-driven automated weeder blade, optimizing material selection, hardness, and fatigue resistance.",
      year: "2020"
    }
  ],
  publications: [
    {
      authors: "Habib, A. K. M. A., Briguiet, G., Egan, P. F.",
      title: "Design Strategies for Mixed Unit Cell Lattices: Mechanical Assessment with Biomedical 3D Printing.",
      venue: "Designs, vol. 10, no. 4, p. 88. DOI: 10.3390/designs10040088",
      year: "2026",
      status: "Published"
    },
    {
      authors: "Habib, A. K. M. A., Khalil, M. I., Christopher, G., Maleky, F., Pal, R., Egan, P. F.",
      title: "Image-Based Geometric Fidelity Assessment of 3D Food Printed Inks and Designs.",
      venue: "Applied Food Research, vol. 6, no. 2, p. 102424. DOI: 10.1016/j.afres.2026.102424",
      year: "2026",
      status: "Published"
    },
    {
      authors: "Karki, B., Habib, A. K. M. A., Reilly, R., Hammam, I., Mena, A., Belirgen, M., Hong, Z., et al.",
      title: "Biomechanical Personalization for Spinal Fusion Cages: Recent Advances in Design and Modeling.",
      venue: "Critical Reviews in Biomedical Engineering. DOI: 10.1615/CritRevBiomedEng.2026064340",
      year: "2026",
      status: "Published"
    },
    {
      authors: "Habib, A. K. M. A., Khalil, M. I., Maleky, F., Pal, R., Egan, P. F.",
      title: "Print Fidelity Assessment for 3D Food Printed Designs Using Manual and Automated Approaches.",
      venue: "Proceedings of the Design Society, vol. 5, pp. 2641–2650 (ICED 2025, Dallas, TX). DOI: 10.1017/pds.2025.10278",
      year: "2025",
      status: "Published"
    },
    {
      authors: "Karki, B., Reilly, R., Mena, A., Habib, A. K. M. A., Yang, J., Egan, P. F.",
      title: "Personalization for the Clinic: A Review of Spinal Fusion Cage Design.",
      venue: "Proceedings of the Design Society, vol. 5, pp. 2581–2590 (ICED 2025). DOI: 10.1017/pds.2025.10272",
      year: "2025",
      status: "Published"
    },
    {
      authors: "Arefin, A., Khatri, N., Habib, A. K. M. A., Lu, Q., Idesman, A., Egan, P. F.",
      title: "Heterogeneous Architected Materials: Enhancing Mechanical Performance through Multi-Objective Optimization.",
      venue: "Engineering with Computers, vol. 41(2), pp. 1241–1259. DOI: 10.1007/s00366-024-02081-0",
      year: "2025",
      status: "Published"
    },
    {
      authors: "Masud, A. A., Arefin, A., Khatri, N. R., Habib, A. K. M. A., Chyu, M.-C., Egan, P. F.",
      title: "Mechanical Design of 3D Printed Bone Tissue Scaffolds with Tunable Anisotropy.",
      venue: "Biomedical Engineering Advances, vol. 9, p. 100170. DOI: 10.1016/j.bea.2025.100170",
      year: "2025",
      status: "Published"
    },
    {
      authors: "Renter, W. J., Habib, A. K. M. A., Khalil, M. I., Tomori, M., Khatri, N. R., Egan, P. F.",
      title: "Multimaterial Printing for Medical Design.",
      venue: "Multi-material Additive Manufacturing, Elsevier, pp. 403–429. DOI: 10.1016/B978-0-443-29228-6.00017-7",
      year: "2025",
      status: "Book chapter"
    },
    {
      authors: "Nur, S. M. S. A., Salman, S., Habib, A. K. M. A., Ali, S. M., AlArjani, A., Taqi, H. M. M.",
      title: "Improving the Benefits and Cost of Using Emerging Technologies for Sustainable Recovery from COVID-19 in Manufacturing Industries.",
      venue: "Frontiers in Environmental Science, vol. 10. DOI: 10.3389/fenvs.2022.1025048",
      year: "2022",
      status: "Published"
    }
  ],
  achievements: [
    { year: "2026", title: "ASME DFMLC Paper of Distinction (A) Award", body: "Awarded by the ASME Design Engineering Division's Design for Manufacturing and the Life Cycle Technical Committee for a Paper of Distinction submitted to the 31st DFMLC Conference. Presented at IDETC-CIE 2026, Houston, TX, August 23–26, 2026. Co-authors: Ranadip Pal, Farnaz Maleky, Martin Binks, Paul Egan.", image: "assets/awards/asme-dfmlc-2026-certificate.jpg", pdf: "assets/awards/asme-dfmlc-2026-paper-of-distinction.pdf" },
    { year: "2026", title: "First-Author Journal Paper — Designs", body: "Published 'Design Strategies for Mixed Unit Cell Lattices: Mechanical Assessment with Biomedical 3D Printing' in Designs, vol. 10, no. 4." },
    { year: "2025", title: "First-Author Paper — ICED 2025, Dallas", body: "Presented 'Print Fidelity Assessment for 3D Food Printed Designs Using Manual and Automated Approaches' at the Design Society International Conference on Engineering Design (Cambridge University Press proceedings)." },
    { year: "2025", title: "Biomed Journal Club Competition — Second Place", body: "Awarded second place in the Biomed Journal Club Competition at Texas Tech University." },
    { year: "2023", title: "Best Presentation Award — Third Place, BioMed Journal Club", body: "Awarded by the Edward E. Whitacre Jr. College of Engineering for the presentation 'Deep-learning-based Inverse Design of Three Dimensional Architected Cellular Materials with the Target Porosity and Stiffness using Voxelized Voronoi Lattices' at the 2023 Fall BioMed Journal Club, Texas Tech University.", image: "assets/awards/ttu-biomed-journal-club-2023.png" },
    { year: "2023 — Present", title: "Distinguished Graduate Student Assistantship (DGSA)", body: "Awarded by the Texas Tech University Graduate School and renewed for three consecutive years (2023–24, 2024–25, 2025–26).", images: [
      { src: "assets/awards/ttu-dgsa-2023.png", label: "2023", caption: "Awarded 12 October 2023 — Graduate School Centennial" },
      { src: "assets/awards/ttu-dgsa-2024.png", label: "2024", caption: "Renewed 11 October 2024" }
    ] },
    { year: "2016", title: "ISCEA PTAK Prize — Global Supply Chain Case Competition", body: "Awarded in Bangladesh for excellence in supply chain analysis and strategy." }
  ],
  certifications: [
    { name: "Machine Learning A-Z: AI, Python & R", issuer: "Udemy", year: "—" },
    { name: "Python Data Structures", issuer: "Coursera", year: "—" },
    { name: "CMS3 FAST Summer School", issuer: "—", year: "2025" }
  ],
  certificates: [
    { name: "Machine Learning A-Z: AI, Python & R", issuer: "Udemy", year: "—", detail: "Verified course certificate", url: "https://ttu.udemy.com/certificate/UC-b8703512-864c-42ae-8244-b147cd89110f/" },
    { name: "Python Data Structures", issuer: "Coursera — University of Michigan", year: "—", detail: "Verified course certificate", url: "https://www.coursera.org/account/accomplishments/verify/TG67WMEWB34Z" },
    { name: "Computational Materials Science Summer School — Fostering Accelerated Scientific Techniques (CMS³–FAST)", issuer: "Texas A&M University · Dept. of Materials Science & Engineering, HPRC (NSF)", year: "2025", src: "assets/awards/cms3-fast-2025.jpeg" },
    { name: "Hands On Training for Data Science", issuer: "Texas Tech University — Renewable Energy", year: "2024", detail: "16 hours · 1.60 CEUs", src: "assets/awards/ttu-data-science-training-2024.png" },
    { name: "The Art and Practice of Leadership", issuer: "Bangladesh Youth Leadership Center (BYLC)", year: "2017", detail: "Certificate of Achievement, Dhaka", src: "assets/awards/bylc-leadership-2017.png" },
    { name: "EPIC Induction Program", issuer: "EPIC Group", year: "2019", detail: "Certificate of Participation, Dhaka", src: "assets/awards/epic-induction-2019.png" },
    { name: "Pioneros 2.0 Business Case Competition", issuer: "BUET Entrepreneurship Development Club", year: "—", detail: "Second round, inter-university competition", src: "assets/awards/pioneros-2-0.png" },
    { name: "Voluntary Blood Donor Acknowledgement", issuer: "BADHAN, BUET Zone", year: "—", detail: "Certificate of Acknowledgement", src: "assets/awards/badhan-blood-donor.png" }
  ],
  skills: {
    "Characterization": ["AFM", "SEM", "XRD", "FTIR", "Viscometer", "Rheometer", "Optical Microscope", "MTS", "UTM (Instron)"],
    "Design & CAD": ["SolidWorks", "AutoCAD", "Rhinoceros 3D"],
    "Programming": ["MATLAB", "Simulink", "C", "C++", "R", "Python", "Java", "G-code"],
    "FEA & Simulation": ["ABAQUS", "COMSOL Multiphysics", "ANSYS Fluent"],
    "Software": ["Minitab", "LaTeX", "Mathematica", "Microsoft Office"]
  },
  leadership: [
    { role: "Treasurer", org: "MEGA — Mechanical Engineering Graduate Students Association", years: "Aug 2025 — Present" },
    { role: "STEM Outreach — Middle School", org: "Texas Tech University", years: "2025" },
    { role: "STEMful Day in the Neighborhood — K-12 Outreach", org: "Texas Tech University", years: "2024" },
    { role: "General Secretary", org: "Association of Industrial & Production Engineering (AIPE)", years: "Sep 2017 — Oct 2018" },
    { role: "Campus Director — Stockholm Water Prize", org: "BUET", years: "May 2016 — Oct 2018" }
  ],
  // fa = Font Awesome 6 brand/solid class; icon = text fallback if the icon font
  // fails to load. Colors are the official brand colors.
  socials: [
    { label: "Website", url: "https://akmahasunhabib.github.io", icon: "WWW", fa: "fa-solid fa-globe", color: "#b94a3b" },
    { label: "ResearchGate", url: "https://www.researchgate.net/profile/A-K-M-Ahasun-Habib-2", icon: "RG", fa: "fa-brands fa-researchgate", color: "#00ccbb" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=DzP9DoIAAAAJ&hl=en", icon: "GS", fa: "fa-brands fa-google-scholar", color: "#4285f4" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/a-k-m-ahasun-habib-2868a3151/", icon: "in", fa: "fa-brands fa-linkedin-in", color: "#0a66c2" },
    { label: "GitHub", url: "https://github.com/Akmahasunhabib", icon: "GH", fa: "fa-brands fa-github", color: "#181717" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-7058-6444", icon: "iD", fa: "fa-brands fa-orcid", color: "#a6ce39" },
    { label: "akhabib@ttu.edu", url: "mailto:akhabib@ttu.edu", icon: "@", fa: "fa-solid fa-envelope", color: "#c0392b" }
  ],
  contact: {
    website: { label: "akmahasunhabib.github.io", url: "https://akmahasunhabib.github.io", icon: "🌐", fa: "fa-solid fa-globe" },
    email: { label: "akhabib@ttu.edu", url: "mailto:akhabib@ttu.edu", icon: "✉", fa: "fa-solid fa-envelope" },
    phone: { label: "(806) 730-8466", url: "tel:+18067308466", icon: "☎", fa: "fa-solid fa-phone" },
    address: { label: "2717 3rd St #1007, Lubbock, TX 79415", url: "https://www.google.com/maps/place/2717+3rd+St,+Lubbock,+TX", icon: "🏠", fa: "fa-solid fa-house" },
    scholar: { label: "Google Scholar Profile", url: "https://scholar.google.com/citations?user=DzP9DoIAAAAJ&hl=en", icon: "🎓", fa: "fa-brands fa-google-scholar" },
    researchgate: { label: "ResearchGate Profile", url: "https://www.researchgate.net/profile/A-K-M-Ahasun-Habib-2", icon: "RG", fa: "fa-brands fa-researchgate" },
    linkedin: { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/a-k-m-ahasun-habib-2868a3151/", icon: "in", fa: "fa-brands fa-linkedin-in" },
    github: { label: "github.com/Akmahasunhabib", url: "https://github.com/Akmahasunhabib", icon: "GH", fa: "fa-brands fa-github" },
    orcid: { label: "0000-0002-7058-6444", url: "https://orcid.org/0000-0002-7058-6444", icon: "iD", fa: "fa-brands fa-orcid" },
    affiliation: { label: "M3D Lab, Mechanical & Aerospace Engineering, Texas Tech University", url: "https://www.depts.ttu.edu/me/", icon: "🏛", fa: "fa-solid fa-building-columns" },
    location: { label: "Lubbock, Texas", url: "https://www.google.com/maps/place/Lubbock,+TX", icon: "📍", fa: "fa-solid fa-location-dot" }
  }
};
