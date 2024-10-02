import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './CustomerRegister.module.css';
import CustomerNav from './CustomerNav';
import basket from '../../assets/veggies.png';
import { registerService } from '../../Service/UserService';

const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    password: '',
    confirmPassword: ''
  });
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const validateForm = () => {
    const { mobileNumber, email, pincode, password, confirmPassword } = formData;
    console.log("came to register");
    

    // Mobile number validation
    if (!/^\d{10}$/.test(mobileNumber)) {
      setError('Mobile number must be 10 digits');
      return false;
    }

    // Email validation
    if (!/^[\w.%+-]+@gmail\.com$/.test(email)) {
      setError('Email must be a valid Gmail address (ending with @gmail.com)');
      return false;
    }

    // Pincode validation
    if (!/^\d{6}$/.test(pincode)) {
      setError('Pincode must be 6 digits');
      return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    console.log("form is valisd");
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('mobileNumber', formData.mobileNumber);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('state', formData.state);
    formDataToSend.append('pincode', formData.pincode);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('img', profileImage);

    try {
      const response = await registerService(formDataToSend);

      if (response.includes('Register successfully')) {
        toast.success('Registration Successful!');
        setTimeout(() => {
          navigate('/customerlogin');
        }, 0);
      } else {
        setError(response);
      }
    } catch (err) {
      toast.error('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className={styles.body}>
      <CustomerNav />
      <div className={styles.customer_register}>
        <h2>Customer Registration</h2>
        <form onSubmit={handleSubmit} className={styles.registration_form}>
          <div className={styles.inputs_labels}>
            <div className={styles.labels}>
              <label>Name</label>
              <label>Mobile Number</label>
              <label>Email</label>
              <label>Address</label>
              <label>City</label>
              <label>State</label>
              <label>Pincode</label>
              <label>Password</label>
              <label>Confirm Password</label>
              <label>Profile Image</label>
            </div>
            <div className={styles.inputs}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              <select name="state" value={formData.state} onChange={handleChange} required>
                <option value="">Select State</option>
                {statesList.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              <input type="file" name="profileImage" onChange={handleFileChange} required />
            </div>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.register_button}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegister;
