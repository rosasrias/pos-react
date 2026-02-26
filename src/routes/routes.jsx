import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  );
}
