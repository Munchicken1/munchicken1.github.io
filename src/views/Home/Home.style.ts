import styled from 'styled-components'
import { Container } from '../../style/Container.style'

export const HomeContainer = styled(Container)`
    height: 100vh;
`

export const HomeText = styled.p`
    color: ${(props) => props.theme.colors.charcoal};
    font-size: 42px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
`

export const CountryIcon = styled.span`
    margin: 20px;
    font-size: 50px;
    border-bottom: 2px solid transparent;

    :hover {
        cursor: pointer;
        border-bottom: 2px solid black;
        font-size: 60px;
    }
    transition: all 0.3s ease-out;
`

export const IconsContainer = styled.div`
    bottom: 25px;
    position: absolute;
`