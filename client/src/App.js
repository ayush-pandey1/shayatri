import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';


import {
  BrowserRouter as Router,
  Route,
Routes
} from "react-router-dom";
import { AvatarPicker } from './components/AvatarPicker';
import { ForgetPass } from './components/ForgetPass';
import { Navbar } from './components/Navbar';
// import { Banner } from './components/Banner';
import { Particle } from './components/Particle';

import { Team } from './components/Team';

import { Contact } from './components/Contact';
import { Booking } from './components/Booking';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Features } from './components/Features';
import FaqsCard from './components/FaqsCard';
import { Profile } from './components/Profile';
import Preloader from './components/Preloader';
import Layout from "./components/Chat/Layout";
import {  useEffect, useRef, useState } from "react";

import {io} from 'socket.io-client';

function App() {


  const [onlineUsers, setOnlineUsers] = useState([]);
  console.log(onlineUsers,"sjkhsljks");
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const user = JSON.parse(localStorage.getItem("sahayatri-app"));

  const socket = useRef();
  const checkOnlineUser = (chat) => {
    const chatMember = chat?.members?.find((member) => member !== user?._id)
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  }
  useEffect(() => {
    // console.log("5");
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage])
  useEffect(() => {
    // console.log(user);
    if(user!==null){
    // console.log("6");
    if (user && user?._id) {
      socket.current = io('https://shayatri-socket.onrender.com');
      socket.current.emit("new-user-add", user._id);
      socket.current?.on('get-users', (users) => {
        setOnlineUsers(users);
        // console.log("onlienkdsjfsdj", onlineUsers)
      });
    }}
  }, []);
  useEffect(() => {
    // console.log("7");
    socket.current?.on("recieve-message", (data) => {
      setReceiveMessage(data);
    })
  }, []);

  return (
    <>
   <Router>
   {/* <Cursor/> */}
   {/* <Banner/> */}
      <Preloader/>
      <Navbar/>
      <Routes>

      <Route exact path="/" element={<>

                <Hero /> 
                <Particle/>
                <Features/>
                <Team/>
                <FaqsCard/>
                <Footer/>
                </>} >
      </Route>
      <Route exact path="/booking" element={<>
                <Particle/>
                <Booking/>
                <Footer/>
              </>} >
              </Route>
        {/* <Route exact path="/chat" element={<>
                <Chat1/>
              </>} >
              </Route> */}
        {/* <Route exact path="/chat" element={<>
                <Loader/>
              </>} >
        </Route> */}
        <Route exact path="/contact" element={<>
                <Contact/>
              </>} >
        </Route>
        <Route exact path="/signup" element={<>
              <Signup/> 
              <Footer/>
              </>} >
         </Route>
         <Route exact path="/login" element={<>
              <Login/>
              <Footer/>
              </>} >
         </Route>
         <Route exact path="/profile" element={<>
              <Profile/>
              </>} >
         </Route>
         <Route
            exact
            path="/chat"
            element={
              <>
                {/* <ChatLayout/> */}
                {/* const [senderId1, setSenderId1] = useState("");
  const [room1,setRoom1]=useState("");
  const [myId1,setMyId1]=usestate("") */}
                <Layout sSendmessage={setSendMessage} rReceiveMessage={receiveMessage} checkOnlineUser={checkOnlineUser} socket={socket.current}  />
              </>
            }
          ></Route>
         <Route exact path="/forget" element={<>
              <ForgetPass/>
              <Footer/>
              </>} >
         </Route>
         
         <Route exact path="/avatar" element={<>
                <AvatarPicker/>
                <Footer/>
              </>} >
        
        </Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
