import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './OTPVerification.module.css';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isVerifying, setIsVerifying] = useState(false);
  const otpInputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  const { 
    email, 
    phone, 
    userType = 'resident', 
    businessName 
  } = location.state || {};

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    otpInputs.current[0]?.focus();
  }, []);

  const handleResend = () => {
    setTimeLeft(300);
    console.log('Resending OTP to:', email || phone);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      navigate(userType === 'vendor' ? '/vendor/dashboard' : '/resident/dashboard');
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const maskedEmail = email ? email.replace(/(.{2})(.*)(?=@)/, (match, p1, p2) => p1 + '*'.repeat(p2.length)) : null;
  const maskedPhone = phone ? phone.replace(/\d(?=\d{4})/g, '*') : null;

  return (
    <div className={styles.authContainer}>
      <div className={styles.authHeader}>
        <h1>{userType === 'vendor' ? 'VENDOR VERIFICATION' : 'VERIFICATION'}</h1>
        {businessName && <p className={styles.authSubheader}>For {businessName}</p>}
        <p className={styles.authSubheader}>Enter Your Verification Code</p>
      </div>

      <div className={styles.otpTimer}>{formatTime(timeLeft)}</div>

      <div className={styles.otpInputs}>
        {[0, 1, 2, 3].map((i) => (
          <input
            key={i}
            ref={(el) => (otpInputs.current[i] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={otp[i]}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !otp[i] && i > 0) {
                otpInputs.current[i - 1]?.focus();
              }
            }}
            className={styles.otpInput}
          />
        ))}
      </div>

      <p className={styles.otpInstructions}>
        We sent a verification code to your {email ? 'email' : 'phone'}<br />
        {email ? maskedEmail : maskedPhone}, please check and confirm it.
      </p>

      <div className={styles.otpResend}>
        <p>I didn't receive any code?</p>
        <button 
          onClick={handleResend} 
          disabled={timeLeft > 0}
          className={styles.resendButton}
        >
          {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : 'Resend it'}
        </button>
      </div>

      <button 
        className={styles.authButton} 
        onClick={handleVerify}
        disabled={otp.some(digit => !digit) || isVerifying}
      >
        {isVerifying ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
}