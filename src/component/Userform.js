

// import React, { useState } from 'react';
// import {
//   Box,
//   Input,
//   Button,
//   Select,
//   Text,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Textarea,
//   Heading,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   IconButton,
// } from '@chakra-ui/react';
// import { CloseIcon } from '@chakra-ui/icons';

// const UserFormComponent = () => {
//   const [formData, setFormData] = useState({
//     applyFor: '',
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     gender: '',
//     mailID: '',
//     mobileNo: '',
//     alternateNo: '',
//     dob: '',
//     maritalStatus: '',
//     adharCard: '',
//     panCardNo: '',
//     organizationName: '',
//     workingLocation: '',
//     position: '',
//     typeOfEngagement: '',
//     experienceYear: '',
//     experienceMonths: '',
//     experienceDays: '',
//     cv: null,
//     qualifications: [],
//     addresses: [
//       {
//         streetAddress: '',
//         taluka: '',
//         district: '',
//         state: '',
//         pincode: '',
//       },
//     ],
//   });

//   const [qualification, setQualification] = useState({
//     standard: '',
//     university: '',
//     passingYear: '',
//     percentage: '',
//   });

//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleQualificationChange = (e) => {
//     const { name, value } = e.target;
//     setQualification((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addQualification = () => {
//     setFormData((prev) => ({
//       ...prev,
//       qualifications: [...prev.qualifications, qualification],
//     }));
//     setQualification({ standard: '', university: '', passingYear: '', percentage: '' });
//   };

//   const removeQualification = (index) => {
//     const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
//     setFormData((prev) => ({
//       ...prev,
//       qualifications: updatedQualifications,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type !== 'application/pdf') {
//       setErrorMessages((prev) => ({ ...prev, cv: 'Please upload a PDF file.' }));
//     } else {
//       setErrorMessages((prev) => ({ ...prev, cv: '' }));
//       setFormData((prev) => ({
//         ...prev,
//         cv: file,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Validate form fields
//     const newErrorMessages = {};
//     if (!formData.firstName) newErrorMessages.firstName = 'First name is required.';
//     if (!formData.lastName) newErrorMessages.lastName = 'Last name is required.';
//     // Add additional validations as needed...

//     setErrorMessages(newErrorMessages);

//     if (Object.keys(newErrorMessages).length > 0) {
//       setIsSubmitting(false);
//       return; // Stop submission if there are validation errors
//     }

//     // Prepare form data for submission
//     const formToSubmit = new FormData();
//     for (const key in formData) {
//       if (Array.isArray(formData[key])) {
//         formData[key].forEach((item, index) => {
//           for (const subKey in item) {
//             formToSubmit.append(`${key}[${index}].${subKey}`, item[subKey]);
//           }
//         });
//       } else {
//         formToSubmit.append(key, formData[key]);
//       }
//     }

//     // Submit form data to backend
//     try {
//       const response = await fetch('http://localhost:8080/api/application/saveApplication', {
//         method: 'POST',
//         body: formToSubmit,
//       });
//       if (response.ok) {
//         // Handle successful submission
//         console.log('Form submitted successfully');
//       } else {
//         throw new Error('Failed to submit form');
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
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
//       <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" maxWidth="700px" width="100%" bg="white">
//         <form onSubmit={handleSubmit}>
//           <Text fontSize="xl" mb={4} textAlign="center">User Form</Text>

//           <Flex flexWrap="wrap" mb={4}>
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Apply For</FormLabel>
//               <Input
//                 name="applyFor"
//                 value={formData.applyFor}
//                 onChange={handleChange}
//                 placeholder="Volunteer/Job"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>First Name</FormLabel>
//               <Input
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="First Name"
//                 required
//               />
//               <FormErrorMessage>{errorMessages.firstName}</FormErrorMessage>
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Middle Name</FormLabel>
//               <Input
//                 name="middleName"
//                 value={formData.middleName}
//                 onChange={handleChange}
//                 placeholder="Middle Name"
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>Last Name</FormLabel>
//               <Input
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//                 required
//               />
//               <FormErrorMessage>{errorMessages.lastName}</FormErrorMessage>
//             </FormControl>
//           </Flex>

