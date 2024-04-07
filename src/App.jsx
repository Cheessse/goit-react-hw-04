import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images.js';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [error, setError] = useState(null)




  useEffect(() => {
    const load = async () => {

      try {
        const { results, total } = await fetchImages(query, page);
        setImages(results)
        setTotalResults(total)
      } catch (error) {
        setError(error.message)
      }
    }

    load();
  }, [query, page])

  const handleSubmit = (query) => {
    setQuery(query)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
    </>
  )
}

export default App
