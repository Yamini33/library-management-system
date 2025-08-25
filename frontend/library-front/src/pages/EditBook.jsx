
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookService from '../services/bookService';

function EditBook() {
  const { id } = useParams();
  const [book, setBook] = useState({ title: '', author: '', genre: '', publishedDate: '' });

  useEffect(() => {
    bookService.getBook(id).then(response => {
      setBook(response.data);
    });
  }, [id]);

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    bookService.updateBook(id, book).then(() => {
      alert('Book updated successfully');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={book.title} onChange={handleChange} />
      <input name="author" value={book.author} onChange={handleChange} />
      <input name="genre" value={book.genre} onChange={handleChange} />
      <input name="publishedDate" value={book.publishedDate} onChange={handleChange} />
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBook;
