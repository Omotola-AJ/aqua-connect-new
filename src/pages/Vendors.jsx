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
      verified: true,
      deliveryTime: "Within 2 hours"
    },
    {
      id: 2,
      name: "AquaFlow Solutions",
      capacity: "3000L",
      price: "₦1200",
      rating: 4.2,
      verified: true,
      deliveryTime: "Within 1 hour"
    },
    {
      id: 3,
      name: "PureDrops Water",
      capacity: "4000L",
      price: "₦1350",
      rating: 4.7,
      verified: true,
      deliveryTime: "Within 3 hours"
    },
    {
      id: 4,
      name: "BlueSpring Waters",
      capacity: "6000L",
      price: "₦1800",
      rating: 4.8,
      verified: true,
      deliveryTime: "Same day delivery"
    },
    {
      id: 5,
      name: "CrystalClear Providers",
      capacity: "3500L",
      price: "₦1250",
      rating: 4.3,
      verified: true,
      deliveryTime: "Within 90 minutes"
    },
    {
      id: 6,
      name: "AquaPure Network",
      capacity: "4500L",
      price: "₦1600",
      rating: 4.6,
      verified: true,
      deliveryTime: "Within 2 hours"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Available Water Vendors</h1>
        <p className={styles.subtitle}>Verified vendors in your area</p>
      </div>
      
      <div className={styles.vendorGrid}>
        {demoVendors.map(vendor => (
          <VendorCard 
            key={vendor.id}
            vendor={vendor}
            onSelect={() => setSelectedVendor(vendor)}
          />
        ))}
      </div>

      {selectedVendor && (
        <OrderForm
          vendor={selectedVendor}
          onClose={() => setSelectedVendor(null)}
        />
      )}
    </div>
  );
}