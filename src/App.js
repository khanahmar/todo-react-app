import "./App.css"
import React from "react"
import Li from "./Li"

function App() {
  const [todo, setTodo] = React.useState("")

  const [list, setList] = React.useState(
    () => JSON.parse(localStorage.getItem("list")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])

  function takeInput(event) {
    setTodo((prevTodo) => {
      return event.target.value
    })
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

  return (
    <div className="App">
      <img
        className="todo-img"
        width="400px"
        src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676__340.png"
      />
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
          return <Li id={index} item={item} index={index} delItem={delItem} />
        })}
      </ul>
    </div>
  )
}

export default App
