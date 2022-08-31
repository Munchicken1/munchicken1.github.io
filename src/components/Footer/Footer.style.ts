import styled from 'styled-components'
import EmailIcon from '@mui/icons-material/Email';

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.charcoal};

    padding: 20px;
`

export const FooterIconsContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FooterIconContainer = styled.div`
    margin: 0 10px;
`

export const FooterCopyrightTextContainer = styled.div`
    margin-top: 15px;
`

export const FooterCopyrightText = styled.p`
    color: ${props => props.theme.colors.white};
    font-family: 'Arial', sans-serif;
`