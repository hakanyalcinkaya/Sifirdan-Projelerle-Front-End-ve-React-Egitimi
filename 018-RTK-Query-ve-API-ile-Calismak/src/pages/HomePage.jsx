import { useEffect, useState } from "react"
import LoadingComponent from "../components/LoadingComponent"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL

export default function HomePage() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
    const response = await fetch(`${VITE_CAT_API_URL}/breesds`)
    const responseData = await response.json()
    if (!response.ok) {
      setIsError(true)
      setError("Veri Alanimadi")
      throw new Error("Veri Alinamadi")
    }
    console.log(responseData)
    setData(responseData)
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => getApiData(), 1500)
  }, [])

  return (
    <div className="col-sm-8 offset-sm-2">
      <h1>Ana Sayfa</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
    </div>
  )
}