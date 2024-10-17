// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import logo from "./logo.svg";
import "./App.css";
import { Flex, Box } from '@chakra-ui/react';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OTP from "./component/Otp";
import Payment from "./component/Payment";
import FormManagment from "./component/FormManagment";


import UserForm from "./component/Userform";

import Login from "./component/login";
import SignUp from "./component/SignUp";
import Dashboard from "./component/Dashboard";

import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
    <Flex direction="column" minHeight="100vh"> 
   
    <Router >
    
      <Box flex="1">
  


      <Routes >
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <>
           <OTP/>
           {/* <Payment/> */}

           {/* <FormManagment/> */}
            </>
          }
        />

<Route path="/userform" element={<UserForm />} />

     
<Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />


        


      </Routes>

   
 
      </Box>
      
    </Router>
   
    </Flex>
    </ChakraProvider>

  );
}

export default App;

