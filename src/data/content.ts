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
    "Computer Science & Data Science student building performance-focused systems software",
  metaDescription:
    "Aidan Levy is a Computer Science (AI focus) and Data Science student at Salisbury University focused on systems programming, high-performance computing, and digital signal processing.",
  // 2–3 sentence hero introduction.
  intro:
    "I'm a Computer Science (AI focus) and Data Science student at Salisbury University, working mostly in C and Python on software where performance and correctness both matter. My work centers on parallel computing with OpenMP and MPI, digital signal processing, and machine learning tooling. I care about low-level detail, clear engineering tradeoffs, and building things that hold up under real constraints.",
  email: "aidanjlevy@gmail.com",
  github: "https://github.com/AidanLevy05",
  githubHandle: "AidanLevy05",
  linkedin: "https://www.linkedin.com/in/aidan-levy/",
  linkedinHandle: "aidan-levy",
  resume: "/AidanLevyResume.pdf",
  location: "Maryland, USA",
} as const;

export const heroFocus: string[] = [
  "Systems programming in C on Linux",
  "Parallel computing with OpenMP and MPI",
  "Digital signal processing and FFT-based analysis",
  "Machine learning with PyTorch and scikit-learn",
];

// About prose — kept factual and understated.
export const about: string[] = [
  "I study Computer Science with an AI focus alongside Data Science at Salisbury University, in the Clarke Honors College. Most of what I enjoy sits close to the machine: writing C on Linux, reasoning about memory and data movement, and understanding why one implementation is faster or more reliable than another.",
  "A lot of my recent work is in high-performance and parallel computing — distributing linear algebra across processes with MPI and OpenMP — and in digital signal processing, where I build pipelines that make filtering and frequency-domain behavior observable rather than opaque. I also work across the data and machine learning stack with PyTorch, scikit-learn, and TensorFlow.",
  "Outside of coursework I teach and lead. I help students debug and reason through programming fundamentals as a lab assistant, and I founded and run a jiu-jitsu training business. Both come from the same place: a preference for consistent, disciplined work over shortcuts, and for explaining things clearly.",
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
    org: "ASRC Federal (TRMCi)",
    role: "Incoming Software Engineering Intern",
    period: "Summer 2026",
    note: "Upcoming",
    points: [
      "Joining as a software engineering intern in a secure defense-focused environment.",
    ],
  },
  {
    org: "Salisbury University",
    role: "Network Engineer Intern",
    period: "2024 — Present",
    points: [
      "Provide ticket-based support: troubleshooting networking issues, patching cables, and identifying the root cause of connection failures.",
      "Handle maintenance, upgrades, and provisioning for 200+ Aruba-635 wireless access points across campus.",
    ],
  },
  {
    org: "Salisbury University",
    role: "Computer Lab Assistant",
    period: "2024 — Present",
    points: [
      "Assisted 100+ students in COSC-220 and COSC-117 with core programming concepts and debugging their code during lab sessions.",
      "Provided guidance on logic, syntax, and problem-solving strategy to reinforce course material during labs and weekly office hours.",
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
    name: "OpenMPI Linear Algebra",
    type: "High-Performance Computing",
    github: "https://github.com/AidanLevy05/Matrix",
    summary:
      "Heavily optimized linear algebra in C using OpenMPI for parallel matrix computation across a distributed-memory model.",
    tech: ["C", "OpenMPI", "OpenMP", "HPC"],
    points: [
      "Implemented parallel matrix multiplication, RREF, and LU decomposition, distributing work across processes to maximize performance.",
      "Explored distributed-memory models and tuning to keep computation dense and coordination overhead low.",
      "Targeted the high-efficiency algorithms used in linear programming and operations research.",
    ],
  },
  {
    name: "SalisburyDSP",
    type: "Digital Signal Processing",
    github: "https://github.com/AidanLevy05/salisburyuniversitydsp",
    summary:
      "A research project that implements audio filters in Python and visualizes frequency-domain transformations through a custom web frontend.",
    tech: ["Python", "DSP", "Flask", "D3.js"],
    points: [
      "Implemented audio filters in Python using DSP libraries, with frequency-domain transformations visualized via a custom JavaScript and D3.js frontend.",
      "Built a web interface that lets users input YouTube links, apply audio effects, and download the processed audio.",
      "Handled backend processing and the request pipeline with Flask.",
    ],
  },
  {
    name: "ByteScatter",
    type: "Security / Systems",
    github: "https://github.com/AidanLevy05/ByteScatter",
    summary:
      "A secure multi-cloud file distribution system built for fault tolerance and zero-knowledge data protection.",
    tech: ["Python", "AES-256-GCM", "ChaCha20-Poly1305", "Cryptography"],
    points: [
      "Designed multi-cloud distribution for fault tolerance and zero-knowledge protection of stored data.",
      "Encrypted payloads with AES-256-GCM and ChaCha20-Poly1305, backed by a local metadata database for retrieval.",
      "Won 2nd place in Cybersecurity at the HenHacks hackathon.",
    ],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C++", "C", "Java", "JavaScript", "Bash", "HTML", "CSS"],
  },
  { label: "Parallel / HPC", items: ["OpenMPI", "OpenMP"] },
  { label: "ML / Data", items: ["PyTorch", "scikit-learn", "TensorFlow", "NumPy"] },
  { label: "Web", items: ["Flask", "React"] },
  { label: "Tools", items: ["Git"] },
];

export interface LeadershipEntry {
  org: string;
  role: string;
  period: string;
  description?: string;
}

export const leadership: LeadershipEntry[] = [
  {
    org: "Padawan Jiu Jitsu",
    role: "Founder & Instructor",
    period: "2023 — Present",
    description:
      "Founded and operate a Brazilian jiu-jitsu training business serving 50+ clients — handling marketing, operations, client relations, and finances, and building an online presence to expand outreach.",
  },
  {
    org: "Salisbury University Brazilian Jiu-Jitsu Club",
    role: "President & Founder",
    period: "2023 — Present",
    description:
      "Founded and lead the university's Brazilian jiu-jitsu club.",
  },
  {
    org: "Salisbury University",
    role: "Cybersecurity Club · Student Researcher",
    period: "Present",
    description:
      "Active in the Cybersecurity Club and involved in student research.",
  },
  {
    org: "Brazilian Jiu-Jitsu",
    role: "Brown Belt",
    period: "2015 — Present",
    description:
      "Ten-plus years of consistent training — a long-running exercise in discipline and incremental progress.",
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
  program: "B.S. in Computer Science (AI Focus) & Data Science",
  detail: "Clarke Honors College",
  period: "2023 — Present",
  gpa: "3.95",
  coursework: [
    "Advanced Data Structures and Algorithms",
    "High Performance Computing",
    "Linear Algebra",
    "Introduction to Convolutional Neural Networks",
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
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
