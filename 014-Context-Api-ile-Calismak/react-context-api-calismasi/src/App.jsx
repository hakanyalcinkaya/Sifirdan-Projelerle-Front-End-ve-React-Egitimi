import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
        <h1>App</h1>
        </div>
      </div>
    </>
  )
}

export default App
