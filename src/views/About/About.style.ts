import styled, { css } from "styled-components"
import { Container } from "../../style/Container.style"
import { device } from "style/media"

const ColumnPadding = "20px"

interface IProps {
  currentLanguage: string
  isVisible: boolean
}

export const AboutContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 40px 20px;
  }
  @media ${device.tablet} {
    padding: 40px 150px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${ColumnPadding};
  overflow: hidden;

  @media ${device.mobile} {
    min-width: 0;
  }
  @media ${device.tablet} {
    min-width: 400px;
  }
  @media ${device.bigScreen} {
    min-width: 900px;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  /* padding: ${ColumnPadding}; */

  @media ${device.mobile} {
    min-width: 300px;
  }
  @media ${device.tablet} {
    min-width: 500px;
  }
  @media ${device.bigScreen} {
    min-width: 900px;
    margin-left: 20px;
  }
`

export const AboutTitlesContainer = styled.ul`
  list-style: none;
  overflow: hidden;

  @media ${device.mobile} {
    height: 75px;
  }
  @media ${device.tablet} {
    height: 105px;
  }
  @media ${device.bigScreen} {
    height: 200px;
  }
`

export const AboutTitle = styled.li<IProps>`
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.charcoal};
  font-weight: 600;
  white-space: nowrap;

  @media ${device.mobile} {
    font-size: 24px;

    @keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -120%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -240%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -360%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -480%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @-webkit-keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -120%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -240%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -360%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -480%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  }
  @media ${device.tablet} {
    font-size: 36px;

    @keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -113%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -226%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -339%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -452%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @-webkit-keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -113%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -226%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -339%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -452%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  @media ${device.bigScreen} {
    font-size: 72px;

    @keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -107%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -214%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -321%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -428%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    @-webkit-keyframes change {
      0%,
      4%,
      100% {
        transform: translate3d(0, 0, 0);
      }
      20%,
      24% {
        transform: translate3d(0, -107%, 0);
      }
      40%,
      44% {
        transform: translate3d(0, -214%, 0);
      }
      60%,
      64% {
        transform: translate3d(0, -321%, 0);
      }
      80%,
      84% {
        transform: translate3d(0, -428%, 0);
      }
      99%,
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  ${(props) => {
    if (props.isVisible) {
      return css`
        animation-name: change;
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-delay: 1.5s;
      `
    }
  }}

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  @-webkit-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  ${(props) => {
    if (props.currentLanguage === "KR") {
      return css`
        font-family: "Gowun Dodum";
      `
    } else {
      return css`
        font-family: "Aboreto";
      `
    }
  }}
`

export const AboutTextsContainer = styled.div`
  margin-top: 20px;
  overflow: hidden;
`
export const AboutText = styled.p<IProps>`
  font-size: 18px;
  line-height: 200%;
  color: ${(props) => props.theme.colors.charcoal};
  /* font-family: "Quicksand", sans-serif; */

  ${(props) => {
    if (props.currentLanguage === "KR") {
      return css`
        font-family: "Gowun Dodum";
      `
    } else {
      return css`
        font-family: "Quicksand", sans-serif;
      `
    }
  }}
`
