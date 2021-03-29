import { useState } from 'react'
import SearchBar from './subcomponents/searchBar'
const Search = () => {
  const [searchQuery, setSearchQuery] = useState()
  return (
    <div>
      <SearchBar setSearch={setSearchQuery} item={searchQuery} />
    </div>
  )
}

export default Search
