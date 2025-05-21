import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="logo">📚 Online Library</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books/All">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
      <div>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
