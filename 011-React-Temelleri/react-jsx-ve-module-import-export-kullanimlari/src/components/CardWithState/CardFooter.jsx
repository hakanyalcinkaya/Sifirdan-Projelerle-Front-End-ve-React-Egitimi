// props icindeki bilgileri aldik ;)
export default function CardFooter({ like, handleClick, setLike}) {
  return (
    <>
      <h2>Card Footer ( {like} ) </h2>
      <button onClick={handleClick}>Footer {"->"} Like</button>
      <button onClick={() => setLike(prev => prev + 1)}>Footer setLike ile Degistir  {"->"} Like</button>
    </>
  )
}