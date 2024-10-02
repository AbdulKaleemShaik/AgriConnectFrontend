// import React, { useState } from 'react';
// import styles from './AskEmailPage.module.css';
// import { FaEnvelope } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/user/api/forgot-password', { email });
//       // alert('OTP sent to your email');
//       navigate(`/resetPassword/${email}`);
//     } catch (error) {
//       console.error('Error sending OTP', error);
//     }
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h2>Forgot Password?</h2>
//         <p>"Lost Password? Harvest your access faster than a bumper crop!"</p>
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.inputWrapper}>
//           <FaEnvelope className={styles.icon} />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className={styles.input}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className={styles.resetButton}>Submit</button>
//       </form>
//       <a href="/customerlogin" className={styles.backToLogin}>
//         &larr; Back to Login
//       </a>
//     </div>
//   );
// };

// export default ForgetPassword;
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid, Link, Paper } from '@mui/material';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
});

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/user/api/forgot-password', { email });
      navigate(`/resetPassword/${email}`);
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <StyledPaper elevation={3}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Forgot Password?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            "Lost Password? Harvest your access faster than a bumper crop!"
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <Grid container alignItems="flex-end">
              <Grid item>
                <FaEnvelope size={24} style={{ marginRight: '8px', color: '#555' }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  label="Enter your email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </Box>

          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 5, py: 1.5, mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>

        <Box textAlign="center" mt={3}>
          <Link href="/customerlogin" color="primary" underline="hover">
            &larr; Back to Login
          </Link>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default ForgetPassword;
