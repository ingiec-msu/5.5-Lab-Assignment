import { useState } from 'react'
import PickleRick from './assets/PickleRick.webp'
import RickTape from './assets/RickTape.png'
import './App.css'

/* Data structure */
const items = [
  { id: 1, name: 'Rick and Morty 20" Pickle Rick Plush Pillow', price: '$47.99', isInStock: true },
  { id: 2, name: 'Rick and Morty: Talking Pickle Rick', price: '$13.79', isInStock: true },
  { id: 3, name: 'Rick And Morty Pickle Rick™ Dill Flavored Pickle', price: '$2.00', isInStock: false },
];

/* Compoenent 1; Display Items*/
function Merch() {
  const listMerch = items.map(item =>
    <li
      key={item.id}
      style={{
        color: item.isInStock ? 'green' : 'red'
      }}
    >
      {item.name}
    </li>
  );
  return (
    <ul>{listMerch}</ul>
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
