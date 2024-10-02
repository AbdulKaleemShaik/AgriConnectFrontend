// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import './PaymentOptions.css'; // You can style this as needed

// function PaymentOptions() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state || {};
//   console.log(formData);


//   const handlePaymentSelection = (option) => {
//     setSelectedOption(option);
//   };

//   const handlePaymentProceed = () => {
//     if (selectedOption) {
//       console.log(`Proceeding with ${selectedOption}`);
//       // Perform the necessary logic for payment processing here

//       // Navigate to a confirmation or further processing page if needed
//       navigate('/confirmation');
//     } else {
//       alert("Please select a payment option!");
//     }
//   };

//   return (
//     <div className="payment-options-container">
//       <h2>Select Payment Method</h2>
//       <div className="payment-options">
//         <button onClick={() => handlePaymentSelection('Card')}>Card</button>
//         {/* <button onClick={() => handlePaymentSelection('Net Banking')}>Net Banking</button> */}
//         <button onClick={() => handlePaymentSelection('PhonePe')}>PhonePe</button>
//         <button onClick={() => handlePaymentSelection('Google Pay')}>Google Pay</button>
//         <button onClick={() => handlePaymentSelection('Paytm')}>Paytm</button>
//         <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
//         {/* Add more options as needed */}
//       </div>

//       <button className="proceed-button" onClick={handlePaymentProceed}>
//         Proceed with {selectedOption ? selectedOption : '...'}
//       </button>
//     </div>
//   );
// }

// export default PaymentOptions;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import './PaymentOptions.css'; // Import your CSS for styling

// function PaymentOptions() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showPhonePeModal, setShowPhonePeModal] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state || {};
//   console.log(formData);

//   const handlePaymentSelection = (option) => {
//     setSelectedOption(option);
//       setShowPhonePeModal(true); // Show the modal when PhonePe is selected

//   };

//   const handlePhonePeSubmit = () => {
//     if (phoneNumber) {
//       console.log(`PhonePe payment with phone number: ${phoneNumber}`);
//       setShowPhonePeModal(false); // Close the modal after submission
//       // You can proceed with additional logic for PhonePe payment
//     } else {
//       alert("Please enter a phone number!");
//     }
//   };

//   const handlePaymentProceed = () => {
//     if (selectedOption && selectedOption !== 'PhonePe') {
//       console.log(`Proceeding with ${selectedOption}`);
//       navigate('/confirmation');
//     } else if (!selectedOption) {
//       alert("Please select a payment option!");
//     }
//   };

//   return (
//     <div className="payment-options-container">
//       <h2>Select Payment Method</h2>
//       <div className="payment-options">
//         <button onClick={() => handlePaymentSelection('Card')}>Card</button>
//         <button onClick={() => handlePaymentSelection('PhonePe')}>PhonePe</button>
//         <button onClick={() => handlePaymentSelection('Google Pay')}>Google Pay</button>
//         <button onClick={() => handlePaymentSelection('Paytm')}>Paytm</button>
//         <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
//       </div>

//       <button className="proceed-button" onClick={handlePaymentProceed}>
//         Proceed with {selectedOption ? selectedOption : '...'}
//       </button>

//       {/* Modal for PhonePe payment */}
//       {showPhonePeModal && (
//         <div className="phonepe-modal">
//           <div className="phonepe-modal-content">
//             <h3>Enter Phone Number for PhonePe</h3>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <button className="phonepe-submit-button" onClick={handlePhonePeSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PaymentOptions;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import './PaymentOptions.css'; // Import your CSS for styling

// function PaymentOptions() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showPhonePeModal, setShowPhonePeModal] = useState(false);
//   const [showCardModal, setShowCardModal] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     validThru: '',
//     cvv: ''
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state || {};
//   console.log(formData);

//   const handlePaymentSelection = (option) => {
//     setSelectedOption(option);

//     if (option === 'PhonePe') {
//       setShowPhonePeModal(true);
//     } else {
//       setShowPhonePeModal(false); // Ensure PhonePe modal is closed when another option is selected
//     }

//     if (option === 'Card') {
//       setShowCardModal(true);
//     } else {
//       setShowCardModal(false); // Ensure Card modal is closed when another option is selected
//     }
//   };

//   const handlePhonePeSubmit = () => {
//     if (phoneNumber) {
//       console.log(`PhonePe payment with phone number: ${phoneNumber}`);
//       setShowPhonePeModal(false); // Close the modal after submission
//       // Additional logic for PhonePe payment can be added here
//     } else {
//       alert("Please enter a phone number!");
//     }
//   };

//   const handleCardSubmit = () => {
//     const { cardNumber, validThru, cvv } = cardDetails;

