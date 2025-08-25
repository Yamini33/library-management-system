import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookService from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await bookService.getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await bookService.deleteBook(id);
      fetchBooks(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add">➕ Add New Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} &nbsp;
            <Link to={`/edit/${book.id}`}>✏️ Edit</Link> &nbsp;
            <button onClick={() => handleDelete(book.id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
