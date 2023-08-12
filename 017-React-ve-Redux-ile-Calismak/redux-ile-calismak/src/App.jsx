import { useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons"
import ShowReduxStoreInfo from "./ShowReduxStoreInfo"

function App() {
  const value = useSelector(store => store.counter.value)
  console.log(value)

  return (
    <>
      <h1>App</h1>
      <h2>Counter: {value}</h2>
      <CounterButtons />
      <hr />
      <ShowReduxStoreInfo />
    </>
  )
}

export default App
