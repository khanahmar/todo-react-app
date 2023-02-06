import React from "react"

export default function Li(props) {
  const [checked, setChecked] = React.useState(false)

  return (
    <li className={checked ? "check" : ""} key={props.index}>
      {props.item}
      <i
        onClick={() => setChecked(!checked)}
        class="fa-solid fa-check-to-slot"
      ></i>
      <i
        onClick={() => props.delItem(props.item)}
        class="fa-solid fa-trash"
      ></i>
    </li>
  )
}
