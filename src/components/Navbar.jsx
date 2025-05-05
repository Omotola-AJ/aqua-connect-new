import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  const navClass = location.pathname === '/welcome' 
    ? styles.welcomeNav 
    : styles.mainNav;

  return (
    <nav className={`${styles.navbar} ${navClass}`}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/vendors" className={styles.navLink}>Vendors</Link>
      <Link to="/signup" className={styles.navLink}>Sign Up</Link>
    </nav>
  );
}