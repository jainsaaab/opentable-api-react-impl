import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header'
import './App.css';
import axios from 'axios';
import RestaurantGrid from './components/restaurants/RestaurantGrid'
import Search from './components/ui/Search';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('toronto')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://opentable.herokuapp.com/api/restaurants?city=${query}`);

      // console.log(result.data.restaurants);
      setItems(result.data.restaurants);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)}/>
      <RestaurantGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
