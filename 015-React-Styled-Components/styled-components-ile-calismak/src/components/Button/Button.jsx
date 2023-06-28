import { StyledButton } from "./Button.styled";

export function Button({children, ...otherProps}) {
  return <StyledButton {...otherProps}>
    {children}
  </StyledButton>
}