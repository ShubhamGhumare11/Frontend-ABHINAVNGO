




// import React, { useEffect, useState } from 'react';
// import { Box, Heading, Button, Text, useToast, Stack, Divider } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [applicants, setApplicants] = useState([]); // For storing applicants' data
//   const [loading, setLoading] = useState(true);
//   const toast = useToast();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProtectedData = async () => {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         toast({
//           title: 'No token found.',
//           description: 'Please log in first.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/login'); // Redirect to login if no token is found
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:8088/api/application/getAll', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data.');
//         }

//         const data = await response.json();
//         setApplicants(data.object); // Assuming 'object' contains applicants list
//         toast({
//           title: 'Data fetched successfully.',
//           description: 'Welcome to your dashboard!',
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//       } catch (error) {
//         toast({
//           title: 'Error fetching data.',
//           description: error.message || 'An error occurred while fetching data.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/login'); // Redirect to login if there's an error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProtectedData();
//   }, [navigate, toast]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     toast({
//       title: 'Logged out successfully.',
//       description: 'You have been logged out.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <Box mt={10} p={5} borderWidth={1} borderRadius="md">
//       <Heading as="h2" size="lg" mb={4}>
//         Dashboard
//       </Heading>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <Box>
//           {applicants.length > 0 ? (
//             <>
//               <Heading as="h3" size="md" mb={4}>List of Applicants</Heading>
//               <Stack spacing={4}>
//                 {applicants.map((applicant) => (
//                   <Box key={applicant.applicationId} p={4} borderWidth={1} borderRadius="md">
//                     <Text><strong>Name:</strong> {applicant.firstName} {applicant.middleName} {applicant.lastName}</Text>
//                     <Text><strong>Position:</strong> {applicant.position}</Text>
//                     <Text><strong>Organization:</strong> {applicant.organizationName}</Text>
//                     <Text><strong>Gender:</strong> {applicant.gender}</Text>
//                     <Text><strong>Email:</strong> {applicant.mailID}</Text>
//                     <Text><strong>Phone:</strong> {applicant.mobileNo}</Text>
//                     <Text><strong>Date of Birth:</strong> {applicant.dob}</Text>
//                     <Text><strong>Experience:</strong> {applicant.experienceYear} years, {applicant.experienceMonths} months, {applicant.experienceDays} days</Text>
                    
//                     <Heading as="h4" size="sm" mt={2}>Qualifications:</Heading>
//                     {applicant.qualifications.map((qual, idx) => (
//                       <Box key={idx}>
//                         <Text><strong>University:</strong> {qual.university || 'N/A'}</Text>
//                         <Text><strong>Passing Year:</strong> {qual.passingYear}</Text>
//                         <Text><strong>Percentage:</strong> {qual.percentage || 'N/A'}</Text>
//                       </Box>
//                     ))}

//                     <Heading as="h4" size="sm" mt={2}>Address:</Heading>
//                     {applicant.addresses.map((address, idx) => (
//                       <Box key={idx}>
//                         <Text>{address.streetAddress}, {address.taluka}, {address.district}, {address.state} - {address.pincode}</Text>
//                       </Box>
//                     ))}
//                     <Divider mt={4} />
//                   </Box>
//                 ))}
//               </Stack>
//             </>
//           ) : (
//             <Text>No applicants found.</Text>
//           )}
//         </Box>
//       )}
//       <Button colorScheme="red" mt={4} onClick={handleLogout}>
//         Logout
//       </Button>
//     </Box>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import { Box, Heading, Button, Text, useToast } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// // import jwt_decode from 'jwt-decode'; // Import jwt-decode library
// // import {  jwt_decode} from 'jwt-decode'; // Use named export
// // import { default as jwt_decode } from 'jwt-decode'; // This imports the default export but ensures compatibility

// // import jwtDecode from 'jwt-decode';
// import { jwtDecode } from 'jwt-decode'; // Correct import for named export


