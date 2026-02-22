import { useState } from 'react'
import PickleRick from './assets/PickleRick.webp'
import RickTape from './assets/RickTape.png'
import Plush from './assets/Plush.avif'
import Talking from './assets/Talking.webp'
import Dill from './assets/Dill.webp'
import './App.css'

/* Data structure */
const items = [
  { id: 1, name: 'Rick and Morty 20" Pickle Rick Plush Pillow', price: '$47.99', isInStock: true, img: Plush},
  { id: 2, name: 'Rick and Morty: Talking Pickle Rick', price: '$13.79', isInStock: true, img: Talking},
  { id: 3, name: 'Rick And Morty Pickle Rick™ Dill Flavored Pickle', price: '$2.00', isInStock: false, img: Dill},
];

/* Compoenent 1; Display Items*/
function Merch() {
  const listMerch = items.map(item =>
    <div key={item.id}>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {item.img &&
      <img
        className="bookCover"
        src={item.img}
        //alt={book.title + ' cover'}
        style={{ width: '150px' }}
      />
      }
    </div>
  );
  return (
    <div>{listMerch}</div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={RickTape} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={PickleRick} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Pickle Rick!</h1>

      <h2>Merch List</h2>
      <Merch />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
