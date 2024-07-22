import { Input } from "./input";
import React, { useCallback, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import "./chatContact.css";
import InputEmoji from 'react-input-emoji';
import { useEffect, useState } from "react";
import { addMessage, getUser, getmessages } from "../../utilies/APIRoutes.js";
import { formatDistanceToNow } from 'date-fns';
import TimeAgo from 'react-timeago';
import { Link, useNavigate } from "react-router-dom";
// import peer from '../../service/peer.js'


function Chat({ chat, currentUser, currentAvatar, setSendMessage, receiveMessage, onlineU, socket, myVar, setSenderId1, setRoom1, setMyId1 }) {

  const navigate = useNavigate();
  const screenWidth = window.innerWidth;
  const width = window.innerWidth;
  const scroll = useRef(null);
  const [firstRender, setFirstRender] = useState(true);



  let containerStyle;

  if (screenWidth <= 600) {
    containerStyle = {
      /* styles for screens with a maximum width of 600px */
    };
  } else if (screenWidth >= 601 && screenWidth <= 900) {
    containerStyle = {
      /* styles for screens with a width between 601px and 900px */
    };
  } else {
    containerStyle = {
      /* styles for screens with a minimum width of 901px */
    };
  }

  const isMobile = width <= 768;
  const goContact = () => {
    console.log("1");
    if (isMobile) {
      const containerElement1 = document.getElementById('chatId');
      const containerElement2 = document.getElementById('contactId');
      if (containerElement1) {
        containerElement1.style.zIndex = "0";
        containerElement2.style.zIndex = "1";
      }
    }
  };

  const [userData, setUserdata] = useState(null);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const []

  useEffect(() => {
    console.log("2");
    if (receiveMessage !== null && receiveMessage?.chatId === chat?._id) {
      setMessage([...message, receiveMessage]);
    }
  }, [receiveMessage])
  // console.log(message);
  // console.log("ggggggg", receiveMessage);


  useEffect(() => {
    console.log("3");
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserdata = async () => {
      try {
        const { data } = await getUser(userId);
        setUserdata(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserdata();
  }, [chat, currentUser])
  // console.log(chat);

  useEffect(() => {
    console.log("4");
    const fetchMessages = async () => {
      try {
        const { data } = await getmessages(chat?._id);
        // console.log(data);
        setMessage(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat])
  // console.log(message);
  const [currentData, setCurrentData] = useState(null);

  const data1 = JSON.parse(localStorage.getItem("sahayatri-app"));
  // console.log(data);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);

  }

  const handleSend = async (e) => {
    if (newMessage.length !== 0) {
      e.preventDefault();
      console.log("newmsg", newMessage)
      const msg = {
        senderId: currentUser,
        text: newMessage,
        chatId: chat?._id,
      }

      try {
        const { data } = await addMessage(msg);
        console.log("msgjdhkfsj", message)
        setMessage([...message, data]);
        console.log("msgjdhkfsj", message)
        setNewMessage("")
      } catch (error) {
        console.log(error);
      }

      const receiverId = chat.members.find((id) => id !== currentUser);
      setSendMessage({ ...msg, receiverId })
    }

  }




  useEffect(() => {
    if (scroll.current) {
      if (firstRender) {
        scroll.current.scrollIntoView({ behavior: 'auto' });
        // setFirstRender(false);
      } else {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [message, firstRender]);






  return (
    <div className="w-full h-full flex flex-col justify-between chatDiv" id="chatId" style={isMobile ? { height: "100vh", marginBottom: "10px", position: "absolute", backgroundColor: "white", width: "92%" } : { height: "88vh" }}>
      {/* TopBar starts from here */}
      {chat ? (<><div className="topbar bg-primary-color h-[5.8rem] md:rounded-tr-lg  flex flex-row justify-between py-2 px-6">
        {console.log(userData)}
        <div className="flex flex-row gap-2 items-center">
          <div className="w-12 rounded-full active:scale-95 transition-all ease-in-out hover:cursor-pointer">
            <img src={userData?.avatarImage} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-black text-lg text-white">{userData?.username}</p>
            <p className="text-xs text-green-400 font-bold">{onlineU(chat) ? "Onine" : "Offline"}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center justify-between text-3xl text-white px-2 hover:cursor-pointer active:scale-95 transition-all ease-in-out">
            <Link  >
              <IoVideocamOutline />
            </Link>
          </div>
          <div className="flex items-center justify-between text-3xl text-white px-2 hover:cursor-pointer active:scale-95 transition-all ease-in-out">
            <GoArrowRight onClick={goContact} />
          </div>
          <div></div>
        </div>
      </div>

        <div className="chatBox bg-white h-full w-full py-2 px-6 overflow-y-scroll" style={{ height: "100vh" }}>
          {message.map((msg) => (

            <React.Fragment key={Math.random()}>
              {msg.senderId === currentUser ? (
                <div className="sender flex flex-row gap-2 justify-end" ref={scroll}>
                  <div className="flex flex-col gap-2" >
                    <div className="flex flex-row items-center justify-between gap-2">
                      <p className="text-xs font-medium text-gray-400"><TimeAgo date={msg.createdAt} /></p>
                      <p className="text-md font-bold">{data1?.username}</p>
                    </div>
                    <div className="w-96 bg-primary-color text-white text-base font-medium p-3 text-justify rounded-br-2xl rounded-tl-2xl rounded-bl-2xl" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-all' }}>
                      {msg.text}
                    </div>

                  </div>
                  <div className="w-10 rounded-full">
                    <img
                      src={currentAvatar}
                      alt=""
                      className="hover:cursor-pointer active:scale-95 transition-all ease-in-out"
                    />
                  </div>
                </div>
              ) : (
                <div className="sender flex flex-row gap-2" ref={scroll}>
                  <div className="w-10 rounded-full">
                    <img
                      src={userData?.avatarImage}
                      alt=""
                      className="hover:cursor-pointer active:scale-95 transition-all ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <p className="text-md font-bold">{userData?.username}</p>
                      <p className="text-xs font-medium text-gray-400"><TimeAgo date={msg.createdAt} /></p>
                    </div>
                    <div className="w-96 bg-gray-200 text-base font-medium p-3 text-justify rounded-br-2xl rounded-tr-2xl rounded-bl-2xl" style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-all' }}>
                      {msg.text}
                    </div>

                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>


        {/* Input field starts from here */}
        <div className="input bg-gray-100 px-4 h-20 rounded-br-lg w-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-center text-2xl text-gray-500 rounded-full active:scale-95 transition-all ease-in-out hover:cursor-pointer">
            <IoIosAddCircleOutline />

          </div>
          {/* <div><InputEmoji /></div> */}
          <div className="w-[93%]">
            {/* <Input
            className="h-12 border-none outline-none shadow-none font-semibold text-base placeholder:text-black placeholder:text-base placeholder:font-medium"
            placeholder="Type your message here...."
          /> */}
            <InputEmoji className="h-12 border-none outline-none shadow-none font-semibold text-base placeholder:text-black placeholder:text-base placeholder:font-medium"
              placeholder="Type your message here...." value={newMessage} onChange={handleChange} />
          </div>
          <div>
            <div className="bg-primary-color rounded-full h-12 w-12 text-white flex items-center justify-center text-2xl active:scale-95 transition-all ease-in-out hover:cursor-pointer" onClick={handleSend}>
              <GoArrowRight />
            </div>
          </div>
        </div></>) : (<span style={{ margin: "auto", fontSize: "25px" }}>Tap on user to chat</span>)}

    </div>
  );
}

export default Chat;
