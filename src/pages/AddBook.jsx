import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/booksSlice';

export default function AddBook() {
  const [form, setForm] = useState({
    title: '', author: '', category: '', description: '', rating: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some(val => val.trim() === '')) {
      alert('All fields are required!');
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate('/books/All');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 w-full" />
      <input name="author" placeholder="Author" onChange={handleChange} className="border p-2 w-full" />
      <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" />
      <input name="rating" placeholder="Rating" onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white p-2">Add Book</button>
    </form>
  );
}
