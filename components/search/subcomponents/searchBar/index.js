import useSearchQueryFetch from '../../../fetch/useSearchQueryFetch'

const SearchBar = ({ item }) => {
  const urlForList =
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false'
  const data = useSearchQueryFetch(urlForList)

  const handleChange = (e) => {
    let newVal = e.target.value
    // this is the hook i made for the fetch. it currently takers the input and a function to set a value,  this is all that is currently needed for this fetch. next step is to rename it as a hook.
    //and then look at more deatil at the available apis. also would like to have an initial fetch set up. need to fix the props that go in as they need adjustment. will consider making this a universal fetch hook as it might be beneficial.
    // i will use the coingecko api as 100 free requests a minute
    // https://api.coingecko.com/api/v3/coins/list?include_platform=false will give us a list, we can store the response and then we will
  }

  return (
    <div>
      <input onChange={(e) => handleChange(e)} type="text" />
      {data && console.log(data.data)}
    </div>
  )
}

export default SearchBar
