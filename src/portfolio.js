/* Gita Meditha Nirwanduna — QA Automation Engineer Portfolio */
/* To change colors globally go to _globalColor.scss              */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Hero / Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "gitameditha",
  title: "Hi, I'm Gita 👋",
  subTitle: emoji(
    "Senior QA Engineer & SDET with 7+ years shipping reliable software — building automation frameworks from scratch across API, Web, Mobile, and Performance testing. I treat quality as a product feature, not an afterthought. ⚡"
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gitameditha",
  linkedin: "https://www.linkedin.com/in/gita-m-865812106/",
  gmail: "gitamedithanirwanduna@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "QUALITY ENGINEER WHO BUILDS AUTOMATION INFRASTRUCTURE THAT ACTUALLY SHIPS",
  skills: [
    emoji(
      "⚡ Design and implement full automation ecosystems from scratch — Web UI, API, and Mobile — with clean architecture and CI/CD integration"
    ),
    emoji(
      "⚡ Build performance testing suites using K6 covering load, stress, endurance, and spike scenarios with automated reporting"
    ),
    emoji(
      "⚡ Drive quality culture through TDD, BDD/Gherkin, shift-left testing, chaos engineering, and OWASP security testing"
    ),
    emoji(
      "⚡ Lead and mentor QA teams, review engineers' unit tests, and embed quality practices into the full SDLC"
    ),
    emoji(
      "⚡ Integrate automation pipelines into GitLab CI, Jenkins, and GitHub Actions for continuous, reliable releases"
    )
  ],

  softwareSkills: [
    {
      skillName: "Playwright",
      fontAwesomeClassname: "fas fa-theater-masks"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Appium",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Robot Framework",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "K6 Performance",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab CI/CD",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Postman / API",
      fontAwesomeClassname: "fas fa-paper-plane"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-stream"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Telkom University",
      logo: require("./assets/images/telkom_university.png"),
      subHeader: "Bachelor of Computational Science",
      duration: "July 2012 – September 2016",
      desc: "Graduated with a strong foundation in software engineering, algorithms, data structures, and computational systems — the base from which a quality engineering career was built.",
      descBullets: [
        "Core coursework in software engineering, operating systems, and network fundamentals",
        "Developed early interest in system reliability, testing methodologies, and software quality"
      ]
    }
  ]
};

