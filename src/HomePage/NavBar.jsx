import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className={styles.head} style={{ display: 'inline-flex' }}>
            <div className={styles.left}>
                <Link to="/" 
                    className={styles.logo}>AgriConnect
                </Link>
            </div>
            <div className={styles.right}>
                <Link to="/" className={styles.space}>Home</Link>
                <a href="#" className={styles.space}>Marketplace</a>
                <a href="#" className={styles.space}>Services</a>
                <a href="#" className={styles.space}>Resources</a>
                <a href="#" className={styles.space}>Community</a>
                <Link to="/customerregestration" className={`${styles.button} ${styles.buttonGreenbutton}`}>Sign Up</Link>
                <Link to={"/customerlogin"} className={`${styles.button} ${styles.buttonGreybutton}`}>Log In</Link>
            </div>
        </div>
    );
}

export default NavBar;
