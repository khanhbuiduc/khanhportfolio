/**
 * Centralized personal data for portfolio.
 * Components Hero, Navigation, Footer, Projects, Achievements, About, Skills read from this file.
 */

// --- Types ---

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  avatarLetter: string;
  logoInitials: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'external' | 'phone' | 'zalo';
}

export interface NavItem {
  label: string;
  href: string;
}

/** Stats displayed on project detail page (optional) */
export interface ProjectStats {
  rating: number;
  reviews: number;
  downloads: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  repoUrl?: string;
  demoUrl?: string;
  /** Long description for detail page; fallback to description if not provided */
  longDescription?: string;
  stats?: ProjectStats;
  features?: string[];
  technologies?: string[];
  /** Main image (list page / hero) */
  image?: string;
  /** Gallery images from public/img/projetct/<project name> — displayed on detail page */
  galleryImages?: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: 'trophy' | 'award' | 'star' | 'code2';
  date: string;
  category: string;
  image?: string;
}

/** ContactInfo contains SocialLink — single source for contact & social media */
export interface ContactInfo {
  message: string;
  socialLinks: SocialLink[];
}

export interface FooterInfo {
  copyrightYear: number;
  tagline: string;
}

/** About section: highlight cards (icon key maps to Lucide in component) */
export interface AboutHighlight {
  icon: 'lightbulb' | 'zap' | 'target' | 'heart';
  title: string;
  description: string;
}

/** About section: stat cards below highlights */
export interface AboutStat {
  label: string;
  value: string;
  description: string;
}

/** Skills: a skill with % proficiency */
export interface SkillItem {
  name: string;
  proficiency: number;
}

/** Skills: category group (icon key maps to Lucide in component) */
export interface SkillCategory {
  id: number;
  category: string;
  icon: 'palette' | 'code2' | 'database' | 'cloud' | 'zap' | 'bookOpen';
  skills: SkillItem[];
}

/** Skills: stat summary below grid */
export interface SkillSummaryStat {
  label: string;
  value: string;
  description: string;
}

// --- Data ---

export const profile: Profile = {
  name: 'Bùi Đức Khánh',
  title: 'Intern Software Engineer',
  subtitle: 'Competitive Programming Learner & Full Stack Developer',
  avatarLetter: 'BK',
  logoInitials: 'BK',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

/** Single source for contact & social — Hero + Footer use contactInfo.socialLinks */
export const contactInfo: ContactInfo = {
  message:
    "I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.",
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/khanhbuiduc', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/khanhbuiduc', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:khanhbuiduc44@gmail.com', icon: 'mail' },
    { label: 'Phone', href: 'tel:0942735162', icon: 'phone' },
    { label: 'Zalo', href: 'https://zalo.me/0942735162', icon: 'zalo' },
  ],
};

/** Helper: get email from mail link in contactInfo */
export function getEmailFromContact(contact: ContactInfo): string {
  const mailLink = contact.socialLinks.find((s) => s.icon === 'mail');
  return mailLink ? mailLink.href.replace(/^mailto:/i, '') : '';
}

/** Helper: display short URL (hostname + pathname) for link */
export function getDisplayUrl(href: string): string {
  try {
    const u = new URL(href);
    return u.hostname + u.pathname;
  } catch {
    return href;
  }
}

export const footerInfo: FooterInfo = {
  copyrightYear: 2026,
  tagline: 'Crafted with ❤️ by Bùi Đức Khánh',
};

// --- About section ---

export const aboutSubtitle =
  'A passionate developer on a journey to create impactful digital solutions';

export const aboutBioParagraphs: string[] = [
  "I'm Bùi Đức Khánh, a final-year Computer Science student at the Academy of Cryptography Techniques, actively seeking an internship opportunity to develop my career in software engineering. I have hands-on experience building full-stack personal projects using Next.js, React, and MongoDB, along with modern development tools and technologies. I possess a solid foundation in algorithms and data structures and have achieved Second Prize and Consolation Prize in the National Student Informatics Olympiad for specialized IT students. I am eager to learn, gain practical industry experience, and contribute effectively to the company’s projects.",
];

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: 'lightbulb',
    title: 'Innovative Thinker',
    description: 'I love solving complex problems with creative and elegant solutions.',
  },
  {
    icon: 'zap',
    title: 'Performance Focused',
    description: 'Building fast, scalable, and efficient applications is my priority.',
  },
  {
    icon: 'target',
    title: 'Goal Oriented',
    description: 'Committed to continuous learning and staying ahead in tech.',
  },
  {
    icon: 'heart',
    title: 'Passionate Developer',
    description: 'I pour my heart into every project and love mentoring others.',
  },
];