// Skill Proficiency Bars

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Test Automation (Web · API · Mobile)",
      progressPercentage: "95%"
    },
    {
      Stack: "Performance & Load Testing (K6)",
      progressPercentage: "88%"
    },
    {
      Stack: "CI/CD · Cloud (AWS) · Infrastructure",
      progressPercentage: "82%"
    },
    {
      Stack: "Programming (JS · TS · Python · Java)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work Experience

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Quality Engineer",
      company: "PT Amartha Mikro Fintek",
      companylogo: require("./assets/images/amarthaLogo.png"),
      date: "July 2025 – Present",
      desc: "Driving quality engineering for a P2P lending platform serving millions of micro-borrowers across Indonesia. Leading test automation modernization and system resilience initiatives.",
      descBullets: [
        "Launched and validated the Celengan savings product — QA work directly contributed to IDR 8B+/month in new revenue",
        "Led end-to-end testing for the Grassroot Growth Fund, enabling IDR 5B+/month in revenue growth",
        "Rebuilt API and UI automation frameworks in Python and Robot Framework, improving coverage and regression speed",
        "Standardized test case design with Gherkin/BDD, improving collaboration between QA, product, and engineering",
        "Implemented Chaos Testing practices to validate system resilience under extreme and failure conditions",
        "Contributed to event-driven architecture quality via Kafka and Grafana observability tooling"
      ]
    },
    {
      role: "Senior Quality Engineer",
      company: "PT. Telkomsel Ecosystem Digital (INDICO)",
      companylogo: require("./assets/images/Indico.jpeg"),
      date: "May 2023 – July 2025",
      desc: "Led quality engineering for Telkomsel's digital goods e-commerce platform. Built the entire automation infrastructure from scratch, established engineering quality practices, and grew a team of 3 QEs.",
      descBullets: [
        "Built a Playwright + TypeScript web automation framework from zero and integrated it into GitLab CI/CD — cutting manual regression effort significantly",
        "Created a K6 performance testing suite from scratch with reusable templates and automated reports, enabling team-wide load and stress testing",
        "Developed a Mocha/Chai API automation framework from ground up, improving API test reliability and coverage",
        "Rolled out Test-Driven Development (TDD) across engineering squads, reducing production defect rates",
        "Led and mentored 3 Quality Engineers — establishing code review standards, testing frameworks, and career growth paths",
        "Implemented Agile/Scrum across the engineering org, improving sprint predictability and delivery velocity"
      ]
    },
    {
      role: "Quality Coach",
      company: "Bukalapak.com",
      companylogo: require("./assets/images/bukalapak.png"),
      date: "January 2022 – May 2023",
      desc: "Drove test automation maturity for blockchain and browser extension products at Indonesia's leading e-commerce platform. Trained engineers and built automation for distributed, complex systems.",
      descBullets: [
        "Built API and UI automation from scratch for blockchain projects using TypeScript, Jest, and Playwright",
        "Improved OAuth 2.0 integration with Google Sign-In, enhancing security and authentication reliability",
        "Built UI automation for scraper browser extensions using Playwright, catching web element regressions early",
        "Trained and guided engineers on writing their own automation tests, building a culture of self-testing"
      ]
    },
    {
      role: "Test Engineer",
      company: "Bukalapak.com",
      companylogo: require("./assets/images/bukalapak.png"),
      date: "November 2020 – January 2022",
      desc: "Mobile quality assurance across iOS and Android at scale. Adopted shift-left testing to catch defects earlier and integrated automation into CI pipelines.",
      descBullets: [
        "Built and maintained mobile automation frameworks for iOS and Android using Java Espresso and Appium",
        "Pioneered snapshot testing for mobile apps, significantly improving visual regression accuracy",
        "Maintained Jenkins pipelines for mobile automation with seamless CI/CD integration",
        "Adopted shift-left testing practices to identify defects earlier in the development cycle, reducing rework"
      ]
    },
    {
      role: "Quality Engineer",
      company: "Ralali.com",
      companylogo: require("./assets/images/Ralali.png"),
      date: "December 2019 – September 2020",
      desc: "Enhanced product quality across web, mobile, and API channels for Indonesia's B2B marketplace. Also conducted OWASP-standard security testing.",
      descBullets: [
        "Built API automation framework from scratch using Mocha and Chai for end-to-end API coverage",
        "Developed BDD web automation tests with Cypress and Cucumber for reliable regression testing",
        "Implemented native Appium automation for Ralali mobile apps across iOS and Android",
        "Conducted OWASP-based security testing for web and mobile platforms"
      ]
    },
    {
      role: "Software Engineer",
      company: "Sunline Master",
      companylogo: require("./assets/images/sunline.png"),
      date: "May 2017 – December 2019",
      desc: "Backend development and systems integration for enterprise digital banking clients — including Bank DBS. Built the software foundation that later informed a deep understanding of system quality.",
      descBullets: [
        "Developed Java Spring Boot middleware for digital banking application integrations",
        "Designed and implemented interface systems (ISDs) for core banking API integrations",
        "Built and maintained a telemarketing system for Bank DBS, ensuring high availability"
      ]
    }
  ]
};

// GitHub Open Source Section
// Requires GITHUB_TOKEN in .env — see README for setup

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Portfolio Projects

