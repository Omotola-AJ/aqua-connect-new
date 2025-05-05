import { useState } from 'react';
import VendorCard from '../components/VendorCard';
import OrderForm from '../components/OrderForm';
import styles from './Vendors.module.css';

export default function Vendors() {
  const [selectedVendor, setSelectedVendor] = useState(null);

  const demoVendors = [
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
      name: "AquaFlow Solutions",
      capacity: "3000L",
      price: "₦1200",
      rating: 4.2,
      verified: true
    },
    {
      id: 3,
      name: "PureDrops Water",
      capacity: "4000L",
      price: "₦1350",
      rating: 4.7,
      verified: false
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Available Water Vendors</h1>
      
      <div className={styles.vendorGrid}>
        {demoVendors.map(vendor => (
          <VendorCard 
            key={vendor.id}
            vendor={vendor}
            onSelect={() => setSelectedVendor(vendor)}
          />
        ))}
      </div>

      {/* Order Form Modal */}
      {selectedVendor && (
        <OrderForm
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
        />
      )}
    </div>
  );
}