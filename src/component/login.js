

//   import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   Text,
//   useToast,
// } from '@chakra-ui/react';

// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const toast = useToast();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can add your login logic
//     if (email && password) {
//       toast({
//         title: "Logged in.",
//         description: "Welcome back!",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       // Redirect or perform other actions after successful login
//     } else {
//       toast({
//         title: "Login failed.",
//         description: "Please enter both email and password.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="400px" mx="auto" mt="100px" p={4} borderWidth={1} borderRadius="md">
//       <Heading as="h2" size="lg" textAlign="center" mb={4}>
//         Login
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <FormControl mb={4}>
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </FormControl>
//         <FormControl mb={4}>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </FormControl>
//         <Button colorScheme="teal" width="full" type="submit">
//           Login
//         </Button>
//       </form>
//       <Text mt={4} textAlign="center">
//       Don&apos;t have an account?{' '}         <Link to="/signup">
//     <Button variant="link">Sign Up</Button>
//   </Link>
//       </Text>
//     </Box>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post('http://localhost:8080/api/auth/login', {
//                 username,
//                 password,
//             });

//             // Assuming the token is returned in the response data
//             const { token } = response.data;

//             // Store the token in local storage (or you can use a state management solution)
//             localStorage.setItem('jwtToken', token);

//             // Redirect or update UI after successful login
//             // You can use history.push('/dashboard') if you are using react-router
//             console.log('Login successful! Token:', token);
//         } catch (error) {
//             // Handle error (e.g., wrong credentials)
//             setError('Invalid credentials, please try again.');
//             console.error('Login failed:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleLogin}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Logging in...' : 'Login'}
//                 </button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   useToast,
// } from '@chakra-ui/react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const toast = useToast();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:8088/jwt/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

      
//       if (!response.ok) {
//         throw new Error('Login failed. Please check your credentials.');
//       }

//       const data = await response.json();
//       // Assuming the token is returned in the response
//       // const { token } = data;

//       const token = data.token; // Assuming the token is returned in a property called 'token'
      
//       // Print the token to the console
//       console.log('JWT Token:', token);

//       // Store token in localStorage or context
//       localStorage.setItem('token', token);

//       toast({
//         title: 'Login successful.',
//         description: 'Welcome back!',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
      
//       // Redirect or perform any additional actions here
//     } catch (error) {
//       toast({
//         title: 'Login failed.',
//         description: error.message,
//         status: 'error',
//         duration: 3000,
//         isClosable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box width="400px" mx="auto" mt="100px" p={5} borderWidth={1} borderRadius="lg">
//       <Heading as="h2" size="lg" mb={4}>
//         Login
//       </Heading>
//       <form onSubmit={handleLogin}>
//         <FormControl mb={3} isRequired>
//           <FormLabel>Username</FormLabel>
//           <Input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </FormControl>
//         <FormControl mb={3} isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormControl>
//         <Button
//           colorScheme="teal"
//           type="submit"
//           isLoading={loading}
//           width="full"
//         >
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Login;









import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); // To navigate the user post-login

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8088/jwt/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log('JWT data:', data);

      // const token = data.token; // Assuming the token is returned in a property called 'token'

      // Print the token to the console for debugging
      // console.log('JWT Token:', token);
      // console.log('JWT Token:653463', response.data);


      // Store token in localStorage
      localStorage.setItem('token', data);

      toast({
        title: 'Login successful.',
        description: 'Welcome back!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Redirect to dashboard or homepage
      navigate('/dashboard'); // Assuming you have a route setup for '/dashboard'
      
    } catch (error) {
      toast({
        title: 'Login failed.',
        description: error.message || 'An unexpected error occurred. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box width="400px" mx="auto" mt="100px" p={5} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <FormControl mb={3} isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl mb={3} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          type="submit"
          isLoading={loading}
          width="full"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
