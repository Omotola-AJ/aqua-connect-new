import { Link } from 'react-router-dom';
import styles from './WelcomeScreen.module.css';

export default function WelcomeScreen() {
  return (
    <div className={styles.welcomeScreen}>
      <div className={styles.welcomeContent}>
        <div className={styles.welcomeHeader}>
          <h1>WELCOME TO AQUACONNECT</h1>
          <p className={styles.welcomeTagline}>Let's give you the best you deserve</p>
        </div>

        <div className={styles.welcomeActions}>
          <Link to="/login" className={`${styles.welcomeBtn} ${styles.signinBtn}`}>
            SIGN IN
          </Link>
          <Link to="/signup" className={`${styles.welcomeBtn} ${styles.signupBtn}`}>
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}