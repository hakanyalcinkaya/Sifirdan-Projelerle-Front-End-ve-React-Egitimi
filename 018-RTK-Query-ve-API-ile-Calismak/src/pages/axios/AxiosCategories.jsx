import { Link } from "react-router-dom"
import useCategoriesAxiosApi from "../../axiosCustomHooks/useCategoriesAxiosApi"
import LoadingComponent from "../../components/LoadingComponent"

export default function AxiosCategories() {
  const [data, isLoading, isError, error] = useCategoriesAxiosApi()
  console.log(data)
  return (
    <div className="col-sm-12">
      <h1>Axios: Kategoriler</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group">
        {data.map(item => <li className="list-group-item" key={item.id}>
          <Link to={`/axios-category/${item.id}`}>{item.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}