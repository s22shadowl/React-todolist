import styled from "styled-components"
import { Button, TodoDiv, theme_color } from "../style/GlobalStyle"

const TodoButton = styled(Button)`
  background-color: ${(props) => (props.isDone ? theme_color.font_main : theme_color.font_sub)};
  color: ${(props) => (props.isDone ? theme_color.font_sub : theme_color.font_main)};
`

const TodoButtons = styled.div``

const Todo = ({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  toggleIsDone,
  todoIsEdit,
}) => {
  const clickDelete = () => {
    handleDeleteTodo(todo.id)
  }

  const clickEdit = () => {
    handleEditTodo(todo.id)
  }

  const clickToggle = () => {
    toggleIsDone(todo.id)
  }

  return (
    <TodoDiv isDone={todo.isDone}>
      {todo.content}
      {todoIsEdit ? (
        <TodoButtons style={{ visibility: "hidden" }}>
          <TodoButton />
        </TodoButtons>
      ) : (
        <TodoButtons>
          <TodoButton onClick={clickToggle} isDone={todo.isDone}>
            {todo.isDone ? "已完成" : "未完成"}
          </TodoButton>
          <TodoButton onClick={clickEdit} isDone={todo.isDone}>修改</TodoButton>
          <TodoButton onClick={clickDelete} isDone={todo.isDone}>刪除</TodoButton>
        </TodoButtons>
      )}
    </TodoDiv>
  )
}

export default Todo
