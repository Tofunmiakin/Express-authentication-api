import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AppContext } from "../context";

const ProtectedRoutes = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const useAuth = () => {
    return isLoggedIn;
  };
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;