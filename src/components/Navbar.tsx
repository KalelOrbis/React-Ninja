import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <h1>The Gargantua Blog </h1>
      </a>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/create"> New Blog</Link>
      </div>
    </nav>
  );
}
