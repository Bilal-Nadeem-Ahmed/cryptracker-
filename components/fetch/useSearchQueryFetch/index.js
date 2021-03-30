import { useState, useEffect } from 'react'
const useSearchQueryFetch = (url) => {
  // const [data, setData] = useState(null)
  const data = 2
  useEffect(() => {
    fetch(url)
      .then(res.json())
      .then(console.log(res))
      .catch((err) => console.log(err))
  }, [])
  g(url)
  setSearch(val)
  return { data }
}

export default useSearchQueryFetch
