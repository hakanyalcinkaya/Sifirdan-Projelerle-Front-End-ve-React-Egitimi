import { useParams } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"
import Row from "../../components/Row"
import CatCard from "../../components/CatCard"
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi"


export default function AxiosCategory() {
  const { categoryName } = useParams()
  const [data, isLoading, isError, error] = useCategoryAxiosApi(categoryName)

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