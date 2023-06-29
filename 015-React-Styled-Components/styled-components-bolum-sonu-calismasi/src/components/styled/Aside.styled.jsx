import { styled } from "styled-components";

export const StyledAside = styled.aside`
  float: left;
  width: 30%;
  padding: 20px;

  & > ul {
    list-style: none;
    
    & > li {
      margin-bottom: 10px;

      & > a {
        color: ${ ({theme}) => theme.colors.linkColor };
        padding: 6px 10px;
        display: block;
        text-decoration: none;

        &:hover {
          /* color: var(--text-color); */
          color: ${ ({theme}) => theme.colors.textColor };
        }

      }

    }

  }
`