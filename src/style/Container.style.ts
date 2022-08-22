import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.moon};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`