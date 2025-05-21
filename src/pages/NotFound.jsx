import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-2">404</h1>
      <p className="mb-4">Page Not Found</p>
      <Link to="/" className="text-blue-600 underline">Go to Home</Link>
    </div>
  );
}
