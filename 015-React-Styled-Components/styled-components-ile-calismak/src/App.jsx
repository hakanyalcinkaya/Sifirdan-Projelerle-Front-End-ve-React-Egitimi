import { useState } from 'react'
import { StyledContainer } from './components/styled'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  // <div style={{backgroundColor: "red"}}>
  //   </div>

  return (
    <>
    <StyledContainer>
      <h1>Styled Container Uygulandi ;)</h1>
      <Button $primary className="btn">
        Incele
      </Button>
    </StyledContainer>
    </>
  )
}

export default App
