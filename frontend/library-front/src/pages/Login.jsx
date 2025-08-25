// import React from 'react';




// import React, { useState } from 'react';
// import './Auth.css';

// function Login() {
//   const [role, setRole] = useState('user');

//   return (
//     <div className="auth-container">
//       <h2>Login as {role === 'admin' ? 'Admin' : 'User'}</h2>
//       <form className="auth-form">
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Login</button>
//         <p>Don't have an account? <a href="/register">Register</a></p>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// function Login() {
//   const [role, setRole] = useState('user');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/auth/login', {
//         email,
//         password,
//         role
//       });
//       console.log('Login successful:', response.data);

//       // Redirect based on role
//       if (response.data.role === 'admin') {
//         navigate('/admin-dashboard');
//       } else {
//         navigate('/user-dashboard');
//       }
//     } catch (error) {
//       console.error('Login failed:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login as {role === 'admin' ? 'Admin' : 'User'}</h2>
//       <form className="auth-form" onSubmit={handleLogin}>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//         <p>Don't have an account? <a href="/register">Register</a></p>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Login() {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      alert("User not found. Please register first.");
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.password !== password) {
      alert("Incorrect password.");
      return;
    }

    if (userData.role !== role) {
      alert(`Role mismatch. You registered as ${userData.role}.`);
      return;
    }

    alert("Login successful!");

    // Redirect based on role
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login as {role === 'admin' ? 'Admin' : 'User'}</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          placeholder="password"
                   onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
}

export default Login;





