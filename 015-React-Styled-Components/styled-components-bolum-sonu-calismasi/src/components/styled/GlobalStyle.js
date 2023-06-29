import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  
  body {
    /* background-color: var(--body-color); */
    background-color: ${(props) => props.theme.colors.bodyColor};
    /* color: var(--text-color); */
    color: ${({ theme }) => theme.colors.textColor};
    margin: 0;
    padding: 0;
  }

  .clear-fix {
    clear: both;
  }

  .mt-10 {
    margin-top: 10px;
  }
`;
