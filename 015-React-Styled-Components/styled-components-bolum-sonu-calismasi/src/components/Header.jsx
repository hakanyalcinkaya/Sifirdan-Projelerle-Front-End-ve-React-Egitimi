import { useContext } from "react";
import { StyledHeader } from "./styled/Header.styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { SiteContext } from "../context/SiteContext";

export default function Header() {
  const { themeName, handleTheme } = useContext(SiteContext);

  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <strong>Pico React</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <span onClick={handleTheme}>
              {themeName == "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </span>
          </li>
        </ul>
      </nav>
      <div className="clear-fix"></div>
    </StyledHeader>
  );
}
