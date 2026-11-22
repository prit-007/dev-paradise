// data/projects.js
export const projects = [
  {
    id: 1,
    title: 'Real Estate Platform',
    slug: 'real-estate-platform',
    category: 'Web',
    client: 'PropDirect Realty',
    date: '2024',
    duration: '4 Months',
    teamSize: '4 Engineers',
    liveUrl: 'https://example.com/real-estate',
    githubUrl: 'https://github.com/developer-paradise/real-estate-platform',
    tech: ['Angular', 'Material UI', 'Node.js', 'MongoDB', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80'
    ],
    description:
      'A person-to-person property marketplace eliminating middlemen. Users can list properties for rent/sale and find homes without platform fees.',
    challenges: [
      'Eliminating intermediaries while maintaining high trust and anti-fraud verification.',
      'Complex multi-parameter spatial filtering across thousands of active geo-tagged listings.',
      'Ensuring instant responsiveness on mobile devices with low-bandwidth connections.'
    ],
    solutions: [
      'Implemented verified Aadhaar & mobile OTP identity verification with cryptographic signatures.',
      'Architected geospatial MongoDB indices with bounding-box viewport queries under 45ms.',
      'Developed responsive Angular client with aggressive route pre-fetching and asset lazy-loading.'
    ],
    metrics: [
      { label: 'Platform Fee Savings', value: '100%' },
      { label: 'Active Monthly Inquiries', value: '15,000+' },
      { label: 'Average Query Latency', value: '< 40ms' },
      { label: 'Verified Listings', value: '4,500+' }
    ],
    features: [
      'Direct peer-to-peer owner messaging',
      'Zero-brokerage model with direct contract generation',
      'Geographic radius property search with interactive maps',
      'Dynamic photo upload with client-side compression',
      'Custom appointment scheduling with automated SMS alerts'
    ],
    caseStudyContent:
      'Traditional real estate platforms in India impose hefty commission fees on both buyers and renters. Our objective was to architect a direct owner-to-tenant portal where verified owners list properties freely. Built on Angular and MongoDB, the system features sub-50ms geospatial filtering, direct end-to-end encrypted messaging, and digital rental agreement generation.'
  },
  {
    id: 2,
    title: "Meet's Fashion",
    slug: 'meets-fashion',
    category: 'Web',
    client: 'Meet Atelier Couture',
    date: '2024',
    duration: '3 Months',
    teamSize: '3 Engineers',
    liveUrl: 'https://example.com/meets-fashion',
    githubUrl: 'https://github.com/developer-paradise/meets-fashion',
    tech: ['Angular', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Zoom API'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=80'
    ],
    description:
      'A bespoke fashion appointment booking platform allowing customers to create custom garments or book personal styling consultations.',
    challenges: [
      'Handling live appointment slot collisions across multiple time zones with real-time video links.',
      'Visualizing custom embroidery, fabrics, and measurement specifications accurately in the browser.',
      'Automating notifications across WhatsApp and Email to minimize consultation no-shows.'
    ],
    solutions: [
      'Integrated Zoom SDK with automated webhooks creating unique secure consultation rooms per slot.',
      'Created an interactive 2D canvas configurator for fabric selection and bespoke cutouts.',
      'Built a Twilio WhatsApp notification pipeline achieving a 98% message delivery rate.'
    ],
    metrics: [
      { label: 'Booking Conversion', value: '+42%' },
      { label: 'No-Show Reduction', value: '75%' },
      { label: 'Consultations Completed', value: '3,200+' },
      { label: 'Client Satisfaction', value: '4.9/5' }
    ],
    features: [
      'Automated Zoom consultation scheduling',
      'Custom design & measurement spec sheet builder',
      'Interactive fabric and pattern selector',
      'Instant WhatsApp booking reminders and calendar sync',
      'Secure payment deposit workflow'
    ],
    caseStudyContent:
      "Meet's Fashion modernizes custom bespoke tailoring. By merging high-fashion appointment booking with automated virtual styling appointments over Zoom, customers can collaborate directly with master tailors worldwide."
  },
  {
    id: 3,
    title: 'Planty',
    slug: 'planty',
    category: 'Mobile',
    client: 'Botanica Green Tech',
    date: '2024',
    duration: '5 Months',
    teamSize: '4 Engineers',
    liveUrl: 'https://example.com/planty',
    githubUrl: 'https://github.com/developer-paradise/planty',
    tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'TensorFlow Lite', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1590167778785-2edfbb407ea0?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590167778785-2edfbb407ea0?w=1000&q=80',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1000&q=80',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1000&q=80'
    ],
    description:
      'A comprehensive plant information, on-device disease diagnosis, and botanical e-commerce platform built on Flutter.',
    challenges: [
      'Running image classification models on mid-tier mobile hardware with high accuracy and low battery consumption.',
      'Maintaining cross-platform offline database sync when users photograph plants in gardens with no signal.',
      'Cataloging thousands of plant species with climate-specific watering and sunlight algorithms.'
    ],
    solutions: [
      'Quantized MobileNetV3 TensorFlow Lite model down to 4.2MB, running on-device in under 120ms.',
      'Implemented Hive local storage with background sync to MongoDB when internet reconnects.',
      'Developed personalized watering schedule engine based on user geolocation weather telemetry.'
    ],
    metrics: [
      { label: 'Model Accuracy', value: '94.8%' },
      { label: 'App Store Downloads', value: '50K+' },
      { label: 'Species Cataloged', value: '12,000+' },
      { label: 'Daily Active Gardeners', value: '8,500+' }
    ],
    features: [
      'Instant camera leaf & flower disease classification',
      'Smart watering & sunlight scheduling notifications',
      'Curated e-commerce nursery store for organic soil & seeds',
      'Community discussion board for botanical experts',
      'Offline diagnostic history diary'
    ],
    caseStudyContent:
      'Planty bridges artificial intelligence with environmental stewardship. Using an edge-computed deep neural network on Flutter, the app identifies plant species and diagnoses fungal infections directly on device in offline mode.'
  },
  {
    id: 4,
    title: 'Search Optimate',
    slug: 'search-optimate',
    category: 'Web',
    client: 'EduTech Alliance',
    date: '2024',
    duration: '3.5 Months',
    teamSize: '3 Engineers',
    liveUrl: 'https://example.com/search-optimate',
    githubUrl: 'https://github.com/developer-paradise/search-optimate',
    tech: ['Angular', 'Bootstrap', 'Node.js', 'MongoDB', 'OpenAI API', 'Semantic Scholar API'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b25e7256?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b25e7256?w=1000&q=80',
      'https://images.unsplash.com/photo-1507842229450-7994e9415516?w=1000&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=80'
    ],
    description:
      'A specialized multi-source search engine for university researchers and students aggregating scholarly papers, citations, and AI syntheses.',
    challenges: [
      'Aggregating results from disparate academic APIs with varying rate limits and payload schemas.',
      'Synthesizing dense 30-page research documents into readable, accurate student summaries.',
      'Preventing hallucinated citations and maintaining academic rigor.'
    ],
    solutions: [
      'Built a distributed Node.js rate-limited API gateway that fans out searches concurrently in parallel.',
      'Implemented RAG (Retrieval-Augmented Generation) pipeline citing exact DOI and page numbers.',
      'Created an instant bibliography generator supporting APA, MLA, IEEE, and Chicago styles.'
    ],
    metrics: [
      { label: 'Papers Indexed', value: '25M+' },
      { label: 'Query Synthesis Speed', value: '1.4s' },
      { label: 'Citation Accuracy', value: '99.4%' },
      { label: 'University Users', value: '18,000+' }
    ],
    features: [
      'Federated multi-repository academic search',
      'Instant AI literature review synthesis with verifiable DOI links',
      'Interactive citation graph explorer',
      'One-click BibTeX and EndNote export',
      'Personal research project notebook'
    ],
    caseStudyContent:
      'Search Optimate was designed to rescue university students from endless academic paywalls and fragmented repositories. By querying multiple open-access scientific repositories in parallel, the platform distills key insights into verifiable research summaries.'
  },
  {
    id: 5,
    title: 'Make My Travel',
    slug: 'make-my-travel',
    category: 'Web',
    client: 'WanderLux Tourism India',
    date: '2023',
    duration: '4 Months',
    teamSize: '4 Engineers',
    liveUrl: 'https://example.com/make-my-travel',
    githubUrl: 'https://github.com/developer-paradise/make-my-travel',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Razorpay', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1469824671923-03c4b162c55d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469824671923-03c4b162c55d?w=1000&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&q=80'
    ],
    description:
      'A travel planning and itinerary curation platform offering bespoke holiday packages and certified local guides across heritage destinations in India.',
    challenges: [
      'Coordinating complex multi-leg travel bookings with variable hotel and guide availability.',
      'Generating dynamic real-time itineraries with interactive route waypoints.',
      'Handling high checkout concurrency during holiday festival booking spikes.'
    ],
    solutions: [
      'Implemented optimistic UI state with transactional MongoDB session locks on bookings.',
      'Leveraged Google Maps Directions Matrix API for optimal daily sightseeing routes.',
      'Engineered Razorpay multi-split payments handling automatic guide commission escrow.'
    ],
    metrics: [
      { label: 'Booking Volume', value: '$1.2M+' },
      { label: 'Itineraries Generated', value: '45,000+' },
      { label: 'Certified Guides', value: '350+' },
      { label: 'User Rating', value: '4.85/5' }
    ],
    features: [
      'Drag-and-drop daily travel itinerary builder',
      'Verified local guide hiring with reviews & languages spoken',
      'Instant multi-hotel & transport package pricing',
      'Offline PDF trip voucher generation',
      'Split-bill expense tracking for group travelers'
    ],
    caseStudyContent:
      'Make My Travel reinvents experiential tourism in India. Built with React and Node.js, the platform offers an intuitive visual day-by-day itinerary creator that pairs travelers with certified local guides and authentic regional homestays.'
  },
  {
    id: 6,
    title: 'The Trailer Flix',
    slug: 'the-trailer-flix',
    category: 'Web',
    client: 'Cinematic Media Group',
    date: '2023',
    duration: '2.5 Months',
    teamSize: '3 Engineers',
    liveUrl: 'https://example.com/the-trailer-flix',
    githubUrl: 'https://github.com/developer-paradise/trailer-flix',
    tech: ['React', 'Bootstrap', 'Node.js', 'MongoDB', 'TMDB API', 'YouTube API'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1000&q=80',
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1000&q=80'
    ],
    description:
      'A Netflix-style streaming showcase interface for discovering cinema trailers with aggregated critics scores, ratings, and personalized recommendations.',
    challenges: [
      'Fluid 60 FPS video preview playback without bogging down browser memory.',
      'Aggregating Rotten Tomatoes, IMDB, and Metacritic scores in unified cards.',
      'Responsive row scrolling across mobile, desktop, and smart TV browsers.'
    ],
    solutions: [
      'Engineered an intelligent viewport video prerendering queue using IntersectionObserver.',
      'Aggregated film metadata cache refreshed via background worker cron jobs.',
      'Built hardware-accelerated horizontal scrollers with smooth GSAP touch snap.'
    ],
    metrics: [
      { label: 'Monthly Streamers', value: '120K+' },
      { label: 'Video Startup Time', value: '< 200ms' },
      { label: 'Trailers Cataloged', value: '25,000+' },
      { label: 'Avg Session Length', value: '14.2 min' }
    ],
    features: [
      'Auto-play soundless preview cards on hover',
      'Aggregated Metacritic & Rotten Tomatoes review scores',
      'Custom watchlist & release reminder notifications',
      'Genre-based infinite scroll carousels',
      'Deep links to official theatrical tickets and streaming providers'
    ],
    caseStudyContent:
      'The Trailer Flix delivers the high-production experience of streaming giants to movie trailers. Film buffs can browse upcoming cinema releases, compare critical acclaim, and build release-day reminder calendars.'
  },
  {
    id: 7,
    title: 'Employee UMS',
    slug: 'employee-ums',
    category: 'Enterprise',
    client: 'Apex Enterprise Conglomerate',
    date: '2024',
    duration: '6 Months',
    teamSize: '5 Engineers',
    liveUrl: 'https://example.com/employee-ums',
    githubUrl: 'https://github.com/developer-paradise/employee-ums',
    tech: ['.NET Core', 'SQL Server', 'TypeScript', 'Entity Framework', 'Azure AD'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&q=80'
    ],
    description:
      'A multi-tenant Enterprise Unified Management System architected for large conglomerates managing thousands of staff across distributed business units.',
    challenges: [
      'Strict multi-tenant tenant isolation with custom role-based access control (RBAC).',
      'High-throughput payroll computation batch processing across 25,000+ staff records.',
      'Comprehensive SOC2 compliance and immutable audit logging.'
    ],
    solutions: [
      'Architected multi-tenant database partitioning with tenant query filters in Entity Framework Core.',
      'Implemented distributed job queues in .NET BackgroundService processing payroll in 8.4 seconds.',
      'Integrated cryptographic SHA-256 audit ledger tracking every permission and payroll change.'
    ],
    metrics: [
      { label: 'Employees Managed', value: '25,000+' },
      { label: 'Batch Processing Time', value: '8.4 sec' },
      { label: 'Enterprise Uptime', value: '99.99%' },
      { label: 'Companies Unified', value: '14 Subs' }
    ],
    features: [
      'Multi-company tenancy hierarchy with custom departmental trees',
      'Granular role-based permissions matrix (RBAC)',
      'Automated salary payroll calculations & statutory tax deductions',
      'Live biometric attendance device integration via REST Webhooks',
      'Exportable executive audit & compliance telemetry dashboards'
    ],
    caseStudyContent:
      'Employee UMS is an industrial-strength enterprise suite crafted with .NET Core and SQL Server. Designed for multi-subsidiary corporations, it consolidates payroll, attendance, and departmental hierarchy management into a single sovereign platform.'
  },
  {
    id: 8,
    title: 'Employee PRO',
    slug: 'employee-pro',
    category: 'Mobile',
    client: 'Apex Enterprise Mobile Suite',
    date: '2024',
    duration: '4.5 Months',
    teamSize: '4 Engineers',
    liveUrl: 'https://example.com/employee-pro',
    githubUrl: 'https://github.com/developer-paradise/employee-pro',
    tech: ['Flutter', 'Firebase', 'Cloud Functions', 'BLoC Pattern', 'Biometrics'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80'
    ],
    description:
      'The executive and employee companion mobile app for Enterprise UMS, featuring geo-fenced attendance, instant leave approvals, and pay slip access.',
    challenges: [
      'Preventing GPS spoofing during remote on-site attendance punch-ins.',
      'Instant push notification routing to executives for urgent leave approvals.',
      'Native biometric authentication integration across hundreds of Android & iOS device models.'
    ],
    solutions: [
      'Implemented dual GPS + WiFi BSSID geo-fencing validation preventing spoofing.',
      'Utilized Firebase Cloud Messaging with high-priority APNs payload routing.',
      'Integrated Flutter local_auth supporting FaceID, TouchID, and Android BiometricPrompt.'
    ],
    metrics: [
      { label: 'Daily Punch Accuracy', value: '99.98%' },
      { label: 'Approval Turnaround', value: '< 15 min' },
      { label: 'Active Daily Users', value: '18,500+' },
      { label: 'Crash-Free Sessions', value: '99.92%' }
    ],
    features: [
      'Geo-fenced one-tap biometric attendance check-in',
      'Live leave balance tracker with one-click manager approvals',
      'Encrypted digital payslip viewer and instant PDF download',
      'Company announcement broadcast feed with read receipts',
      'Offline punch-in caching with cryptographic tamper-proofing'
    ],
    caseStudyContent:
      'Employee PRO is the native mobile gateway to enterprise workforce management. Built with Flutter, it empowers thousands of employees to clock attendance seamlessly via geo-fenced biometrics, request leaves in seconds, and access encrypted tax documents on the go.',
  },
  {
    id: 9,
    slug: 'nook',
    title: 'Nook',
    category: 'Mobile',
    client: "Developer's Paradise",
    date: '2024',
    duration: '8 Weeks',
    teamSize: '3 Engineers',
    liveUrl: 'https://prit-007.github.io/nook/',
    githubUrl: 'https://github.com/prit-007/nook',
    tech: ['Flutter', 'Dart', 'SQLCipher', 'libp2p', 'Riverpod'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    ],
    description:
      'A private, local-first, open-source note-taking app. Notes are encrypted at rest on your device and travel directly over Wi-Fi between your devices — no server, no cloud, no telemetry.',
    challenges: [
      'End-to-end encrypted local storage with SQLCipher',
      'Peer-to-peer sync without a central server',
      'Cross-platform offline-first with biometric gate',
    ],
    solutions: [
      'SQLCipher encrypted SQLite with platform keystore keys',
      'libp2p over UDX direct Wi-Fi sync with pairing codes',
      'Flutter single codebase across Android, iOS, macOS, Linux, Windows',
    ],
    metrics: [
      { label: 'Encryption', value: 'SQLCipher' },
      { label: 'Sync Mode', value: 'P2P' },
      { label: 'Platforms', value: '6+' },
    ],
    features: [
      'Full-text search (FTS5)',
      'Checklists & doodles',
      'Biometric gate',
      'Per-note locking',
      'Soft-delete bin',
      'Vault export/import',
    ],
    caseStudyContent:
      'Nook was built around one belief: your notes belong to you — not to a service. Every big note app makes you trade data ownership for good design. We refused that tradeoff: Nook works fully offline forever, with no sign-in screen, no account, no cloud. Sync is a feature you opt into — direct, peer-to-peer, over nearby Wi-Fi, byte-for-byte, with no relay in between.',
  },
  {
    id: 10,
    slug: 'swapfoss',
    title: 'SwapFOSS',
    category: 'Web',
    client: "Developer's Paradise",
    date: '2024',
    duration: '2 Weeks',
    teamSize: '6 Engineers',
    liveUrl: 'https://prit-007.github.io/SwapFOSS/',
    githubUrl: 'https://github.com/prit-007/SwapFOSS',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'Zod', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555076771-02755561355b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555076771-02755561355b?w=1000&q=80',
      'https://images.unsplash.com/photo-1555076771-02755561355b?w=800&q=80',
    ],
    description:
      'Free, open-source alternatives directory — find FOSS replacements for everyday apps, share cards to social media, or download post-ready bundles.',
    challenges: [
      'Static site with dynamic JSON data',
      'Client-side image generation (PNG)',
      'Client-side ZIP bundling for post export',
    ],
    solutions: [
      'Vite SPA with JSON data files',
      'html-to-image for client-side PNG rendering',
      'JSZip for client-side ZIP bundling',
    ],
    metrics: [
      { label: 'Categories', value: '6+' },
      { label: 'Tools', value: '50+' },
      { label: 'Format', value: 'PNG/ZIP' },
    ],
    features: [
      'Category browsing',
      'Card sharing (PNG)',
      'Batch post export',
      'No-code tool addition via JSON',
      'Dark mode',
      'Glassmorphism UI',
    ],
    caseStudyContent:
      'SwapFOSS is a visual directory that helps you find FOSS (Free & Open Source Software) replacements for everyday apps. Browse by category, share cards to social media, or download full post-ready bundles. Built as a static Vue 3 SPA with Vite, it requires no backend — all data lives in JSON files.',
  },
  {
    id: 11,
    slug: 'clearwage',
    title: 'ClearWage',
    category: 'Enterprise',
    client: "Developer's Paradise",
    date: '2024',
    duration: '10 Weeks',
    teamSize: '7 Engineers',
    liveUrl: 'https://prit-007.github.io/ClearWage',
    githubUrl: 'https://github.com/prit-007/ClearWage',
    tech: ['Flutter', 'Go', 'PostgreSQL', 'Firebase', 'Docker'],
    image: 'https://images.unsplash.com/photo-1542744072-686e2e67965a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744072-686e2e67965a?w=1000&q=80',
      'https://images.unsplash.com/photo-1542744072-686e2e67965a?w=800&q=80',
    ],
    description:
      'Factory workforce management platform — attendance, payroll, advances, and payslips without register or spreadsheet. Runs on your own server.',
    challenges: [
      'Multi-tenancy per factory',
      'Offline attendance sync with flush on reconnect',
      'PDF payslip generation',
      'Role-based access (admin/employee)',
    ],
    solutions: [
      'JWT tenant-scoped middleware',
      'Local staging with automatic flush',
      'goqu + sqlc type-safe queries',
      'Riverpod state management',
    ],
    metrics: [
      { label: 'Platforms', value: '6+' },
      { label: 'Tests', value: '543+' },
      { label: 'Price', value: 'Free' },
    ],
    features: [
      'Daily roster with bulk mark',
      'Payroll with PDF payslips',
      'Advance ledger with approval workflow',
      'Employee disputes',
      'Shift & holiday management',
      'Reports & charts',
    ],
    caseStudyContent:
      'ClearWage puts attendance, payroll, and the advance ledger in one place, and lets workers see their own record instead of asking the office. Because it runs on your own server, none of it depends on a subscription you could lose access to. Built as a GPL-3.0 open-source platform with Flutter frontend and Go REST API.',
  },
  {
    id: 12,
    slug: 'cafe-management-system',
    title: 'Cafe Management System',
    category: 'Web',
    client: "Developer's Paradise",
    date: '2024',
    duration: '6 Weeks',
    teamSize: '4 Engineers',
    liveUrl: 'http://localhost:3000',
    githubUrl: 'https://github.com/prit-007/cafe-mangement-system-react',
    tech: ['React 18', 'Vite 8', 'MUI v5', 'Express 4', 'Knex 3', 'PostgreSQL', 'Socket.IO'],
    image: 'https://images.unsplash.com/photo-1554118826-6202776843d6?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554118826-6202776843d6?w=1000&q=80',
      'https://images.unsplash.com/photo-1554118826-6202776843d6?w=800&q=80',
    ],
    description:
      'Free, open-source, self-hostable point-of-sale and management system for restaurants, cafés, and eateries. Mobile-first with India GST compliance.',
    challenges: [
      'Multi-tenant architecture',
      'Real-time kitchen display system',
      'GST-compliant invoicing (Rule 46)',
      'Offline order queueing',
    ],
    solutions: [
      'Subdomain-based tenant resolution',
      'Socket.IO KDS with keyboard bump',
      'pdfkit GST Rule 46 invoices',
      'Socket.io outbox with idempotent replay',
    ],
    metrics: [
      { label: 'Tenants', value: 'Multi' },
      { label: 'Invoices', value: 'GST Rule 46' },
      { label: 'Payment', value: 'Cash/UPI/Card' },
    ],
    features: [
      'Customer storefront with QR table ordering',
      'Waiter/counter POS',
      'Kitchen display system',
      'Admin dashboard & analytics',
      'Menu CRUD with image upload',
      'Inventory with recipes/BOM',
      'Loyalty program',
      'Activity log',
    ],
    caseStudyContent:
      'A free, open-source, self-hostable point-of-sale and management system for restaurants, cafés, and eateries. Mobile-first (customers order from phones; staff run the floor from tablets/phones), India GST compliant, and white-label ready.',
  },
  {
    id: 13,
    slug: 'locus',
    title: 'Locus',
    category: 'Mobile',
    client: "Developer's Paradise",
    date: '2025',
    duration: '4 Weeks',
    teamSize: '3 Engineers',
    liveUrl: 'https://prit-007.github.io/locus/',
    githubUrl: 'https://github.com/pritvasani/locus',
    tech: ['Flutter', 'Dart', 'Hive', 'flutter_map', 'libre_location', 'flutter_bloc'],
    image: 'https://images.unsplash.com/photo-1515467737313-527292c7979f?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515467737313-527292c7979f?w=1000&q=80',
      'https://images.unsplash.com/photo-1515467737313-527292c7979f?w=800&q=80',
    ],
    description:
      'Location-aware reminders that trigger when you arrive — not when you forget. Everything runs on-device.',
    challenges: [
      'Background geofencing without Google APIs',
      '20 geofence limit rotation',
      'On-device location privacy',
      'Cross-brand battery optimization',
    ],
    solutions: [
      'libre_location engine behind port/adapter',
      'Nearest geofence rotation',
      'Hive local database only',
      'Foreground service + wake lock',
    ],
    metrics: [
      { label: 'Triggers', value: '5 types' },
      { label: 'Actions', value: '5 types' },
      { label: 'API Keys', value: '0' },
    ],
    features: [
      'Enter/Exit/Dwell/Schedule/Wi-Fi triggers',
      'Notification/Alarm/Conditional/Automated reminders',
      'ntfy/SMS/Webhook/Email actions',
      'OpenStreetMap with geofence circles',
      'Home-screen widget',
      'JSON import/export',
      'Health screen',
    ],
    caseStudyContent:
      'Most reminder apps ask "what time?". Locus asks "where?" Locus is built so that your location never leaves your phone. No analytics, no ads, no crash-reporting SDKs, no accounts.',
  },
  {
    id: 14,
    slug: 'sp-generator',
    title: 'SP Generator',
    category: 'Web',
    client: "Developer's Paradise",
    date: '2024',
    duration: '5 Weeks',
    teamSize: '3 Engineers',
    liveUrl: 'https://github.com/prit-007/Sp-generator',
    githubUrl: 'https://github.com/prit-007/Sp-generator',
    tech: ['React 18', '.NET 8.0+', 'React Router v6', 'Axios', 'Tailwind CSS', 'SMO'],
    image: 'https://images.unsplash.com/photo-1555096267-04796c7865da?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555096267-04796c7865da?w=1000&q=80',
      'https://images.unsplash.com/photo-1555096267-04796c7865da?w=800&q=80',
    ],
    description:
      'Stored Procedure Generator — transforms how developers create and manage SPs for database systems. Universal database compatibility with intelligent SP generation engine.',
    challenges: [
      'Multi-database schema introspection',
      'Optimized CRUD generation',
      'Version control for procedures',
      'Cross-database migration',
    ],
    solutions: [
      'SMO-based database exploration',
      'Intelligent SP generation engine',
      'Version control integration',
      'Multi-format export (.sql, bundles, documentation)',
    ],
    metrics: [
      { label: 'Databases', value: '4+' },
      { label: 'Operations', value: 'CRUD' },
      { label: 'Export', value: 'Multi-format' },
    ],
    features: [
      'Intuitive dashboard',
      'Smart form generation',
      'Live code preview',
      'Template management',
      'Version control',
      'Schema analysis',
      'Performance insights',
      'Cross-database migration',
    ],
    caseStudyContent:
      'SP Generator is a powerful web application crafted to transform how developers create and manage stored procedures for database systems. Combining a sleek React frontend with a robust .NET API backend, this tool eliminates the tedium of manual SP creation.',
  },
  {
    id: 15,
    slug: 'squad-link',
    title: 'SquadLink',
    category: 'Web',
    client: "Developer's Paradise",
    date: '2024',
    duration: '2 Weeks',
    teamSize: '2 Engineers',
    liveUrl: 'https://github.com/prit-007/sqaud-link',
    githubUrl: 'https://github.com/prit-007/sqaud-link',
    tech: ['Next.js', 'Supabase', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0130c727?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0130c727?w=1000&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0130c727?w=800&q=80',
    ],
    description:
      'Next.js application bootstrapped with create-next-app, using Supabase for database and authentication.',
    challenges: [
      'Real-time database synchronization',
      'RLS race condition in chat creation',
      'Image upload storage',
    ],
    solutions: [
      'Supabase PostgreSQL',
      'Atomic RPC function for chat creation',
      'Supabase Storage bucket for images',
    ],
    metrics: [
      { label: 'Database', value: 'Supabase' },
      { label: 'Framework', value: 'Next.js' },
    ],
    features: [
      'Next.js App Router',
      'Supabase integration',
      'SQL schema migrations',
      'Image upload storage',
    ],
    caseStudyContent:
      'This is a Next.js project bootstrapped with create-next-app. Uses Supabase for database with atomic chat creation function to fix RLS race conditions.',
  },
  {
    id: 16,
    slug: 'sync-note-net',
    title: 'SyncNoteNet',
    category: 'Web',
    client: "Developer's Paradise",
    date: '2024',
    duration: '8 Weeks',
    teamSize: '4 Engineers',
    liveUrl: 'https://github.com/PritOrg/Sync-Not-Net',
    githubUrl: 'https://github.com/PritOrg/Sync-Not-Net',
    tech: ['React 18', 'Express 4', 'Socket.io 4', 'MongoDB 8', 'MUI 6', 'Monaco Editor', 'Quill'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    ],
    description:
      'Collaborative note-taking platform with real-time editing, version control, rich collaboration features, password protection, and guest access.',
    challenges: [
      'Real-time collaborative editing',
      'Version history with diff',
      'Password-protected notebooks',
      'Guest access with QR sharing',
    ],
    solutions: [
      'Socket.io with remote cursors',
      'Version snapshots with diff comparison',
      'bcrypt-hashed passwords',
      'Guest registration flow',
    ],
    metrics: [
      { label: 'Tests', value: '168+' },
      { label: 'Real-time', value: 'Socket.io' },
      { label: 'Editors', value: 'Quill+Monaco' },
    ],
    features: [
      'Rich text & code editing',
      'Real-time collaboration',
      'Version history & diff',
      'Threaded comments',
      'Collaborator management',
      'Password protection',
      'Guest access',
      'Favorites & search',
      'Auto-save',
      'Share dialog with QR code',
    ],
    caseStudyContent:
      'Sync Note Net is a full-stack collaborative note-taking platform built with the MERN stack. Create rich-text or code notebooks, collaborate in real-time with Socket.io, track version history, manage collaborators with granular permissions, and share notebooks with password protection and guest access.',
  },
  {
    id: 17,
    slug: 'wallbizz',
    title: 'Wallbizz',
    category: 'Mobile',
    client: "Developer's Paradise",
    date: '2024',
    duration: '3 Weeks',
    teamSize: '3 Engineers',
    liveUrl: 'https://prit-007.github.io/Wallbizz/',
    githubUrl: 'https://github.com/prit-007/wallbizz',
    tech: ['Flutter', 'Go (Fiber)', 'Supabase', 'Wallhaven API'],
    image: 'https://images.unsplash.com/photo-1506905925366-3855106514dc?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925366-3855106514dc?w=1000&q=80',
      'https://images.unsplash.com/photo-1506905925366-3855106514dc?w=800&q=80',
    ],
    description:
      'Premium curated wallpapers. Zero clutter. Pure aesthetic. Dark-first wallpaper app powered by Wallhaven\'s top-rated 4K wallpapers.',
    challenges: [
      '7 curated categories refreshing daily',
      'Hybrid search with filters',
      'Moodboard collections',
      'Dark-first glassmorphism UI',
    ],
    solutions: [
      'Wallhaven API integration',
      'Fiber cron sync job',
      'Supabase for user data',
      'Glassmorphism Material 3 design',
    ],
    metrics: [
      { label: 'Categories', value: '7' },
      { label: 'Platforms', value: 'Web+Android' },
      { label: 'Images', value: '4K' },
    ],
    features: [
      '7 curated categories (Trending, Anime, Nature, Cyberpunk, Space, Desktop, Mobile)',
      'Hybrid search with sort/date/category/aspect ratio',
      'Moodboard collections',
      'Download vault',
      'Smart gestures',
      'Watermarked share',
      'Dark-first glassmorphism UI',
      'Cross-platform PWA + Android',
    ],
    caseStudyContent:
      'Wallbizz is a dark-first wallpaper app powered by Wallhaven\'s top-rated 4K wallpapers. Browse seven curated categories, search millions of wallpapers, download to your device, and build personal moodboard collections — all with a Vogue-editorial glassmorphism UI.',
  },
  {
    id: 18,
    slug: 'aperturex',
    title: 'ApertureX',
    category: 'Mobile',
    client: "Developer's Paradise",
    date: '2024',
    duration: '10 Weeks',
    teamSize: '6 Engineers',
    liveUrl: 'https://prit-007.github.io/ApertureX/',
    githubUrl: 'https://github.com/prit-007/ApertureX',
    tech: ['Flutter', 'Dart', 'Rust', 'flutter_rust_bridge', 'Material 3'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516035069371-3855106514dc?w=1000&q=80',
      'https://images.unsplash.com/photo-1516035069371-3855106514dc?w=800&q=80',
    ],
    description:
      'The mobile-native, non-destructive, 100% on-device FOSS photo editor & darkroom — the Snapseed and Lightroom replacement the open-source community deserved.',
    challenges: [
      'RAW decoding is heavy C/C++',
      'Real-time adjustment needs GPU shaders',
      '48–200 MP images blow the OS texture/RAM budget',
      'FOSS UIs are built for function, not feel',
    ],
    solutions: [
      'A Rust core behind flutter_rust_bridge, with a pluggable RawDecoder',
      'A chained GLSL pipeline via Flutter/Impeller fragment shaders',
      'A tile-based viewport with ROI decode + LRU byte budget',
      'Material 3 + a dedicated Snapseed-style gesture FSM',
    ],
    metrics: [
      { label: 'Presets', value: '55+' },
      { label: 'Masks', value: '15 kinds' },
      { label: 'Platforms', value: 'Android+iOS+Desktop' },
    ],
    features: [
      'Dual-UI shells (Lightroom panel + Snapseed gesture)',
      '55+ curated master presets',
      'Depth Anything V2 monocular bokeh',
      '7 optical apertures',
      '15 mask kinds with boolean algebra',
      '16-bit scene-linear float pipeline',
      'Point color & calibration',
      'Guided upright transform',
      'Double exposure',
      'Targeted output sharpening',
      'C2PA cryptographic provenance',
      'Studio tethered shooting',
    ],
    caseStudyContent:
      'ApertureX opens like a camera aperture and edits like a professional darkroom. It unifies two swappable UIs over one non-destructive recipe: a Lightroom-style precision panel inspector for studio fine-tuning and a Snapseed-style gesture HUD for lightning-fast thumb edits. Large RAWs and 200MP phone captures are processed through a tile-based viewport with a zero-copy Rust engine, delivering 120 FPS slider response without memory crashes. 100% on-device. Zero telemetry. Zero accounts. Zero subscriptions.',
  },
];

export const getProjectById = (id) => {
  const numericId = parseInt(id, 10);
  return projects.find((p) => p.id === numericId);
};

export const getRelatedProjects = (currentId, category, limit = 3) => {
  const numericId = parseInt(currentId, 10);
  return projects
    .filter((p) => p.id !== numericId && (category === 'All' || p.category === category))
    .slice(0, limit);
};