const bigProjects = {
  title: "Automation Projects",
  subtitle: "OPEN SOURCE TESTING FRAMEWORKS AND TOOLS BUILT IN MY OWN TIME",
  projects: [
    {
      image: require("./assets/images/playwright.png"),
      projectName: "Playwright Web Automation Framework",
      projectDesc:
        "Production-grade E2E web automation framework built with Playwright and TypeScript. Covers full user flows, parallel execution, cross-browser testing, and GitLab CI/CD integration.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/gitameditha/web_playwright"
        }
      ]
    },
    {
      image: require("./assets/images/k6_logo.png"),
      projectName: "K6 Performance Testing Suite",
      projectDesc:
        "Comprehensive performance testing framework with load, stress, endurance, and spike scenarios. Features reusable test templates, automated HTML reports, and CI/CD-ready configuration.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/gitameditha/performance_test_k6"
        }
      ]
    },
    {
      image: require("./assets/images/cucumber_logo.png"),
      projectName: "API Automation — Cucumber & Supertest",
      projectDesc:
        "BDD-style API testing framework using Cucumber, Supertest, and JavaScript. Clean scenario organization, readable test specs, and scalable structure for team adoption.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/gitameditha/api_automation_cucumber_supertest"
        }
      ]
    },
    {
      image: require("./assets/images/appium_logo.png"),
      projectName: "Mobile Automation — Appium & Java",
      projectDesc:
        "Cross-platform mobile test automation using Java, Appium, and Cucumber. Supports iOS and Android with BDD-style feature files and a shared Page Object Model.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/gitameditha/mobile-java-cucumber"
        }
      ]
    }
  ],
  display: true
};

// Achievements & Certifications

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Industry certifications and measurable engineering impact that define my quality engineering journey.",

  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      subtitle:
        "Validates expertise in developing, deploying, and debugging cloud-based applications using AWS services — demonstrating cloud-native architecture knowledge directly applicable to modern QA infrastructure and test environments.",
      image: require("./assets/images/awscert.png"),
      imageAlt: "AWS Certified Developer Badge",
      footerLink: [
        {
          name: "View Digital Badge",
          url: "https://www.credly.com" // TODO: Replace with actual Credly badge URL
        }
      ]
    },
    {
      title: "IDR 13B+ Monthly Revenue Enabled",
      subtitle:
        "QA leadership directly unlocked IDR 8B/month from the Celengan product launch and IDR 5B/month from Grassroot Growth Fund at PT Amartha — proving that rigorous quality engineering is a revenue driver, not a cost center.",
      image: require("./assets/images/celengan.png"),
      imageAlt: "Revenue Impact Achievement",
      footerLink: [
        {
          name: "About Amartha",
          url: "https://amartha.com"
        }
      ]
    },
    {
      title: "4 Automation Frameworks Built From Scratch",
      subtitle:
        "Independently designed and delivered full-stack automation ecosystems at multiple companies — Playwright (Web), Mocha/Chai (API), K6 (Performance), Appium (Mobile) — with no inherited infrastructure or templates.",
      image: require("./assets/images/playwright.png"),
      imageAlt: "Automation Frameworks Achievement",
      footerLink: [
        {
          name: "View GitHub Portfolio",
          url: "https://github.com/gitameditha"
        }
      ]
    }
  ],
  display: true
};

// Blog Section (disabled — add Medium username to enable)

const blogSection = {
  title: "Blog",
  subtitle:
    "Sharing knowledge from the trenches of quality engineering, automation architecture, and test strategy.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Section (disabled)

const talkSection = {
  title: "Talks",
  subtitle: emoji("Knowledge sharing and community contributions"),
  talks: [],
  display: false
};

// Podcast Section (disabled)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcast appearances and audio content",
  podcast: [],
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Download my full CV",
  display: true
};

// Contact Section

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "Open to Senior QA Engineer, QA Lead, SDET, and AI Automation Engineer opportunities. Let's build reliable systems together.",
  number: "",
  email_address: "gitamedithanirwanduna@gmail.com"
};

// Twitter (disabled)

const twitterDetails = {
  userName: "twitter",
  display: false
};

// Open to work indicator

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
