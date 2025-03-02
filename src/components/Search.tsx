'use client'

import '@/styles/Search.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { searchUserSupplierByKeyword } from '@/lib/api'
import { Supplier } from './ListSuppliers'

interface SearchProps {
  onSearch: (results: Supplier[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //TODO: handle error
    const { data } = await searchUserSupplierByKeyword(searchTerm)
    console.log(onSearch, data)
    onSearch(data ? data : [])
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='form-search'
        type="text"
        placeholder="Barbería, manicura, peluqería etc."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">
        <FontAwesomeIcon className='form-icon' icon={faMagnifyingGlass} />
      </button>
    </form>
  )
}

export default Search