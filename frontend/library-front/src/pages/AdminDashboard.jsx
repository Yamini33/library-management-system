import React from 'react';
import '../styles/AdminDashboard.css';

function AdminDashboard() {
  return (
    <>
      <div className="admin-dashboard">
        <header className="dashboard-header">
          <h1>Welcome, Admin!</h1>
          <p>Manage books, users, and library operations efficiently.</p>
        </header>

        <section className="dashboard-actions">
          <div className="dashboard-card">
            <h3>📚 Manage Books</h3>
            <p>Add, update, or remove books from the catalog.</p>
            <button>Go to Book Management</button>
          </div>

          <div className="dashboard-card">
            <h3>👥 Manage Users</h3>
            <p>View user activity and manage user accounts.</p>
            <button>Go to User Management</button>
          </div>

          <div className="dashboard-card">
            <h3>📊 Reports</h3>
            <p>Generate borrowing statistics and system reports.</p>
            <button>View Reports</button>
          </div>
        </section>
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

export default AdminDashboard;
