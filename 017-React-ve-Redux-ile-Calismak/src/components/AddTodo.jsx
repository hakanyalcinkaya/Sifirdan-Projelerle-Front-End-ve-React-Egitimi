import { useDispatch } from "react-redux"
import { addTodo } from "../store/todo/todoSlice"

export default function AddTodo() {
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements[0].value
    // dispatch({ type: ADD_TODO, payload: inputValue })
    dispatch(addTodo(inputValue))
    event.target.reset()
  }


  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="todo bilgisini giriniz" />
      <button type="submit">Ekle</button>
    </form>
  </>
}