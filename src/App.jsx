import { useState } from 'react'
import PickleRick from './assets/PickleRick.webp'
import RickTape from './assets/RickTape.png'
import './App.css'

const items = [
  { id: 1, name: 'Rick and Morty 20" Pickle Rick Plush Pillow', price: '$47.99', isInStock: true },
  { id: 2, name: 'Rick and Morty: Talking Pickle Rick', price: '$13.79', isInStock: true },
  { id: 3, name: 'Rick And Morty Pickle Rick™ Dill Flavored Pickle', price: '$2.00', isInStock: false },
];

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
