import styled, { keyframes }  from "styled-components"
import React, { useState, useRef } from "react"
import { Button, TodoDiv, theme_color } from "../style/GlobalStyle"
import Todo from "./Todo"
import Potions from "./Potions"

const TodoPotDiv = styled.div`
  background-color: ${theme_color.pot_main};
  height: 60vh;
  width: 60%;
  display: flex;
  flex-direction: column-reverse;
  border-bottom: ${theme_color.pot_sub} 20px solid;
  border-right: ${theme_color.pot_sub} 20px solid;
  border-left: ${theme_color.pot_sub} 20px solid;
  border-top: ${theme_color.background_main} 30px solid;
  border-radius: 0 0 40px 40px;
  position: relative;
`
const TodosDiv = styled.div`
  overflow: hidden;
`
const ButtonPageUp = styled.span`
  background-color: ${theme_color.pot_sub};
  position: absolute;
  height: 50px;
  width: 50px;
  right: -80px;
  top: 20px;
  border-radius: 100%;
  font-size: 2.5rem;
  color: ${theme_color.pot_main};
  &::before {
    content: "▲";
  }
`
const ButtonPageDown = styled(ButtonPageUp)`
  top: 480px;
  &::before {
    content: "▼";
  }
`
const bubblefloat = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    bottom: 90%;
    opacity: 0;
  }
`
const Bubble1 = styled.div`
  opacity: 0;
  position: absolute;
  border-radius: 100%;
  border: ${theme_color.font_sub} 3px solid;
  width: 12%;
  height: 12%;
  bottom: 30%;
  right: 10%;
  animation: ${bubblefloat} 2s linear;
`
const Bubble2 = styled(Bubble1)`
  width: 10%;
  height: 10%;
  bottom: 45%;
  right: 25%;
`
const Bubble3 = styled(Bubble1)`
  width: 7.5%;
  height: 7.5%;
  bottom: 60%;
  right: 15%;
`
const InputBar = styled(TodoDiv)`
  animation: none;
  position: relative;
  background-color: ${theme_color.todo_main};
  font-size: 2.5rem;
  order: 1;
`

const TodoPot = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setValue] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editTodo, setEditTodo] = useState(null)
  const [offset, setOffset] = useState(0)
  const [filter, setFilter] = useState("None")
  const todo_UID = useRef(1)
  const FILTER_MAP = {
    None: (todo) => todo,
    Done: (todo) => todo.isDone,
    UnDone: (todo) => !todo.isDone,
  }

  const filterAll = () => {
    setFilter("None")
  }

  const filterDone = () => {
    setFilter("Done")
  }

  const filterUnDone = () => {
    setFilter("UnDone")
  }

  const clearTodos = () => {
    setTodos([])
    todo_UID.current = 1
  }
  const handleEditTodo = (id) => {
    let newTodo = todos.find((e) => e.id === id)
    setIsEdit(true)
    setValue(newTodo.content)
    setEditTodo(id)
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const toggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      })
    )
  }
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handlePageUp = () => {
      if (offset + 7 >= todo_UID.current - 1) {
        setOffset(todo_UID.current - 8 > 0 ? todo_UID.current - 8 : 0)
      } else {
      setOffset(offset + 7)
    }
  }

  const handlePageDown = () => {
    if (offset - 7 <= 0) {
      setOffset(0)
    } else {
      setOffset(offset - 7)
    }
  }

  const handleTodos = () => {
    let val = inputValue.trim()
    if (val.length === 0) {
      return
    }
    if (editTodo) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editTodo) {
            return {
              ...todo,
              content: val,
            }
          }
          return todo
        })
      )
      setIsEdit(false)
      setEditTodo(null)
      setValue("")
    } else {
      setTodos([
        {
          id: todo_UID.current,
          content: val,
          isDone: false,
        },
        ...todos,
      ])
      todo_UID.current++
      setOffset(todo_UID.current - 8 >= 0 ? todo_UID.current - 8 : 0)
      setValue("")
    }
  }

  const todolist = todos
    .filter(FILTER_MAP[filter])
    .filter((todo) => todo.id > offset && todo.id <= offset + 7)
    .sort((a, b) => {
      return a.id - b.id
    })
    .map((todo) => (
      <Todo
        key={todo.id}
        content={todo.content}
        todo={todo}
        toggleIsDone={toggleIsDone}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todoIsEdit={todo.id === editTodo}
      />
    ))

  return (
    <TodoPotDiv>
      <TodosDiv>
      <InputBar>
        <input
          type="text"
          placeholder="Todo 鍋"
          onChange={handleInputChange}
          value={inputValue}
          maxLength="16"
        />
        <Button onClick={handleTodos}>{isEdit ? "更新" : "新增"}</Button>
      </InputBar>
      {todolist}
      </TodosDiv>
      <ButtonPageUp onClick={handlePageUp}/>
      <ButtonPageDown onClick={handlePageDown}/>
      <Bubble1/>
      <Bubble2/>
      <Bubble3/>
      <Potions
        filter={filter}
        filterAll={filterAll}
        filterDone={filterDone}
        filterUnDone={filterUnDone}
        clearTodos={clearTodos}
      />
    </TodoPotDiv>
  )
}

export default TodoPot
