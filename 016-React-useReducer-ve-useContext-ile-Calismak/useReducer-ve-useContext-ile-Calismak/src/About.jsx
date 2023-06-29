import { useReducer } from "react"
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from "./reducer/counter"

export default function About() {
  const [count, dispatch] = useReducer(countReducer, intialCountState)

  return <div>
    <h2>About: Context API Kullanilmadi ;)</h2>
    <h2>{count}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttir</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sifirla</button>
      <button onClick={() => dispatch("HEBELE")}>Olmayani Yap :)</button>
  </div>
}