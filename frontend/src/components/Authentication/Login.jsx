import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    showPassword: false,
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };
  const showToast = (title, status) => {
    toast({
      title,
      status,
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  // const handleInputChange = (e) => setInput(e.target.value);
  const submitHandler = async () => {
    setLoading(true);
    const { email, password } = formData;

    if (!email || !password) {
      showToast("Please Fill all the Fields", "warning");
      setLoading(false);
      return;
    }

    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      showToast("Login Successful!", "success");

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      showToast("Error Occurred!", "warning");
      setLoading(false);
    }
  };

  const setGuestCredentials = async ({ email, password }) => {
    setLoading(true);

    if (!email || !password) {
      showToast("Please Fill all the Fields", "warning");
      setLoading(false);
      return;
    }

    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      showToast("Login Successful!", "success");

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      showToast("Error Occurred!", "warning");
      setLoading(false);
    }
  };

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {/* // email form */}
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          id="email1"
          value={formData.email}
          placeholder="Enter Your Email Address"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </FormControl>
      {/* // password form */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={formData.showPassword ? "text" : "password"}
            id="password1"
            value={formData.password}
            placeholder="Enter Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
              {formData.showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" isLoading={loading} onClick={submitHandler}>
        Login
      </Button>
      <Button
        colorScheme="red"
        onClick={() => {
          setGuestCredentials({
            email: "tomleo@gmail.com",
            password: "tomleo",
          });
        }}
      >
        Guest user credentials
      </Button>
    </VStack>
  );
};

export default Login;