export const aboutStats: AboutStat[] = [
  { label: 'Experience', value: 'final-year', description: 'In Academy of Cryptography Techniques' },
  { label: 'Problem Solving', value: '400+', description: 'Successfully completed' },
  { label: 'GPA', value: '3.2', description: 'student' },
];

export const aboutCtaText =
  'Want to know more about my journey or collaborate on exciting projects?';

export const aboutCtaButtonText = "Let's Connect";

// --- Skills section ---

export const skillsSubtitle =
  'Technical proficiencies across various domains and technologies';

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: 'Frontend',
    icon: 'palette',
    skills: [
      { name: 'React', proficiency: 70 },
      { name: 'Next.js', proficiency: 70 },
      { name: 'TypeScript', proficiency: 65 },
      { name: 'Tailwind CSS', proficiency: 70 },
      { name: 'Bootstrap', proficiency: 60 },
    ],
  },
  {
    id: 2,
    category: 'Backend',
    icon: 'code2',
    skills: [
      { name: 'C#', proficiency: 75 },
      { name: 'ASP.NET Core MVC', proficiency: 75 },
      { name: 'Entity Framework Core', proficiency: 70 },
      { name: 'REST APIs', proficiency: 65 },
    ],
  },
  {
    id: 3,
    category: 'Mobile',
    icon: 'zap',
    skills: [
      { name: 'Flutter', proficiency: 60 },
      { name: 'Dart', proficiency: 60 },
    ],
  },
  {
    id: 4,
    category: 'Database & Cloud',
    icon: 'database',
    skills: [
      { name: 'SQL Server', proficiency: 65 },
      { name: 'Firebase', proficiency: 55 },
      { name: 'Azure', proficiency: 50 },
    ],
  },
  {
    id: 5,
    category: 'Programming & Algorithms',
    icon: 'bookOpen',
    skills: [
      { name: 'C++', proficiency: 80 },
      { name: 'Python', proficiency: 60 },
      { name: 'Algorithms & Data Structures', proficiency: 80 },
    ],
  },
  {
    id: 6,
    category: 'Tools & Others',
    icon: 'cloud',
    skills: [
      { name: 'Git & GitHub', proficiency: 70 },
      { name: 'Windows Forms', proficiency: 55 },
      { name: 'Stripe Integration', proficiency: 50 },
    ],
  },
];

export const skillSummaryStats: SkillSummaryStat[] = [
  {
    label: '6',
    value: 'Tech Categories',
    description: 'Frontend, Backend, Mobile, Database, Algorithms, Tools',
  },
  {
    label: '18+',
    value: 'Technologies',
    description: 'Skills from real projects and competitions',
  },
  {
    label: '2+',
    value: 'Years Learning',
    description: 'Continuous learning and skill development',
  },
];

// --- Projects ---

