


// import React, { useState } from 'react';
// import { Box, Image, Button, Icon, Text, VStack, HStack, Flex } from '@chakra-ui/react';
// import { FaPlus } from 'react-icons/fa';
// import qrCode from '../assets/images/QR-code.webp';

// const PaymentComponent = () => {
//   const [imagePreview, setImagePreview] = useState(null);

//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImagePreview(imageUrl);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     // Logic for submission of data like application ID, applicant name, and uploaded image
//     console.log('Form submitted');
//   };

//   return (

//     <Flex
//           height="100vh"
//           alignItems="center"
//           justifyContent="center"
//           bg="gray.100"
//           p={4}
//           overflowY="auto"
//         >
//     <Box maxWidth="1200px" mx="auto" mt={8} p={4}>
//       <HStack spacing={8} alignItems="flex-start" justify="center">
//         {/* QR Code Image */}
//         <Box>
//           <Image
//             src={qrCode} // Replace with your QR code path
//             alt="QR Code"
//             boxSize="400px "
//             borderRadius="md"
//           />
//         </Box>

//         {/* Image Upload Section */}
//         <VStack>
//           <Box
//             borderWidth={2}
//             borderStyle="dashed"
//             borderRadius="md"
//             borderColor="gray.300"
//             width="200px"
//             height="200px"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             position="relative"
//             overflow="hidden"
//           >
//             {/* If an image is uploaded, display the preview */}
//             {imagePreview ? (
//               <Image
//                 src={imagePreview}
//                 alt="Uploaded Screenshot"
//                 objectFit="cover"
//               width="10em"
//             height="10em"
//               />
//             ) : (
//               <Box textAlign="center">
//                 <Icon as={FaPlus} boxSize={8} color="gray.400" />
//                 <Text color="gray.500">Upload Screenshot</Text>
//               </Box>
//             )}

//             {/* File Input for Image Upload */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{
//                 position: 'absolute',
//                 width: '100%',
//                 height: '100%',
//                 opacity: 0,
//                 cursor: 'pointer',
//               }}
//             />
//           </Box>

//           {/* Upload Info Text */}
//           <Text fontSize="sm" color="gray.500">
//             (Upload payment screenshot)
//           </Text>
//         </VStack>
//       </HStack>

//       {/* Submit Button */}
//       <Button
//         mt={6}
//         colorScheme="teal"
//         width="100%"
//         onClick={handleSubmit}
//       >
//         Submit Payment
//       </Button>
//     </Box>
// </Flex>
  
//   );
// };

// export default PaymentComponent;





// import React, { useState } from 'react';
// import { Box, Image, Button, Icon, Text, VStack, HStack, Flex } from '@chakra-ui/react';
// import qrCode from '../assets/images/QR-code.webp';
// import { useLocation } from 'react-router-dom';
// import { FaPlus, FaCheckCircle } from 'react-icons/fa'; // Import FaCheckCircle for tick mark


// const PaymentComponent = () => {
//   const [imagePreview, setImagePreview] = useState(null);
//   const [isImageUploaded, setIsImageUploaded] = useState(false);


//   const location = useLocation();
//   const { applicationId } = location.state;
//   console.log("Application ID in Payment:", applicationId);


//   // Handle image upload
//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImagePreview(imageUrl);
//     }
//   };
//   const handleRemoveImage = () => {
//     setImagePreview(null);
//     setIsImageUploaded(false); // Reset the uploaded image state
//   };



//   // Handle form submission
//   const handleSubmit = () => {



//     // Logic for submission of data like application ID, applicant name, and uploaded image
//     console.log('Form submitted');
//   };

