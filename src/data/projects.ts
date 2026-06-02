export interface Project {
  id: string;
  num: string;
  name: string;
  type: string;
  desc: string;
  image: string;
  featured: boolean;
  link?: string;
  tags: { label: string; type: 'frontend' | 'backend' | 'db' | 'infra' | 'neutral' }[];
  caseStudy: {
    tag: string;
    metrics: { val: string; label: string }[];
    overview: string[];
    challenges: string[];
    solutions: string[];
    stack: { label: string; type: 'frontend' | 'backend' | 'db' | 'infra' | 'neutral' }[];
    features: { icon: string; label: string }[];
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: 'babystore',
    num: '01',
    name: 'Babystore — E-Commerce Platform',
    type: 'Senior Full Stack Developer',
    desc: 'Serving 40%+ of the UAE population with over 27 million users annually. A unified platform bringing baby & mommy needs into one fast, accessible experience.',
    image: '/babystore.png',
    featured: true,
    link: 'https://babystore.ae',
    tags: [
      { label: 'Next.js', type: 'frontend' }, { label: 'TypeScript', type: 'frontend' },
      { label: 'Tailwind CSS', type: 'frontend' }, { label: 'Node.js', type: 'backend' },
      { label: 'NestJS', type: 'backend' }, { label: 'PostgreSQL', type: 'db' },
      { label: 'MongoDB', type: 'db' }, { label: 'AWS', type: 'infra' },
    ],
    caseStudy: {
      tag: 'E-Commerce Platform Migration',
      metrics: [
        { val: '140K+', label: 'Products' },
        { val: '27M+', label: 'Users / Year' },
        { val: '40%', label: 'UAE Population' },
      ],
      overview: [
        'Babystore is a large-scale e-commerce platform serving customers across the UAE with a catalogue of more than 140,000+ products. The existing platform was running on an outdated Magento version, which created performance limitations, scalability issues, and maintenance challenges.',
        'The project focused on modernizing the entire infrastructure while delivering a completely custom-designed shopping experience created in Figma.',
      ],
      challenges: [
        'Slow website performance with large product inventory',
        'Difficult maintenance and outdated architecture',
        'Scalability limitations during high traffic periods',
        'Poor mobile performance and user experience',
        'Complex product management and heavy server load',
        'CDN and image delivery optimization challenges',
      ],
      solutions: [
        'Custom UI/UX design system built in Figma',
        'Frontend redevelopment using React.js and Next.js',
        'Backend APIs built with Node.js and Express.js',
        'MongoDB database optimization for large-scale product handling',
        'AWS cloud infrastructure setup for scalability and reliability',
        'CloudFront CDN integration for faster image and content delivery',
        'S3 storage optimization for large media assets',
        'SEO-friendly architecture and performance optimization',
        'Mobile-first responsive user experience',
      ],
      stack: [
        { label: 'Next.js', type: 'frontend' }, { label: 'TypeScript', type: 'frontend' },
        { label: 'Tailwind CSS', type: 'frontend' }, { label: 'Node.js', type: 'backend' },
        { label: 'NestJS', type: 'backend' }, { label: 'Express.js', type: 'backend' },
        { label: 'MongoDB', type: 'db' }, { label: 'PostgreSQL', type: 'db' },
        { label: 'AWS EC2', type: 'infra' }, { label: 'AWS S3', type: 'infra' },
        { label: 'CloudFront', type: 'infra' }, { label: 'RDS', type: 'infra' },
      ],
      features: [
        { icon: '🎨', label: 'Fully custom modern UI/UX' },
        { icon: '⚡', label: 'High-performance product browsing' },
        { icon: '☁️', label: 'Scalable cloud infrastructure' },
        { icon: '🖼️', label: 'Optimized CDN image delivery' },
        { icon: '🔍', label: 'Fast search & category navigation' },
        { icon: '📱', label: 'Responsive mobile experience' },
        { icon: '📈', label: 'SEO optimization at scale' },
        { icon: '🔒', label: 'Secure & scalable backend' },
      ],
      result: 'The migration significantly improved platform performance, scalability, and user experience. The new architecture delivered faster page loading, smoother navigation, improved mobile responsiveness, and a visually modern shopping interface designed from scratch in Figma.',
    },
  },
  {
    id: 'strokesisters',
    num: '02',
    name: 'Stroke Sisters',
    type: 'UI/UX Designer & Mobile App Developer',
    desc: 'A supportive mobile community platform empowering stroke survivors through connection, recovery resources, and shared experiences.',
    image: '/strokesisters.png',
    featured: false,
    tags: [
      { label: 'React Native', type: 'frontend' },
      { label: 'UI/UX', type: 'frontend' },
      { label: 'Figma', type: 'neutral' },
    ],
    caseStudy: {
      tag: 'Mobile App · Healthcare & Community',
      metrics: [
        { val: '📱', label: 'Mobile First' },
        { val: '♿', label: 'Accessible' },
        { val: 'iOS+', label: 'Android' },
      ],
      overview: [
        'Stroke Sisters is a mobile application created to support stroke survivors by building a digital community focused on recovery, education, and emotional well-being.',
        'The goal was to design an accessible and modern mobile experience that encourages communication, provides helpful rehabilitation resources, and simplifies user interaction for individuals with different accessibility needs.',
      ],
      challenges: [
        'Connect with people facing similar experiences',
        'Access trusted recovery resources',
        'Participate in supportive discussions',
        'Use an interface designed with accessibility in mind',
      ],
      solutions: [
        'Community discussion groups for survivor interaction',
        'Resource library with rehabilitation and health content',
        'Personalised profile and privacy settings',
        'Accessibility-focused UI with high contrast and text controls',
        'Modern onboarding and community engagement screens',
      ],
      stack: [
        { label: 'React Native', type: 'frontend' },
        { label: 'JavaScript', type: 'frontend' },
        { label: 'Figma', type: 'neutral' },
        { label: 'Firebase', type: 'db' },
        { label: 'Node.js', type: 'backend' },
        { label: 'MongoDB', type: 'db' },
        { label: 'REST APIs', type: 'backend' },
      ],
      features: [
        { icon: '💬', label: 'Community Support Groups' },
        { icon: '📚', label: 'Recovery Resource Library' },
        { icon: '👤', label: 'User Profile Management' },
        { icon: '♿', label: 'Accessibility & Privacy Controls' },
        { icon: '📰', label: 'Interactive Community Feed' },
        { icon: '📱', label: 'Mobile-First Responsive Design' },
      ],
      result: 'The final product delivered a modern healthcare community platform with a clean user experience, accessibility-focused design, and scalable mobile architecture.',
    },
  },
  {
    id: 'salemfive',
    num: '03',
    name: 'Salem Five Bank',
    type: 'Front End Developer · 6 Months',
    desc: 'A modern responsive corporate banking website serving personal, business, and commercial banking customers across Massachusetts.',
    image: '/salemfive.png',
    featured: false,
    tags: [
      { label: 'HTML5', type: 'frontend' }, { label: 'CSS3', type: 'frontend' },
      { label: 'JavaScript', type: 'frontend' }, { label: 'jQuery', type: 'frontend' },
      { label: 'Bootstrap', type: 'frontend' }, { label: 'Sass', type: 'frontend' },
    ],
    caseStudy: {
      tag: 'Corporate Banking Website · Massachusetts, USA',
      metrics: [
        { val: '6mo', label: 'Duration' },
        { val: '170+', label: 'Yrs in Banking' },
        { val: '✓', label: 'Enterprise Scale' },
      ],
      overview: [
        'Salem Five Bank is a leading financial institution serving customers across Massachusetts with personal, business, and commercial banking services.',
        'I worked as a Front End Developer on this enterprise-level banking platform for 6 months, contributing to the development of responsive user interfaces, reusable components, and performance-focused frontend experiences.',
      ],
      challenges: [
        'Maintaining responsive layouts across desktop and mobile devices',
        'Ensuring accessibility and cross-browser compatibility',
        'Optimizing frontend performance for enterprise-level traffic',
        'Converting complex UI designs into pixel-perfect interfaces',
        'Managing reusable frontend components for scalability',
      ],
      solutions: [
        'Developed responsive and reusable UI components',
        'Implemented cross-browser compatible layouts',
        'Converted Figma design files into pixel-perfect frontend code',
        'Optimized website performance and page speed',
        'Improved accessibility and overall user experience',
        'Integrated frontend components with backend systems and APIs',
      ],
      stack: [
        { label: 'HTML5', type: 'frontend' }, { label: 'CSS3', type: 'frontend' },
        { label: 'JavaScript', type: 'frontend' }, { label: 'jQuery', type: 'frontend' },
        { label: 'Bootstrap', type: 'frontend' }, { label: 'Sass', type: 'frontend' },
        { label: 'Git & GitHub', type: 'infra' },
      ],
      features: [
        { icon: '🏦', label: 'Responsive Corporate Banking Interface' },
        { icon: '🔐', label: 'Online Banking Login System' },
        { icon: '💼', label: 'Personal & Business Banking Sections' },
        { icon: '⚡', label: 'Performance-Optimized Frontend' },
        { icon: '♿', label: 'Accessibility-Focused User Experience' },
        { icon: '🧩', label: 'Reusable UI Component Architecture' },
      ],
      result: 'The final platform delivered a professional and modern banking experience optimized for usability, responsiveness, and performance. Frontend contributions helped improve interface consistency, accessibility, and overall user engagement.',
    },
  },
  {
    id: 'gspac',
    num: '04',
    name: 'Global South Policy Action Collective',
    type: 'Designer & Developer · Full Project',
    desc: 'A modern institutional platform representing a global policy organisation working with governments, donors, INGOs, and civil society institutions.',
    image: '/gspac.png',
    featured: true,
    link: 'https://www.policycollective.org',
    tags: [
      { label: 'HTML5', type: 'frontend' }, { label: 'CSS3', type: 'frontend' },
      { label: 'JavaScript', type: 'frontend' }, { label: 'jQuery', type: 'frontend' },
      { label: 'Bootstrap', type: 'frontend' }, { label: 'UI/UX Design', type: 'neutral' },
    ],
    caseStudy: {
      tag: 'Institutional Website · Policy & Governance',
      metrics: [
        { val: '🌍', label: 'Global Reach' },
        { val: '100%', label: 'Custom Design' },
        { val: '✓', label: 'Full Delivery' },
      ],
      overview: [
        'Global South Policy Action Collective is an international policy and research-focused organisation that works on governance, institutional development, policy reforms, human rights, and strategic advisory services.',
        'I designed and developed the website from scratch to create a modern digital presence that reflects the organisation\'s mission, expertise, and global impact.',
      ],
      challenges: [
        'Establishing trust and credibility for international stakeholders',
        'Presenting research, publications, and complex policy themes clearly',
        'Maintaining a clean, modern UI across large content-heavy sections',
        'Ensuring full responsiveness across all devices',
        'Balancing institutional professionalism with modern visual storytelling',
      ],
      solutions: [
        'Custom UI/UX design implementation from scratch',
        'Responsive frontend development with Bootstrap',
        'Team, services, and publication showcase sections',
        'Policy theme and approach presentation with structured content hierarchy',
        'Modern animations and smooth scrolling experience',
        'SEO-friendly and performance-optimized frontend architecture',
      ],
      stack: [
        { label: 'HTML5', type: 'frontend' }, { label: 'CSS3', type: 'frontend' },
        { label: 'JavaScript', type: 'frontend' }, { label: 'Bootstrap', type: 'frontend' },
        { label: 'jQuery', type: 'frontend' }, { label: 'UI/UX Design', type: 'neutral' },
      ],
      features: [
        { icon: '🏛️', label: 'Modern institutional website design' },
        { icon: '📱', label: 'Fully responsive layout' },
        { icon: '🗂️', label: 'Interactive service & policy sections' },
        { icon: '👥', label: 'Team & publication showcase' },
        { icon: '📖', label: 'Optimized content readability' },
        { icon: '🎥', label: 'Professional visual storytelling' },
        { icon: '🔍', label: 'SEO-friendly architecture' },
        { icon: '🌐', label: 'Cross-browser compatibility' },
      ],
      result: 'The final product delivered a premium digital presence that effectively represents the organisation\'s mission and global initiatives, creating an engaging and trustworthy platform for international audiences.',
    },
  },
  {
    id: 'seri',
    num: '05',
    name: 'SERI.PK',
    type: 'Designer & Developer · Fashion E-Commerce',
    desc: 'A premium fashion e-commerce platform specialising in elegant hand-painted organza and chiffon dupattas with a luxury feminine aesthetic.',
    image: '/seri.png',
    featured: false,
    link: 'https://seri.pk',
    tags: [
      { label: 'Shopify', type: 'frontend' }, { label: 'HTML5', type: 'frontend' },
      { label: 'CSS3', type: 'frontend' }, { label: 'JavaScript', type: 'frontend' },
      { label: 'jQuery', type: 'frontend' },
    ],
    caseStudy: {
      tag: 'Fashion E-Commerce · Shopify',
      metrics: [
        { val: '👗', label: 'Fashion Brand' },
        { val: '100%', label: 'Custom Design' },
        { val: '📦', label: 'Shopify Built' },
      ],
      overview: [
        'SERI.PK is a premium fashion e-commerce platform specialising in elegant hand-painted organza and chiffon dupattas.',
        'The project focused on creating a modern, feminine, and visually refined online shopping experience that reflects the brand\'s luxury aesthetic while maintaining smooth usability and high performance.',
      ],
      challenges: [
        'Reflecting a premium and elegant brand identity throughout the UI',
        'Delivering a seamless shopping experience across all devices',
        'Showcasing high-quality product imagery without sacrificing performance',
        'Simplifying product browsing and category navigation',
        'Creating a visually soft and feminine interface while keeping shopping journeys conversion-focused',
      ],
      solutions: [
        'Modern and feminine UI/UX implementation tailored to the brand identity',
        'Product collection and category organisation for effortless browsing',
        'Optimized product image presentation for speed and visual quality',
        'Smooth shopping and checkout experience with secure payment integration',
        'Performance and SEO optimisation for organic discoverability',
        'Mobile-first responsive layout for seamless cross-device experience',
      ],
      stack: [
        { label: 'Shopify', type: 'frontend' }, { label: 'HTML5', type: 'frontend' },
        { label: 'CSS3', type: 'frontend' }, { label: 'JavaScript', type: 'frontend' },
        { label: 'jQuery', type: 'frontend' },
      ],
      features: [
        { icon: '👗', label: 'Elegant Fashion-Focused UI' },
        { icon: '📱', label: 'Fully Responsive Layout' },
        { icon: '🛍️', label: 'Product Collection Showcase' },
        { icon: '🛒', label: 'Optimized Shopping Experience' },
        { icon: '🔐', label: 'Secure Checkout Integration' },
        { icon: '⚡', label: 'Performance & SEO Optimization' },
      ],
      result: 'The final platform successfully delivered a premium online shopping experience aligned with the brand\'s luxury fashion identity, combining modern aesthetics with responsive functionality.',
    },
  },
  {
    id: 'gonatural',
    num: '06',
    name: 'GoNatural',
    type: 'Designer & Developer · Beauty E-Commerce',
    desc: 'A modern Shopify beauty and skincare platform focused on natural, organic, and premium-quality products with a clean wellness-focused identity.',
    image: '/gonatural.png',
    featured: false,
    tags: [
      { label: 'Shopify', type: 'frontend' }, { label: 'HTML5', type: 'frontend' },
      { label: 'CSS3', type: 'frontend' }, { label: 'JavaScript', type: 'frontend' },
      { label: 'jQuery', type: 'frontend' },
    ],
    caseStudy: {
      tag: 'Beauty & Skincare E-Commerce · Shopify',
      metrics: [
        { val: '🌿', label: 'Natural Beauty' },
        { val: '100%', label: 'Custom Design' },
        { val: '📦', label: 'Shopify Built' },
      ],
      overview: [
        'GoNatural is an e-commerce platform specialising in skincare, haircare, body care, and beauty products.',
        'Designed and developed on Shopify with a strong focus on modern UI/UX, responsive design, and performance optimisation to create a seamless online shopping experience.',
      ],
      challenges: [
        'Reflecting a clean and natural brand identity throughout the design',
        'Showcasing products elegantly without overwhelming the customer',
        'Delivering a smooth shopping experience across all devices',
        'Maintaining fast loading speed with high-quality product visuals',
        'Improving customer engagement and conversion rates',
      ],
      solutions: [
        'Clean and natural UI/UX design aligned with the brand\'s wellness identity',
        'Organised product collections across all categories',
        'Mobile-first responsive layout for a seamless cross-device experience',
        'Performance and SEO optimisation for fast load times',
        'Secure checkout integration with a smooth cart and payment flow',
      ],
      stack: [
        { label: 'Shopify', type: 'frontend' }, { label: 'HTML5', type: 'frontend' },
        { label: 'CSS3', type: 'frontend' }, { label: 'JavaScript', type: 'frontend' },
        { label: 'jQuery', type: 'frontend' },
      ],
      features: [
        { icon: '🌿', label: 'Modern Beauty E-Commerce UI' },
        { icon: '📱', label: 'Fully Responsive Design' },
        { icon: '🧴', label: 'Product Collection Showcase' },
        { icon: '🛒', label: 'Optimized Shopping Experience' },
        { icon: '🔐', label: 'Secure Checkout Integration' },
        { icon: '⚡', label: 'Performance & SEO Optimization' },
      ],
      result: 'The final platform delivered a clean and engaging online shopping experience that aligns with the brand\'s natural identity and improves customer interaction and overall e-commerce performance.',
    },
  },
  {
    id: 'stockai',
    num: '07',
    name: 'AI-Based Stock Prediction System',
    type: 'Designer & Full Stack Developer · AI / Data',
    desc: 'An AI-powered inventory forecasting platform that analyses historical sales data and demand trends to predict future stock requirements in real time.',
    image: '/stockai.png',
    featured: true,
    tags: [
      { label: 'React.js', type: 'frontend' }, { label: 'Node.js', type: 'backend' },
      { label: 'Express.js', type: 'backend' }, { label: 'Python', type: 'backend' },
      { label: 'TensorFlow', type: 'backend' }, { label: 'MongoDB', type: 'db' },
      { label: 'AWS', type: 'infra' },
    ],
    caseStudy: {
      tag: 'AI / Machine Learning · Inventory Management',
      metrics: [
        { val: '92.4%', label: 'Forecast Accuracy' },
        { val: '34K+', label: 'Stock Units Tracked' },
        { val: '🤖', label: 'AI-Powered' },
      ],
      overview: [
        'The Stock Prediction System is an AI-powered inventory forecasting platform developed for e-commerce businesses to automate stock management and improve inventory planning.',
        'The system analyses historical sales data, stock movement, and product demand trends to predict future inventory requirements in real time — helping businesses reduce stock shortages, avoid overstocking, and make smarter inventory decisions.',
      ],
      challenges: [
        'Product stock shortages causing lost revenue and poor customer experience',
        'Overstocking and warehouse inefficiencies increasing operational costs',
        'Poor inventory visibility across products and categories',
        'Time-consuming manual stock monitoring with no predictive capability',
        'Building an intelligent and scalable system with a modern analytics dashboard',
      ],
      solutions: [
        'Machine learning model using TensorFlow and sales trend analysis to forecast demand',
        'Automated inventory recommendations with risk level classification',
        'Interactive analytics dashboard with real-time charts and stock status distribution',
        'Low-stock forecasting alerts and AI-powered reorder recommendations',
        'Scalable backend with Node.js, Express.js, MongoDB, and AWS cloud infrastructure',
      ],
      stack: [
        { label: 'React.js', type: 'frontend' }, { label: 'Chart.js', type: 'frontend' },
        { label: 'Node.js', type: 'backend' }, { label: 'Express.js', type: 'backend' },
        { label: 'Python', type: 'backend' }, { label: 'TensorFlow', type: 'backend' },
        { label: 'Pandas & NumPy', type: 'backend' }, { label: 'MongoDB', type: 'db' },
        { label: 'REST APIs', type: 'backend' }, { label: 'AWS Cloud', type: 'infra' },
      ],
      features: [
        { icon: '🤖', label: 'AI-Based Stock Demand Prediction' },
        { icon: '📊', label: 'Real-Time Inventory Monitoring' },
        { icon: '🔔', label: 'Low-Stock Forecasting Alerts' },
        { icon: '📈', label: 'Sales Trend Analysis' },
        { icon: '⚡', label: 'Automated Inventory Recommendations' },
        { icon: '🎯', label: 'Product Performance Tracking' },
        { icon: '📋', label: 'Inventory Reports & Insights' },
        { icon: '🌙', label: 'Dark Mode Modern UI' },
      ],
      result: 'The final solution delivered a scalable and intelligent inventory forecasting system with a 92.4% forecast accuracy rate, helping e-commerce businesses improve stock planning and optimize operational efficiency.',
    },
  },
];
