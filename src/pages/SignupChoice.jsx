import { Link } from 'react-router-dom';
import styles from './SignupChoice.module.css';

export default function SignupChoice() {
  return (
    <div className={styles.signupChoiceContainer}>
      <header className={styles.authHeader}>
        <h1>AQUACONNECT</h1>
        <p className={styles.tagline}>Water Delivery Reimagined</p>
      </header>

      <div className={styles.choiceCards}>
        <div className={`${styles.choiceCard} ${styles.residentCard}`}>
          <h2>Resident</h2>
          <p>Order, track and receive clean water with ease</p>
          <Link to="/signup/resident" className={styles.choiceButton}>
            Continue as Resident
          </Link>
        </div>

        <div className={`${styles.choiceCard} ${styles.vendorCard}`}>
          <h2>Vendor</h2>
          <p>Manage orders, reach residents, grow your business</p>
          <Link to="/signup/vendor" className={styles.choiceButton}>
            Continue as Vendor
          </Link>
        </div>
      </div>
    </div>
  );
}