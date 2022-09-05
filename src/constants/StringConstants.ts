export const Navigation = {
  Home: "Home",
  About: "About",
  Projects: "Projects",
  Skills: "Skills",
  Experience: "Experience",
}
export const Home = {
  title: "Soo Jong Roh",
}

export const About = {
  title: "A React.js Web Developer",
  Introduce:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id dignissim neque. Suspendisse eu nisl vehicula, pulvinar urna non, molestie turpis. Maecenas eleifend feugiat leo, quis rhoncus sapien congue nec. Suspendisse a urna at tortor gravida pellentesque. Vestibulum posuere massa semper, molestie est eu, tristique justo. Cras accumsan sapien malesuada, porta enim non, facilisis neque. Nunc at interdum dui. Ut sed varius nisi, ut viverra libero.",
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
