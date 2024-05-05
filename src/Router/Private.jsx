import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <h1>Loading..............</h1>;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
