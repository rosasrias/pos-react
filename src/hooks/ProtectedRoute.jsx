import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, loading, redirectTo }) => {
  if (loading) return <h1>Loading...</h1>;

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};
