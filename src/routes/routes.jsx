import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export function MyRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
