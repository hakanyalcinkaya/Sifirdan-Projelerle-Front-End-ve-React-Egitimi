import { useDispatch } from "react-redux"
import { addMore, increment, reset } from "../store/counter/counterSlice"

export default function CounterButtons() {
  const dispatch = useDispatch()
  return <>
    <button onClick={() => dispatch(increment())}>Arttir</button>
    <button onClick={() => dispatch(addMore({ item: 10 }))}>Ekle (10)</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
  </>
}