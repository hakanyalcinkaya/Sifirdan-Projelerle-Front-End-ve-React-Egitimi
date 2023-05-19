import { useState } from 'react'


function App() {
  const pictureIDs = [100, 211, 222, 103, 44]
  const [imageId, setImageId] = useState(pictureIDs[0])

  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`

  function handleClick(id) {
    setImageId(id)
  }

  return (
    <main className='container'>
      <hgroup>
        <h2>Mini Gorsel Uygulamasi v1</h2>
        <h3>Gorsel:</h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{width: "100%"}}/>
      <div className="grid" style={{marginTop: "30px"}}>
        {
          pictureIDs.map((item, index) => <div key={index}>
            <img 
              onClick={() => handleClick(item)}
              src={getLoremPicsumImg(item, 100, 100)} 
              alt="" 
            />
          </div>)
        }
      </div>
    </main>
  )
}

/*
5 adet gorsel render etmek icin kullandik..
{
  [...Array(5)].map((item, index) => <div key={index}>
    <img 
      onClick={() => handleClick(200 + index)}
      src={getLoremPicsumImg((200 + index), 100, 100)} 
      alt="" 
    />
  </div>)
}

*/


export default App
