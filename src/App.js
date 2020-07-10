import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header';
import './App.css';
import axios from 'axios';
import RestaurantGrid from './components/restaurants/RestaurantGrid';
import Search from './components/ui/Search';
import Filter from './components/ui/Filter';
import PagesBar from './components/ui/PagesBar';

const App = () => {
  const [data, setData] = useState({restaurants: []})
  const [filteredData, setFilteredData] = useState({restaurants: []})
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('toronto')
  const [filterText, setFilterText] = useState('')
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://opentable.herokuapp.com/api/restaurants?city=${query}&per_page=50&page=${pageNo}`);
      setData(result.data);
      setFilteredData(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query, pageNo]);

  useEffect(() => {
      const restaurants = [];
      let r = {};

      for(r of data.restaurants) {
        if(r.area.toLowerCase().indexOf(filterText) !== -1 || 
            r.name.toLowerCase().indexOf(filterText) !== -1 || 
            r.address.toLowerCase().indexOf(filterText) !== -1) {
          restaurants.push(r);
        }
      }

      setFilteredData({...data, restaurants: restaurants});
  }, [data, filterText]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)}/>
      <Filter getFilterText={t => setFilterText(t)}/>
      <RestaurantGrid items={filteredData.restaurants} isLoading={isLoading}/>
      <br />
      <PagesBar 
        clicked={n => setPageNo(Number(n))}
        curPage={pageNo}
        totalPages={Math.ceil(data.total_entries / data.per_page)} />
        <br /><br /><br />
    </div>
  );
}

export default App;