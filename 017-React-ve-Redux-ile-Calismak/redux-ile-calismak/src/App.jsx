import { useDispatch, useSelector } from "react-redux"
import { increment } from "./store/counter/counterSlice"

function App() {
  const value = useSelector(store => store.counter.value)
  console.log(value)

  const dicpatch = useDispatch()

  return (
    <>
      <h1>App</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dicpatch(increment())}>Arttir</button>
    </>
  )
}

export default App
