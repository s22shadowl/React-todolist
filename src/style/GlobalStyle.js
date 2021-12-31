import styled, { createGlobalStyle, keyframes } from "styled-components"

const theme_color = {
  background_main: '#2F0000',
  background_sub: '#91989f',
  font_main: '#ff2400',
  font_sub: '#f5f5dc',
  pot_main: '#00bb00',
  pot_sub: '#5B5B5B',
  todo_main: '#ffc408',
  todo_sub: '#F75000',
  potion_main: '#ff2400',
  potion_sub: '#0080FF',
}

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "微軟正黑體";
        font-weight: bold;
    }
    body {
      margin: 0;
    }
    .container {
        background-color: ${theme_color.background_main};
        height: 100%;
        width: 1000px;
        display: flex;
        margin: 0px auto;
        text-align: center;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    input {
        background-color: inherit;
        width: 70%;
        border: none;
        color: ${theme_color.font_main};
        font-size: 1.5rem;
        -webkit-appearance: none;
        :focus-visible {
          outline: none;
        } 
    }
    ::placeholder {
        color: white;
    }
`

const Button = styled.span`
  background-color: ${theme_color.font_main};
  margin: 5px;
  padding: 5px;
  font-size: 24px;
  color: ${theme_color.font_sub};
  height: 60%;
  border-radius: 3px;
`
const todoSlideInAnimation = keyframes`
  from {
    transform:rotate(-5deg);
    margin-top:500px;
  }
  50% {
    transform:rotate(5deg);
    margin-top:10px
  }
  75% {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(0deg);
  }
`

const TodoDiv = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => (props.isDone ? theme_color.todo_main : theme_color.todo_sub)};
  text-align: left;
  font-size: 1.5rem;
  color: ${(props) => (props.isDone ? theme_color.font_main : theme_color.font_sub)};
  align-items: center;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  animation: 0.5s ${todoSlideInAnimation};
`

export default GlobalStyle
export { Button, TodoDiv, theme_color }
