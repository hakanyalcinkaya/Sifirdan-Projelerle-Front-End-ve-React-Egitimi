import Aside from "./Aside";
import Section from "./Section";
import { StyledMain } from "./styled";

export default function Main() {
  return <StyledMain className="mt-10">
    <Aside />
    <Section />
  </StyledMain>
}