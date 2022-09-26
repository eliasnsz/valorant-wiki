import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url) {

  const [data, setData] = useState(null) 

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
  }, [])

  return { data }

}