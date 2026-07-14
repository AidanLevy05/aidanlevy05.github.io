/**
 * Single source of truth for all site content.
 *
 * Everything here is derived from Aidan Levy's resume. Do not invent numbers,
 * metrics, awards, responsibilities, technologies, or accomplishments — the
 * resume is authoritative. Copy is rewritten into prose but every factual
 * claim is preserved.
 */

export const siteUrl = "https://aidanlevy05.github.io";

export const person = {
  name: "Aidan Levy",
  headline:
    "Computer Science & Data Science student working on DoD test & evaluation, HPC, and systems software",
  metaDescription:
    "Aidan Levy is an Active Secret–cleared Computer Science (AI track) and Data Science student at Salisbury University with hands-on DoD test & evaluation experience and a focus on high-performance computing, Linux, and ROS 2 systems.",
  // 2–3 sentence hero introduction.
  intro:
    "I'm a Computer Science (AI track) and Data Science student at Salisbury University, currently a software engineering intern with ASRC Federal on the DoD's GhostWriter test-and-evaluation effort. My work spans data-fusion pipelines and applied AI, high-performance and systems programming in C on Linux, and ROS 2 robotics. I care about low-level detail, clear engineering tradeoffs, and building things that hold up under real constraints.",
  clearance: ["Active Secret Clearance", "U.S. Citizen"],
  email: "aidanjlevy@gmail.com",
  github: "https://github.com/AidanLevy05",
  githubHandle: "AidanLevy05",
  linkedin: "https://www.linkedin.com/in/aidan-levy/",
  linkedinHandle: "aidan-levy",
  resume: "/AidanLevyResume.pdf",
  location: "Salisbury, MD",
} as const;

export const heroFocus: string[] = [
  "DoD test & evaluation and data-fusion pipelines",
  "High-performance computing with OpenMPI and OpenMP",
  "Systems programming in C and ROS 2 on Linux",
  "Machine learning with PyTorch and scikit-learn",
];

// About prose — kept factual and understated.
export const about: string[] = [
  "I study Computer Science with an AI track alongside Data Science, with a minor in Mathematics, at Salisbury University in the Clarke Honors College. Most of what I enjoy sits close to the machine: writing C on Linux, reasoning about memory and data movement, and understanding why one implementation is faster or more reliable than another.",
  "Right now I'm a software engineering intern with ASRC Federal (TRMCi) on GhostWriter, a DoD test-and-evaluation report-generation effort originating at Dugway Proving Ground, where I build Python data-fusion pipelines and applied-AI workflows. Alongside that I work in high-performance computing — distributing linear algebra across processes with MPI and OpenMP — in ROS 2 robotics on the Unitree G1, and across the data and machine learning stack with PyTorch, scikit-learn, and TensorFlow.",
  "Outside of the technical work I teach and lead. I help students debug and reason through their code as a lab assistant, and I founded and run a children's jiu-jitsu program and the university's jiu-jitsu club. Both come from the same place: a preference for consistent, disciplined work over shortcuts, and for explaining things clearly.",
];

export interface Job {
  org: string;
  role: string;
  period: string;
  points: string[];
  note?: string;
}