//   return (
//     <Flex
//       height="100vh"
//       alignItems="center"
//       justifyContent="center"
//       bg="gray.100"
//       p={4}
//       overflowY="auto"
//     >
//       <Box width={["100%", "90%", "80%"]} maxWidth="1200px" mx="auto" p={6}>
//         <HStack
//           spacing={8}
//           alignItems="flex-start"
//           justify="center"
//           flexDirection={["column", "row"]}
//         >
//           {/* QR Code Image */}
//           <Box>
//           <HStack spacing={2} mb={2}>
//               <Text fontWeight="bold" fontSize="lg" color={ "pink.600"}>
//                 Step 1: Scan the QR Code.
//               </Text>
//               {<Icon as={FaCheckCircle} color="green.500" />} {/* Tick mark for step 1 */}
//             </HStack>
//             <Image
//               src={qrCode}
//               alt="QR Code"
//               boxSize={["250px", "300px", "400px"]} // Responsive size for QR code
//               borderRadius="md"
//             />
//           </Box>

//           {/* Image Upload Section */}
//           <VStack spacing={4}>

          
//           <HStack spacing={2}>
//               <Text fontWeight="bold" fontSize="lg" color={imagePreview ? "pink.500" : "gray.600"}>
//                 Step 2: Upload Payment Screenshot.
//               </Text>
//               {imagePreview && <Icon as={FaCheckCircle} color="green.500" />} {/* Tick mark for step 2 */}
//             </HStack>
//             <Box
//               borderWidth={2}
//               borderStyle="dashed"
//               borderRadius="md"
//               borderColor="gray.300"
//               width={["180px", "200px", "250px"]} // Responsive width
//               height={["180px", "200px", "250px"]} // Responsive height
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//               position="relative"
//               overflow="hidden"
//             >
//               {/* If an image is uploaded, display the preview */}


//               {imagePreview ? (
//                 <Image
//                   src={imagePreview}
//                   alt="Uploaded Screenshot"
//                   objectFit="cover"
//                   width="100%"
//                   height="100%"
//                 />
//               ) : (
//                 <Box textAlign="center">
//                   <Icon as={FaPlus} boxSize={10} color="gray.400" />
//                   <Text color="gray.500">Upload Screenshot</Text>
//                 </Box>
//               )}

//               {/* File Input for Image Upload */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 style={{
//                   position: 'absolute',
//                   width: '100%',
//                   height: '100%',
//                   opacity: 0,
//                   cursor: 'pointer',
//                 }}
//               />
//             </Box>

//     {/* Show "Change" Button if an image is uploaded */}
//     {imagePreview && (
//               <HStack spacing={2}>
//                 <Button
//                   mt={2}
//                   size="sm"
//                   onClick={() => document.querySelector('input[type="file"]').click()}
//                 >
//                   Change Screenshot
//                 </Button>
//                 <Button
//                   mt={2}
//                   size="sm"
//                   colorScheme="red"
//                   onClick={handleRemoveImage}
//                 >
//                   Remove Screenshot
//                 </Button>
//               </HStack>
//             )}

//             {/* Upload Info Text */}
//             <Text fontSize="sm" color="gray.500">
//               (Upload payment screenshot)
//             </Text>

//             <HStack spacing={2}>
//               <Text fontWeight="bold" fontSize="lg" color={imagePreview ? "pink.500" : "gray.600"}>
//                 Step 3: Click On Submit to Complete Process.
//               </Text>
//               {<Icon as={FaCheckCircle} color="green.500" />} {/* Tick mark for step 2 */}
//             </HStack>
//           </VStack>
//         </HStack>





//         {/* Submit Button */}
//         <Button
//           mt={8}
//           colorScheme="teal"
//           width="100%"
//           size={["md", "lg"]} // Responsive button size
//           onClick={handleSubmit}
//         >
//           Submit Payment
//         </Button>
//       </Box>
//     </Flex>
//   );
// };

// export default PaymentComponent;







