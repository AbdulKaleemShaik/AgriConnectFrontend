// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios'; // Assuming axios is used for API calls
// // import './userOrder.css'; // Assuming you have a CSS file for styling
// // import axiosInstance from '../../Service/AxiosInstant';

// // const UserOrders = () => {
// //     const [orders, setOrders] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState('');

// //     useEffect(() => {
// //         const fetchOrders = async () => {
// //             try {
// //                 const response = await axiosInstance.get('/user/user-orders');
// //                 console.log(response);
// //                 // Your backend endpoint to get user orders
// //                 setOrders(response.data); // Assuming response contains order data in response.data
// //                 setLoading(false);
// //             } catch (err) {
// //                 setError('Failed to fetch orders. Please try again later.');
// //                 setLoading(false);
// //             }
// //         };

// //         fetchOrders();
// //     }, []);

// //     if (loading) {
// //         return <div>Loading...</div>;
// //     }

// //     if (error) {
// //         return <div className="error-message">{error}</div>;
// //     }

// //     return (
// //         <div className="user-orders">
// //             <h2>My Orders</h2>
// //             {orders.length === 0 ? (
// //                 <p>You have no orders yet.</p>
// //             ) : (
// //                 <table className="orders-table">
// //                     <thead>
// //                         <tr>
// //                             <th>Order ID</th>
// //                             <th>Product Name</th>
// //                             <th>Quantity</th>
// //                             <th>Total Price</th>
// //                             <th>Order Date</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {orders && orders.map((order) => (
// //                             <tr key={order.id}>
// //                                 <td>{order.id}</td>
// //                                 <td>{order.product.title}</td>
// //                                 <td>{order.quantity}</td>
// //                                 <td>{order.price}</td>
// //                                 <td>{new Date(order.orderDate).toLocaleDateString()}</td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             )}
// //         </div>
// //     );
// // };

// // export default UserOrders;

// import React, { useState, useEffect } from 'react';
// import './userOrder.css'; // Assuming you have a CSS file for styling
// import axiosInstance from '../../Service/AxiosInstant';

// const UserOrders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axiosInstance.get('/user/user-orders');
//                 console.log(response.data);
//                 setOrders(response.data); // Assuming response contains order data
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch orders. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="error-message">{error}</div>;
//     }

//     return (
//         <div className="user-orders">
//             <h2>My Orders</h2>
//             {orders.length === 0 ? (
//                 <p>You have no orders yet.</p>
//             ) : (
//                 <table className="orders-table">
//                     <thead>
//                         <tr>
//                             <th>Order ID</th>
//                             <th>Product Image</th>
//                             <th>Product Name</th>
//                             <th>Quantity</th>
//                             <th>Total Price</th>
//                             <th>Order Date</th>
//                             <th>Order Address</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {orders.map((order) => (
//                             <tr key={order.id}>
//                                 <td>{order.orderId}</td>
//                                 <td>
//                                     <img
//                                         src={`${import.meta.env.VITE_API_URL}/img/product_img/${order.product.image}`}
//                                         alt={order.product.title}
//                                         className="product-image"
//                                     />
//                                 </td>
//                                 <td>{order.product.title}</td>
//                                 <td>{order.quantity}</td>
//                                 <td>${order.price}</td>
//                                 <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                                 <td>
//                                    <br />{order.orderAddress.address},<br />{order.orderAddress.city}
//                                 </td>
//                                 <td>{order.status}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserOrders;

// import React, { useState, useEffect } from 'react';
// import './userOrder.css';
// import axiosInstance from '../../Service/AxiosInstant';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap styles

// const UserOrders = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const response = await axiosInstance.get('/user/user-orders');
//                 setOrders(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to fetch orders. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (loading) {
//         return <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>;
//     }

//     if (error) {
//         return <div className="alert alert-danger">{error}</div>;
//     }

//     return (
//         <div className="container my-5">
//             <h2 className="text-center mb-4">My Orders</h2>
//             {orders.length === 0 ? (
//                 <p className="text-center">You have no orders yet.</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-hover table-bordered">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Order ID</th>
//                                 <th>Product Image</th>
//                                 <th>Product Name</th>
//                                 <th>Quantity</th>
//                                 <th>Total Price</th>
//                                 <th>Order Date</th>
//                                 <th>Order Address</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order) => (
//                                 <tr key={order.id}>
//                                     <td>{order.orderId}</td>
//                                     <td>
//                                         <img
//                                             src={`${import.meta.env.VITE_API_URL}/img/product_img/${order.product.image}`}
//                                             alt={order.product.title}
//                                             className="img-fluid product-image"
//                                         />
//                                     </td>
//                                     <td>{order.product.title}</td>
//                                     <td>{order.quantity}</td>
//                                     <td>${order.price}</td>
//                                     <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                                     <td>{order.orderAddress.address}, {order.orderAddress.city}</td>
//                                     <td><span className={`badge ${order.status === 'In Progress' ? 'badge-warning' : 'badge-success'}`}>{order.status}</span></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserOrders;

import React, { useState, useEffect } from 'react';
import './userOrder.css';
import axiosInstance from '../../Service/AxiosInstant';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap styles
import { Modal, Button } from 'react-bootstrap'; // Importing Modal and Button from react-bootstrap

const UserOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('/user/user-orders');
                console.log(response)
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch orders. Please try again later.');
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleShowModal = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedOrder(null);
    };

    if (loading) {
        return <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">My Orders</h2>
            {orders.length === 0 ? (
                <p className="text-center">You have no orders yet.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Order ID</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Order Date</th>
                                <th>Order Address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.orderId}</td>
                                    <td>
                                        <img
                                            src={`${import.meta.env.VITE_API_URL}/img/product_img/${order.product.image}`}
                                            alt={order.product.title}
                                            className="img-fluid product-image"
                                        />
                                    </td>
                                    <td>{order.product.title}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.price*order.quantity}</td>
                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <td>{order.orderAddress.address}, {order.orderAddress.city}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleShowModal(order)}>
                                            View Status
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal for Order Status */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder ? (
                        <ul>
                            <li>{selectedOrder.status === 'In Progress' ? 'Placed Order' : ''}</li>
                            <li>{selectedOrder.status === 'dispatched' ? 'Dispatched' : ''}</li>
                            <li>{selectedOrder.status === 'reached' ? 'Reached Nearest Center' : ''}</li>
                            <li>{selectedOrder.status === 'delivered' ? 'Delivered' : ''}</li>
                        </ul>
                    ) : (
                        <p>No details available.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserOrders;

