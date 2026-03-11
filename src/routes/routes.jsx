import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UserAuth } from "../context/AuthContent";
import { ProtectedRoute } from "../hooks/ProtectedRoute";

export function MyRoutes() {
  const { user, loading } = UserAuth();

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute user={user} loading={loading} redirectTo="/login" />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
