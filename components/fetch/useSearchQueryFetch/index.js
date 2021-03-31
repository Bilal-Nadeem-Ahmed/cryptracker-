import { useState, useEffect } from 'react'
const useSearchQueryFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data), setData(data))
      .catch((err) => console.log(err))
  }, [url])
  return { data }
}

export default useSearchQueryFetch
