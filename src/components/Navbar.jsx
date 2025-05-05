import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();
  
  // Only these paths get transparent navbar
  const transparentPaths = ['/', '/welcome']; 
  const isTransparent = transparentPaths.includes(location.pathname);

  return (
    <nav className={`${styles.navbar} ${!isTransparent ? styles.solidNav : ''}`}>
      <Link 
        to="/" 
        className={styles.navLink}
        aria-current={location.pathname === '/' ? 'page' : undefined}
      >
        Home
      </Link>
      <Link 
        to="/vendors" 
        className={styles.navLink}
        aria-current={location.pathname === '/vendors' ? 'page' : undefined}
      >
        Vendors
      </Link>
      <Link 
        to="/login" 
        className={styles.navLink}
        aria-current={location.pathname === '/login' ? 'page' : undefined}
      >
        Login
      </Link>
      <Link 
        to="/signup" 
        className={styles.navLink}
        aria-current={location.pathname === '/signup' ? 'page' : undefined}
      >
        Sign Up
      </Link>
    </nav>
  );
}