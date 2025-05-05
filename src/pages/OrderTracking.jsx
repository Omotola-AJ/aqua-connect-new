import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './OrderTracking.module.css';

export default function OrderTracking() {
  const { state } = useLocation();
  
  const [order, setOrder] = useState(() => {
    if (state) return state;
    return {
      status: 'preparing',
      vendor: 'Unknown Vendor',
      quantity: '0L',
      eta: 'N/A',
      contact: 'Not available'
    };
  });

  useEffect(() => {
    if (!state) return;
    
    const timer = setTimeout(() => {
      setOrder(prev => ({ ...prev, status: 'en_route' }));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Your Order</h1>
      
      <div className={styles.trackingCard}>
        <h2>{order.vendor}</h2>
        <p><strong>Quantity:</strong> {order.quantity}</p>
        {order.price && <p><strong>Price:</strong> {order.price}</p>}
        {order.address && <p><strong>Address:</strong> {order.address}</p>}
        {order.payment && <p><strong>Payment:</strong> {order.payment === 'cash' ? 'Cash on Delivery' : 'Mobile Money'}</p>}
        
        {/* Status Steps */}
        <div className={styles.statusSteps}>
          <div className={`${styles.step} ${['preparing', 'en_route', 'delivered'].includes(order.status) ? styles.active : ''}`}>
            <div className={styles.stepBubble}>1</div>
            <span>Preparing</span>
          </div>
          
          <div className={`${styles.step} ${['en_route', 'delivered'].includes(order.status) ? styles.active : ''}`}>
            <div className={styles.stepBubble}>2</div>
            <span>On the way</span>
          </div>
          
          <div className={`${styles.step} ${order.status === 'delivered' ? styles.active : ''}`}>
            <div className={styles.stepBubble}>3</div>
            <span>Delivered</span>
          </div>
        </div>

        <p className={styles.eta}>
          {order.status === 'preparing' ? 'Preparing your order' : `Arriving ${order.eta}`}
        </p>
        <p>Driver: {order.contact}</p>
      </div>
    </div>
  );
}