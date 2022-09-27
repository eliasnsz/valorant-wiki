import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url) {

  const [data, setData] = useState(null) 
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .finally(setIsFetching(false))
  }, [])

  return { data, isFetching }

}