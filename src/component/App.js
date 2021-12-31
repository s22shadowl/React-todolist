import React from "react"
import Floor from "./Floor"
import TodoPot from "./TodoPot"
import GlobalStyle, { theme_color } from "../style/GlobalStyle"

function App() {
  return (
    <div style={{ backgroundColor: theme_color.background_sub }}>
      <GlobalStyle />
      <div className="container">
        <TodoPot />
        <Floor/>
      </div>
    </div>
  )
}

export default App
