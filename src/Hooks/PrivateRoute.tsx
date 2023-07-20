import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import { useAppSelector } from "../Redux/hooks";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (accessToken) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;