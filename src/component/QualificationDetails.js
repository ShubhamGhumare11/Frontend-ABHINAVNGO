

//   import React, { useState } from 'react';
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     Input,
//     Box,
//     Heading,
//     Button,
// } from '@chakra-ui/react';

// const QualificationDetails = () => {
//     const [qualifications, setQualifications] = useState([
//         { level: '10th', board: '', year: '', percentage: '' },
//         { level: '12th', board: '', year: '', percentage: '' },
//         { level: 'Graduation', board: '', year: '', percentage: '' },
//         { level: 'Post Graduation', board: '', year: '', percentage: '' },
//     ]);

//     const handleInputChange = (index, field, value) => {
//         const newQualifications = [...qualifications];
//         newQualifications[index][field] = value;
//         setQualifications(newQualifications);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         qualifications.forEach((qual, index) => {
//             formData.append(`qualifications[${index}][level]`, qual.level);
//             formData.append(`qualifications[${index}][board]`, qual.board);
//             formData.append(`qualifications[${index}][year]`, qual.year);
//             formData.append(`qualifications[${index}][percentage]`, qual.percentage);
//         });

//         try {
//             const response = await fetch('http://localhost:8080/api/your-endpoint', {
//                 method: 'POST',
//                 body: formData,
//             });
//             const data = await response.json();
//             console.log('Success:', data);
//             // Handle success response
//         } catch (error) {
//             console.error('Error:', error);
//             // Handle error response
//         }
//     };

//     return (
//         <Box as="form" onSubmit={handleSubmit} overflowX="auto" p={4}>
//             <Heading size="md" mb={4}>Qualification Details *</Heading>
//             <Table variant="simple" size="sm">
//                 <Thead>
//                     <Tr>
//                         <Th>Level</Th>
//                         <Th>Board/University</Th>
//                         <Th>Year of Passing</Th>
//                         <Th>Percentage/CGPA</Th>
//                     </Tr>
//                 </Thead>
//                 <Tbody>
//                     {qualifications.map((qual, index) => (
//                         <Tr key={qual.level}>
//                             <Td>{qual.level}</Td>
//                             <Td>
//                                 <Input
//                                     placeholder="Board/University"
//                                     value={qual.board}
//                                     onChange={(e) => handleInputChange(index, 'board', e.target.value)}
//                                     required
//                                 />
//                             </Td>
//                             <Td>
//                                 <Input
//                                     type="number"
//                                     placeholder="Year"
//                                     value={qual.year}
//                                     onChange={(e) => handleInputChange(index, 'year', e.target.value)}
//                                     required
//                                 />
//                             </Td>
//                             <Td>
//                                 <Input
//                                     placeholder="Percentage/CGPA"
//                                     value={qual.percentage}
//                                     onChange={(e) => handleInputChange(index, 'percentage', e.target.value)}
//                                     required
//                                 />
//                             </Td>
//                         </Tr>
//                     ))}
//                 </Tbody>
//             </Table>
//             <Button mt={4} colorScheme="teal" type="submit">Submit</Button>
//         </Box>
//     );
// };

