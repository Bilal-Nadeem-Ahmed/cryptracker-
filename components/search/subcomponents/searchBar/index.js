const SearchBar = ({ setSearch, item }) => {
  const handleChange = (e) => {
    let newVal = e.target.value
    setSearch(newVal)
  }
  return (
    <div>
      <input onChange={(e) => handleChange(e)} type="text" />
      searchinput{item} bit
    </div>
  )
}

export default SearchBar
