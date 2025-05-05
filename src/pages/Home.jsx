import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {  
  return (
    <div className={styles.welcomeContainer}>
      <header className={styles.welcomeHeader}>
        <h1>AQUACONNECT</h1>
        <p className={styles.tagline}>Find Water Vendors, Near You</p>
        <div className={styles.valueProps}>
          <span>✓ Verified Vendors</span>
          <span>✓ Real-Time Tracking</span>
          <span>✓ 24/7 Support</span>
        </div>
      </header>
      <Link to="/welcome" className={styles.ctaButton}>
        Get Started
        <svg className={styles.waterIcon} viewBox="0 0 24 24" width="20">
          <path fill="white" d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"/>
        </svg>
      </Link>
    </div>
  );
}