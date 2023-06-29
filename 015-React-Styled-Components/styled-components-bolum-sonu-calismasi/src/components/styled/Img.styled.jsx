import { styled } from "styled-components";

export const StyledImg = styled.img`
  width: 100%;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.bgColor};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  border-radius: 4px;
  margin: 10px 0;
`