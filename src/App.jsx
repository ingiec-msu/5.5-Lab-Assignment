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
function Merch({ items }) {
  return (
    <div className="merchContainer">
      {items.map(item => (
        <div
          key={item.id}
          style={{ color: item.isInStock ? 'green' : 'red' }}
        >
          <h2>{item.name}</h2>
          <p>{item.price}</p>

          {item.img && (
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '120px' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

//Filtering items that are in stock
function FilterBar({ showInStockOnly, setShowInStockOnly }) {
  return (
    <button onClick={() => setShowInStockOnly(!showInStockOnly)}>
      {showInStockOnly ? "Show All" : "Show In-Stock Only"}
    </button>
  );
}

function SortBar({ sortOrder, setSortOrder }) {
  return (
    <button onClick={() => setSortOrder(sortOrder === 'lowToHigh' ? 'none' : 'lowToHigh')}>
      {sortOrder === 'lowToHigh' ? 'Unsort' : 'Sort by Price (Low to High)'}
    </button>
  );
}


function App() {
  const [count, setCount] = useState(0)
  //Adding filter state
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [sortOrder, setSortOrder] = useState('none')

  //Filtering items that are in stock
  const filteredItems = showInStockOnly
    ? items.filter(item => item.isInStock)
    : items

  const sortedItems = sortOrder === 'none' ? filteredItems : [...filteredItems].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));
    return priceA - priceB;
  });

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
      <FilterBar 
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <Merch items={sortedItems} />
      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
