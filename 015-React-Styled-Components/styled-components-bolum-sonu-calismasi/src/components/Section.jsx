import Article from "./Article";
import { StyledSection } from "./styled";

const articles = [
  {
    title: "Lorem Ipsum Dolor",
    src: "https://picsum.photos/id/237/1200/450",
    content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat saepe corrupti, hic fugit nemo illum suscipit possimus est sit.</p>
    <p>Assumenda fugiat et vitae! Maxime, ducimus numquam optio itaque, inventore accusantium quos quas, iure autem aliquid assumenda tempora alias iusto!</p>`,
    link: '#',
  },
  {
    title: "Lorem Ipsum 2",
    src: "https://picsum.photos/id/1027/1200/450",
    content: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quaerat saepe corrupti, hic fugit nemo illum suscipit possimus est sit.</p>
    <p>Assumenda fugiat et vitae! Maxime, ducimus numquam optio itaque, inventore accusantium quos quas, iure autem aliquid assumenda tempora alias iusto!</p>`,
    link: '#',
  }

]

export default function Section() {
  return <StyledSection>
    {
      articles.map((item, index) => 
      <Article 
        key={index}
        title={item.title} 
        img={item.src}
        content={item.content}
        link={item.link}
      />)
    }
  </StyledSection>
}