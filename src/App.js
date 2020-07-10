import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header';
import './App.css';
import axios from 'axios';
import RestaurantGrid from './components/restaurants/RestaurantGrid';
import Search from './components/ui/Search';
import Filter from './components/ui/Filter';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('toronto')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://opentable.herokuapp.com/api/restaurants?city=${query}&per_page=100`);

      // console.log(result.data.restaurants);
      const restaurants = [];
      let r = {};

      for(r of result.data.restaurants) {
        if(r.area.toLowerCase().indexOf(filterText) !== -1 || 
            r.name.toLowerCase().indexOf(filterText) !== -1 || 
            r.address.toLowerCase().indexOf(filterText) !== -1) {
          restaurants.push(r);
        }
      }

      setItems(restaurants);
      setIsLoading(false);
    }

    fetchItems();
  }, [query, filterText]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)}/>
      <Filter getFilterText={t => setFilterText(t)}/>
      <RestaurantGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
