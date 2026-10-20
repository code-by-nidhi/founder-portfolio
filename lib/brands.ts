// Edit these to change the brand cards and their pages.
// since/category/role/description are placeholder copy until the real content is ready.
// Add `website` to show a "Visit Website" button on that brand's page.
export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  mark: string;
  colors: [string, string];
  badge?: string;
  since: string;
  category: string;
  role: string;
  description: string;
  website?: string;
};

export const BRANDS: Brand[] = [
  {
    slug: "gourav-gupta",
    name: "Gourav Gupta",
    tagline: "The founder, in full",
    mark: "GG",
    colors: ["#e50914", "#7a0610"],
    badge: "MAIN",
    since: "2014",
    category: "Founder · Educator",
    role: "FOUNDER · EDUCATOR · MENTOR",
    description:
      "The story behind every venture — an educator turned entrepreneur building companies that train, place and empower the next generation of tech talent.",
  },
  {
    slug: "techcadd",
    name: "Techcadd",
    tagline: "Tech training & courses",
    mark: "TC",
    colors: ["#3fa9f5", "#1f5fbf"],
    since: "2015",
    category: "Training",
    role: "TECH TRAINING · PLACEMENTS",
    description:
      "Industry-focused training in development, design and marketing, with hands-on projects and placement support for students across India.",
  },
  {
    slug: "xai",
    name: "XAI",
    tagline: "AI products & research",
    mark: "XAI",
    colors: ["#2ecc71", "#138a4a"],
    since: "2023",
    category: "AI",
    role: "AI PRODUCTS · RESEARCH",
    description:
      "Applied AI products and research — turning modern machine learning into practical tools for businesses and learners.",
  },
  {
    slug: "zavi-technologies",
    name: "Zavi Technologies",
    tagline: "Software & services",
    mark: "Z",
    colors: ["#f5a623", "#d4580b"],
    since: "2019",
    category: "Software",
    role: "SOFTWARE · SERVICES",
    description:
      "A software studio shipping web, mobile and cloud products for clients, from first idea to production.",
  },
  {
    slug: "syntax",
    name: "Syntax",
    tagline: "Code, clean & simple",
    mark: "</>",
    colors: ["#9b59ff", "#5124b8"],
    since: "2021",
    category: "Development",
    role: "CODE · COMMUNITY",
    description:
      "A home for developers — clean code, practical tutorials and a community that learns by building.",
  },
  {
    slug: "virtual-academy",
    name: "Virtual Academy",
    tagline: "Learn from anywhere",
    mark: "VA",
    colors: ["#ff5fa2", "#b0246a"],
    since: "2020",
    category: "E-learning",
    role: "ONLINE LEARNING",
    description:
      "Live and recorded courses that bring quality tech education to anyone, anywhere.",
  },
  {
    slug: "iam",
    name: "IAM",
    tagline: "Identity & growth",
    mark: "IAM",
    colors: ["#1fd1c1", "#0e7f8c"],
    since: "2022",
    category: "Growth",
    role: "IDENTITY · GROWTH",
    description:
      "Personal branding and growth programs that help professionals build the identity their careers deserve.",
  },
  {
    slug: "eductech-infosys",
    name: "Eductech Infosys",
    tagline: "Education, powered by tech",
    mark: "EI",
    colors: ["#ffd93b", "#d99a00"],
    since: "2018",
    category: "EdTech",
    role: "EDUCATION · TECHNOLOGY",
    description:
      "Technology solutions for institutes — platforms, tools and services that modernise how education is delivered.",
  },
];

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug);
