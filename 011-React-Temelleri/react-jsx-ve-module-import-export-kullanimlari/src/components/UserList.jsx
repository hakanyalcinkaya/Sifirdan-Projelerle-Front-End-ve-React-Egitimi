// https://react.dev/learn/importing-and-exporting-components
import Button from "./Button"
import {USERS} from "../data"

const ITEMS = [
  1,2,3
]

function UserList() {
  return (
  <>
    <h2>Kullanici Listesi</h2>
    {/* <ul>
      <li>Lorem.</li>
      <li>Ullam.</li>
      <li>Temporibus?</li>
      <li>Expedita.</li>
      <li>Dolores.</li>
    </ul> */}
    <ul>
      {USERS.map((user, index) => <li key={index}>{user}</li> )}
    </ul>
    <hr />
    <Button farkli-bilgi="hebele.." />
    <hr />
  </>
  )
}

// Not: Bir Component Dosyasi Icinde Genellikle 1 Component Bekleriz :) Ikincisini Baska Dosyaya Almak Lazim..
function SingleUser() {
  // aciklama
  return (
  <>
    <h3>SingleUser Component Icindeki Bilgi</h3>
    <div>
    </div>
  </>
  )
}

export {ITEMS, SingleUser}
export default UserList