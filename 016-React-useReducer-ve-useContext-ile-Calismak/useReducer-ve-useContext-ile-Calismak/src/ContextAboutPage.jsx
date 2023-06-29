import { useContext, useReducer } from "react"
import { DECREMENT, INCREMENT, RESET } from "./reducer/counter"
import { SiteContext } from "./context/SiteContext"

export default function ContextAboutPage() {
  const {counter: {state, dispatch}} = useContext(SiteContext)

  return <div>
    <h2>Context About Page : Context API Kullanildi..</h2>
    <h2>{state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttir</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sifirla</button>
      <button onClick={() => dispatch("HEBELE")}>Olmayani Yap :)</button>
  </div>
}