//           <Flex flexWrap="wrap" mb={4}>
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Gender</FormLabel>
//               <Select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 placeholder="Select Gender"
//               >
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </Select>
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="email"
//                 name="mailID"
//                 value={formData.mailID}
//                 onChange={handleChange}
//                 placeholder="Email"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Mobile No</FormLabel>
//               <Input
//                 name="mobileNo"
//                 value={formData.mobileNo}
//                 onChange={handleChange}
//                 placeholder="Mobile No"
//                 required
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>Alternate No</FormLabel>
//               <Input
//                 name="alternateNo"
//                 value={formData.alternateNo}
//                 onChange={handleChange}
//                 placeholder="Alternate No"
//               />
//             </FormControl>
//           </Flex>

//           <Flex flexWrap="wrap" mb={4}>
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Date of Birth</FormLabel>
//               <Input
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 placeholder="DOB"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Marital Status</FormLabel>
//               <Select
//                 name="maritalStatus"
//                 value={formData.maritalStatus}
//                 onChange={handleChange}
//                 placeholder="Select Marital Status"
//               >
//                 <option value="Single">Single</option>
//                 <option value="Married">Married</option>
//                 <option value="Divorced">Divorced</option>
//               </Select>
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Aadhar Card</FormLabel>
//               <Input
//                 name="adharCard"
//                 value={formData.adharCard}
//                 onChange={handleChange}
//                 placeholder="Aadhar Card"
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>PAN Card No</FormLabel>
//               <Input
//                 name="panCardNo"
//                 value={formData.panCardNo}
//                 onChange={handleChange}
//                 placeholder="PAN Card No"
//               />
//             </FormControl>
//           </Flex>

//           <Flex flexWrap="wrap" mb={4}>
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Organization Name</FormLabel>
//               <Input
//                 name="organizationName"
//                 value={formData.organizationName}
//                 onChange={handleChange}
//                 placeholder="Organization Name"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Working Location</FormLabel>
//               <Input
//                 name="workingLocation"
//                 value={formData.workingLocation}
//                 onChange={handleChange}
//                 placeholder="Working Location"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Position</FormLabel>
//               <Input
//                 name="position"
//                 value={formData.position}
//                 onChange={handleChange}
//                 placeholder="Position"
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>Type of Engagement</FormLabel>
//               <Select
//                 name="typeOfEngagement"
//                 value={formData.typeOfEngagement}
//                 onChange={handleChange}
//                 placeholder="Select Type of Engagement"
//               >
//                 <option value="Full Time">Full Time</option>
//                 <option value="Part Time">Part Time</option>
//                 <option value="Contract">Contract</option>
//               </Select>
//             </FormControl>
//           </Flex>

//           <Flex flexWrap="wrap" mb={4}>
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Experience (Years)</FormLabel>
//               <Input
//                 type="number"
//                 name="experienceYear"
//                 value={formData.experienceYear}
//                 onChange={handleChange}
//                 placeholder="Years"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Experience (Months)</FormLabel>
//               <Input
//                 type="number"
//                 name="experienceMonths"
//                 value={formData.experienceMonths}
//                 onChange={handleChange}
//                 placeholder="Months"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Experience (Days)</FormLabel>
//               <Input
//                 type="number"
//                 name="experienceDays"
//                 value={formData.experienceDays}
//                 onChange={handleChange}
//                 placeholder="Days"
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>Upload CV</FormLabel>
//               <Input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handleFileChange}
//               />
//               <FormErrorMessage>{errorMessages.cv}</FormErrorMessage>
//             </FormControl>
//           </Flex>




//           {/* ************************************************** */}

