import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    ul {
        list-style: none;
    }

    .carousel-root {
        height: 100%;
    }
    .carousel-slider {
        height: 100%;
    }
    .slider-wrapper {
        height: 100%;
    }
    .slider {
        height: 100%;
    }
    .slide {
        height: 100%
    }
    .carousel .control-dots {
        width: 15%;
        border-radius: 5px;
        transform: translate(-50%, 0);
        left: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
    }
    a.social-icon{
        transition: all 0.3s ease-out;
        :hover {
            g.social-svg-mask {
                fill: ${(props) => props.theme.colors.moonComplementary} !important;
            }
        }
    }
    a.social-icon {
        transition: all 0.3s ease-out;
        :hover {
            width: 55px !important;
            height: 55px !important;
        }
    }
    

`
