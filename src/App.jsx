import { useState } from 'react'
import PickleRick from './assets/PickleRick.webp'
import RickTape from './assets/RickTape.png'
import Plush from './assets/Plush.avif'
import Talking from './assets/Talking.webp'
import Dill from './assets/Dill.webp'
import Gummy from './assets/Gummy.avif'
import Spray from './assets/Spray.jpg'
import Cup from './assets/cup.avif'
import Dancer from './assets/dancer.webp'
import Rat from './assets/rat.jpg'
import './App.css'

/* Data structure */
const items = [
  { id: 1, name: 'Rick and Morty 20" Pickle Rick Plush Pillow', price: '$47.99', isInStock: true, link: 'https://www.walmart.com/ip/Rick-and-Morty-20-Pickle-Rick-Plush-Pillow/271336925?wmlspartner=wlpa&selectedSellerId=1143&selectedOfferId=039A66A332C0489484C9B12356C0B840&conditionGroupCode=1', img: Plush},
  { id: 2, name: 'Rick and Morty: Talking Pickle Rick', price: '$13.79', isInStock: true, link: 'https://www.worldofbooks.com/products/rick-and-morty-talking-pickle-rick-book-robb-pearlman-9780762494347?sku=NIN9780762494347', img: Talking},
  { id: 3, name: 'Rick And Morty Pickle Rick™ Dill Flavored Pickle', price: '$2.00', isInStock: false, link: 'https://www.fivebelow.com/products/rick-and-morty-pickle-rick-dill-flavored-pickle-9161917', img: Dill},
  { id: 4, name: 'Pickle Rick Gummy', price: '$5.99', isInStock: false, link: 'https://www.walmart.com/ip/Boston-America-Rick-and-Morty-PICKLE-RICK-GUMMY-CANDY-Dill-Pickle-Flavored/989829842', img: Gummy},
  { id: 5, name: 'Rick and Morty X SHEGLAM Pickle Rick Setting Spray', price: '$9.69', isInStock: true, link: 'https://us.sheglam.com/en/product/Rick-and-Morty-X-SHEGLAM-Pickle-Rick-Setting-Spray-11345031534396480?currency=USD&ggf=google&url_from=adhub450447520&pf=Google&cid=22432441828&setid=176179371965&adid=745334788514&network=g&target=&kwd=pla-294682000766&geoid=9017204&gad_source=4&gad_campaignid=22432441828&gbraid=0AAAAACKdJgNBjqfpfm9rTYIxArgB-oZe6&gclid=EAIaIQobChMI0pjNoJfukgMVOizUAR2sZDZ9EAQYAyABEgL_VfD_BwE', img: Spray},
  { id: 6, name: 'Pickle Rick Stein Glass', price: '$16.99', isInStock: false, link: 'https://us.zavvi.com/p/gift-home-office/pickle-rick-stein-glass/12086217', img: Cup},
  { id: 7, name: 'Rick and Morty Pickle Rick Dashboard Dancer', price: '$14.90', isInStock: false, link: 'https://www.boxlunch.com/product/rick-and-morty-pickle-rick-dashboard-dancer---boxlunch-exclusive/12032827.html?srsltid=AfmBOopvadLqtQ5bfnLkhSLE02JLo84qVzSYNxX6TD7eP3YNimSloTxS', img: Dancer},
  { id: 8, name: 'Funko Rick and Morty Pickle Rick Action Figure', price: '$20.00', isInStock: false, link: 'https://stores.comichub.com/geek_geek_nerd_nerd/Product/OutOfStock/funko-rick-morty-pickle-rick-action-figure', img: Rat}
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
