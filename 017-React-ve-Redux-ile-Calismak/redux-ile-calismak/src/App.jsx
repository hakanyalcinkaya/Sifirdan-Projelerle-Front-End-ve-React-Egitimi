import { useDispatch, useSelector } from "react-redux"
import { addMore, increment, reset } from "./store/counter/counterSlice"

function App() {
  const value = useSelector(store => store.counter.value)
  console.log(value)

  const dicpatch = useDispatch()

  return (
    <>
      <h1>App</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dicpatch(increment())}>Arttir</button>
      <button onClick={() => dicpatch(addMore({item: 10}))}>Ekle (10)</button>
      <button onClick={() => dicpatch(reset())}>Reset</button>
    </>
  )
}

export default App
