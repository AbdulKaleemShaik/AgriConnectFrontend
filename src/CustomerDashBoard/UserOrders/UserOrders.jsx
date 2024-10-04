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
                // console.log(response)
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
                                    <td>${order.price * order.quantity}</td>
                                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                    <td>{order.orderAddress.address}, {order.orderAddress.city}</td>
                                    <td>
                                        <button
                                            onClick={() => handleShowModal(order)}
                                            className="view_status_button"
                                        >
                                            Status
                                        </button>

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

