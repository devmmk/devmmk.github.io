// Import all the images from the experiences folder
import buyadIcon from '@assets/experiences/buyad-icon.jpg';
import buyadUi from '@assets/experiences/buyad-ui.png';
import childartintellectIcon from '@assets/experiences/childartintellect-icon.png';
import childartintellectUi from '@assets/experiences/childartintellect-ui.jpg';
import rnfaIcon from '@assets/experiences/rnfa-icon.png';

// Define the experience data structure
export interface Attachment {
  src: string;
  title: string;
}

export interface Experience {
  company: {
    name: string;
    linkedInProfile?: string;
  };
  location: string;
  logo?: string;
  role: string;
  period: string;
  achievements: string[];
  attachments?: Attachment[];
}

export const experiences: Experience[] = [
  {
    company: {
      name: "Raya Nufan-e Aveh",
    },
    location: "Isfahan, Iran (Hybrid)",
    logo: rnfaIcon,
    role: "Full-Stack Web Developer",
    period: "2025 - Present",
    achievements: [
    "Designed and developed full-stack websites and web applications",
    "Implemented backend systems using PHP with custom frameworks and MVC architecture",
    "Developed responsive front-end interfaces using HTML, CSS, Bootstrap, and JavaScript",
    "Integrated APIs and backend services for dashboards and management panels",
    "Built admin panels, CMS features, and custom business logic",
    "Deployed and managed projects on cPanel hosting environments",
    "Handled domain setup, hosting configuration, and production deployment"
    ],
    attachments: [
    ]
  },
  {
    company: {
      name: "BuyAd – Telegram Advertising Automation Platform",
    },
    location: "Tehran, Iran (Remote)",
    logo: buyadIcon,
    role: "Backend Developer / DevOps Engineer",
    period: "2024 - 2025",
    achievements: [
      "Architected backend system for Telegram advertising marketplace",
      "Developed Telegram bots for automation (registration, plans, ads, posts)",
      "Designed database schema for channels, plans, orders, posts, revenue",
      "Built scheduling system for automated ad publishing/removal",
      "Implemented payment processing with balance tracking & payouts",
      "Integrated Telegram Bot API for reliable messaging & validation",
      "Provisioned production servers, domains, DNS, SSL, security"
    ],
    attachments: [
      { src: buyadUi, title: "BuyAd UI" }
    ]
  },
  {
    company: {
      name: "AI Children's Storytelling Mobile App",
    },
    location: "Toronto, Canada (Remote)",
    logo: childartintellectIcon,
    role: "Backend Developer / DevOps Engineer",
    period: "2023 - 2024",
    achievements: [
      "Designed backend architecture with authentication, subscriptions, content generation, media storage",
      "Developed RESTful APIs for mobile clients with scalability & security",
      "Managed production servers: provisioning, OS setup, firewalls, optimization",
      "Set up domain, DNS, SSL, email infrastructure (password reset, verification)",
      "Integrated third-party services (payments, email, storage) with fault-tolerant logic"
    ],
    attachments: [
      { src: childartintellectUi, title: "Child Psychology App UI" }
    ]
  }
];