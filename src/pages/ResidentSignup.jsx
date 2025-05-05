import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './ResidentSignup.module.css';

export default function ResidentSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    location: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify/otp', { 
      state: { 
        email: formData.emailOrPhone.includes('@') ? formData.emailOrPhone : null,
        phone: !formData.emailOrPhone.includes('@') ? formData.emailOrPhone : null,
        userType: 'resident'
      }
    });
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
        <h1>SIGN UP</h1>
      </div>

      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input 
            type="text" 
            name="fullName"
            placeholder="Enter your full name" 
            value={formData.fullName}
            onChange={handleChange}
            required 
          />
        </div>

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
          <label>Set Location</label>
          <input 
            type="text" 
            name="location"
            placeholder="Your delivery address" 
            value={formData.location}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Create a password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <button type="submit" className={styles.authButton}>Create Account</button>
      </form>

      <div className={styles.authFooter}>
        Already have an account?{' '}
        <Link to="/login" className={styles.authLink}>Sign in</Link>
      </div>
    </div>
  );
}