import { Outlet } from "react-router-dom";
import Category from "./Category";

export default function ProductLayout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <Outlet />
        </div>
        <div className="col-sm-4">
          <Category />
        </div>
      </div>
    </>
  )
}