export const projects: Project[] = [
  {
    id: 1,
    title: 'BulkyWeb',
    description:
      'E-commerce web application built with ASP.NET Core MVC (.NET 8)',
    tags: ['ASP.NET Core MVC', '.NET 8', 'Entity Framework Core', 'Stripe', 'Azure'],
    category: 'Web',
    repoUrl: 'https://github.com/khanhbuiduc/BulkyWeb',
    features: [
      'Product/Category management: CRUD, seed Category & Product data (multi-tier pricing: ListPrice/Price50/Price100)',
      'Search & suggestions: search + autocomplete as user types (jQuery UI)',
      'Cart & orders: add products to cart, create OrderHeader/OrderDetail and handle order lifecycle',
      'Stripe payment: configure StripeSettings/SecretKey and integrate payment flow',
      'Authentication & authorization (ASP.NET Identity): register/login, external login, 2FA, profile management, roles, company selection on registration',
      'Admin panel: initialize DB, create roles & admin user, apply migrations',
      'Product image management: upload/URL images, repository for ProductImage',
      'Email: implement IEmailSender and register DI to send notification/verification emails',
      'Frontend: DataTables, Toastr, SweetAlert, TinyMCE, jQuery UI (tables, notifications, editor, confirm popup,...)',
      'Architecture: Repository Pattern + Unit of Work, EF Core, IdentityDbContext',
    ],
    technologies: [
      'ASP.NET Core MVC (.NET 8)',
      'Entity Framework Core',
      'Identity Framework',
      'Razor Pages',
      'Bootstrap v5',
      'Stripe Payment',
      'Azure',
    ],
    image: '/project-1.jpg',
    galleryImages: [
      '/img/projetct/Bulkyweb/home.png',
      '/img/projetct/Bulkyweb/0.books.png',
      '/img/projetct/Bulkyweb/0.find book.png',
      '/img/projetct/Bulkyweb/1. login.png',
      '/img/projetct/Bulkyweb/1. register.png',
      '/img/projetct/Bulkyweb/2. manager account.png',
      '/img/projetct/Bulkyweb/3. manager book.png',
      '/img/projetct/Bulkyweb/3. manager book edit.png',
      '/img/projetct/Bulkyweb/4.manager category.png',
      '/img/projetct/Bulkyweb/5. manager company.png',
      '/img/projetct/Bulkyweb/6.managerUser.png',
      '/img/projetct/Bulkyweb/7.importData.png',
      '/img/projetct/Bulkyweb/7. import_product_xem_trc.png',
      '/img/projetct/Bulkyweb/8.order_manager.png',
      '/img/projetct/Bulkyweb/8.manager_order_detail.png',
      '/img/projetct/Bulkyweb/9.stripe.png',
    ],
  },
  {
    id: 2,
    title: 'AESComm',
    description:
      'Windows Forms application for sending/receiving files over LAN with AES encryption',
    tags: ['C# .NET 8', 'Windows Forms', 'TCP', 'AES Encryption'],
    category: 'Desktop',
    repoUrl: 'https://github.com/khanhbuiduc/AESCOMM',
    features: [
      'Send/receive files over LAN with AES encryption (128/192/256)',
      'Scan network for devices and display list',
      'Generate random file names and manually decrypt files',
    ],
    technologies: [
      'C# .NET 8.0',
      'Windows Forms',
      'TCP Networking',
      'AES Encryption',
      'JSON',
    ],
    image: '/project-2.jpg',
    galleryImages: [
      '/img/projetct/AESComm/Listen.png',
      '/img/projetct/AESComm/send.png',
      '/img/projetct/AESComm/decript.png',
    ],
  },
  {
    id: 3,
    title: 'Taskify',
    description:
      'Full-stack task management application with Next.js and ASP.NET Core',
    tags: ['Next.js', 'React', 'TypeScript', 'ASP.NET Core', 'Zustand', 'Tailwind CSS'],
    category: 'Web',
    repoUrl: 'https://github.com/khanhbuiduc/Taskify',
    features: [
      'CRUD tasks with priority, status, dueDate and dashboard kanban/list view',
      'Role-based Authentication/Authorization and Repository + Unit of Work pattern',
      'Modal, dialog, toaster notifications and reorder tasks',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'ASP.NET Core',
      'Entity Framework Core',
      'Zustand',
      'Tailwind CSS',
    ],
    image: '/project-3.jpg',
    galleryImages: [
      '/img/projetct/Taskify/dashboard.png',
      '/img/projetct/Taskify/list.png',
      '/img/projetct/Taskify/table.png',
      '/img/projetct/Taskify/calender.png',
      '/img/projetct/Taskify/dark thêm.png',
    ],
  },
  {
    id: 4,
    title: 'Smart Garden',
    description:
      'Flutter application for smart garden control via Bluetooth and Firebase',
    tags: ['Flutter', 'Dart', 'Bluetooth', 'Firebase', 'fl_chart'],
    category: 'Mobile',
    repoUrl: 'https://github.com/khanhbuiduc/smart_gardent',
    features: [
      'Bluetooth HC-05 connection, display sensor data (temperature, humidity, distance) and control pump/buzzer',
      'Auto threshold settings and data analytics with 24h/weekly charts from Firebase',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Bluetooth',
      'Firebase',
      'Material Design',
      'fl_chart',
    ],
    image: '/project-4.jpg',
    galleryImages: [
      '/img/projetct/SmartGarden/1.jpg',
      '/img/projetct/SmartGarden/2.jpg',
      '/img/projetct/SmartGarden/3.jpg',
      '/img/projetct/SmartGarden/4.jpg',
      '/img/projetct/SmartGarden/5.jpg',
      '/img/projetct/SmartGarden/6.jpg',
      '/img/projetct/SmartGarden/7.jpg',
      '/img/projetct/SmartGarden/8.jpg',
      '/img/projetct/SmartGarden/9.jpg',
    ],
  },
  {
    id: 5,
    title: 'OlimpicLearning',
    description:
      'Competitive Programming learning roadmap with algorithms and techniques from basic to advanced',
    tags: ['C++', 'Python', 'Algorithms', 'Data Structures'],
    category: 'Algorithm',
    repoUrl: 'https://github.com/khanhbuiduc/ICPC',
    features: [
      'Basic STL: vector, stack, queue, heap, set/map, bitset',
      'Basic techniques: Two pointers, Binary Search, Greedy, Recursion/Backtracking, Divide and Conquer',
      'Dynamic Programming: basic/advanced DP, variable transformation, bitmask, digit DP, matrix exponentiation, tree DP',
      'Graphs: DFS/BFS, Topo sort, Articulation points/bridges, Connected components, Dijkstra, DSU, Kruskal',
      'Mathematics: Combinatorics, Probability, Expected value, Game theory',
      'Advanced data structures: Segment Tree, Fenwick Tree, Trie, Sparse Table, LCA',
      'Advanced techniques: Bit manipulation, Sqrt decomposition, Sweep Line, Randomization, Meet in the middle',
    ],
    technologies: ['C++', 'Python', 'Algorithms', 'Data Structures'],
    image: '/project-5.jpg',
    galleryImages: [
      '/img/projetct/OlimpicLearning/1.jpg',
      '/img/projetct/OlimpicLearning/3.jpg',
      '/img/projetct/OlimpicLearning/4.jpg',
      '/img/projetct/OlimpicLearning/5.1.jpg',
      '/img/projetct/OlimpicLearning/5.2.jpg',
      '/img/projetct/OlimpicLearning/5.3.jpg',
      '/img/projetct/OlimpicLearning/5.4.jpg',
      '/img/projetct/OlimpicLearning/6.jpg',
      '/img/projetct/OlimpicLearning/7.jpg',
      '/img/projetct/OlimpicLearning/8.jpg',
      '/img/projetct/OlimpicLearning/9.jpg',
      '/img/projetct/OlimpicLearning/10.jpg',
      '/img/projetct/OlimpicLearning/11.jpg',
      '/img/projetct/OlimpicLearning/12.jpg',
      '/img/projetct/OlimpicLearning/13.jpg',
    ],
  },
];

