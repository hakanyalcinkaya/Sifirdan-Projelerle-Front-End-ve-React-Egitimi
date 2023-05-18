import { useState } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

export default function CardV2() {
  const [like, setLike] = useState(0)

  // const handleClick = () => setLike(prev => prev + 1)
  function handleClick() {
    setLike(prev => prev + 1)
  }

  return (
    <div
      style={{
        border: "1px solid #bdc3c7",
        padding: "4px",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "10px"
      }}
    >
      <CardHeader like={like} />
      <button onClick={handleClick}>Like</button>
      <ul>
        <li>Lorem.</li>
        <li>Temporibus?</li>
        <li>Nihil!</li>
      </ul>
      <CardFooter like={like} handleClick={handleClick} setLike={setLike} />
    </div>
  )
}