//           <Text fontSize="lg" mb={2}>Addresses</Text>
//           <Flex mb={4} flexWrap="wrap">
//             <FormControl flex="1" mr={2}>
//               <FormLabel>Street Address</FormLabel>
//               <Input
//                 name="streetAddress"
//                 value={formData.addresses[0].streetAddress}
//                 onChange={(e) => {
//                   const newAddresses = [...formData.addresses];
//                   newAddresses[0].streetAddress = e.target.value;
//                   setFormData((prev) => ({ ...prev, addresses: newAddresses }));
//                 }}
//                 placeholder="Street Address"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Taluka</FormLabel>
//               <Input
//                 name="taluka"
//                 value={formData.addresses[0].taluka}
//                 onChange={(e) => {
//                   const newAddresses = [...formData.addresses];
//                   newAddresses[0].taluka = e.target.value;
//                   setFormData((prev) => ({ ...prev, addresses: newAddresses }));
//                 }}
//                 placeholder="Taluka"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>District</FormLabel>
//               <Input
//                 name="district"
//                 value={formData.addresses[0].district}
//                 onChange={(e) => {
//                   const newAddresses = [...formData.addresses];
//                   newAddresses[0].district = e.target.value;
//                   setFormData((prev) => ({ ...prev, addresses: newAddresses }));
//                 }}
//                 placeholder="District"
//               />
//             </FormControl>

//             <FormControl flex="1">
//               <FormLabel>State</FormLabel>
//               <Input
//                 name="state"
//                 value={formData.addresses[0].state}
//                 onChange={(e) => {
//                   const newAddresses = [...formData.addresses];
//                   newAddresses[0].state = e.target.value;
//                   setFormData((prev) => ({ ...prev, addresses: newAddresses }));
//                 }}
//                 placeholder="State"
//               />
//             </FormControl>

//             <FormControl flex="1" mr={2}>
//               <FormLabel>Pincode</FormLabel>
//               <Input
//                 name="pincode"
//                 value={formData.addresses[0].pincode}
//                 onChange={(e) => {
//                   const newAddresses = [...formData.addresses];
//                   newAddresses[0].pincode = e.target.value;
//                   setFormData((prev) => ({ ...prev, addresses: newAddresses }));
//                 }}
//                 placeholder="Pincode"
//               />
//             </FormControl>
//           </Flex>

//           <Button
//             type="submit"
//             colorScheme="teal"
//             isLoading={isSubmitting}
//           >
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Flex>
//   );
// };

// export default UserFormComponent;













import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Select,
  Text,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UserFormComponent = () => {
  const [formData, setFormData] = useState({
    applyFor: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    mailID: '',
    mobileNo: '',
    alternateNo: '',
    dob: '',
    maritalStatus: '',
    adharCard: '',
    panCardNo: '',
    organizationName: '',
    workingLocation: '',
    position: '',
    typeOfEngagement: '',
    experienceYear: '',
    experienceMonths: '',
    experienceDays: '',
    // cv: null,
    qualifications: [],
    addresses: [],
  });
  const [file, setFile] = useState(null);
  const [qualification, setQualification] = useState({
    standard: '',
    university: '',
    passingYear: '',
    percentage: '',
  });
  const [address, setAddress] = useState({
    streetAddress: '',
    taluka: '',
    district: '',
    state: '',
    pincode: '',
  });


  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQualificationChange = (e) => {
    const { name, value } = e.target;
    setQualification((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addQualification = () => {
    setFormData((prev) => ({
      ...prev,
      qualifications: [...prev.qualifications, qualification],
    }));
    setQualification({ standard: '', university: '', passingYear: '', percentage: '' });
  };

  const removeQualification = (index) => {
    const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      qualifications: updatedQualifications,
    }));
  };



 


  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    console.log("in handleAddressChange...........")

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const addAddress = () => {
    setFormData((prev) => ({
      ...prev,
      addresses: [...prev.addresses, address],
    }));
    setAddress({ streetAddress: '', taluka: '', district: '', state: '', pincode: '' });
  };

 
  const removeAddress = (index) => {
    const updatedAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      addresses: updatedAddresses,
    }));
  };



