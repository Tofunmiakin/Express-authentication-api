import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AppContext } from "../context";

const ProtectedRoutes = () => {
  const { userSession, setUserSesison } = useContext(AppContext);

  const useAuth = () => {
    return userSession;
  };
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
