import { Products } from "../products";

export default function Home({user}) {
  
  return (
    <>
      <h1>Ana Sayfa</h1>
      <Products user={user} />      
    </>
  )
}