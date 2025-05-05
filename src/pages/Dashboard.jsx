import { useState } from 'react';
import VendorCard from '../components/VendorCard';
import styles from './DashBoard.module.css';

export default function Dashboard() {
  const [vendors] = useState([
    { 
      id: 1, 
      name: "CleanWater Ltd", 
      capacity: "5000L", 
      price: "₦1500", 
      rating: 4.5,
      verified: true
    },
    { 
      id: 2, 
      name: "AquaFlow", 
      capacity: "3000L", 
      price: "₦1200", 
      rating: 4.2,
      verified: false
    },
    { 
      id: 3, 
      name: "PureDrops", 
      capacity: "4000L", 
      price: "₦1350", 
      rating: 4.7,
      verified: true
    }
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Available Vendors</h1>
      <div className={styles.vendorList}>
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}