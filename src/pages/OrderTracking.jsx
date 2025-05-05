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

  const handleOrderComplete = () => {
    setOrder(prev => ({ ...prev, status: 'delivered' }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.sectionTitle}>Order Tracking</h1>
        <p className={styles.subtitle}>Real-time updates on your water delivery</p>
      </div>
      
      <div className={styles.trackingCard}>
        <div className={styles.orderHeader}>
          <h2>{order.vendor}</h2>
          <span className={`${styles.statusBadge} ${styles[order.status]}`}>
            {order.status.replace('_', ' ')}
          </span>
        </div>
        
        <div className={styles.orderDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Quantity:</span>
            <span>{order.quantity}</span>
          </div>
          
          {order.price && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Price:</span>
              <span>{order.price}</span>
            </div>
          )}
          
          {order.address && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Address:</span>
              <span>{order.address}</span>
            </div>
          )}
          
          {order.payment && (
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Payment:</span>
              <span>{order.payment === 'cash' ? 'Cash on Delivery' : 'Mobile Money'}</span>
            </div>
          )}
        </div>

        {/* Status Steps */}
        <div className={styles.statusSteps}>
          <div className={`${styles.step} ${['preparing', 'en_route', 'delivered'].includes(order.status) ? styles.active : ''}`}>
            <div className={styles.stepBubble}>
              {['en_route', 'delivered'].includes(order.status) ? '✓' : '1'}
            </div>
            <span>Preparing</span>
          </div>
          
          <div className={styles.stepConnector}></div>
          
          <div className={`${styles.step} ${['en_route', 'delivered'].includes(order.status) ? styles.active : ''}`}>
            <div className={styles.stepBubble}>
              {order.status === 'delivered' ? '✓' : '2'}
            </div>
            <span>On the way</span>
          </div>
          
          <div className={styles.stepConnector}></div>
          
          <div className={`${styles.step} ${order.status === 'delivered' ? styles.active : ''}`}>
            <div className={styles.stepBubble}>3</div>
            <span>Delivered</span>
          </div>
        </div>

        <div className={styles.deliveryInfo}>
          <p className={styles.eta}>
            {order.status === 'preparing' 
              ? 'Preparing your order' 
              : order.status === 'en_route'
                ? `Arriving ${order.eta}`
                : 'Delivery completed'}
          </p>
          <p className={styles.contact}>Driver: {order.contact}</p>
        </div>

        {order.status !== 'delivered' && (
          <button 
            className={styles.confirmButton}
            onClick={handleOrderComplete}
          >
            Confirm Delivery
          </button>
        )}
      </div>
    </div>
  );
}