// ****************




  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file ) {
  //     console.log("file is ......."+file)
  //     setErrorMessages((prev) => ({ ...prev, cv: 'Please upload a PDF file.' }));
  //   } else {
  //     setErrorMessages((prev) => ({ ...prev, cv: '' }));
  //     setFormData((prev) => ({
  //       ...prev,
  //       cv: file,
  //     }));
  //   }
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'application/pdf') {
      console.log("file is ......."+file)

      setErrorMessages((prev) => ({ ...prev, cv: '' }));
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, cv: 'Please upload a PDF file.' }));
    }
  };








  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Validate form fields
  //   const newErrorMessages = {};
  //   if (!formData.firstName) newErrorMessages.firstName = 'First name is required.';
  //   if (!formData.lastName) newErrorMessages.lastName = 'Last name is required.';
  //   // Add additional validations as needed...

  //   setErrorMessages(newErrorMessages);

  //   if (Object.keys(newErrorMessages).length > 0) {
  //     setIsSubmitting(false);
  //     return; // Stop submission if there are validation errors
  //   }

  //   // Prepare form data for submission
  //   const formToSubmit = new FormData();
  //   for (const key in formData) {
  //     if (Array.isArray(formData[key])) {
  //       formData[key].forEach((item, index) => {
  //         for (const subKey in item) {
  //           formToSubmit.append(`${key}[${index}].${subKey}`, item[subKey]);
  //         }
  //       });
  //     } else {
  //       formToSubmit.append(key, formData[key]);
  //     }
  //   }

  //   console.log("formToSubmit.................."+formToSubmit)

  //   console.log("formData............"+formData)

  //      // Console log FormData
  //      for (let pair of formToSubmit.entries()) {
  //       console.log("formdata from ffrontend..........."+pair[0] + ': ' + pair[1]);
  //   }


  //   // Submit form data to backend
  //   try {
  //     const response = await fetch('http://localhost:8080/user/form/save', {
  //       method: 'POST',
  //       body: formToSubmit,
        
  //     });
  //     if (response.ok) {
  //       // Handle successful submission
  //       console.log('Form submitted successfully');
  //     } else {
  //       throw new Error('Failed to submit form');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create FormData object to hold the multipart data
      const formToSubmit = new FormData();
  
      // Append the form data as a JSON string
      formToSubmit.append('IdDTO', JSON.stringify(formData));
  
      // Append the file (CV)
      if (file) {
        formToSubmit.append('file', file);
      }
      console.log('Form Data: ', formData);
      console.log('Uploaded File: ', file);
      try {
        // Make the POST request to the backend API
        const response = await axios.post('http://localhost:8080/user/form/savemarathi', formToSubmit, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
  
        const result =  response.data
        console.log('Parsed response data from /user/form/save Api.......:', result);
    
    
    

        if (result.message ==='Application Added' && !result.hasError ) {
          
          const applicationId = result.object.applicationId; // or wherever it's located in the response
      
          // Now navigate to the payment component with the applicationId
          navigate('/payment', { state: { applicationId } });
        }
        // Handle success response
        console.log('Application saved successfully:', response.data);
        alert('Application saved successfully!');
      } catch (error) {
        // Handle error response

        const errorMessage = error.response?.data?.object || 'An error occurred. Please try again.';
        const errorMessage1 = error.response?.data?.message || 'An error occurred. Please try again.';
        console.error('Error saving application:', error.response);
        // alert('Failed to save application. Please try again.');

        alert(`Error: ${errorMessage}`);
        alert(`Error: ${errorMessage1}`);

    
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
      <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg"  maxWidth="90vw"   maxHeight="90vh" width="100%" bg="white">
        <form onSubmit={handleSubmit}>
          <Text fontSize="xl" mb={4} textAlign="center">उपयोगकर्ता फॉर्म</Text>

          {/* User Details Fields */}
          <Flex flexWrap="wrap" mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>अर्ज करा</FormLabel>

              <Input
                name="applyFor"
                value={formData.applyFor}
                onChange={handleChange}
                placeholder="स्वयंसेवक/नोकरी"

              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>पहिला नाव</FormLabel>

              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="पहिला नाव"
                required
              />
              <FormErrorMessage>{errorMessages.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>मधले नाव</FormLabel>

              <Input
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="मधले नाव"

              />
            </FormControl>

            <FormControl flex="1">
            <FormLabel>आडनाव</FormLabel>

              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="आडनाव"

                required
              />
              <FormErrorMessage>{errorMessages.lastName}</FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex flexWrap="wrap" mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>लिंग</FormLabel>

              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              placeholder="लिंग निवडा"

              >
                <option value="Male">पुरुष</option>
                <option value="Female">महिला</option>
                <option value="Other">इतर</option>

              </Select>
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>ईमेल</FormLabel>

              <Input
                type="email"
                name="mailID"
                value={formData.mailID}
                onChange={handleChange}
                placeholder="ईमेल"

              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>मोबाइल क्रमांक</FormLabel>

              <Input
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="मोबाइल क्रमांक"

                required
              />
            </FormControl>

            <FormControl flex="1">
              <FormLabel>पर्यायी मोबाइल क्रमांक</FormLabel>
              <Input
                name="alternateNo"
                value={formData.alternateNo}
                onChange={handleChange}
                placeholder="पर्यायी मोबाइल क्रमांक"

              />
            </FormControl>
          </Flex>

          <Flex flexWrap="wrap" mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>जन्मतारीख</FormLabel>

              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="जन्मतारीख"

              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>विवाहित स्थिती</FormLabel>

              <Select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                placeholder="विवाहित स्थिती निवडा"

              >
                <option value="Single">एकटा</option>
                <option value="Married">विवाहित</option>
                <option value="Divorced">तलाकशुदा</option>

              </Select>
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>आधार कार्ड</FormLabel>

              <Input
                name="adharCard"
                value={formData.adharCard}
                onChange={handleChange}
                placeholder="आधार कार्ड"

              />
            </FormControl>

            <FormControl flex="1">
            <FormLabel>(PAN)अविरत खाते क्रमांक </FormLabel>

              <Input
                name="panCardNo"
                value={formData.panCardNo}
                onChange={handleChange}
                placeholder="अविरत खाते क्रमांक"
              />
            </FormControl>
          </Flex>

          <Flex flexWrap="wrap" mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>संस्थेचे नाव</FormLabel>
            <Input
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="संस्थेचे नाव"
                />
            </FormControl>

            <FormControl flex="1" mr={2}>
           <FormLabel>कार्यस्थान</FormLabel>

              <Input
                name="workingLocation"
                value={formData.workingLocation}
                onChange={handleChange}
                placeholder="कार्यस्थान"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>पद</FormLabel>

              <Input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="पद"
              />
            </FormControl>

            <FormControl flex="1">
            <FormLabel>व्यवहाराचा प्रकार</FormLabel>

              <Select
                name="typeOfEngagement"
                value={formData.typeOfEngagement}
                onChange={handleChange}
                placeholder="व्यवहाराचा प्रकार"
              >
                <option value="Full-time">पूर्ण वेळ</option>
                <option value="Part-time">अर्धवेळ</option>
                <option value="Internship">इंटर्नशिप</option>

              </Select>
            </FormControl>
          </Flex>

          <Flex flexWrap="wrap" mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>अनुभवाचे वर्ष</FormLabel>
            <Input
                name="experienceYear"
                value={formData.experienceYear}
                onChange={handleChange}
                placeholder="अनुभवाचे वर्ष"
                type="number"              
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>अनुभवाचे महिने</FormLabel>

              <Input
                name="experienceMonths"
                value={formData.experienceMonths}
                onChange={handleChange}
                placeholder="अनुभवाचे महिने"
                type="number"
              />
            </FormControl>

            <FormControl flex="1">
            <FormLabel>अनुभवाचे दिवस</FormLabel>
            <Input
                name="experienceDays"
                value={formData.experienceDays}
                onChange={handleChange}
                placeholder="अनुभवाचे दिवस"
                type="number"
              />
            </FormControl>
          </Flex>

          {/* Qualifications Management */}
          <Text fontSize="lg" mb={2}>पात्रता</Text>
          <Flex mb={4}>
            <FormControl flex="1" mr={2}>
            <FormLabel>पातळी</FormLabel>

              <Select
                name="level"
                value={qualification.level}
                onChange={handleQualificationChange}
                placeholder="पातळी निवडा"

              >
               <option value="10th">१०वी</option>
                <option value="12th/Diploma">१२वी/डिप्लोमा</option>
                <option value="Graduation">पदवी
                </option>
                <option value="Post Graduation">पदव्युत्तर</option>

              </Select>
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>बोर्ड/विद्यापीठ</FormLabel>

              <Input
                name="boardOrUniversity"
                value={qualification.boardOrUniversity}
                onChange={handleQualificationChange}
                placeholder="बोर्ड/विद्यापीठ"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>उत्तीर्ण वर्ष</FormLabel>
            <Input
                name="yearOfPassing"
                value={qualification.yearOfPassing}
                onChange={handleQualificationChange}
                placeholder="उत्तीर्ण वर्ष"
                type="number"
              />
            </FormControl>

            <FormControl flex="1">
              <FormLabel>टक्केवारी/सीजीपीए</FormLabel>
              <Input
                name="percentage"
                value={qualification.percentage}
                onChange={handleQualificationChange}
                placeholder="टक्केवारी/सीजीपीए"
                type="number"
              />
            </FormControl>
          </Flex>

          <Button onClick={addQualification} mb={4}>पात्रता जोडा</Button>


          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
              <Th>पातळी</Th>
              <Th>बोर्ड/विद्यापीठ</Th>
              <Th>उत्तीर्ण वर्ष</Th>
              <Th>टक्केवारी/सीजीपीए</Th>
              <Th>क्रिया</Th>

              </Tr>
            </Thead>
            <Tbody>
              {formData.qualifications.map((qual, index) => (
                <Tr key={index}>
                  <Td>{qual.standard}</Td>
                  <Td>{qual.university}</Td>
                  <Td>{qual.passingYear}</Td>
                  <Td>{qual.percentage}</Td>
                  <Td>
                    <IconButton
                      icon={<CloseIcon />}
                      aria-label="Remove Qualification"
                      onClick={() => removeQualification(index)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>


             {/* Address Management */}
             <Text fontSize="lg" mt={8} mb={2}>पत्ता</Text> 


              <Flex mb={4}>

            <FormControl flex="1" mr={2}>
            <FormLabel>रस्त्याचा पत्ता </FormLabel>


              <Input
                name="streetAddress"
                value={address.streetAddress}
                onChange={handleAddressChange}
                placeholder="रस्त्याचा पत्ता"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>तालुका</FormLabel>

              <Input
                name="taluka"
                value={address.taluka}
                onChange={handleAddressChange}
                placeholder="तालुका"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>जिल्हा</FormLabel>

              <Input
                name="district"
                value={address.district}
                onChange={handleAddressChange}
                placeholder="जिल्हा"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
            <FormLabel>राज्य</FormLabel>
            <Input
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                placeholder="राज्य"
              />
            </FormControl>

            <FormControl flex="1">
            <FormLabel>पिनकोड</FormLabel>

              <Input
                name="pincode"
                value={address.pincode}
                onChange={handleAddressChange}
                placeholder="पिनकोड"
                type="number"
              />
            </FormControl>
          </Flex>

          <Button onClick={addAddress} mb={4}>पत्ता जोडा</Button>

          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
              <Th>रस्त्याचा पत्ता</Th>
                <Th>तालुका</Th>
                <Th>जिल्हा</Th>
                <Th>राज्य</Th>
                <Th>पिनकोड</Th>
                <Th>क्रिया</Th>

              </Tr>
            </Thead>
            <Tbody>
              {formData.addresses.map((addr, index) => (
                <Tr key={index}>
                  <Td>{addr.streetAddress}</Td>
                  <Td>{addr.taluka}</Td>
                  <Td>{addr.district}</Td>
                  <Td>{addr.state}</Td>
                  <Td>{addr.pincode}</Td>
                  <Td>
                    <IconButton
                      icon={<CloseIcon />}
                      aria-label="Remove Address"
                      onClick={() => removeAddress(index)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* CV Upload */}
          <FormControl mb={4}>
          <FormLabel>सीव्ही अपलोड करा (पीडीएफ)</FormLabel>

            <input 
  type="file" 
  name="cv" 
  onChange={(e) => setFile(e.target.files[0])} 
/>

            <FormErrorMessage>{errorMessages.cv}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
    सबमिट करा
    </Button>

        </form>
      </Box>
    </Flex>
  );
};

export default UserFormComponent;
