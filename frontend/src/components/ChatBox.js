import React from "react";
import { ChatState } from "../Contexts/ChatProvider";
import { Box, Center } from "@chakra-ui/react";

const ChatBox = () => {
  const { selectedChat } = ChatState();
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      Single Chat
    </Box>
  );
};

export default ChatBox;