// const Dashboard = () => {
//   const [applicants, setApplicants] = useState([]); // For storing applicants' data
//   const [loading, setLoading] = useState(true);
//   const [isAdmin, setIsAdmin] = useState(false); // For checking if user is admin
//   const toast = useToast();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUserRole = () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         toast({
//           title: 'No token found.',
//           description: 'Please log in first.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/login');
//         return;
//       }

//       // Decode the token to get roles
//       const decodedToken = jwtDecode(token);
//       const roles = decodedToken.roles || []; // Extract roles from the token

//       // Check if the user is ADMIN
//       if (roles.includes('ADMIN')) {
//         setIsAdmin(true);
//       } else {
//         toast({
//           title: 'Unauthorized Access',
//           description: 'You do not have permission to access this page.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/unauthorized'); // Redirect to an unauthorized page if the user is not an admin
//         return;
//       }
//     };

//     const fetchProtectedData = async () => {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         toast({
//           title: 'No token found.',
//           description: 'Please log in first.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/login'); // Redirect to login if no token is found
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:8088/api/application/getAll', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data.');
//         }

//         const data = await response.json();
//         setApplicants(data.object); // Assuming 'object' contains applicants list
//         toast({
//           title: 'Data fetched successfully.',
//           description: 'Welcome to your dashboard!',
//           status: 'success',
//           duration: 3000,
//           isClosable: true,
//         });
//       } catch (error) {
//         toast({
//           title: 'Error fetching data.',
//           description: error.message || 'An error occurred while fetching data.',
//           status: 'error',
//           duration: 3000,
//           isClosable: true,
//         });
//         navigate('/login'); // Redirect to login if there's an error
//       } finally {
//         setLoading(false);
//       }
//     };

