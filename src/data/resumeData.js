import { Code2, Globe, Database, Terminal, Cpu } from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Patricia Madeth Buna",
    title: "Computer Engineering Student & Front-End Developer",
    location: "Butuan City, Philippines, 8601",
    email: "p.buna.485504@gmail.com",
    phone: "(+63) 906 462 3305",
    about: "As a Computer Engineering student, I am eager to build my skills through real work experience. I am willing to learn, adapt to new challenges, and contribute to the company. I hope to join an internship that will help me grow both personally and professionally."
  },
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Mindanao",
    location: "Davao City",
    coursework: [
      "Computer Networks and Security",
      "Microprocessor",
      "Embedded Systems",
      "Programming Logic and Design",
      "Computer Drafting and Design"
    ]
  },
  skills: [
    { category: "Languages", items: ["C++", "Python", "JavaScript", "HTML", "CSS"], icon: Code2 },
    { category: "Web & Frameworks", items: ["ReactJS", "Express.js", "ASP.NET Core", "UI Web Programming"], icon: Globe },
    { category: "Databases", items: ["Firebase", "SQL Server"], icon: Database },
    { category: "Tools & Hardware", items: ["Git", "GitHub", "Visual Studio", "VS Code", "ESP32 / IoT"], icon: Terminal },
    { category: "Specialization", items: ["Networking and Administration", "Embedded Systems", "PCB Design"], icon: Cpu }
  ],
  projects: [
    {
      id: 1,
      title: "IoT Environmental Monitoring System",
      type: "Co-Authored Thesis",
      description: "Implemented an ESP32-based monitoring system using MQTT and sensors (RFID, DHT22). Integrated Firebase for automated database and real-time monitoring, and developed an interactive web dashboard.",
      tech: ["ESP32", "MQTT", "RFID", "DHT22", "Firebase", "Front-End Dashboard"]
    },
    {
      id: 2,
      title: "Accounting Receivable System",
      type: "Academic Plate",
      description: "Developed a desktop-based financial system that records customer information and implements Add, Products, Update, Search, and Display features.",
      tech: ["Java", "SQL Server"]
    },
    {
      id: 3,
      title: "Line-Following Robot",
      type: "Collaborated Project",
      description: "Designed and built a line-following robot utilizing BC 108 NPN Transistors, N4148 Diodes, and Resistors integrated into a custom single PCB design.",
      tech: ["Hardware Assembly", "PCB Design", "Transistors & Diodes", "Robotics"]
    }
  ]
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};