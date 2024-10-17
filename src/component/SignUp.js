// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   Heading,
//   Text,
//   useToast,
// } from '@chakra-ui/react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const toast = useToast();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: 'Passwords do not match.',
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     // Handle registration logic (e.g., API call)
//     console.log('User data:', formData);

//     toast({
//       title: 'Account created.',
//       description: "You've successfully created your account.",
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });

//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="lg">
//       <Heading as="h2" size="lg" textAlign="center" mb={5}>
//         Register
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4}>
//           <FormControl id="name" isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//             />
//           </FormControl>

//           <FormControl id="email" isRequired>
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </FormControl>

//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//             />
//           </FormControl>

//           <FormControl id="confirmPassword" isRequired>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//             />
//           </FormControl>

//           <Button type="submit" colorScheme="teal" size="lg" width="full">
//             Register
//           </Button>
//         </VStack>
//       </form>
//       <Text mt={4} textAlign="center">
//         Already have an account? <a href="/login" style={{ color: 'teal' }}>Login here</a>
//       </Text>
//     </Box>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    roles: 'USER', // default role set to USER
    password: '',
    confirmPassword: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: 'Passwords do not match.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8088/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobileNo: formData.mobileNo,
          roles: formData.roles,
          password: formData.password,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Account created.',
          description: "You've successfully registered.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setFormData({
          name: '',
          email: '',
          mobileNo: '',
          roles: 'USER', // reset to default
          password: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={5} borderWidth={1} borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="lg" textAlign="center" mb={5}>
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>

          <FormControl id="mobileNo" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>

          <FormControl id="confirmPassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" size="lg" width="full">
            Register
          </Button>
        </VStack>
      </form>
      <Text mt={4} textAlign="center">
        Already have an account? <a href="/login" style={{ color: 'teal' }}>Login here</a>
      </Text>
    </Box>
  );
};

export default RegistrationForm;
