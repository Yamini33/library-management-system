
import React, { useState } from 'react';
import bookService from '../services/bookService';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', genre: '', publishedDate: '' });

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    bookService.addBook(book).then(() => {
      alert('Book added successfully');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="genre" placeholder="Genre" onChange={handleChange} />
      <input name="publishedDate" placeholder="Published Date" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