export const experience: Job[] = [
  {
    org: "ASRC Federal (TRMCi), CDAO",
    role: "Software Engineering Intern",
    period: "June 2026 — Present",
    note: "Current",
    points: [
      "Build Python data-fusion pipelines for GhostWriter, a Pentagon-level DoD test-and-evaluation report-generation initiative originating at Dugway Proving Ground — ingesting 1,000+ technical reports, converting PDFs to text, and combining extracted text with CSV/PDF metadata for taxonomy discovery.",
      "Develop ATEC-facing prompt strategies and improvement proposals for GhostWriter, comparing a $50K-per-document, four-week baseline against a roughly $10, 18-minute AI-assisted generation cycle — a projected up to $115M annually across ATEC's 2,300-test workload.",
      "Automated a mentor–mentee matching workflow that reactivated a program dormant for seven years, eliminating an estimated 1,200+ annual labor hours (~$62K/yr) at Dugway, with projected Army-wide savings of up to $11.5M annually if scaled.",
    ],
  },
  {
    org: "Real Robotics Lab",
    role: "Unitree G1 Robotics Researcher",
    period: "January 2026 — May 2026",
    points: [
      "Troubleshot ROS 2 / DDS telemetry loss between the Unitree G1 and its Linux control host, isolating the issue to network/firewall restrictions and coordinating with IT to restore DDS transport and discovery traffic.",
      "Developed Linux-based ROS 2 joint-control software for Unitree G1 locomotion and state transitions, coordinating with vision and grasping teams during cross-functional integration meetings.",
    ],
  },
  {
    org: "Salisbury University IT",
    role: "Network Engineer Intern",
    period: "June 2024 — May 2026",
    points: [
      "Deployed, configured, and validated 500+ Aruba 635 access points across 15+ buildings in a campus-wide infrastructure upgrade serving 7,000+ users.",
      "Diagnosed and resolved Layer 1–2 connectivity issues across the campus Aruba network, tracing faults through switchports, VLAN configuration, and physical infrastructure.",
      "Restored ~100 Windows endpoints during the 2024 CrowdStrike outage using standardized USB-based recovery procedures, supporting campus-wide IT service restoration.",
    ],
  },
  {
    org: "Salisbury University",
    role: "Computer Lab Assistant",
    period: "August 2024 — May 2026",
    points: [
      "Supported 50+ students weekly across three CS courses — debugging code, resolving implementation errors, and grading assignments on correctness, style, and problem-solving approach.",
    ],
  },
];

export interface Project {
  name: string;
  type: string;
  summary: string;
  tech: string[];
  points: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Distributed Linear Algebra Engine",
    type: "High-Performance Computing",
    github: "https://github.com/AidanLevy05/Matrix",
    summary:
      "A distributed linear algebra engine in C, parallelized with OpenMPI across a distributed-memory model.",
    tech: ["C", "OpenMPI", "HPC"],
    points: [
      "Accelerated Gaussian elimination to RREF by 14.7× across 8 MPI processes, using row-cyclic distribution with MPI_Bcast pivot propagation and cache-blocked local elimination.",
      "Profiled communication-versus-compute tradeoffs across matrix sizes and process counts, isolating pivot broadcast as the dominant scaling bottleneck and mapping speedup dropoff points.",
    ],
  },
  {
    name: "ByteScatter",
    type: "Security / Systems",
    github: "https://github.com/AidanLevy05/ByteScatter",
    summary:
      "A secure distributed file-storage system built for fault tolerance and zero-knowledge data protection.",
    tech: ["Python", "AES-256-GCM", "ChaCha20-Poly1305"],
    points: [
      "Built a secure distributed file-storage prototype in Python with AES-256-GCM authenticated encryption, per-fragment integrity checks, and configurable endpoint-based chunking.",
      "Won 2nd place in the Cybersecurity track at HenHacks 2025.",
    ],
  },
  {
    name: "ATLAS",
    type: "Full-Stack Web",
    summary:
      "A full-stack job-application tracker for managing a 100+ application pipeline end to end.",
    tech: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
    points: [
      "Shipped a typed FastAPI/SQLAlchemy REST API backed by PostgreSQL 16 with Alembic migrations, and a React/TypeScript frontend.",
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages & Tools",
    items: [
      "C",
      "C++",
      "Python",
      "Bash",
      "SQL",
      "TypeScript",
      "Java",
      "Git",
      "Docker",
      "Azure",
      "GCC",
      "Make",
      "gdb",
      "valgrind",
    ],
  },
  {
    label: "Systems, HPC & Networking",
    items: [
      "Linux",
      "POSIX",
      "Systems programming",
      "Concurrency",
      "IPC",
      "Shared memory",
      "Memory management",
      "OpenMPI / OpenMP",
      "Multithreading",
      "Performance profiling",
      "Benchmarking",
      "ROS 2",
    ],
  },
  {
    label: "Web & Full-Stack",
    items: [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy 2.0",
      "Alembic",
      "PostgreSQL",
      "React",
      "Vite",
    ],
  },
  {
    label: "Testing & Defense",
    items: [
      "DoD T&E",
      "Verification & validation (V&V)",
      "Test automation",
      "Requirements tracing",
      "Test planning & execution",
      "Test-data classification",
      "Expected-vs-observed analysis",
      "Root-cause analysis",
    ],
  },
  {
    label: "Security",
    items: ["AES-256-GCM", "ChaCha20-Poly1305", "RSA", "HKDF"],
  },
  {
    label: "AI & Data",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas"],
  },
];

