import { useState } from "react"

/*
  Ornek:
  function xxx(info) {
    let x = info
    function changeX... 
    return [x, changeX]
  }
*/

export default function Counter() {
  // let counter = 0
  const [counter, setCounter] = useState(0)
  function handleClick() {
    console.log("Handle Click Butonuna Tiklandi ;)")
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={() => console.log("Butona Tiklandi ;)")}>Counter Bilgisi Arttir..</button>
      <button onClick={handleClick}>Counter Bilgisi Arttir..</button>
      <button onClick={() => setCounter(counter + 1)}>Isimsiz Arrow Function ile Counter Bilgisi Arttir..</button>
    </>
  )
}