import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    navigate('/dashboard'); // Redirect after login
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h1>WELCOME BACK</h1>
        <p className={styles.tagline}>Sign in to your account</p>
      </div>

      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email or Phone No</label>
          <input 
            type="text" 
            name="emailOrPhone"
            placeholder="example@mail.com or +234..." 
            value={formData.emailOrPhone}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter your password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.forgotPassword}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" className={styles.authButton}>Sign In</button>
      </form>

      <div className={styles.authFooter}>
        Don't have an account?{' '}
        <Link to="/signup" className={styles.authLink}>Sign up</Link>
      </div>
    </div>
  );
}