// export default QualificationDetails;



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
    cv: null,
    qualifications: [],
    addresses: [
      {
        streetAddress: '',
        taluka: '',
        district: '',
        state: '',
        pincode: '',
      },
    ],
  });

  const [qualification, setQualification] = useState({
    level: '',
    boardOrUniversity: '',
    yearOfPassing: '',
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
    setQualification({ level: '', boardOrUniversity: '', yearOfPassing: '', percentage: '' });
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      setErrorMessages((prev) => ({ ...prev, cv: 'Please upload a PDF file.' }));
    } else {
      setErrorMessages((prev) => ({ ...prev, cv: '' }));
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form fields
    const newErrorMessages = {};
    if (!formData.firstName) newErrorMessages.firstName = 'First name is required.';
    if (!formData.lastName) newErrorMessages.lastName = 'Last name is required.';
    // Add additional validations as needed...

    setErrorMessages(newErrorMessages);

    if (Object.keys(newErrorMessages).length > 0) {
      setIsSubmitting(false);
      return; // Stop submission if there are validation errors
    }

    // Prepare form data for submission
    const formToSubmit = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          for (const subKey in item) {
            formToSubmit.append(`${key}[${index}].${subKey}`, item[subKey]);
          }
        });
      } else {
        formToSubmit.append(key, formData[key]);
      }
    }

    // Submit form data to backend
    try {
      const response = await fetch('http://localhost:8080/api/application/saveApplication', {
        method: 'POST',
        body: formToSubmit,
      });
      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
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
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" maxWidth="700px" width="100%" bg="white">
        <form onSubmit={handleSubmit}>
          <Text fontSize="xl" mb={4} textAlign="center">User Form</Text>

          {/* User Details Fields */}
          <Flex flexWrap="wrap" mb={4}>
            {/* User details here */}
          </Flex>

          {/* Qualifications Management */}
          <Text fontSize="lg" mb={2}>Qualifications</Text>
          <Flex mb={4}>
            <FormControl flex="1" mr={2}>
              <FormLabel>Level</FormLabel>
              <Select
                name="level"
                value={qualification.level}
                onChange={handleQualificationChange}
                placeholder="Select Level"
              >
                <option value="10th">10th</option>
                <option value="12th/Diploma">12th/Diploma</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </Select>
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>Board/University</FormLabel>
              <Input
                name="boardOrUniversity"
                value={qualification.boardOrUniversity}
                onChange={handleQualificationChange}
                placeholder="Board/University"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>Year of Passing</FormLabel>
              <Input
                name="yearOfPassing"
                value={qualification.yearOfPassing}
                onChange={handleQualificationChange}
                placeholder="Year of Passing"
                type="number"
              />
            </FormControl>

            <FormControl flex="1">
              <FormLabel>Percentage/CGPA</FormLabel>
              <Input
                name="percentage"
                value={qualification.percentage}
                onChange={handleQualificationChange}
                placeholder="Percentage/CGPA"
                type="number"
              />
            </FormControl>
          </Flex>

          <Button onClick={addQualification} mb={4}>Add Qualification</Button>

          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Level</Th>
                <Th>Board/University</Th>
                <Th>Year of Passing</Th>
                <Th>Percentage/CGPA</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {formData.qualifications.map((qual, index) => (
                <Tr key={index}>
                  <Td>{qual.level}</Td>
                  <Td>{qual.boardOrUniversity}</Td>
                  <Td>{qual.yearOfPassing}</Td>
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
          <Text fontSize="lg" mt={8} mb={2}>Addresses</Text>
          <Flex mb={4}>
            <FormControl flex="1" mr={2}>
              <FormLabel>Street Address</FormLabel>
              <Input
                name="streetAddress"
                value={address.streetAddress}
                onChange={handleAddressChange}
                placeholder="Street Address"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>Taluka</FormLabel>
              <Input
                name="taluka"
                value={address.taluka}
                onChange={handleAddressChange}
                placeholder="Taluka"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>District</FormLabel>
              <Input
                name="district"
                value={address.district}
                onChange={handleAddressChange}
                placeholder="District"
              />
            </FormControl>

            <FormControl flex="1" mr={2}>
              <FormLabel>State</FormLabel>
              <Input
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                placeholder="State"
              />
            </FormControl>

            <FormControl flex="1">
              <FormLabel>Pincode</FormLabel>
              <Input
                name="pincode"
                value={address.pincode}
                onChange={handleAddressChange}
                placeholder="Pincode"
                type="number"
              />
            </FormControl>
          </Flex>

          <Button onClick={addAddress} mb={4}>Add Address</Button>

          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Street Address</Th>
                <Th>Taluka</Th>
                <Th>District</Th>
                <Th>State</Th>
                <Th>Pincode</Th>
                <Th>Action</Th>
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
            <FormLabel>Upload CV (PDF)</FormLabel>
            <Input type="file" accept="application/pdf" onChange={handleFileChange} />
            <FormErrorMessage>{errorMessages.cv}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default UserFormComponent;
