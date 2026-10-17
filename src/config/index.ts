import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sekandar Samadi — Founder, Developer & Product Builder",
  author: "Sekandar Samadi",
  description:
    "Explore the work of Sekandar Samadi, Founder & CEO of Gromond, building digital products, web applications, and AI-powered experiences.",
  lang: "en",
  siteLogo: "/favicon.svg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sekandar Samadi",
    specialty: "Founder & CEO of Gromond · Web Developer & AI Product Builder",
    summary:
      "I'm Sekandar Samadi, a founder and developer focused on building modern digital products, web applications, and AI-powered experiences. Through Gromond and my independent projects, I work at the intersection of technology, product design, and practical innovation. I enjoy turning ideas into functional products, developing intuitive user experiences, and building software that solves real problems.",
    email: "",
  },
  experience: [
    {
      company: "Gromond",
      position: "Founder & CEO",
      startDate: "",
      endDate: "Present",
      summary: [
        "Leading the development and growth of Gromond, a technology-focused venture centered on building digital products and modern software experiences.",
        "Working across product strategy, development, technology decisions, user experience, and the process of turning ideas into usable products.",
        "Focus areas: Product development, technology strategy, web applications, product design and user experience, business and product growth.",
      ],
    },
    {
      company: "Independent Projects",
      position: "Independent Developer & Product Builder",
      startDate: "",
      endDate: "Present",
      summary: [
        "Developing and experimenting with digital products across web development, AI, and software engineering.",
        "Building functional applications, exploring modern development tools, improving product experiences, and turning concepts into working software.",
        "Focus areas: Full-stack web development, AI-powered applications, software prototyping, UI/UX implementation, technical problem-solving.",
      ],
    },
  ],
  projects: [
    {
      name: "Gromond",
      category: "Technology & Digital Products",
      summary:
        "Gromond is my technology venture, where I focus on building digital products and exploring new opportunities across software, web applications, and technology. The goal is to turn ideas into useful, thoughtfully designed digital experiences.",
      linkPreview: "https://gromond.vercel.app/en/gromond-store",
      linkSource: "https://gromond.vercel.app/en/gromond-store",
      image: "/raja.png",
    },
    {
      name: "Shenzino",
      category: "AI & Technology",
      summary:
        "Shenzino is an AI-focused web product that reflects my interest in artificial intelligence and the development of modern digital experiences. Explore the product to learn more about its capabilities and direction.",
      linkPreview: "https://www.shenzino.com/",
      linkSource: "https://www.shenzino.com/",
      image: "/raja.png",
    },
    {
      name: "Gromond Store",
      category: "E-Commerce & Web Development",
      summary:
        "An online store experience within the Gromond ecosystem, focused on presenting products through a modern web experience.",
      linkPreview: "https://gromond.vercel.app/en/gromond-store",
      linkSource: "https://gromond.vercel.app/en/gromond-store",
      image: "/raja.png",
    },
  ],
  about: {
    description: `Hi, I'm Sekandar Samadi, Founder & CEO of Gromond and a technology enthusiast passionate about software development, product innovation, and artificial intelligence.\n\nMy work focuses on turning ideas into practical digital experiences, from web applications and online platforms to AI-powered products. I enjoy exploring new technologies, solving technical challenges, and creating products that combine functionality, performance, and thoughtful design.\n\nI'm particularly interested in the future of AI, modern web technologies, mobile applications, and building products that can scale into meaningful businesses. For me, development is more than writing code. It's about understanding problems, designing solutions, and bringing useful ideas to life.`,
    image: "/raja.png",
  },
  skills: [
    { title: "Web Development", items: ["Modern web application development", "Frontend development", "Responsive user interfaces", "Web product implementation"] },
    { title: "Artificial Intelligence", items: ["AI-powered product development", "AI application concepts", "Integration of AI into digital experiences"] },
    { title: "Product Development", items: ["Turning ideas into working prototypes", "Product planning and implementation", "User experience considerations", "Iterative product improvement"] },
    { title: "Technology & Engineering", items: ["Software architecture fundamentals", "Technical problem-solving", "Development tooling", "Learning and applying emerging technologies"] },
  ],
};
