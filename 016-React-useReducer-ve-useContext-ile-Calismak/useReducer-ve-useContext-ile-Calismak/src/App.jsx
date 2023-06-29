import { useReducer, useState, useContext } from 'react'
import { DECREMENT, INCREMENT, RESET, countReducer, intialCountState } from './reducer/counter'
import About from './About'
import { SiteContext } from './context/SiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddTodo from './AddTodo'


function App() {
  const { counter: { state, dispatch } } = useContext(SiteContext)
  console.log(state)
  // const [count, dispatch] = useReducer(countReducer, intialCountState)
  // const [count, setCount] = useState(0)

  // function increment() {
  //   setCount(prev => prev + 1)
  // }

  // function decrement() {
  //   setCount(prev => prev - 1)
  // }

  // function reset() {
  //   setCount(0)
  // }

  return (
    <>
      <AddTodo />
      <hr />
      <h2>Count ::: {state}</h2>
      <button onClick={() => dispatch(INCREMENT)}>Arttir</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sifirla</button>
      <hr />
      <ContextAboutPage />
      <hr />
      <About />
    </>
  )
}

export default App
