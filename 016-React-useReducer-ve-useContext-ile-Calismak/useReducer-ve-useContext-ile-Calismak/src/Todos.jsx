import { useContext } from "react"
import { SiteContext } from "./context/SiteContext"
import { REMOVE_TODO } from "./reducer/todo"

export default function Todos() {
  const { todos: { state, dispatch } } = useContext(SiteContext)

  return (
    <ul>
      {state?.todos?.map((item) =>
        <li key={item.id}
          onClick={() => dispatch({ type: REMOVE_TODO, payload: item.id })}
        >{item.id} -- {item.title}</li>)}
    </ul>
  )
}