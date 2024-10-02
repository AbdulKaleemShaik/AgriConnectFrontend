import React, { useState } from "react";
import styles from "./FarmerRegister.module.css";
import FarmerNav from "../FarmerNav";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    profileImage: null,
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const { mobileNumber, email, pincode, password } = formData;

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

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const registrationData = new FormData();
    registrationData.append('name', formData.name);
    registrationData.append('mobileNumber', formData.mobileNumber);
    registrationData.append('email', formData.email);
    registrationData.append('address', formData.address);
    registrationData.append('city', formData.city);
    registrationData.append('state', formData.state);
    registrationData.append('pincode', formData.pincode);
    registrationData.append('password', formData.password);
    registrationData.append('img', formData.profileImage);

    try {
      const response = await axios.post('http://localhost:8080/admin/save-admin', registrationData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      toast.success('Registration Successful!');
      setTimeout(() => {
        navigate('/farmerlogin'); 
      }, 0);


    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles.body}>
      <FarmerNav />
      <div className={styles.farmer_registration}>
        <form onSubmit={handleSubmit}>
          <h2>Farmer Registration</h2>
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
              <label>Profile Image</label>
            </div>
            <div className={styles.inputs}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={styles.dropdown}
                required
              >
                <option value="" disabled>Select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="file"
                name="profileImage"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit">Register</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FarmerRegistration;
