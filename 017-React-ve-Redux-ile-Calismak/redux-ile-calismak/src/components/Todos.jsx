import { useSelector } from "react-redux"

export default function Todos() {
  const todos = useSelector(state => state.todos)
  console.log(todos)

  return (
    <ul>
      {todos?.map((item, index) =>
        <li key={index}>{item}</li>)}
    </ul>
  )
}