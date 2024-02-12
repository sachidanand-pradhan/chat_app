import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    showPassword: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: null,
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

  const postDetails = (pics) => {
    setLoading(true);

    if (!pics) {
      showToast("Please Select an Image");
      setLoading(false);
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud-name", "dhluu76gk");
      fetch("https://api.cloudinary.com/v1_1/dhluu76gk/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // setPic(data.url.toString());
          setFormData({ ...formData, pic: data.url.toString() });
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      showToast("Please Select an Image");
      setLoading(false);
    }
  };

  const showToast = (title, status) => {
    toast({
      title,
      status,
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const submitHandler = async () => {
    setLoading(true);
    const { name, email, password, confirmPassword, pic } = formData;

    if (!name || !email || !password || !confirmPassword) {
      showToast("Please Fill all the Fields", "warning");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      showToast("Password Do Not Match", "warning");
      return;
    }

    try {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      showToast("Registration Successful", "success");

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
      // spacing="5px"
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {/* // name form */}
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          id="email"
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
            id="password"
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
      {/* // Confirm password form */}
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={formData.showPassword ? "text" : "password"}
            id="confirm_password"
            placeholder="Confirm password"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={togglePasswordVisibility}>
              {formData.showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* // pic form */}
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
