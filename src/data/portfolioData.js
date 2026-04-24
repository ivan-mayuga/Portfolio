import profileImage from "../assets/images/ivan.jpeg";
import figmaIcon from "../assets/images/figma.png";
import affinityIcon from "../assets/images/affinity.png";
import inkscapeIcon from "../assets/images/inkscape-logo.svg";
import vscodeIcon from "../assets/images/visual-studio.svg";
import facebookIcon from "../assets/images/facebook.svg";
import instagramIcon from "../assets/images/instagram.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import whatsappIcon from "../assets/images/whatsapp.svg";
import emailIcon from "../assets/images/email.svg";
import githubIcon from "../assets/images/github.svg";
import kafkaPreview from "../assets/images/kafka-1.png";
import kafkaGif from "../assets/images/kafka.gif";
import gotPreview from "../assets/images/got.jpg";
import momentPreview from "../assets/images/moment-of-style.jpg";
import htmlIcon from "../assets/images1/html5.svg";
import cssIcon from "../assets/images1/css3.svg";
import javascriptIcon from "../assets/images1/javascript.svg";
import reactIcon from "../assets/images1/react.svg";
import tailwindIcon from "../assets/images1/tailwind-css.svg";
import pythonIcon from "../assets/images1/python.svg";
import cIcon from "../assets/images1/c.svg";
import gitIcon from "../assets/images1/git.svg";

export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const heroData = {
  headlineTop: "UI/UX & WEB",
  headlineBottom: "DEVELOPER",
  year: "2026",
  signature: "Ivan Mayuga",
  subtitle: "Turning ideas into functional, user-friendly websites.",
  resumeHref: "/Ivan-mayuga-resume.pdf",
  quickLinks: [
    {
      label: "mayugajohnivan2@gmail.com",
      href: "mailto:mayugajohnivan2@gmail.com",
    },
    {
      label: "09628904051",
      href: "tel:09628904051",
    },
  ],
};

export const aboutData = {
  headerLabel: "About",
  profileImage,
  profileName: "JOHN IVAN N. MAYUGA",
  profileTags: ["UI/UX Designer", "Web Developer"],
  about: {
    name: "John Ivan Mayuga",
    age: 19,
    roles: "Web Developer and UI/UX Designer",
    course: "Bachelor's in Computer Science",
    school: "Our Lady of Fatima University",
    track: "STEM",
    transitionYear: "2023",
    summary:
      "I now focus on blending technical logic with creative intuition. My goal is to craft digital experiences that are not only visually balanced but also deeply functional, staying true to my belief that good design must be clear and intentional.",
  },
  education: [
    {
      year: "2025",
      school: "Our Lady of Fatima University (OLFU)",
      degree: "Bachelor's in Computer Science",
    },
    {
      year: "2023",
      school: "Our Lady of Fatima University (OLFU)",
      degree: "Science Technology Engineering Mathematics (STEM)",
    },
  ],
  philosophy:
    "I believe good design is clear, intentional, and functional. I focus on creating interfaces that feel simple to use while maintaining visual balance and consistency.",
  software: [
    { name: "FIGMA", icon: figmaIcon, level: 80 },
    { name: "AFFINITY", icon: affinityIcon, level: 55 },
    { name: "INKSCAPE", icon: inkscapeIcon, level: 45 },
    { name: "VSCODE", icon: vscodeIcon, level: 90 },
  ],
  softSkills: [
    "Adaptive",
    "Responsive design",
    "Organize",
    "Creative",
    "Leadership",
    "Team work",
    "Time management",
  ],
  contactColumns: [
    [
      {
        name: "Facebook",
        icon: facebookIcon,
        href: "https://facebook.com/Mayugajohnivan",
        label: "facebook.com/Mayugajohnivan",
      },
      {
        name: "Instagram",
        icon: instagramIcon,
        href: "https://instagram.com/ma_navii7",
        label: "instagram.com/ma_navii7",
      },
      {
        name: "LinkedIn",
        icon: linkedinIcon,
        href: "https://linkedin.com/in/johnivan-mayuga",
        label: "linkedin.com/in/johnivan-mayuga",
      },
    ],
    [
      {
        name: "Phone",
        icon: whatsappIcon,
        href: "tel:09628904051",
        label: "09628904051",
      },
      {
        name: "Email",
        icon: emailIcon,
        href: "mailto:mayugajohnivan2@gmail.com",
        label: "mayugajohnivan2@gmail.com",
      },
      {
        name: "GitHub",
        icon: githubIcon,
        href: "https://github.com/ivan-mayuga",
        label: "github.com/ivan-mayuga",
      },
    ],
  ],
};

export const skillsSectionData = {
  title: "My Tech Stack",
  subtitle:
    "I specialize in building responsive, user-focused interfaces using modern frontend tools and frameworks, creating seamless and engaging web experiences.",
  items: [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Python", icon: pythonIcon },
    { name: "C", icon: cIcon },
    { name: "Git", icon: gitIcon },
  ],
};

export const projectsSectionData = {
  title: "My Projects",
  subtitle:
    "A curated selection of frontend and UI/UX projects focused on responsive interfaces, intuitive user experiences, and modern web design.",
  items: [
    {
      title: "Character Wiki (Personal project)",
      description:
        "A character-based wiki website featuring structured layouts, clean UI, and organized information design.",
      image: kafkaPreview,
      tech: ["Figma"],
      href: kafkaGif,
      previewInModal: true,
      imageAlt: "Character Wiki preview",
      previewAlt: "Character Wiki animated preview",
    },
    {
      title: "GOT Wiki (Project)",
      description:
        "A responsive Game of Thrones wiki website designed and coded to show information like seasons, cast, story, and characters.",
      image: gotPreview,
      tech: ["HTML", "CSS", "JavaScript"],
      href: "/Projects/Games%20of%20throne/homepage.html",
      external: true,
      imageAlt: "GOT Wiki preview",
    },
    {
      title: "Moment of style (Personal project)",
      description:
        "A visual gallery website highlighting fashion content with a minimalist, aesthetic-focused layout.",
      image: momentPreview,
      tech: ["HTML", "CSS", "JavaScript"],
      href: "/Projects/Moment%20of%20style/woony.html",
      external: true,
      imageAlt: "Moment of Style preview",
    },
  ],
};

export const socialLinks = [
  {
    name: "Facebook",
    icon: facebookIcon,
    href: "https://facebook.com/Mayugajohnivan",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    href: "https://instagram.com/ma_navii7",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    href: "https://linkedin.com/in/johnivan-mayuga",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    href: "https://github.com/ivan-mayuga",
  },
];

export const contactSectionData = {
  title: "Contact Me",
  details: [
    {
      label: "mayugajohnivan2@gmail.com",
      href: "mailto:mayugajohnivan2@gmail.com",
    },
    {
      label: "+63 962 890 4051",
      href: "tel:+639628904051",
    },
  ],
};

export const footerData = {
  name: "Ivan Mayuga",
  tagline:
    "A creative frontend developer with a strong focus on UI/UX, building interfaces that look good and feel right to use.",
  contact: [
    {
      label: "Email",
      value: "mayugajohnivan2@gmail.com",
      href: "mailto:mayugajohnivan2@gmail.com",
    },
    {
      label: "Phone",
      value: "09628904051",
      href: "tel:09628904051",
    },
    {
      label: "Location",
      value: "Philippines",
    },
  ],
};
