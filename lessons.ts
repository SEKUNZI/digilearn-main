export interface LessonItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface LessonSection {
  id: string;
  title: string;
  items: LessonItem[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  sections: LessonSection[];
}

export const modules: Module[] = [
  {
    id: "online-shopping",
    title: "Online Shopping",
    description: "Learn how to shop safely online and avoid scams",
    icon: "ShoppingCart",
    color: "from-emerald to-emerald/70",
    sections: [
      {
        id: "os-getting-started",
        title: "Getting Started",
        items: [
          { id: "os-1", title: "What is online shopping?", completed: false },
          { id: "os-2", title: "Popular shopping platforms", completed: false },
          { id: "os-3", title: "Creating a secure account", completed: false },
        ],
      },
      {
        id: "os-safe-practices",
        title: "Safe Practices",
        items: [
          { id: "os-4", title: "Identifying trusted sellers", completed: false },
          { id: "os-5", title: "Secure payment methods", completed: false },
          { id: "os-6", title: "Reading reviews effectively", completed: false },
        ],
      },
      {
        id: "os-common-scams",
        title: "Common Scams",
        items: [
          { id: "os-7", title: "Fake websites and phishing", completed: false },
          { id: "os-8", title: "Too-good-to-be-true deals", completed: false },
          { id: "os-9", title: "What to do if scammed", completed: false },
        ],
      },
    ],
  },
  {
    id: "mobile-payments",
    title: "Mobile Payments",
    description: "Master mobile money and digital payment systems",
    icon: "Smartphone",
    color: "from-cyan to-cyan/70",
    sections: [
      {
        id: "mp-getting-started",
        title: "Getting Started",
        items: [
          { id: "mp-1", title: "Introduction to mobile money", completed: false },
          { id: "mp-2", title: "Setting up your mobile wallet", completed: false },
          { id: "mp-3", title: "Sending and receiving money", completed: false },
        ],
      },
      {
        id: "mp-advanced",
        title: "Advanced Features",
        items: [
          { id: "mp-4", title: "Paying bills with mobile money", completed: false },
          { id: "mp-5", title: "Saving with mobile platforms", completed: false },
          { id: "mp-6", title: "International transfers", completed: false },
        ],
      },
      {
        id: "mp-security",
        title: "Security Tips",
        items: [
          { id: "mp-7", title: "Protecting your PIN", completed: false },
          { id: "mp-8", title: "Recognizing fraud attempts", completed: false },
          { id: "mp-9", title: "Reporting unauthorized transactions", completed: false },
        ],
      },
    ],
  },
  {
    id: "e-government",
    title: "E-Government Services",
    description: "Access government services online with confidence",
    icon: "Landmark",
    color: "from-indigo-light to-primary",
    sections: [
      {
        id: "eg-getting-started",
        title: "Getting Started",
        items: [
          { id: "eg-1", title: "What are e-government services?", completed: false },
          { id: "eg-2", title: "Creating your digital ID", completed: false },
          { id: "eg-3", title: "Navigating government portals", completed: false },
        ],
      },
      {
        id: "eg-services",
        title: "Common Services",
        items: [
          { id: "eg-4", title: "Applying for documents online", completed: false },
          { id: "eg-5", title: "Tax filing and payments", completed: false },
          { id: "eg-6", title: "Healthcare registration", completed: false },
        ],
      },
      {
        id: "eg-tips",
        title: "Tips & Best Practices",
        items: [
          { id: "eg-7", title: "Keeping your data safe", completed: false },
          { id: "eg-8", title: "Avoiding fake government sites", completed: false },
          { id: "eg-9", title: "Getting help when stuck", completed: false },
        ],
      },
    ],
  },
  {
    id: "digital-safety",
    title: "Digital Safety",
    description: "Protect yourself and your data in the digital world",
    icon: "Shield",
    color: "from-secondary to-emerald",
    sections: [
      {
        id: "ds-passwords",
        title: "Passwords & Authentication",
        items: [
          { id: "ds-1", title: "Creating strong passwords", completed: false },
          { id: "ds-2", title: "Using two-factor authentication", completed: false },
          { id: "ds-3", title: "Password managers explained", completed: false },
        ],
      },
      {
        id: "ds-privacy",
        title: "Privacy Online",
        items: [
          { id: "ds-4", title: "Managing social media privacy", completed: false },
          { id: "ds-5", title: "Understanding data collection", completed: false },
          { id: "ds-6", title: "Safe browsing habits", completed: false },
        ],
      },
      {
        id: "ds-threats",
        title: "Recognizing Threats",
        items: [
          { id: "ds-7", title: "Phishing emails and messages", completed: false },
          { id: "ds-8", title: "Malware and viruses", completed: false },
          { id: "ds-9", title: "Social engineering attacks", completed: false },
        ],
      },
    ],
  },
];
