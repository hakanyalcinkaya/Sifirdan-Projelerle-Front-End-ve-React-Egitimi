import { Link } from "react-router-dom"
import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer"
import LoadingComponent from "../../components/LoadingComponent"

export default function RTKQueryCategories() {
  const { data, isLoading, isError, error } = useFetchCategoriesQuery()

  return (
    <div className="col-sm-12">
      <h1>RTK Query: Kategoriler</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group">
        {data?.map(item => <li className="list-group-item" key={item.id}>
          <Link to={`/rtk-query-category/${item.id}`}>{item.name}</Link>
        </li>)}
      </ul>
    </div>
  )
}