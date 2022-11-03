export const Navigation = {
  Home: "Home",
  About: "About",
  Projects: "Projects",
  Skills: "Skills",
  Experience: "Experience",
}
export const Home = {
  title: "Soo Jong Roh",
  bannerText: "SJ",
}

export const About = {
  title: [
    "Hi, I’m SooJong.",
    "I also go by SJ.",
    "I am a Web Developer.",
    "I play tennis.",
    "I love drinking coffee.",
    "I like cat.",
  ],
  Introduce: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, diam in hendrerit pharetra, ante leo tristique mi, tincidunt pellentesque ipsum ante id purus. Proin ornare volutpat interdum. Mauris leo mauris, faucibus quis lacus nec, pellentesque sollicitudin nibh. Integer varius molestie lectus, sed fringilla erat commodo eu. Nullam blandit ex at dapibus lobortis. Ut tincidunt risus a elit porta, nec rutrum justo sodales. Aenean molestie ex magna, vel eleifend turpis fermentum nec. Vestibulum rhoncus suscipit varius. Curabitur molestie, ligula vel placerat semper, metus ante volutpat odio, sit amet vehicula dui sem a est.",
  ],
  // "After graduating in 2018 from the University of Illinois (at Urbana-Champaign) with a Bachelor’s Degree in Statistics, I’ve been into multiple fields of interest like International Distribution, Logistics, Actuary, and more. During those times, I enjoyed web development as a hobby. Ever since I founded a web developing club at University, I was very passionate about creating websites for local needs, or just for fun!",
  //   "When it comes to Web Development, I get tons of energy with self-inspiration. I am a fast learner, and I enjoy learning new concepts/tools. I love to challenge myself by trying to achieve a better and more efficient code base. My current toolbox includes: React, TypeScript, JavaScript, CSS3, HTML5, Ruby on Rails, Python, and more!"
}

export const Projects = {
  title: "My Projects",
  projectTitle: "Chelsea Framing Products",
  projectDescription: About.Introduce,
}

export const Technologies = {
  react: "React",
  javascript: "JavaScript",
  html: "HTML5",
  css: "CSS3",
  python: "Python",
  rubyonrails: "Ruby on Rails",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  java: "Java",
  aws: "AWS",
  git: "Git",
  typescript: "TypeScript",
}

export const Skills = {
  title: "Skills",
  skills: {
    react: Technologies.react,
    javascript: Technologies.javascript,
    html: Technologies.html,
    css: Technologies.css,
    python: Technologies.python,
    rubyonrails: Technologies.rubyonrails,
    postgresql: Technologies.postgresql,
    firebase: Technologies.firebase,
    java: Technologies.java,
    aws: Technologies.aws,
    git: Technologies.git,
    typescript: Technologies.typescript,
  },
}

export const Experience = {
  title: "Experience",
  contents: [
    {
      Title: "PNS Management, Inc.",
      Date: "Sep 2019 - Sep 2020",
      Location: "Bensenville, IL",
      JobTitle: "IT Specialist",
      Descriptions: [
        "Maintained the company website by implementing new UI components and modifying existing UI components using JavaScript, HTML, CSS, and PHP",
        "Built a Virtual Machine to establish a secure network connection between the headquarter and regional offices in order to expedite the data access process for remote employees",
        "Created organization-wide security protocols using Microsoft Azure by setting up email security rules and designing a standard of procedure for electronic communications",
        "Designed a data storage system for the company's electronics to improve the logistical management of hardware assets",
        "Performed on-demand hardware troubleshooting/maintenance for the company and led the efforts in implementing the company's hardware-management guidelines",
      ],
    },
    {
      Title: "Chelsea Framing Products",
      Date: "Oct 2018 - Sep 2019",
      Location: "Lake Zurich, IL",
      JobTitle: "Fullstack Developer",
      Descriptions: [
        "Implemented and deployed the company website using JavaScript, Ruby on Rails, and PostgreSQL from requirements specification to deployment in two months as the sole developer",
        "Increased the traffic of the website by 250% within two months by improving SEO and average CTR of multiple keywords, ranking top in several high correlation queries",
        "Conducted A/B tests on UI components to improve UX and conversion rate of crucial features including product search, checkout, and mass-order inquiry",
        "Generated bi-weekly reports by extracting key data from the database and analyzing UI click rates, product page traffic, user demography/geography, and source device data",
      ],
    },
    {
      Title: "Freelancer",
      Date: "",
      Location: "Chicago, IL",
      JobTitle: "Web Developer",
      Descriptions: [
        "Built and deployed a static client-side application of a local Japanese restaurant using ReactJS, TypeScript, Styled-Components, and Redux",
        "Modified the client-side application of a distribution company website by implementing new UI components and improving existing UI components using JavaScript",
      ],
    },
  ],
}

export const Contact = {
  title: "Contact",
}
