const io = require("socket.io")(8800, {
  cors: {
    origin: "https://shayatri.vercel.app",
  },
});



let activeUsers = [];

io.on("connection", (socket) => {

  socket.on("new-user-add", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
      console.log("New User Connected", activeUsers);
    }
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {

    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", activeUsers);

    io.emit("get-users", activeUsers);
  });

  socket.on("send-message", (data) => { 
    const { receiverId } = data;
    console.log("sdfkshkdfkhsj",receiverId);
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to :", user)
    console.log("Data: ", data)
    if (user) {
      io.to(user.socketId).emit("recieve-message", data);
    }
  });

  

});
