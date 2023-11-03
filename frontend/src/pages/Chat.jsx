import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {chats.map((chat, i) => (
        <div key={i}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;

// video no 5 is finished
