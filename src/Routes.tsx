import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Create } from "./components/Create";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function AppRoutes() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