import React, { useState } from 'react';
import { Box, Image, Button, Icon, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import qrCode from '../assets/images/QR-code.webp';
import { useLocation , useNavigate} from 'react-router-dom';
import { FaPlus, FaCheckCircle } from 'react-icons/fa';
import axios from 'axios'; // Import axios for making requests

const PaymentComponent = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null); // Store the uploaded file
  const location = useLocation();
  // const { applicationId } = location.state;
  const navigate = useNavigate(); // Initialize navigate for redirection
  const { applicationId } = location.state || {}; // Get applicationId from state
  console.log("Application ID in Payment:", applicationId);

  // Handle image upload
  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImagePreview(imageUrl);
      setFile(selectedFile); // Store the file for submission

      console.log('Uploaded File:', selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFile(null); // Reset the uploaded file state
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload a payment screenshot before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('id', applicationId); // Append the application ID
    formData.append('image', file); // Append the uploaded file



     // Log the application ID and the file being submitted
     console.log('Submitting Application ID:', applicationId);
     console.log('Submitting File:', file);
    try {
      // Make the POST request to the backend API
      const response = await axios.post('http://localhost:8080/user/form/saveImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response from /user/form/saveImage:', response.data);
      // Handle success response
      if (response.data.message === 'Image Added Successfully' && !response.data.hasError) {
        alert('Payment screenshot uploaded successfully!');
        // Optionally, redirect or perform additional actions here

        navigate('/processCompleted'); 
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error uploading payment screenshot:', error);
      alert('Failed to upload payment screenshot. Please try again.');
    }
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
      <Box width={["100%", "90%", "80%"]} maxWidth="1200px" mx="auto" p={6}>
        <HStack
          spacing={8}
          alignItems="flex-start"
          justify="center"
          flexDirection={["column", "row"]}
        >
          {/* QR Code Image */}
          <Box>
            <HStack spacing={2} mb={2}>
              <Text fontWeight="bold" fontSize="lg" color={"pink.600"}>
                Step 1: Scan the QR Code.
              </Text>
              <Icon as={FaCheckCircle} color="green.500" /> {/* Tick mark for step 1 */}
            </HStack>
            <Image
              src={qrCode}
              alt="QR Code"
              boxSize={["250px", "300px", "400px"]} // Responsive size for QR code
              borderRadius="md"
            />
          </Box>

          {/* Image Upload Section */}
          <VStack spacing={4}>
            <HStack spacing={2}>
              <Text fontWeight="bold" fontSize="lg" color={imagePreview ? "pink.500" : "gray.600"}>
                Step 2: Upload Payment Screenshot.
              </Text>
              {imagePreview && <Icon as={FaCheckCircle} color="green.500" />} {/* Tick mark for step 2 */}
            </HStack>
            <Box
              borderWidth={2}
              borderStyle="dashed"
              borderRadius="md"
              borderColor="gray.300"
              width={["180px", "200px", "250px"]} // Responsive width
              height={["180px", "200px", "250px"]} // Responsive height
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              overflow="hidden"
            >
              {/* If an image is uploaded, display the preview */}
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Uploaded Screenshot"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              ) : (
                <Box textAlign="center">
                  <Icon as={FaPlus} boxSize={10} color="gray.400" />
                  <Text color="gray.500">Upload Screenshot</Text>
                </Box>
              )}

              {/* File Input for Image Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                }}
              />
            </Box>

            {/* Show "Change" Button if an image is uploaded */}
            {imagePreview && (
              <HStack spacing={2}>
                <Button
                  mt={2}
                  size="sm"
                  onClick={() => document.querySelector('input[type="file"]').click()}
                >
                  Change Screenshot
                </Button>
                <Button
                  mt={2}
                  size="sm"
                  colorScheme="red"
                  onClick={handleRemoveImage}
                >
                  Remove Screenshot
                </Button>
              </HStack>
            )}

            {/* Upload Info Text */}
            <Text fontSize="sm" color="gray.500">
              (Upload payment screenshot)
            </Text>

            <HStack spacing={2}>
              <Text fontWeight="bold" fontSize="lg" color={imagePreview ? "pink.500" : "gray.600"}>
                Step 3: Click On Submit to Complete Process.
              </Text>
              <Icon as={FaCheckCircle} color="green.500" /> {/* Tick mark for step 3 */}
            </HStack>
          </VStack>
        </HStack>

        {/* Submit Button */}
        <Button
          mt={8}
          colorScheme="teal"
          width="100%"
          size={["md", "lg"]} // Responsive button size
          onClick={handleSubmit}
        >
          Submit Payment
        </Button>
      </Box>
    </Flex>
  );
};

export default PaymentComponent;
