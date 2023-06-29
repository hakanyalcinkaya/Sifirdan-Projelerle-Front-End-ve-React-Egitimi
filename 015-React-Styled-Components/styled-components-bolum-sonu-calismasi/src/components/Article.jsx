import parse from 'html-react-parser';
import { StyledArticle, StyledImg } from "./styled"

export default function Article({ title, img, link, content }) {
  return (
    <StyledArticle>
      <header>
        <h2>{title}</h2>
      </header>
      <StyledImg src={img} alt="" />
      {parse(content)}
      <footer><a href={link}>incele</a></footer>
    </StyledArticle>
  )
}

