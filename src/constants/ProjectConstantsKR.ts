import ChelseaCover from "assets/chelsea_cover.jpeg"
import APICover from "assets/api_cover.jpeg"
import PNSCover from "assets/pns_cover.jpeg"
import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  PSQLIcon,
  RailsIcon,
} from "assets/Icons"
import * as S from "constants/StringConstants"
import chelsea1 from "assets/chelsea1.png"
import chelsea2 from "assets/chelsea2.png"
import chelsea3 from "assets/chelsea3.png"
import api1 from "assets/api1.png"
import api2 from "assets/api2.png"
import api3 from "assets/api3.png"
import pns1 from "assets/pns1.png"
import pns2 from "assets/pns2.png"
import pns3 from "assets/pns3.png"
import { theme } from "style/Theme"

interface ITech {
  logoFile: () => JSX.Element
  name: string
  iconClassName: string
}

export interface IProject {
  bannerImage: string
  websiteUrl: string
  projectImages: string[]
  title: string
  content: string
  techs: ITech[]
  themeColor: string
}

export const projects: IProject[] = [
  {
    bannerImage: ChelseaCover,
    websiteUrl: "https://www.chelseaframingproducts.com",
    projectImages: [chelsea1, chelsea2, chelsea3],
    title: "Chelsea Framing Products",
    content:
      "풀 스택 개발자로서 플라스틱 사진 프레임을 파는 회사를 위해 개발한 웹사이트. 루비 온 레일즈, 자바스크립트, CSS3, HTML5 와 PostgreSQL 을 사용해 만들었다.",
    techs: [
      {
        logoFile: JavaScriptIcon,
        name: S.Technologies.javascript,
        iconClassName: "devicon-javascript-plain",
      },
      {
        logoFile: RailsIcon,
        name: S.Technologies.rubyonrails,
        iconClassName: "devicon-rails-plain",
      },
      {
        logoFile: HTMLIcon,
        name: S.Technologies.html,
        iconClassName: "devicon-html5-plain",
      },
      {
        logoFile: CSSIcon,
        name: S.Technologies.css,
        iconClassName: "devicon-css3-plain",
      },
      {
        logoFile: PSQLIcon,
        name: S.Technologies.postgresql,
        iconClassName: "devicon-postgresql-plain",
      },
    ],
    themeColor: theme.colors.chelsea,
  },
  {
    bannerImage: APICover,
    websiteUrl: "https://www.apinow.com",
    projectImages: [api1, api2, api3],
    title: "Advanced Plastics, Inc.",
    content:
      "플라스틱 레진 원재료를 유통하는 회사를 위해 만든 웹사이트. 자바스크립트, CSS3 와 HTML5 를 사용해 만들었다.",
    techs: [
      {
        logoFile: JavaScriptIcon,
        name: S.Technologies.javascript,
        iconClassName: "devicon-javascript-plain",
      },
      {
        logoFile: HTMLIcon,
        name: S.Technologies.html,
        iconClassName: "devicon-html5-plain",
      },
      {
        logoFile: CSSIcon,
        name: S.Technologies.css,
        iconClassName: "devicon-css3-plain",
      },
    ],
    themeColor: theme.colors.api,
  },
  {
    bannerImage: PNSCover,
    websiteUrl: "http://www.pnsmgn.com",
    projectImages: [pns1, pns2, pns3],
    title: "PNS Management, Inc.",
    content:
      "운반 회사의 회계 부서를 위해 만든 웹사이트. 자바스크립트, CSS3 와 HTML5 를 사용해 만들었다.",
    techs: [
      {
        logoFile: JavaScriptIcon,
        name: S.Technologies.javascript,
        iconClassName: "devicon-javascript-plain",
      },
      {
        logoFile: HTMLIcon,
        name: S.Technologies.html,
        iconClassName: "devicon-html5-plain",
      },
      {
        logoFile: CSSIcon,
        name: S.Technologies.css,
        iconClassName: "devicon-css3-plain",
      },
    ],
    themeColor: theme.colors.moonDark,
  },
]
