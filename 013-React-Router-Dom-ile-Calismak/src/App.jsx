import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
