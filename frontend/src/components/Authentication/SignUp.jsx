import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show);
  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const postDetails = (pics) => {};

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {/* // name form */}
      <FormControl isInvalid={isError}>
        <FormLabel>Name</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? null : (
          <FormErrorMessage>Name is required.</FormErrorMessage>
        )}
      </FormControl>
      {/* // email form */}
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? null : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      {/* // password form */}
      <FormControl isInvalid={isError}>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isError ? null : (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      {/* // confirm password form */}
      <FormControl isInvalid={isError}>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!isError ? null : (
          <FormErrorMessage>Confirm Password is required.</FormErrorMessage>
        )}
      </FormControl>
      {/* upload picture */}
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button colorScheme="blue">Button</Button>
    </VStack>
  );
};

export default SignUp;

// video no.7
