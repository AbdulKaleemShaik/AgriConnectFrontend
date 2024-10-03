import React from 'react';
import styles from './DashBoard.module.css';
import Navbar from '../NavBar/NavBar'
const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <Navbar />

      <div className={styles.imageContainer}>
        <img src="src/assets/farmerdashboard.png" alt="National Farmer's Day" />
      </div>

      <div className={styles.featuresSection}>
        <h2>Standout <span className={styles.featuresHighlight}>Features</span></h2>
        <div className={styles.features}>
          <div className={styles.featureCard}>
            <img src="/src/assets/Images/Messenger-app-logo.png" alt="SMS System" />
            <h3>Sms System</h3>
            <p>Upload and Edit Your Products via SMS</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/src/assets/Images/hands.png" alt="Buyer Connection" />
            <h3>Buyer Connection</h3>
            <p>Get in direct touch with the buyer to satisfy its need</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/src/assets/Images/farmerdashboard.png" alt="Farmer Group Formation" />
            <h3>Farmer Group Formation</h3>
            <p>Get in touch with other farmers, making your own community where you can ask for help</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 AGRI CONNECT. All Rights Reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default DashBoard;
