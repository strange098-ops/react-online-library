import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // 📚 Fiction
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    description: 'A journey of self-discovery and dreams.',
    rating: '4.5',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    description: 'Classic novel of racial injustice in the Deep South.',
    rating: '4.8',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: 'Fiction',
    description: 'A story of love and societal expectations.',
    rating: '4.4',
  },

  // 📘 Non-Fiction
  {
    id: 4,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: 'A brief history of humankind.',
    rating: '4.8',
  },
  {
    id: 5,
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Non-Fiction',
    description: 'A memoir about growing up and gaining education.',
    rating: '4.6',
  },
  {
    id: 6,
    title: 'The Wright Brothers',
    author: 'David McCullough',
    category: 'Non-Fiction',
    description: 'Biography of the aviation pioneers.',
    rating: '4.5',
  },

  // 🚀 Sci-Fi
  {
    id: 7,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    description: 'Epic science fiction saga on a desert planet.',
    rating: '4.7',
  },
  {
    id: 8,
    title: 'Neuromancer',
    author: 'William Gibson',
    category: 'Sci-Fi',
    description: 'Cyberpunk classic that shaped the genre.',
    rating: '4.4',
  },
  {
    id: 9,
    title: 'The Martian',
    author: 'Andy Weir',
    category: 'Sci-Fi',
    description: 'An astronaut stranded on Mars fights for survival.',
    rating: '4.6',
  },

  // 🧠 Biography
  {
    id: 10,
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    category: 'Biography',
    description: 'The life of Apple co-founder Steve Jobs.',
    rating: '4.6',
  },
  {
    id: 11,
    title: 'Long Walk to Freedom',
    author: 'Nelson Mandela',
    category: 'Biography',
    description: 'The autobiography of Nelson Mandela.',
    rating: '4.9',
  },
  {
    id: 12,
    title: 'Becoming',
    author: 'Michelle Obama',
    category: 'Biography',
    description: 'The memoir of the former First Lady.',
    rating: '4.7',
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
