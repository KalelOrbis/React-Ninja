import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogDetails } from "./components/BlogDetails";
import { Create } from "./components/Create";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";

export function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
