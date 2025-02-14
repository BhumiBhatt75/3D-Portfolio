import {
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
    
    booknook,
    landingpage,
    flower,
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
      title: "Java coder",
      company_name: "HackerRank",
      icon: hackerrank,
      iconBg: "#383E56",
      date: "June 2021 - Feb 2022",
      points: [
        "Achieved a 5⭐ rating on HackerRank, demonstrating strong proficiency in competitive programming and problem-solving.",
        "Developed a Snake and Ladder game using HTML, JavaScript, C++ and MongoDB showcasing my programming skills.",
        "Solved 150+ LeetCode DSA problems, refining algorithms and problem-solving skills.",
        
      ],
    },
    {
      title: "AI/ML Enthusiast",
      company_name: "Summer Internship",
      icon: download,
      iconBg: "#E6DEDD",
      date: "June 2022 - Dec 2022",
      points: [
        "Developed and integrated AI-driven solutions including machine learning models, chatbots, and text summarization into full-stack applications.",
        "Implemented advanced filtering algorithms to enhance data processing and prediction accuracy for AI/ML applications.",
        "Built ML models for natural language processing (NLP), recommendation systems, and automation.",
        
      ],
    },
    {
      title: "Frontend Developer Intern",
      company_name: "CodeAlpha",
      icon: meta,
      iconBg: "#383E56",
      date: "Aug 2024 - Dec 2024",
      points: [
        "Created a sleek and responsive landing page for TheLastingLatch company using REACT",
        "Developing and maintaining web applications using React.js and other related technologies.",
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
      
      ],
    },
    {
      title: "Developing SmartExam AI – Revolutionizing Student Learning with AI & ML",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2025- Present",
      points: [
        "Currently developing SmartExam AI, a full-stack platform integrating AI/ML models to enhance student learning and engagement.",
        "Implementing intelligent tutoring systems, interactive learning tools, and personalized recommendations for a seamless study experience.",
        "Building AI-powered assessment features, including automated grading, question generation, and adaptive learning paths for better student outcomes.",
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
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      name: "Virtual Bouquet",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: flower,
      source_code_link: "https://gift-flowers-alpha.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };