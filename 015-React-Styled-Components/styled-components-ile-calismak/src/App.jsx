import { useState } from 'react'
import { StyledContainer } from './components/styled'
import { Button } from './components/Button'
import { CoolButton, StrongButton, SubmitButton } from './components/Button/Button.styled'
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);    
  }
`

const CanadaStyledIcon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  animation: ${rotate} 3s linear infinite;
  color: ${ (props) => props.theme.colors.canada };
  `

const StyledImg = styled.img`
  
  width: 100%;
  padding: 4px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;

  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`

function App() {
  const [count, setCount] = useState(0)

  // <div style={{backgroundColor: "red"}}>
  //   </div>

  return (
    <>
    <StyledContainer>
      <StyledImg src="https://picsum.photos/id/1037/1200/300" />
      <hr />
      <CanadaStyledIcon />
      <h1>Styled Container Uygulandi ;)</h1>
      <Button $primary className="btn mr-50" style={{marginBottom: "5px"}} >
        Incele
      </Button> gdrfgdfgdfgdrfdfg
      <br />
      <StrongButton $primary>
        Strong Button..
      </StrongButton>
      <br />
      <CoolButton as="a" href="http://google.com" target="_blank">
        Cool Button..
      </CoolButton>
      <br />
      <SubmitButton $primary>Kaydet..</SubmitButton>
    </StyledContainer>
    </>
  )
}

export default App
