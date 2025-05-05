import { useNavigate } from 'react-router-dom';
import styles from './OrderForm.module.css';

export default function OrderForm({ vendor, onClose }) {
  const navigate = useNavigate();
  const maxQuantity = parseInt(vendor.capacity.replace('L', ''));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const orderDetails = {
      vendor: vendor.name,
      vendorId: vendor.id,
      quantity: formData.get('quantity') + 'L',
      capacity: vendor.capacity,
      price: vendor.price,
      deliveryTime: formData.get('deliveryTime'),
      address: formData.get('address'),
      payment: formData.get('payment'),
      contact: '0803XXXYYYY', 
      status: 'preparing', 
      eta: calculateETA(formData.get('deliveryTime'))
    };

    navigate('/tracking', { 
      state: orderDetails 
    });
    onClose();
  };

  const calculateETA = (time) => {
    const timeRanges = {
      morning: 'between 8am - 12pm',
      afternoon: 'between 12pm - 4pm',
      evening: 'between 4pm - 7pm'
    };
    return timeRanges[time] || 'soon';
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button 
          onClick={onClose}
          className={styles.closeButton}
        >
          ×
        </button>

        <h2>Order from {vendor.name}</h2>
        <p className={styles.vendorInfo}>
          Capacity: {vendor.capacity} • Price: {vendor.price}
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Quantity (Liters)</label>
            <input 
              type="number" 
              name="quantity"
              min="100" 
              max={maxQuantity}
              defaultValue={Math.min(1000, maxQuantity)}
              step="100"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label>Delivery Time</label>
            <select name="deliveryTime" required>
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 4pm)</option>
              <option value="evening">Evening (4pm - 7pm)</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label>Delivery Address</label>
            <textarea 
              name="address"
              rows="3" 
              placeholder="Include landmarks for easier location"
              required
            ></textarea>
          </div>
          
          <div className={styles.formGroup}>
            <label>Payment Method</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioOption}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cash" 
                  defaultChecked 
                /> 
                Cash on Delivery
              </label>
              <label className={styles.radioOption}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="mobile_money" 
                /> 
                Mobile Money
              </label>
            </div>
          </div>

          <div className={styles.formActions}>
            <button 
              type="button" 
              className={styles.secondaryButton} 
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.primaryButton}>
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}