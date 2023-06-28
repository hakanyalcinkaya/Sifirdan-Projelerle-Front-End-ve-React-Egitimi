import { styled } from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #3498db;
  border-radius: 6px;
  background-color: ${ (props) => {
    console.log(props)
    return props?.$primary ? "#3498db" : "transparent"
  } };
  color: ${ ({$primary}) =>  $primary ? "white" : "black" };

  &:hover {
    background-color: ${ (props) => props?.$primary ? "#9b59b6" : "#f1c40f" };
  }
`

// const info = `${() =>  "xxx" }`