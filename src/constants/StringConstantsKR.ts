export const Navigation = {
  Home: "홈",
  About: "소개",
  Projects: "프로젝트",
  Skills: "스킬",
  Experience: "경력",
}
export const Home = {
  title: "노수종",
  bannerText: "수종",
}

export const About = {
  title: [
    "제 이름은 노수종 입니다.",
    "SJ 라고 불리기도 합니다.",
    "저는 웹 개발자 입니다.",
    "전 테니스를 좋아합니다.",
    "커피도 사랑합니다.",
    "고양이도 좋아합니다.",
  ],
  Introduce: [
    "유소년에게서 소금이라 위하여. 청춘 이것이다. 고동을 위하여 기쁘며. 풀이 넣는 귀는 보라. 우는 곳이 풀이 것은 두손을 천고에 보이는 않는 이것이다. 보는 운다. 청춘이 거친 대고. 없으면.",
    "같으며. 인생에 동산에는 이것은 이것이다. 능히 이 그들은 청춘이 이상. 미인을 소담스러운 불러 방황하여도. 전인 광야에서 보내는 봄바람이다. 있는가?작고 청춘은 행복스럽고 타오르고 맺어, 얼음이 동력은 석가는 용감하고 위하여 피고 이것이다. 사랑의 것이다.",
  ],
  // "일리노이 주립대에서 2018년도에 통계학 학사 학위와 함께 졸업 후 저는 무역, 물류유통, 액추어리 (보험 계리) 등 다양한 분야에 관심을 뒀습니다. 하지만 그 가운데에서도 계속 즐기고 있던 취미는 웹개발이었습니다. 대학에서 웹개발 동아리를 만든 후로 주변에 웹사이트가 필요한 사람들에게 웹사이트를 만들어 주는 것에 큰 열정이 생겼습니다.",
  //   "웹개발을 떠올릴 때면 저는 굉장한 에너지와 동기부여를 받습니다. 저는 새로운 것을 습득하는게 빠른 편이며 배우는데에 즐거움을 느낍니다. 항상 더 효율적이고 더 좋은 코드를 쓰기 위해 노력하는걸 좋아합니다. 현재 제가 사용할 줄 아는 기술에는 리액트, 타입스크립트, 자바스크립트, CSS3, HTML5, 루비 온 레일즈, 파이썬 등이 있습니다."
}

export const Projects = {
  title: "프로젝트",
  projectTitle: "Chelsea Framing Products",
  projectDescription: About.Introduce,
}

export const Technologies = {
  react: "리액트",
  javascript: "자바스크립트",
  html: "HTML5",
  css: "CSS3",
  python: "파이썬",
  rubyonrails: "루비 온 레일즈",
  postgresql: "PostgreSQL",
  firebase: "파이어베이스",
  java: "자바",
  aws: "아마존 웹 서비스",
  git: "깃",
  typescript: "타입스크립트",
}

export const Skills = {
  title: "스킬",
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
  title: "경력",
  contents: [
    {
      Title: "PNS Management, Inc.",
      Date: "Sep 2019 - Sep 2020",
      Location: "벤슨빌, 일리노이",
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
      Location: "레이크 주리치, 일리노이",
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
      Location: "시카고, 일리노이",
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
