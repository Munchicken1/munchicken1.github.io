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

interface ITech {
  logoFile: () => JSX.Element
  name: string
}

export interface IProject {
  bannerImage: string
  websiteUrl: string
  projectImages: string[]
  title: string
  content: string
  techs: ITech[]
}

export const projects: IProject[] = [
  {
    bannerImage: ChelseaCover,
    websiteUrl: "https://www.chelseaframingproducts.com",
    projectImages: [chelsea1, chelsea2, chelsea3],
    title: "Chelsea Framing Products",
    content: "lorem",
    techs: [
      { logoFile: JavaScriptIcon, name: S.Technologies.javascript },
      { logoFile: RailsIcon, name: S.Technologies.rubyonrails },
      { logoFile: HTMLIcon, name: S.Technologies.html },
      { logoFile: CSSIcon, name: S.Technologies.css },
      { logoFile: PSQLIcon, name: S.Technologies.postgresql },
    ],
  },
  {
    bannerImage: APICover,
    websiteUrl: "https://www.apinow.com",
    projectImages: [api1, api2, api3],
    title: "Advanced Plastics, Inc.",
    content: "lorem",
    techs: [
      { logoFile: JavaScriptIcon, name: S.Technologies.javascript },
      { logoFile: HTMLIcon, name: S.Technologies.html },
      { logoFile: CSSIcon, name: S.Technologies.css },
    ],
  },
  {
    bannerImage: PNSCover,
    websiteUrl: "http://www.pnsmgn.com",
    projectImages: [pns1, pns2, pns3],
    title: "PNS Management, Inc.",
    content: "lorem",
    techs: [
      { logoFile: JavaScriptIcon, name: S.Technologies.javascript },
      { logoFile: HTMLIcon, name: S.Technologies.html },
      { logoFile: CSSIcon, name: S.Technologies.css },
    ],
  },
]
