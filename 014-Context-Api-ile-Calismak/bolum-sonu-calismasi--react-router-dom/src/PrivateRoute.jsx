import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SiteContext } from "./context/SiteContext";

export default function PrivateRoute({children}) {
  const {user} = useContext(SiteContext)
  
  if (!user?.id) {
    return <Navigate to="/login" replace />
  }
  return children
}