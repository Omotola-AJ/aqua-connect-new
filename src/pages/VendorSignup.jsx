import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './VendorSignup.module.css';

export default function VendorSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    emailOrPhone: '',
    businessLocation: '',
    truckCapacity: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/verify/otp', { 
      state: { 
        email: formData.emailOrPhone.includes('@') ? formData.emailOrPhone : null,
        phone: !formData.emailOrPhone.includes('@') ? formData.emailOrPhone : null,
        userType: 'vendor',
        businessName: formData.businessName
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
        <h1>VENDOR SIGN UP</h1>
      </div>

      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Business Name</label>
          <input 
            type="text" 
            name="businessName"
            placeholder="Your water supply business name" 
            value={formData.businessName}
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
          <label>Business Location</label>
          <input 
            type="text" 
            name="businessLocation"
            placeholder="Where you operate from" 
            value={formData.businessLocation}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label>Truck Capacity</label>
          <select 
            name="truckCapacity"
            value={formData.truckCapacity}
            onChange={handleChange}
            required
          >
            <option value="">Select capacity</option>
            <option value="3000">3000L</option>
            <option value="5000">5000L</option>
            <option value="10000">10000L</option>
          </select>
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

        <button type="submit" className={styles.authButton}>Register Business</button>
      </form>

      <div className={styles.authFooter}>
        Already have an account?{' '}
        <Link to="/login" className={styles.authLink}>Sign in</Link>
      </div>
    </div>
  );
}