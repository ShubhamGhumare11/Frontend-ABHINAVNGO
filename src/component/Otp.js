
import React, { useState } from 'react';
import { Box, Input, Button, Text, Flex, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const OTPComponent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const isMobileNumberValid = /^[6-9]\d{9}$/.test(mobileNumber); // Simple validation for a 10-digit mobile number
  const isOtpValid = /^\d{4,6}$/.test(otp); // Valid OTP is typically 4-6 digits




  // sendMobile Number
  const handleSendOtp = async () => {
    
    if (!isMobileNumberValid) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    try {
   
      const response = await fetch(`http://localhost:8080/api/otp/sendByNumber?number=${mobileNumber}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber }),
      });
      if (true) {
        setIsOtpSent(true);
        setErrorMessage(''); // Clear any previous errors
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      setErrorMessage('Failed to send OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };





// verify OTP
  const handleVerifyOtp = async () => {
    if (!isOtpValid) {
      setErrorMessage('Please enter a valid OTP.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Send OTP and mobile number to backend to verify
      const response = await fetch(`http://localhost:8080/api/otp/verifiedOtp?number=${mobileNumber}&otp=${otp}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });
          // Parse and log the response data
    const result = await response.json();
    console.log('Parsed response data from verifyOtp Api.......:', result);


      console.log("Resonse of verifyOtp Api ............"+response)

console.log("Resonse of verifyOtp Api ............"+response.data)

      if (result.message === 'success'  && !result.hasError )
       {
        console.log("OTP Verified, redirecting to userform...");
console.log("Response checked from verifyOtp API and redirect to userform.........")
        navigate('/userform');

      } else {
        setErrorMessage('Incorrect OTP. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error verifying OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" maxWidth="400px">
        <FormControl isInvalid={!isMobileNumberValid && mobileNumber !== ''} mb={5}>
          <FormLabel fontSize="xl">Enter your mobile number</FormLabel>
          <Input
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            isDisabled={isSubmitting || isOtpSent}
          />
          <FormErrorMessage>Mobile number must be a valid 10-digit number.</FormErrorMessage>
        </FormControl>

        {!isOtpSent && (
          <Button
            colorScheme="teal"
            onClick={handleSendOtp}
            isDisabled={!isMobileNumberValid || isSubmitting}
            isLoading={isSubmitting}
            loadingText="Sending OTP"
          >
            Send OTP
          </Button>
        )}

        {isOtpSent && (
          <>
            <FormControl isInvalid={!isOtpValid && otp !== ''} mt={5}>
              <FormLabel>Enter the OTP sent to your mobile</FormLabel>
              <Input
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                isDisabled={isSubmitting}
              />
              <FormErrorMessage>OTP must be 4-6 digits long.</FormErrorMessage>
            </FormControl>
            <Button
              mt={3}
              colorScheme="teal"
              onClick={handleVerifyOtp}
              isDisabled={!isOtpValid || isSubmitting}
              isLoading={isSubmitting}
              loadingText="Verifying OTP"
            >
              Verify OTP
            </Button>
          </>
        )}

        {errorMessage && <Text color="red.500" mt={3}>{errorMessage}</Text>}
      </Box>
    </Flex>
  );
};

export default OTPComponent;
