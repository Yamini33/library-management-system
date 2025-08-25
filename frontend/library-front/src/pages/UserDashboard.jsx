// import React, { useState } from 'react';
// import '../styles/UserDashboard.css';

// function UserDashboard() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const books = [
//     {
//       id: 1,
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       available: true,
//       image: 'https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg'
//     },
//     {
//       id: 2,
//       title: '1984',
//       author: 'George Orwell',
//       available: false,
//       image: 'https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg'
//     },
//     {
//       id: 3,
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       available: true,
//       image: 'https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg'
//     },
//     {
//       id: 4,
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       available: true,
//       image: 'https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg'
//     },
//     {
//       id: 5,
//       title: 'The Hobbit',
//       author: 'J.R.R. Tolkien',
//       available: false,
//       image: 'https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg'
//     }
//   ];

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="user-dashboard">
//         <header className="dashboard-header">
//           <h2>Welcome to the Library, User!</h2>
//           <p>Explore books, manage your account, and track your borrowings.</p>
//         </header>

//         <div className="search-filter-section">
//           <input
//             type="text"
//             placeholder="Search books..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select>
//             <option>All Categories</option>
//             <option>Fiction</option>
//             <option>Non-fiction</option>
//             <option>Science</option>
//           </select>
//           <select>
//             <option>All</option>
//             <option>Available</option>
//             <option>Unavailable</option>
//           </select>
//           <select>
//             <option>Sort by Title</option>
//             <option>Sort by Author</option>
//           </select>
//         </div>

//         <div className="book-list">
//           {filteredBooks.map(book => (
//             <div key={book.id} className="book-card">
//               <img
//                 src={book.image}
//                 alt={book.title}
//                 className="book-image"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = '/default-book-cover.jpg'; // fallback image
//                 }}
//               />
//               <h3>{book.title}</h3>
//               <p><strong>Author:</strong> {book.author}</p>
//               <p><strong>Status:</strong> {book.available ? 'Available' : 'Unavailable'}</p>
//               <button>View Details</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Your Digital Library. All rights reserved.</p>
//         <div className="footer-links">
//           <a href="/privacy">Privacy Policy</a>
//           <a href="/terms">Terms of Service</a>
//           <a href="/help">Help</a>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default UserDashboard;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDashboard.css';

function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // or use localStorage.clear() if needed
    navigate('/login');
  };

  const books = [
    { id: 1, title: '1984', author: 'George Orwell', available: false, category: 'Biography', isbn: '9780451524935' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false, category: 'Non-fiction', isbn: '9780061120084' },
    { id: 3, title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', available: false, category: 'History', isbn: '9780439554930' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', available: false, category: 'Biography', isbn: '9780547928227' },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', available: true, category: 'Biography', isbn: '9780141439518' },
    { id: 6, title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', available: false, category: 'Science', isbn: '9780486280615' },
    { id: 7, title: 'The Old Man and the Sea', author: 'Ernest Hemingway', available: true, category: 'Biography', isbn: '9780684801223' },
    { id: 8, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true, category: 'Science', isbn: '9780743273565' },
    { id: 9, title: 'The Shining', author: 'Stephen King', available: false, category: 'History', isbn: '9780307743657' },
    { id: 10, title: 'Murder on the Orient Express', author: 'Agatha Christie', available: false, category: 'Science', isbn: '9780062073501' },
    { id: 11, title: 'Animal Farm', author: 'George Orwell', available: false, category: 'Biography', isbn: '9780451526342' },
    { id: 12, title: 'Emma', author: 'Harper Lee', available: false, category: 'Science', isbn: '9780141439587' },
    { id: 13, title: 'The Fellowship of the Ring', author: 'J.K. Rowling', available: true, category: 'Non-fiction', isbn: '9780618574940' },
    { id: 14, title: 'A Brief History of Time', author: 'J.R.R. Tolkien', available: false, category: 'Science', isbn: '9780553380163' },
    { id: 15, title: 'Steve Jobs', author: 'Jane Austen', available: true, category: 'Biography', isbn: '9781451648539' }
  ];

  let filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (availabilityFilter !== 'All') {
    filteredBooks = filteredBooks.filter(book =>
      availabilityFilter === 'Available' ? book.available : !book.available
    );
  }

  if (categoryFilter !== 'All') {
    filteredBooks = filteredBooks.filter(book => book.category === categoryFilter);
  }

  if (sortBy === 'Title') {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'Author') {
    filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
  }

  return (
    <>
      <div className="user-dashboard">
        
<header className="dashboard-header">
  <div className="header-content">
    <div>
      <h2>Welcome to the Library, User!</h2>
      {/* <p>Explore books, manage your account, and track your borrowings.</p> */}
    </div>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
</header>

        

        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option>All</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Science</option>
            <option>History</option>
            <option>Biography</option>
          </select>
          <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
            <option>All</option>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort</option>
            <option value="Title">Sort by Title</option>
            <option value="Author">Sort by Author</option>
          </select>
        </div>

        <div className="book-list">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                alt={book.title}
                className="book-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-book-cover.jpg';
                }}
              />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Status:</strong> {book.available ? 'Available' : 'Unavailable'}</p>
              <button>View Details</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Digital Library. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/help">Help</a>
        </div>
      </footer>
    </>
  );
}

export default UserDashboard;

