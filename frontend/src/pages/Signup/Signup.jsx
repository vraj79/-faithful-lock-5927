import { Box, Button, FormControl, FormLabel, Input, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import "./signup.css"
const Signup = () => {
  return (
    <> 
    <div className='sign'>Signup</div>
     
     <div className='signup-box'>
    <Box  w="50%" p={2} margin="auto">
                     
                    <Input
                      mb="15px"
                      type="email"
                      placeholder='Enter Name'
                    />
                  </Box>
                  <Box  w="50%" p={2} margin="auto">
                     
                     <Input
                       mb="15px"
                       type="email"
                       placeholder='Enter Email'
                     />
                   </Box>

                   <Box  w="50%" p={2} margin="auto">
                     
                     <Input
                       mb="15px"
                       type="password"
                       placeholder='Enter Password'
                     />
                   </Box>

                   <Box  w="50%" p={2} margin="auto">
                     
                     <Input
                       mb="15px"
                       type="password"
                       placeholder='Enter Age'
                     />
                   </Box>

                   <Button bg="teal"  >Submit</Button>
     </div>

     
    </>
  )
}

export default Signup