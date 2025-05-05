import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WelcomeScreen from './pages/WelcomeScreen';
import Dashboard from './pages/Dashboard';
import Vendors from './pages/Vendors';
import OrderTracking from './pages/OrderTracking';
import SignupChoice from './pages/SignupChoice';
import ResidentSignup from './pages/ResidentSignup';
import VendorSignup from './pages/VendorSignup';
import OTPVerification from './pages/OTPVerification';
import './index.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/tracking" element={<OrderTracking />} />
          <Route path="/signup" element={<SignupChoice />} />
          <Route path="/signup/resident" element={<ResidentSignup />} />
          <Route path="/signup/vendor" element={<VendorSignup />} />
          <Route path="/verify/otp" element={<OTPVerification />} />
        </Routes>
      </main>
    </Router>
  );
}