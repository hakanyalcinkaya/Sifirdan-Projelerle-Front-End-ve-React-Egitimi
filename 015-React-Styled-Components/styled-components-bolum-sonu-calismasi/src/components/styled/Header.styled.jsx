import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};

  & > nav {
    /* width: var(--box-size); */
    width: ${({ theme }) => theme.sizes.boxSize};
    margin: 0 auto;

    & > ul {
      float: left;
      list-style: none;

      &:last-of-type {
        float: right;
      }

      & > li {
        float: left;
        margin-right: 10px;

        &:last-child > a,
        &:last-child > button,
        &:last-child > span {
          /* background-color: var(--blue); */
          background-color: ${({ theme }) => theme.colors.blue};
          color: ${({ theme }) => theme.colors.bgColor};

          &:hover {
            background-color: ${({ theme }) => theme.colors.darkBlue};
            color: ${({ theme }) => theme.colors.blue};
          }
        }

        & > a,
        & > button,
        & > span {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.linkColor};
          padding: 8px 12px;
          border-radius: 4px;

          &:hover {
            color: ${({ theme }) => theme.colors.linkColorHover};
            background-color: ${({ theme }) => theme.colors.silver};
          }
        }
      }
    }
  }
`;