// Research entries reuse the Job shape (role = title, org = context/advisor).
export const research: Job[] = [
  {
    role: "Undergraduate Honors Thesis",
    org: "Clarke Honors College",
    period: "August 2025 — December 2026",
    points: [
      "Designed an IRB-pending empirical study examining how conversational-AI use relates to college-aged students' wellbeing, perceived dependence, and emotional reliance.",
      "Conducted the literature synthesis, developed the survey instrument, and defined study methodology, with statistical analysis planned in Python/Pandas for human-subjects data.",
    ],
  },
  {
    role: "Digital Signal Processing Research",
    org: "Advised by Dr. Cone",
    period: "August 2024 — May 2025",
    points: [
      "Implemented six audio effects in NumPy/SciPy — Butterworth shelving filters, resonant peaking EQ, compression, multi-tap reverb, and LFO-modulated chorus over user-defined time windows.",
      "Built a 44.1 kHz DSP pipeline with ffmpeg conversion and yt-dlp audio ingest, and reproducible signal-processing workflows; presented findings at the Salisbury University Student Research Conference (SUSRC).",
    ],
  },
  {
    role: "AI Policy Research",
    org: "HONR 111 Research Seminar",
    period: "August 2023 — December 2023",
    points: [
      "Reviewed U.S. policy responses to AI mental-health chatbots — regulatory gaps, privacy protections, and clinical-safety concerns — and presented oversight recommendations at SUSRC.",
    ],
  },
];

export interface Award {
  label: string;
  href?: string;
}

export const awards: Award[] = [
  {
    label: "Richard A. Henson STEM Scholarship — merit award, Salisbury University",
    href: "https://www.salisbury.edu/academic-offices/science-and-technology/about/henson-scholars.aspx",
  },
  {
    label:
      "Bellavance Honors Scholarship — Clarke Honors College merit award (renewable)",
    href: "https://www.salisbury.edu/academic-offices/honors/for-prospective-students.aspx",
  },
  {
    label:
      "Upsilon Pi Epsilon (Computer Science) & Pi Mu Epsilon (Mathematics) Honor Societies",
  },
  { label: "Dean's List — all semesters" },
  { label: "HenHacks 2025 — 2nd Place, Cybersecurity Track (ByteScatter)" },
  {
    label:
      "Brazilian Jiu-Jitsu Brown Belt · 2022 IBJJF Indianapolis International Open champion",
    href: "https://www.coastalpoint.com/lifestyle/arts_entertainment/ocean-view-s-aidan-levy-felt-great-to-win-brazilian-jui-jitsu-title/article_e8ede34e-c737-11ec-b97b-fb5c1e22a8f6.html",
  },
];

export interface LeadershipEntry {
  org: string;
  role: string;
  period: string;
  description?: string;
  href?: string;
}

export const leadership: LeadershipEntry[] = [
  {
    org: "Padawan Jiu-Jitsu",
    role: "Founder & Head Instructor",
    period: "January 2023 — Present",
    href: "https://www.padawanjj.com",
    description:
      "Founded and run a children's Brazilian jiu-jitsu program — teaching three times weekly to 40+ current students and coaching 50+ through belt and stripe promotions — and manage scheduling, enrollment, curriculum, and the program website end to end.",
  },
  {
    org: "SU Brazilian Jiu-Jitsu Club",
    role: "Founder & President",
    period: "October 2023 — Present",
    description:
      "Founded and led Salisbury University's first Brazilian jiu-jitsu club, securing official university recognition and growing membership to 30 students across all experience levels.",
  },
  {
    org: "GullHacks — Salisbury University's Hackathon",
    role: "Web Developer",
    period: "January 2026 — Present",
    description:
      "Built and styled the website for the university's first hackathon, collaborating with the design team on layout and visual identity.",
  },
];

export interface Education {
  school: string;
  program: string;
  detail: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export const education: Education = {
  school: "Salisbury University",
  program: "B.S. Computer Science (AI Track) & B.S. Data Science, Minor in Mathematics",
  detail: "Clarke Honors College",
  period: "August 2023 — May 2027",
  gpa: "3.91",
  coursework: [
    "High Performance Computing",
    "Systems Software",
    "Advanced Data Structures & Algorithms",
    "Cryptography",
    "Database Design & Implementation",
    "Artificial Intelligence",
    "Linear Algebra",
  ],
};

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
