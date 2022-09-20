import styled from "styled-components"

const TitleDecoration = styled.div`
  position: absolute;
  display: block;
  margin: auto;
  width: 240px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 15px;
    display: block;
    height: 1px;
    width: 20%;
    background-color: #aaa;
    transform: translateX(20%);
  }
`
export default TitleDecoration
