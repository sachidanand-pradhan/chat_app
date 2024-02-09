// import { Box } from "@chakra-ui/layout";
// import { useState } from "react";
// import Chatbox from "../components/Chatbox";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/miscellaneous/SideDrawer";
// import { ChatState } from "../Contexts/ChatProvider";

const Chatpage = () => {
  //   const [fetchAgain, setFetchAgain] = useState(false);
  //   const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box> */}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores
        porro id, amet dicta natus voluptas exercitationem laborum illum optio
        est quos culpa provident, excepturi praesentium quia fugiat distinctio
        eveniet.
      </p>
    </div>
  );
};

export default Chatpage;
