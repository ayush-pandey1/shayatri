import React, { useEffect, useState } from 'react';
import { BiSolidMessageSquare } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from './Layout';
import "./chatContact.css";
import Convo from './Convo';



function Contact({ data, userCurrentId, func, onlineU }) {

  const [contacts, setContacts] = useState([
    // { id:}
    // { id: 1, avatar: 'avt0.png', name: 'Alice Johnson', online: false, message: 'New Message' },
    // { id: 2, avatar: 'avt1.png', name: 'Bob Wilson', online: true, message: 'New Message' },
    // { id: 3, avatar: 'avt2.png', name: 'Charlie Smith', online: false, message: 'New Message' },
    // { id: 4, avatar: 'avt3.png', name: 'David Brown', online: false, message: 'New Message' },
    // { id: 5, avatar: 'avt4.png', name: 'Emma Davis', online: false, message: 'New Message' },
    // { id: 6, avatar: 'avt5.png', name: 'Frank Miller', online: false, message: 'New Message' },
    // { id: 7, avatar: 'avt6.png', name: 'Grace Wilson', online: false, message: 'New Message' },
    // { id: 8, avatar: 'avt0.png', name: 'Henry Johnson', online: true, message: 'New Message' },
    // { id: 9, avatar: 'avt1.png', name: 'Ivy Smith', online: true, message: 'New Message' },
    // { id: 10, avatar: 'avt2.png', name: 'Jack Davis', online: false, message: 'New Message' },
    // { id: 11, avatar: 'avt3.png', name: 'Kate Brown', online: false, message: 'New Message' },
    // { id: 12, avatar: 'avt4.png', name: 'Leo Miller', online: false, message: 'New Message' },
    // { id: 13, avatar: 'avt5.png', name: 'Mia Wilson', online: false, message: 'New Message' },
    // { id: 14, avatar: 'avt6.png', name: 'Nathan Johnson', online: true, message: 'New Message' },
    // { id: 15, avatar: 'avt0.png', name: 'Olivia Smith', online: false, message: 'New Message' },
    // { id: 16, avatar: 'avt1.png', name: 'Peter Davis', online: false, message: 'New Message' },
    // { id: 17, avatar: 'avt2.png', name: 'Quinn Brown', online: false, message: 'New Message' },
  ]);
  // console.log("skdj", data);

  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile(width)) {
      navigate("/chat");
    }
  }, [width, navigate]);

  const width1 = window.innerWidth;
  const isMobile1 = width1 <= 768;
  const goChat = () => {
    if (isMobile) {
      const containerElement1 = document.getElementById('chatId');
      const containerElement2 = document.getElementById('contactId');
      if (containerElement1) {
        containerElement1.style.zIndex = "1";
        containerElement2.style.zIndex = "0";
      }
    }
  };
  return (
    <div>
      <div className="border-r-2 border-l-2 border-gray-200 max-h-[100vh] contactDiv" id="contactId" style={isMobile1 ? { height: "100vh", marginBottom: "10px", position: "absolute", backgroundColor: "white", width: "100%", } : { height: "88vh" }}>
        <div className="w-[100%] md:w-[26rem]  font-extrabold text-2xl border-b-2 border-gray-200 p-6">Chats</div>
        <div className="h-10 w-full text-gray-500 text-xs font-extrabold flex flex-row gap-2 items-center px-6">
          <BiSolidMessageSquare />
          ALL MESSAGES
        </div>

        {/* Contact List */}
        <div className="overflow-y-scroll py-2 max-h-[85vh]" onClick={goChat}>
          {data.map((chat) =>

            <div onClick={() => func(chat)}>
              <Convo data1={chat} currentUser={userCurrentId} onlineUser={onlineU(chat)} /></div>


          )}

        </div>
      </div>
    </div >
  );
}

export default Contact;