export const projectCategories = ['All', 'Web', 'Desktop', 'Mobile', 'Algorithm'];

// --- Achievements section ---

/** Award photo (featured image, displayed before timeline milestones) */
export const achievementsAwardImage = '/img/nhan-giai-2025.jpg';

export const achievementsAwardCaption =
  'OLP\'25 Award Ceremony - IT Specialized Track, Ho Chi Minh City 12/12/2025';

/** Subtitle for Achievements & Milestones section */
export const achievementsSectionSubtitle = 'Awards and certifications';

/** Title for milestones block (timeline) */
export const achievementsMilestonesTitle = 'Awards';

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Second Prize - KMA Safe Programming Skills 2025',
    description: 'Achieved Second Prize in Safe Programming Skills competition for KMA students 2025',
    icon: 'award',
    date: '2025',
    category: 'KMA',
    image: '/img/kỹ thuật lập trình sam sung.jpg',
  },
  {
    id: 2,
    title: 'Consolation Prize - National Student Informatics Olympiad 2024',
    description:
      'Achieved Consolation Prize in the National Student Informatics Olympiad for IT specialized students 2024',
    icon: 'trophy',
    date: '2024',
    category: 'Informatics Olympiad',
    image: '/img/giay-khen-2024.jpg',
  },
  {
    id: 3,
    title: 'Second Prize - National Student Informatics Olympiad 2025',
    description:
      'Achieved Second Prize in the National Student Informatics Olympiad for IT specialized students 2025',
    icon: 'trophy',
    date: '2025',
    category: 'Informatics Olympiad',
    image: '/img/giay-khen-2025.jpg',
  },
];

export const achievementStats = [
  { label: '2', value: 'National Awards' },
  { label: '2', value: 'Informatics Olympiad' },
  { label: '1', value: 'KMA' },
  { label: '2024 2025', value: 'Award Years' },
];
