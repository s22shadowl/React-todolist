import styled, { keyframes } from "styled-components"
import {  theme_color } from "../style/GlobalStyle"

const fireAnimation = keyframes`
    0% {
        box-shadow: 0px 0px 5px 1px ${theme_color.font_main};
    }
    50% {
        box-shadow: 0px 0px 5px 2px ${theme_color.font_main};
    }
    100% {
        box-shadow: 0px 0px 5px 1px ${theme_color.font_main};
    }
`

const FloorDiv = styled.div`
  height: 80px;
  width: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Fire2 = styled.div`
  height: 85%;
  width: 50px;
  border-radius:50% 50% 50% 50% / 90% 90% 10% 10%;
  background-color: ${theme_color.todo_main};
  border: ${theme_color.font_main} solid 15px;
  box-sizing: border-box;
  animation: ${fireAnimation} 3s infinite;

`
const Fire1 = styled(Fire2)`
  transform: rotate(-15deg);
`
const Fire3 = styled(Fire2)`
  transform: rotate(15deg);
`

const Floor = () => {
    return (
        <FloorDiv>
            <Fire1/>
            <Fire2/>
            <Fire3/>
        </FloorDiv>
    )

}

export default Floor