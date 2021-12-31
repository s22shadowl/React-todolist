import styled, { keyframes } from "styled-components"
import { Button, theme_color } from "../style/GlobalStyle"
import React from "react"

const PotionsDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  margin: 0 10px 0 10px;
  display: flex;
  justify-content: space-around;
  top: -150px;
`
const rotatePotion1 = keyframes`
  from {
    transform:rotate(0deg);
  }
  50% {
    transform:rotate(90deg);
  }
  to {
    transform:rotate(90deg);
  }
`
const dumpPotion = keyframes`
  from {
    height: 100%;
    width: 100%;
  }
  50% {
    left: -50px;
  }
  to {
    left: -50px;
    height: 100%;
    width: 100%;
  }
`
const Potion = styled.div`
  padding: 15px;
  border-radius: 30% 30% 27% 27% / 89% 89% 11% 11% ;
  background-color: ${(props) => (props.isFiltered ? theme_color.potion_main : theme_color.potion_sub)};
  border: ${theme_color.font_sub} 3px solid;
  color: ${theme_color.font_sub};
  height: 20%;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  overflow: hidden;
  &::before {
    position: absolute;
    background-color: ${theme_color.font_sub};
    top: 0px;
    left: 0px;
    content: '';
    height: 30%;
    width: 100%;
  }
  :hover {
    animation: ${rotatePotion1} 2s;
    &::before {
      animation: ${dumpPotion} 2s;
      transform-origin: top left;
    }
  }
`

const Potions = (props) => {
  const { filterDone, filterAll, filterUnDone, clearTodos, filter } = props
  console.log(filter === 'None')
  const clickFilterAll = () => {
    setTimeout(()=> {filterAll()}, 1000)
  }
  const clickFilterDone = () => {
    setTimeout(()=> {filterDone()}, 1000)
  }

  const clickFilterUnDone = () => {
    setTimeout(()=> {filterUnDone()}, 1000)
  }

  const clickClearTodos = () => {
    setTimeout(()=> {clearTodos()}, 1000)
  }
  return (
    <PotionsDiv>
      <Potion onClick={clickFilterAll} isFiltered={filter === 'None' ? true : false}> 顯示全部</Potion>
      <Potion onClick={clickFilterDone} isFiltered={filter === 'Done' ? true : false}>已完成</Potion>
      <Potion onClick={clickFilterUnDone} isFiltered={filter === 'UnDone' ? true : false}>未完成</Potion>
      <Potion onClick={clickClearTodos}>清空</Potion>
    </PotionsDiv>
  )
}

export default Potions
