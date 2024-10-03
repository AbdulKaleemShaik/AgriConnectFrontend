import React, { useState } from 'react';
import styles from '../Authentication/Login.module.css';
import CustomerNav from './CustomerNav';
import CustomerImage from '../../assets/buyer-2.png';
import { useNavigate, Link } from 'react-router-dom';
import NavBar from '../../HomePage/NavBar';
import { loginService } from '../../Service/UserService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../../Context/UserContext';
import axiosInstance from '../../Service/AxiosInstant';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const { setUserDetails } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginInfo = {
      username: phoneNumber,
      password: password
    };

    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get('/user/profiledetailsofuser');
        const userData = response.data;
        setUserDetails(userData);
        console.log(userData);
  
        localStorage.setItem('userDetails', JSON.stringify(userData));
      } catch (error) {
        console.error('Error fetching user profile:', error);
        toast.error('Error fetching user profile');
      }
    };

    try {
      const data = await loginService(loginInfo);
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        await fetchUserProfile()
        navigate('/customerdashboard');
      }
    } catch (error) {
      toast.error('Invalid username or password', {
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
    <div className={styles.full}>
      <NavBar />
      <CustomerNav/>
      <div className={styles.body}>
        <img className={styles.customerImage} src={CustomerImage} alt="Customer" />
        <div className={styles.login_form}>
          
             
          <form onSubmit={handleLogin}>
            <div className={styles.inputs}>
              <input
                className={styles.input}
                type="text"
                placeholder='Email'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <input
                className={styles.input}
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div><Link to={"/forgetPassword"} className={styles.forgot_password}>Forgot your password?</Link></div>
            <button type="submit" className={styles.login_button} style={{ backgroundColor: "orange" }}>
              Log In
            </button>
            <div>
              Don't Have an account?
              <Link to="/customerregestration" style={{ color: "orange" }}>Register</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomerLogin;