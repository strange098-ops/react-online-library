import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id.toString() === id)
  );

  if (!book) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-600">Book not found!</h2>
        <Link to="/books/All" className="text-blue-600 underline">← Back to Browse</Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p><strong>👤 Author:</strong> {book.author}</p>
      <p><strong>📚 Category:</strong> {book.category}</p>
      <p><strong>📖 Description:</strong> {book.description}</p>
      <p><strong>⭐ Rating:</strong> {book.rating}</p>
      <Link to={`/books/${book.category}`} className="text-blue-600 underline mt-4 block">
        ← Back to Browse
      </Link>
    </div>
  );
}
