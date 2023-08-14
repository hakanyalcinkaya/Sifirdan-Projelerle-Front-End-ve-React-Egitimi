import { useParams } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"
import useCategoryFetchApi from "../../customHooks/useCategoryFetchApi"
import Row from "../../components/Row"
import CatCard from "../../components/CatCard"

const VITE_CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY


export default function FetchCategy() {
  const { categoryName } = useParams()
  const [data, isLoading, isError, error] = useCategoryFetchApi(categoryName)

  return (
    <div className="col-sm-12">
      <h1>Fetch: Kategori: {categoryName}</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <Row className="row-cols-sm-3">
        {data.map(item => <CatCard key={item.id} imgSrc={item.url} />)}
      </Row>
    </div>
  )
}