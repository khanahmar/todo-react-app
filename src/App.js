import "./App.css"
import React from "react"
import Li from "./Li"
import { nanoid } from "nanoid"

function App() {
  const [todo, setTodo] = React.useState("")

  const [list, setList] = React.useState(
    () => JSON.parse(localStorage.getItem("list")) || []
  )

  let checkStyle = ""

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  function takeInput(event) {
    setTodo((prevTodo) => {
      return event.target.value
    })
  }

  function checkClass(id) {
    console.log(id)
  }

  function enterTodo() {
    if (todo !== "") {
      setTodo("")
      setList((prevList) => {
        return [...prevList, todo]
      })
    }
  }

  function delItem(item) {
    let newTodo = list.filter((text) => text !== item)
    setList(newTodo)
  }

  console.log(list)

  return (
    <div className="App">
      <div className="inp-cont">
        <input
          name="todo"
          onChange={takeInput}
          value={todo}
          className="inp"
          placeholder="Todo"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              enterTodo()
            }
          }}
        />
        <span onClick={enterTodo}>+</span>
      </div>
      <ul className="list">
        {list.map((item, index) => {
          return (
            <Li
              checkClass={checkClass}
              id={nanoid()}
              item={item}
              index={index}
              delItem={delItem}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
