import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sekandar — Engineer & Digital Product Builder",
  author: "SEKANDAR",
  description: "Sekandar is an engineer focused on AI-powered applications, modern web experiences, and useful digital products.",
  lang: "en",
  siteLogo: "/favicon.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Selected Work", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "mailto:sekandar.dev@gmail.com?subject=Portfolio%20Inquiry" },
  ],
  socialLinks: [],
  socialImage: "https://ik.imagekit.io/g7cevwqvt/file_00000000bd4c8208b65347acec7d180b.png",
  canonicalURL: "https://astro-zen.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "SEKANDAR",
    specialty: "Engineer · Software Developer · Digital Product Builder",
    summary: "I'm an engineer focused on building AI-powered applications, modern web experiences, and useful digital products.",
    email: "sekandar.dev@gmail.com",
  },
  experience: [
    {
      company: "Gromond",
      position: "Founder & CEO",
      startDate: "",
      endDate: "",
      summary: [
        "Leading the development of Gromond, a technology venture focused on digital products and software experiences.",
        "Working across product direction, technical decision-making, development, and the process of turning ideas into practical products.",
      ],
    },
  ],
  projects: [
    {
      name: "Gromond",
      category: "Technology & Digital Products",
      summary: "Gromond is my technology venture, where I focus on developing digital products and exploring opportunities across software and modern web applications.",
    },
    {
      name: "Shenzino",
      category: "Artificial Intelligence",
      summary: "Shenzino is an AI-focused web product that reflects my interest in artificial intelligence and the development of modern digital experiences.",
    },
    {
      name: "Gromond Store",
      category: "E-Commerce",
      summary: "An e-commerce experience within the Gromond ecosystem, focused on presenting products through a clean and accessible online interface.",
    },
  ],
  about: {
    description: "I am an engineer and developer interested in software engineering, digital product development, and artificial intelligence.\n\nMy work focuses on building web applications, exploring new technologies, and developing digital experiences that combine functionality with thoughtful design.\n\nI enjoy solving technical problems, experimenting with new ideas, and taking products from concept to implementation. My approach is centered on continuous learning, practical execution, and creating technology that serves a clear purpose.",
  },
  skills: [
    { title: "Software Development", items: ["Web applications", "Technical problem-solving"] },
    { title: "Digital Products", items: ["Product development", "Product design and user experience"] },
    { title: "Emerging Technologies", items: ["AI-powered products", "Exploring practical applications of new technology"] },
  ],
};
