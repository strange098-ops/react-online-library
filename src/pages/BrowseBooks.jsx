import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState('');

  const filteredBooks = books.filter(book =>
    (category === 'All' || book.category === category) &&
    (book.title.toLowerCase().includes(query.toLowerCase()) ||
     book.author.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📖 Books in {category}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        className="border p-2 mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} className="text-blue-600 underline">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
