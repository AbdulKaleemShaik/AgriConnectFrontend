import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import styles from './Navbar.module.css';
import { useUser } from '../../Context/UserContext';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { userDetails } = useUser(); // Access user details from context

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    navigate('/farmerlogin');
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      className={styles.navbar}
      sx={{ backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
    >
      <Toolbar>
        <Typography variant="h6" className={styles.logo}>
          🌳 Agri Connect
        </Typography>
        <div className={styles.navLinks}>
          <Typography variant="button" onClick={() => navigate('/farmerdashboard')} className={styles.navLink}>
            Home
          </Typography>
          <Typography variant="button" onClick={() => navigate('/addproduct')} className={styles.navLink}>
            Add New Product
          </Typography>
          <Typography variant="button" onClick={() => navigate('/myproducts')} className={styles.navLink}>
            My Products
          </Typography>
          <Typography variant="button" onClick={() => navigate('/farmerorders')} className={styles.navLink}>
            Orders
          </Typography>
          

          <Avatar
            alt="Profile"
            src={
              userDetails && userDetails.profileImage
                ? `${import.meta.env.VITE_API_URL}/img/profile_img/${userDetails.profileImage}`
                : '/static/images/avatar/1.jpg'
            }
            onClick={handleMenuOpen}
            sx={{ cursor: 'pointer' }}
          />

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className={styles.dropdownMenu}
          >
            <MenuItem onClick={() => navigate('/farmerprofile')}>Profile Page</MenuItem>
            <MenuItem onClick={() => navigate('/farmerorders')}>Orders Page</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
