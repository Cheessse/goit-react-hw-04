import css from './SearchBar.module.css'
import { GoSearch } from "react-icons/go";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            toast.error("Please enter a search query.")
            return
        }

        setQuery('')
    }
    return (
        <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search images and photos"
                />
            <button className={css.btn} type="submit" ><GoSearch size={20}/></button>
            </form>
            <Toaster
            position="top-right"
            reverseOrder={false}
            />
        </header>
    )
}

export default SearchBar