//     // First check if the user is an admin, then fetch data
//     checkUserRole();
//     fetchProtectedData();
//   }, [navigate, toast]);

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     toast({
//       title: 'Logged out successfully.',
//       description: 'You have been logged out.',
//       status: 'success',
//       duration: 3000,
//       isClosable: true,
//     });
//     navigate('/login'); // Redirect to login page after logout
//   };

//   return (
//     <Box mt={10} p={5} borderWidth={1} borderRadius="md">
//       <Heading as="h2" size="lg" mb={4}>
//         Dashboard
//       </Heading>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : isAdmin ? (
//         <Box>
//           {/* Display the applicants' data as before */}
//           {applicants.length > 0 ? (
//             <Box>
//               {applicants.map((applicant) => (
//                 <Box key={applicant.applicationId}>
//                   <Text><strong>Name:</strong> {applicant.firstName} {applicant.lastName}</Text>
//                   {/* Additional applicant data */}
//                 </Box>
//               ))}
//             </Box>
//           ) : (
//             <Text>No applicants found.</Text>
//           )}
//         </Box>
//       ) : (
//         <Text>Unauthorized Access</Text>
//       )}
//       <Button colorScheme="red" mt={4} onClick={handleLogout}>
//         Logout
//       </Button>
//     </Box>
//   );
// };

// export default Dashboard;






import React, { useEffect, useState } from 'react';
import { Box, Heading, Button, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for named export

const Dashboard = () => {
  const [applicants, setApplicants] = useState([]); // For storing applicants' data
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // For checking if user is admin
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = () => {
      const token = localStorage.getItem('token');

      if (!token) {
        toast({
          title: 'No token found.',
          description: 'Please log in first.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        navigate('/login');
        return;
      }

      // Decode the token to get roles
      const decodedToken = jwtDecode(token);
      const roles = decodedToken.roles || []; // Extract roles from the token

      // Check if the user is ADMIN
      if (roles.includes('ADMIN')) {
        setIsAdmin(true);
      } else {
        toast({
          title: 'Unauthorized Access',
          description: 'You do not have permission to access this page.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        navigate('/unauthorized'); // Redirect to an unauthorized page if the user is not an admin
        return;
      }
    };

    const fetchProtectedData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        toast({
          title: 'No token found.',
          description: 'Please log in first.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        navigate('/login'); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await fetch('http://localhost:8088/api/application/getAll', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }

        const data = await response.json();
        setApplicants(data.object); // Assuming 'object' contains applicants list
        toast({
          title: 'Data fetched successfully.',
          description: 'Welcome to your dashboard!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error fetching data.',
          description: error.message || 'An error occurred while fetching data.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        navigate('/login'); // Redirect to login if there's an error
      } finally {
        setLoading(false);
      }
    };

    // First check if the user is an admin, then fetch data
    checkUserRole();
    fetchProtectedData();
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    toast({
      title: 'Logged out successfully.',
      description: 'You have been logged out.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <Box mt={10} p={5} borderWidth={1} borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>
        Dashboard
      </Heading>
      {loading ? (
        <Text>Loading...</Text>
      ) : isAdmin ? (
        <Box>
          {applicants.length > 0 ? (
            <Box>
              {applicants.map((applicant) => (
                <Box key={applicant.applicationId} mb={4} p={3} borderWidth={1} borderRadius="md">
                  <Text><strong>Name:</strong> {applicant.firstName} {applicant.lastName}</Text>
                  <Text><strong>Email:</strong> {applicant.mailID}</Text>
                  <Text><strong>Mobile No:</strong> {applicant.mobileNo}</Text>
                  <Text><strong>Alternate No:</strong> {applicant.alternateNo}</Text>
                  <Text><strong>Date of Birth:</strong> {applicant.dob}</Text>
                  <Text><strong>Marital Status:</strong> {applicant.maritalStatus}</Text>
                  <Text><strong>Adhar Card:</strong> {applicant.adharCard}</Text>
                  <Text><strong>Pan Card No:</strong> {applicant.panCardNo}</Text>
                  <Text><strong>Organization Name:</strong> {applicant.organizationName}</Text>
                  <Text><strong>Working Location:</strong> {applicant.workingLocation}</Text>
                  <Text><strong>Position:</strong> {applicant.position}</Text>
                  <Text><strong>Type of Engagement:</strong> {applicant.typeOfEngagement}</Text>
                  <Text><strong>Experience:</strong> {applicant.experienceYear} Years, {applicant.experienceMonths} Months, {applicant.experienceDays} Days</Text>
                  <Text><strong>Submission Date:</strong> {applicant.submissionDate || 'Not submitted'}</Text>
                  
                  {/* Displaying Qualifications */}
                  <Box mt={2}>
                    <Text fontWeight="bold">Qualifications:</Text>
                    {applicant.qualifications && applicant.qualifications.length > 0 ? (
                      applicant.qualifications.map((qual, index) => (
                        <Box key={index} pl={4}>
                          <Text><strong>Qualification:</strong> {qual.standard}, {qual.university}, {qual.passingYear}, {qual.percentage}%</Text>
                        </Box>
                      ))
                    ) : (
                      <Text>No qualifications found.</Text>
                    )}
                  </Box>
                  
                  {/* Displaying Addresses */}
                  <Box mt={2}>
                    <Text fontWeight="bold">Addresses:</Text>
                    {applicant.addresses && applicant.addresses.length > 0 ? (
                      applicant.addresses.map((addr, index) => (
                        <Box key={index} pl={4}>
                          <Text>
                            <strong>Address:</strong> {addr.streetAddress}, {addr.taluka}, {addr.district}, {addr.state}, {addr.pincode}
                          </Text>
                        </Box>
                      ))
                    ) : (
                      <Text>No addresses found.</Text>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Text>No applicants found.</Text>
          )}
        </Box>
      ) : (
        <Text>Unauthorized Access</Text>
      )}
      <Button colorScheme="red" mt={4} onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;