//     if (cardNumber && validThru && cvv) {
//       console.log(`Card payment with details: ${cardNumber}, ${validThru}, ${cvv}`);
//       setShowCardModal(false); // Close the modal after submission
//       // Additional logic for Card payment can be added here
//     } else {
//       alert("Please fill all the card details!");
//     }
//   };

//   const handlePaymentProceed = () => {
//     if (selectedOption && selectedOption !== 'PhonePe' && selectedOption !== 'Card') {
//       console.log(`Proceeding with ${selectedOption}`);
//       navigate('/confirmation');
//     } else if (!selectedOption) {
//       alert("Please select a payment option!");
//     }
//   };

//   return (
//     <div className="payment-options-container">
//       <h2>Select Payment Method</h2>
//       <div className="payment-options">
//         <button onClick={() => handlePaymentSelection('Card')}>Card</button>
//         <button onClick={() => handlePaymentSelection('PhonePe')}>PhonePe</button>
//         <button onClick={() => handlePaymentSelection('Google Pay')}>Google Pay</button>
//         <button onClick={() => handlePaymentSelection('Paytm')}>Paytm</button>
//         <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
//       </div>

//       <button className="proceed-button" onClick={handlePaymentProceed}>
//         Proceed with {selectedOption ? selectedOption : '...'}
//       </button>

//       {/* Modal for PhonePe payment */}
//       {showPhonePeModal && (
//         <div className="phonepe-modal">
//           <div className="phonepe-modal-content">
//             <h3>Enter Phone Number for PhonePe</h3>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <button className="phonepe-submit-button" onClick={handlePhonePeSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal for Card payment */}
//       {showCardModal && (
//         <div className="card-modal">
//           <div className="card-modal-content">
//             <h3>Enter Card Details</h3>
//             <input
//               type="text"
//               placeholder="Card Number"
//               value={cardDetails.cardNumber}
//               onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Valid Thru (MM/YY)"
//               value={cardDetails.validThru}
//               onChange={(e) => setCardDetails({ ...cardDetails, validThru: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="CVV"
//               value={cardDetails.cvv}
//               onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//             />
//             <button className="card-submit-button" onClick={handleCardSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PaymentOptions;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import './PaymentOptions.css'; // Import your CSS for styling

// function PaymentOptions() {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showPhonePeModal, setShowPhonePeModal] = useState(false);
//   const [showCardModal, setShowCardModal] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     validThru: '',
//     cvv: ''
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { formData } = location.state || {};
//   console.log(formData);

//   const handlePaymentSelection = (option) => {
//     setSelectedOption(option);

//     if (option === 'PhonePe') {
//       setShowPhonePeModal(true);
//     } else {
//       setShowPhonePeModal(false); // Ensure PhonePe modal is closed when another option is selected
//     }

//     if (option === 'Card') {
//       setShowCardModal(true);
//     } else {
//       setShowCardModal(false); // Ensure Card modal is closed when another option is selected
//     }
//   };

//   const handlePhonePeSubmit = () => {
//     if (phoneNumber) {
//       console.log(`PhonePe payment with phone number: ${phoneNumber}`);
//       setShowPhonePeModal(false); // Close the modal after submission
//       // Additional logic for PhonePe payment can be added here
//     } else {
//       alert("Please enter a phone number!");
//     }
//   };

//   const handleCardSubmit = () => {
//     const { cardNumber, validThru, cvv } = cardDetails;

//     if (cardNumber && validThru && cvv) {
//       console.log(`Card payment with details: ${cardNumber}, ${validThru}, ${cvv}`);
//       setShowCardModal(false); // Close the modal after submission
//       // Additional logic for Card payment can be added here
//     } else {
//       alert("Please fill all the card details!");
//     }
//   };

//   const handlePaymentProceed = () => {
//     if (selectedOption && selectedOption !== 'PhonePe' && selectedOption !== 'Card') {
//       console.log(`Proceeding with ${selectedOption}`);
//       navigate('/confirmation');
//     } else if (!selectedOption) {
//       alert("Please select a payment option!");
//     }
//   };

//   const closeModal = () => {
//     setShowPhonePeModal(false);
//     setShowCardModal(false);
//   };

//   return (
//     <div className="payment-options-container">
//       <h2>Select Payment Method</h2>
//       <div className="payment-options">
//         <button onClick={() => handlePaymentSelection('Card')}>Card</button>
//         <button onClick={() => handlePaymentSelection('PhonePe')}>PhonePe</button>
//         <button onClick={() => handlePaymentSelection('Google Pay')}>Google Pay</button>
//         <button onClick={() => handlePaymentSelection('Paytm')}>Paytm</button>
//         <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
//       </div>

//       <button className="proceed-button" onClick={handlePaymentProceed}>
//         Proceed with {selectedOption ? selectedOption : '...'}
//       </button>

