import { useState, useEffect } from 'react'
const useSearchQueryFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => {
        setData(info)
      })
      .catch((err) => console.log(err))
  }, [])
  return { data }
}

export default useSearchQueryFetch
