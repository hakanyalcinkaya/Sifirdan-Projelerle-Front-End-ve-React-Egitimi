import { useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons"
import ShowReduxStoreInfo from "./ShowReduxStoreInfo"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  const value = useSelector(store => store.counter.value)
  const store = useSelector(store => store)
  console.log(value)
  console.log(store)

  return (
    <>
      <h1>App</h1>
      <hr />
      <AddTodo />
      <hr />
      <Todos />
      <hr />
      <h2>Counter: {value}</h2>
      <CounterButtons />
      <hr />
      <ShowReduxStoreInfo />
    </>
  )
}

export default App
