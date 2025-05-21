import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const popularBooks = [
  { id: 1, title: 'The Alchemist' },
  { id: 4, title: 'Sapiens' },
  { id: 7, title: 'Dune' }
];

export default function Home() {
  return (
    <div className="home-card">
      {}
      <div className="home-left">
        <h1>📘 ONLINE LIBRARY</h1>
        <p className="tagline">Landing Page</p>
        <p className="description">
          Explore, manage and add books to your personal digital library.
          Perfect for students, readers.
        </p>
        <div className="button-group">
          <Link to="/books/All">
            <button className="primary-btn">Browse Books</button>
          </Link>
          <Link to="/add-book">
            <button className="secondary-btn">Add Book</button>
          </Link>
        </div>
        {/*  Book Categories */}
        <div className="home-section">
          <h2>Book Categories</h2>
          <ul className="category-list">
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/books/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Popular Books */}
        <div className="home-section">
          <h2>Popular Books</h2>
          <ul className="popular-list">
            {popularBooks.map((book) => (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right Side */}
      <div className="home-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2190/2190563.png" // happy face image 
        />
      </div>
    </div>
  );
}
