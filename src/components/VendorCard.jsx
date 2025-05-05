import styles from './VendorCard.module.css';

export default function VendorCard({ vendor, onSelect }) {
  const stars = '★'.repeat(Math.floor(vendor.rating)) + '☆'.repeat(5 - Math.ceil(vendor.rating));

  return (
    <div className={styles.vendorCard}>
      {vendor.verified && (
        <span className={styles.verifiedBadge}>✓ Verified</span>
      )}
      <h3 className={styles.vendorName}>{vendor.name}</h3>
      <p className={styles.vendorDetail}>Capacity: {vendor.capacity}</p>
      <p className={styles.vendorDetail}>Price: {vendor.price}</p>
      <p className={styles.vendorRating}>
        <span className={styles.stars}>{stars}</span>
        <span className={styles.ratingText}>({vendor.rating.toFixed(1)})</span>
      </p>
      <button 
        className={styles.orderButton}
        onClick={onSelect}
      >
        Order Now
      </button>
    </div>
  );
}