//       {/* Modal for PhonePe payment */}
//       {showPhonePeModal && (
//         <div className="phonepe-modal">
//           <div className="phonepe-modal-content">
//             <button className="close-modal-button" onClick={closeModal}>×</button>
//             <h3>Enter Phone Number for PhonePe</h3>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <button className="phonepe-submit-button" onClick={handlePhonePeSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal for Card payment */}
//       {showCardModal && (
//         <div className="card-modal">
//           <div className="card-modal-content">
//             <button className="close-modal-button" onClick={closeModal}>×</button>
//             <h3>Enter Card Details</h3>
//             <input
//               type="text"
//               placeholder="Card Number"
//               value={cardDetails.cardNumber}
//               onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Valid Thru (MM/YY)"
//               value={cardDetails.validThru}
//               onChange={(e) => setCardDetails({ ...cardDetails, validThru: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="CVV"
//               value={cardDetails.cvv}
//               onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
//             />
//             <button className="card-submit-button" onClick={handleCardSubmit}>
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PaymentOptions;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './PaymentOptions.css'; // Import your CSS for styling
import axiosInstance from '../../../Service/AxiosInstant';
import { useUser } from "../../../Context/UserContext";

function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showPhonePeModal, setShowPhonePeModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Success modal state
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    validThru: '',
    cvv: ''
  });
  const { userDetails } = useUser();

  const navigate = useNavigate();
  const location = useLocation();
  let { formData } = location.state || {};
  //console.log(formData);

  const handlePaymentSelection = (option) => {
    setSelectedOption(option);

    if (option === 'PhonePe' || option === 'Google Pay' || option === 'Paytm') {
      setShowPhonePeModal(true);
    } else {
      setShowPhonePeModal(false); // Ensure PhonePe modal is closed when another option is selected
    }

    if (option === 'Card') {
      setShowCardModal(true);
    } else {
      setShowCardModal(false); // Ensure Card modal is closed when another option is selected
    }
  };

  const handlePhonePeSubmit = async () => {
    if (phoneNumber) {
      //console.log(`PhonePe payment with phone number: ${phoneNumber}`);
      formData = { ...formData, paymentType: selectedOption, email: userDetails.email }
      // console.log(formData);
      try {
        const response = await axiosInstance.post('/user/save-order', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        // console.log(response);


      } catch (error) {
        console.log(error);

      }

      setShowPhonePeModal(false);
      setShowSuccessModal(true);
    } else {
      alert("Please enter a phone number!");
    }
  };

  const handleCardSubmit = () => {
    const { cardNumber, validThru, cvv } = cardDetails;

    if (cardNumber && validThru && cvv) {
      console.log(`Card payment with details: ${cardNumber}, ${validThru}, ${cvv}`);
      setShowCardModal(false);
      setShowSuccessModal(true);
    } else {
      alert("Please fill all the card details!");
    }
  };

  const handlePaymentProceed = () => {
    if (selectedOption && selectedOption !== 'PhonePe' && selectedOption !== 'Card') {
      console.log(`Proceeding with ${selectedOption}`);
      setShowSuccessModal(true);
    } else if (!selectedOption) {
      alert("Please select a payment option!");
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/customerdashboard');
  };

  const closeModal = () => {
    setShowPhonePeModal(false);
    setShowCardModal(false);
  };

  return (
    <div className="payment-options-container">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <button onClick={() => handlePaymentSelection('Card')}>Card</button>
        <button onClick={() => handlePaymentSelection('PhonePe')}>PhonePe</button>
        <button onClick={() => handlePaymentSelection('Google Pay')}>Google Pay</button>
        <button onClick={() => handlePaymentSelection('Paytm')}>Paytm</button>
        <button onClick={() => handlePaymentSelection('Cash on Delivery')}>Cash on Delivery</button>
      </div>

      <button className="proceed-button" onClick={handlePaymentProceed}>
        Proceed with {selectedOption ? selectedOption : '...'}
      </button>

      {showPhonePeModal && (
        <div className="phonepe-modal">
          <div className="phonepe-modal-content">
            <button className="close-modal-button" onClick={closeModal}>×</button>
            <h3>Enter {selectedOption} Number</h3>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="phonepe-submit-button" onClick={handlePhonePeSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {showCardModal && (
        <div className="card-modal">
          <div className="card-modal-content">
            <button className="close-modal-button" onClick={closeModal}>×</button>
            <h3>Enter Card Details</h3>
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
            <input
              type="text"
              placeholder="Valid Thru (MM/YY)"
              value={cardDetails.validThru}
              onChange={(e) => setCardDetails({ ...cardDetails, validThru: e.target.value })}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
            <button className="card-submit-button" onClick={handleCardSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <button className="close-modal-button" onClick={closeSuccessModal}>×</button>
            <h3>Payment Successful!</h3>
            <p>Your payment has been processed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentOptions;
