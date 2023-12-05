import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState([]);

  let fetchData = async () => {
    let res = await fetch("http://localhost:5000/api/chat")
      .then(() => res.json())
      .catch((err) => console.log(err));
    setData(res);
  };
  useEffect(() => {
    fetchData();
    console.log("datass ", data);
  }, [data]);
  return <div>{}</div>;
};

export default Index;
