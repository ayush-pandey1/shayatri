const express=require("express");
const cors = require("cors");
const mongoose =require("mongoose");
const userRoutes =require("./routes/userRoutes")
const UserRoute = require("./routes/UserRoute.js")
const ChatRoute = require("./routes/ChatRoute.js")
const MessageRoute = require("./routes/MessageRoute.js")
// const ContactRoute = require("./routes/ContactusRoutes.js")

const app=express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes);
app.use("/chat",ChatRoute);
app.use('/message',MessageRoute)
app.use('/user', UserRoute)


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connection successful");
})
.catch((error)=>{
    console.log(error.message);
})

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server started on port ${process.env.PORT}`);
    // console.log(`Server started on port ${process.env.MONGO_URL}`);
})