// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles//Auth.css';

// function Register() {
//   const [role, setRole] = useState('user');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post('/api/auth/register', {
//         name,
//         email,
//         password,
//         role
//       });
//       console.log('Registration successful:', response.data);

//       // Redirect to login page after successful registration
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration failed:', error.response?.data || error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register as {role === 'admin' ? 'Admin' : 'User'}</h2>
//       <form className="auth-form" onSubmit={handleRegister}>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//         <button type="submit"  >Register</button>
//         <p>Already have an account? <a href="/login">Login</a></p>
//       </form>
//     </div>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import '../styles/Auth.css';

// function Register() {
//   const [role, setRole] = useState('user');

//   return (
//     <div className="auth-container">
//       <h2>Register as {role === 'admin' ? 'Admin' : 'User'}</h2>
//       <form className="auth-form">
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <input type="text" placeholder="Full Name" required />
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <input type="password" placeholder="Confirm Password" required />
//         <button type="submit">Register</button>
//         <p>Already have an account? <a href="/login">Login</a></p>
//       </form>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Register() {
  const [role, setRole] = useState('user');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = { name, email, password, role };
    localStorage.setItem(email, JSON.stringify(userData)); // Save user by email
    alert("Registration successful!");
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Register as {role === 'admin' ? 'Admin' : 'User'}</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default Register;

