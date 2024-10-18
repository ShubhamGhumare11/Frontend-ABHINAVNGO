import React from 'react';
import { Box, Button, Text, Flex, VStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting

const ThankYouComponent = () => {
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  // Handle redirection back to the OTP component
  const handleRedirect = () => {
    navigate('/'); // Assuming the OTP component is mapped to the '/otp' route
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      p={4}
      overflowY="auto"
    >
      <Box
        width={["100%", "90%", "80%"]}
        maxWidth="600px"
        mx="auto"
        p={6}
        textAlign="center"
        bg="white"
        borderRadius="md"
        boxShadow="md"
      >
        <VStack spacing={6}>
          {/* Success Icon and Message */}
          <Icon as={FaCheckCircle} boxSize={16} color="green.500" />
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            Thank you for your submission!
          </Text>
          <Text fontSize="lg" color="gray.600">
            Your payment has been successfully processed, and your application is complete.
          </Text>

          {/* Redirect Button */}
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleRedirect}
          >
            Back to Home
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default ThankYouComponent;
