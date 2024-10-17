import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Select,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { FaEye, FaCheck, FaTimes } from 'react-icons/fa';

// Sample data for applicants
const applicantsData = [
  {
    id: 1,
    name: 'John Doe',
    screenshot: 'path/to/screenshot1.jpg', // replace with actual path
    status: 'pending',
  },
  {
    id: 2,
    name: 'Jane Smith',
    screenshot: 'path/to/screenshot2.jpg', // replace with actual path
    status: 'today',
  },
  // Add more applicants as needed
];

const AdminComponent = () => {
  const [filter, setFilter] = useState('all'); // state to manage filter

  // Function to filter applicants based on selected filter
  const filteredApplicants = applicantsData.filter((applicant) => {
    if (filter === 'today') return applicant.status === 'today';
    if (filter === 'pending') return applicant.status === 'pending';
    return true; // show all if 'all' is selected
  });

  return (
    <Box p={4}>
      <Heading mb={4}>Applicant Management</Heading>

      {/* Filter Dropdown */}
      <HStack mb={4}>
        <Select
          placeholder="Select filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="today">Today's Forms</option>
          <option value="pending">Pending Forms</option>
        </Select>
      </HStack>

      {/* Applicant List */}
      <VStack spacing={4} align="stretch">
        {filteredApplicants.map((applicant) => (
          <Flex
            key={applicant.id}
            justifyContent="space-between"
            alignItems="center"
            p={4}
            borderWidth={1}
            borderRadius="md"
            borderColor="gray.200"
            bg="white"
          >
            <Text fontSize="lg">{applicant.name}</Text>
            <Image
              src={applicant.screenshot}
              alt={`Screenshot for ${applicant.name}`}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
              ml={4}
            />
            <HStack spacing={2}>
              <IconButton
                aria-label="View Form"
                icon={<FaEye />}
                onClick={() => console.log(`Viewing form for ${applicant.name}`)}
              />
              <IconButton
                aria-label="Accept Application"
                icon={<FaCheck />}
                colorScheme="green"
                onClick={() => console.log(`Accepted application from ${applicant.name}`)}
              />
              <IconButton
                aria-label="Reject Application"
                icon={<FaTimes />}
                colorScheme="red"
                onClick={() => console.log(`Rejected application from ${applicant.name}`)}
              />
            </HStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default AdminComponent;
