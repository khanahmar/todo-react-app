import "./App.css"
import React from "react"

function App() {
  const [todo, setTodo] = React.useState("")

  const [list, setList] = React.useState(() =>
    JSON.parse(localStorage.getItem("list"))
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

  function enterTodo() {
    if (todo !== "") {
      setTodo((prevValue) => "")
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
            <li key={index} className={checkStyle}>
              {item}
              <i
                onClick={() => {
                  console.log(checkStyle)
                  checkStyle = "check"
                }}
                class="fa-solid fa-check-to-slot"
              ></i>
              <i onClick={() => delItem(item)} class="fa-solid fa-trash"></i>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
