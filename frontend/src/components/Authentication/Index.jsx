import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/chat");
      console.log("axios  ", res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("datass ", data);
  return (
    <div>
      {data.map((chat, i) => (
        <div>
          <div key={i}>
            {chat.chatName}
            <div>
              {chat.users.map((el, i) => (
                <div key={i}>
                  {el.name} {el.email}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div>
        {data.map((chat, i) => (
          <div key={i}>
            {chat.users.map((el, i) => (
              <div key={i}>
                {el.name} {el.email}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
