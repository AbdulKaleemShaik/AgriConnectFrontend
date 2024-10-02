import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// Adjust the import path if needed
import "./components/Navbar/Navbar.css";


const CustomerDashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* Renders the child routes */}
            </main>
        </div>
    );
};

export default CustomerDashboardLayout;
