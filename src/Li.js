import React from "react"

export default function Li(props) {
  return (
    <li key={props.index}>
      {props.item}
      <i
        onClick={(id) => props.checkClass(props.id)}
        class="fa-solid fa-check-to-slot"
      ></i>
      <i
        onClick={() => props.delItem(props.item)}
        class="fa-solid fa-trash"
      ></i>
    </li>
  )
}
