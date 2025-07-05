import {
  //flower
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    download,
    shopify,
    hackerrank,
    codealpha,
    aistudymaster,
    booknook,
    landingpage,
    flower,
    lvl,
    threejs,
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full-Stack developer",
      icon: mobile,
    },
    {
      title: "AI/ML Enthusiast ",
      icon: backend,
    },
    {
      title: "Persistent Coder",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
  
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "200+ DSA Problems",
      company_name: "HackerRank, Leetcode, GFGs",
      icon: hackerrank,
      iconBg: "#383E56",
      date: "June 2021 - Feb 2022",
      points: [
        "Certified 5-star coder in Java on HackerRank.",
        "Engineered high-performance DSA solutions using advanced algorithms",
        "Solved multiple Amazon assignments.",
        
      ],
    },
    {
      title: "GEN AI Enthusiast",
      company_name: "Research Paper Publisher",
      icon: download,
      iconBg: "#E6DEDD",
      date: "June 2022 - Dec 2022",
      points: [
        "Published research on Generative AI advancements in neural and prompt engineering.",
        "Built prototypes using GenAI for text summarization, Q&A systems, and grammar correction.",
        "Built ML models for natural language processing (NLP), recommendation systems, and automation.",
        
      ],
    },
    {
      title: "Web UI/UX Developer Intern",
      company_name: "Virtual Internship at CodeAlpha",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2024 - Dec 2024",
      points: [
        "Designed and developed software solutions by studying information needs and system workflows.",
        " Design,develop software sol studying information needs, analyzing systems,work process, following SDLC"
      
      ],
    },
    {
      title: "Developing StudyMaster AI – Revolutionizing Student Learning with GEN AI",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2025- Present",
      points: [
        "Developed StudyMaster AI, a full-stack platform integrating Gen AI and ML models to enhance student learning and engagement.",
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "That move you're afraid to make could be the one that changes everything.",
      
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I'm a Bookstagrammer with 18.5K+ Engaged Readers, sharing my love for literature with a growing community! 📚✨ ",
        name: "Click Here :)",
      link:"https://www.instagram.com/shinedorrie?igsh=MWZoa3Bpcjd2bjJqaA==",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "That dream was planted in your heart for a reason",
      
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Book Recommendation",
      description:
        "An intelligent book recommendation system that leverages user behavior, preferences, and genre patterns. Delivers personalized reading suggestions using machine learning algorithms for enhanced user engagement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: booknook,
      source_code_link: "https://book-recommendation-xulm.vercel.app/",
    },
    {
      name: "The Lasting Latch",
      description:
        "The Lasting Latch is a smart and secure solution designed to preserve what matters most. Combining durability with innovation, it ensures every connection stays strong and reliable.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: landingpage,
      source_code_link: "https://thelastinglatch.vercel.app/",
    },
    {
      name: "GEN AI StudyMaster",
      description:
     "Simplifies academic writing with intelligent guidance and automation. From topic discovery to citations, it accelerates research with AI-powered insights and precision.",
      tags: [
        {
          name: "GEN AI",
          color: "blue-text-gradient",
        },
        {
          name: "Back-end dev",
          color: "green-text-gradient",
        },
        {
          name: "ML models",
          color: "pink-text-gradient",
        },
      ],
      image: aistudymaster,
      source_code_link: "https://paper-pilottt.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };