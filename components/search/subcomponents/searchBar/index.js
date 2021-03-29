import useSearchQueryFetch from '../../../fetch/useSearchQueryFetch'

const SearchBar = ({ setSearch, item }) => {
  const handleChange = (e) => {
    let newVal = e.target.value
    // this is the hook i made for the fetch. it currently takers the input and a function to set a value,  this is all that is currently needed for this fetch. next step is to rename it as a hook. and then look at more deatil at the available apis.
    useSearchQueryFetch(newVal, setSearch)
  }

  return (
    <div>
      <input onChange={(e) => handleChange(e)} type="text" />
      searchinput{item} bit
    </div>
  )
}

export default SearchBar
