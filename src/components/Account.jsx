import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [currentView, setCurrentView] = useState('login');

  // Handles switching between views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="account-container">
      <h1>User Account</h1>
      <div className="account-nav">
        <button onClick={() => handleViewChange('login')}>Login</button>
        <button onClick={() => handleViewChange('register')}>Register</button>
        <button onClick={() => handleViewChange('profile')}>Profile</button>
        <button onClick={() => handleViewChange('passwordReset')}>Reset Password</button>
      </div>

      <div className="form-content">
        {currentView === 'login' && <Login />}
        {currentView === 'register' && <Register />}
        {currentView === 'profile' && <Profile />}
        {currentView === 'passwordReset' && <PasswordReset />}
      </div>
    </div>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
  };

  return (
    <div className="form-section">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User Registered Successfully!');
  };

  return (
    <div className="form-section">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const Profile = () => {
  const [userData, setUserData] = useState({
    username: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile Updated!');
  };

  return (
    <div className="form-section">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Password reset link sent to ${email}`);
  };

  return (
    <div className="form-section">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Account;
