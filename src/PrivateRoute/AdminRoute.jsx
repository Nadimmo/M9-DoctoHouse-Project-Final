import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../components/Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const {isAdmin, isAdminLoading} = useAdmin()
  const location = useLocation();
  //   console.log(location.pathname)
  if (loader || isAdminLoading) {
    return (
      <>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>

};

export default AdminRoute;
