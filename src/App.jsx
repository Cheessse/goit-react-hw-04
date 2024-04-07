import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchImages } from './api/images.js';

function App() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const load = async () => {

      try {
        const resData = await fetchImages(query);
        console.log(resData)
        
      } catch (error) {
        console.log(error)
      }
    }

    load();
  }, [query])

  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
