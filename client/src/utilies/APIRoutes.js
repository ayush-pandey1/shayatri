import axios from "axios";

const host = "https://shayatri-backend.onrender.com";
export const signUpRoute=`${host}/api/auth/signUp`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/avatar`;
// export const ForgetRoute = `${host}/api/auth/forget-password`;
// export const setOnlineRoute = `${host}/api/auth/online`;
export const bookingRoute = `${host}/api/auth/booking`;
export const logoutRoute = `${host}/api/auth/logout`;
// export const resultRoute = `${host}/api/auth/result`;
// export const logoutRoute = `${host}/api/auth/logout`;


const API = axios.create({baseURL:'https://shayatri-backend.onrender.com'});
export const createChat = (senderId,receiverId)=> API.post('/chat',  senderId , receiverId );  // 
export const userChats=(id)=>API.get(`/chat/${id}`)
export const getUser=(userId)=>API.get(`/user/${userId}`)
export const getmessages=(id)=>API.get(`/message/${id}`)
export const addMessage = (data)=> API.post('/message/',data);
