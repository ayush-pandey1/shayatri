import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import Chat from "./Chat";
import { getUser, userChats } from "../../utilies/APIRoutes.js";
import { io } from 'socket.io-client';
import { useRef } from "react";

function Layout({ sSendmessage, rReceiveMessage, checkOnlineUser, socket, myVar, setSenderId1, setRoom1, setMyId1 }) {

  // const [senderId1, setSenderId1] = useState("");
  // const [room1,setRoom1]=useState("");
  // const [myId1,setMyId1]=usestate("")


  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);


  const isMobile = width <= 768;
  const user12 = JSON.parse(localStorage.getItem("sahayatri-app"));

  // useEffect(() => {
  //   document.getElementById("stop"){

  //   }
  // })


  // const socket = useRef();
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const user = JSON.parse(localStorage.getItem("sahayatri-app"));



  useEffect(() => {
    console.log("8");
    const getChats = async () => {
      try {
        const user = await JSON.parse(localStorage.getItem("sahayatri-app"));
        const { data } = await userChats(user?._id);
        setChats(data);


      } catch (error) {
        console.log(error);
      }
    }
    getChats()
  }, [])





  return (
    <div className={`max-h-[100vh] bg-white rounded-lg w-full border-r-2 border-b-2 border-t-2 border-gray-200 max-w-[92%] mx-auto mt-2 ${!isMobile && "flex flex-row"}`} >
      {/* {!isMobile && ( */}
      <>
        <div className="left overflow-y-hidden" >
          <Contact data={chats} userCurrentId={user?._id} func={setCurrentChat} onlineU={checkOnlineUser} />
        </div>
        {/* {console.log("current chat: ", currentChat)} */}
        <div className="right w-[80%]" >
          {/* const [senderId1, setSenderId1] = useState("");
  const [room1,setRoom1]=useState("");
  const [myId1,setMyId1]=usestate("") */}
          <Chat setSenderId1={setSenderId1} setRoom1={setRoom1} setMyId1={setMyId1} chat={currentChat} currentUser={user?._id} currentAvatar={user.avatarImage} setSendMessage={sSendmessage} receiveMessage={rReceiveMessage} onlineU={checkOnlineUser} socket={socket} myVar={myVar} />
          {/* {console.log("receiver", receiveMessage)} */}
        </div>
      </>
      {/* // )} */}

      {/* {isMobile && (
        <div style={{ display: "flex", flexDirection: "column", }}>
          <div style={{ border: "2px solid red", marginBottom: "10px", position: "absolute", zIndex: "12", backgroundColor: "white", width: "92%" }}>
            <Contact />
          </div>
          <div style={{ border: "2px solid red", position: "absolute", zIndex: "11", backgroundColor: "white", width: "92%" }}>
            <Chat />
          </div>
        </div>
      )} */}
    </div>


  );
}
export const isMobile = (width) => width <= 768;
export default Layout;
// bg-[#f8f6fe]
