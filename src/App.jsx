import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images.js';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Loader from './components/Loader/Loader.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [isError, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)





  useEffect(() => {
    const load = async () => {

      try {
        setLoading(true)
        const { results, total } = await fetchImages(query, page);
        setImages(results)
        setTotalResults(total)
      } catch (error) {
        setError('Error fetching images. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    load();
  }, [query, page])

  const handleSubmit = (query) => {
    setQuery(query)
    if (totalResults === 0) {
      toast.error("Please enter a search query.")
    }
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage ErrorMessage={isError} />}
      <ImageGallery images={images} />
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
    </>
  )
}

export default App
