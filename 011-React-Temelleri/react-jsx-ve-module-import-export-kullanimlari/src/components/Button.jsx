// export default function Button() {
//   return <button>Button Component</button>
// }


// // 1: Yontem:
// export default function Button(props) {
//   // props = object
//   console.log(props)
//   return <button className={props.className} data-id={props.dataId}>{props.info}</button>
// }

// // 2: Yontem:
// export default function Button(props) {
//   // props = object
//   const {className, dataId, info} = props // destructuring
//   return <button className={className} data-id={dataId}>{info}</button>
// }

// 3: Yontem:
export default function Button( {className, dataId, info} ) {
  // props = object
  // const {className, dataId, info} = props // buna gerek kalmadi..
  return <button className={className} data-id={dataId}>{info}</button>
}

// export default Button