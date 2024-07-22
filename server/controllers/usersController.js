const User = require("../model/userModel");
const bcrypt = require("bcrypt");
// const distance from '../Functions/distance';
// const { calculateDistance } = require('../Functions/distance')
const { calculateDistance } = require('../Functions/distance')


module.exports.getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) {
      // Destructure user document and extract necessary fields
      const { _id, username, email, isAvatarImageSet, avatarImage, online } = user;

      // Construct response object with extracted fields
      const userDetails = {
        _id,
        username,
        email,
        // SQ,
        isAvatarImageSet,
        avatarImage,
        online
      };

      res.status(200).json(userDetails);
    } else {
      res.status(404).json({ message: "No such User" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports.signUp= async(req,res,next)=>{
   try {
    // req=null;
    const  {username,email,password,name,phone,gender}=req.body;
    const usernameCheck = await User.findOne({username});
    if(usernameCheck)
    return res.json({msg:"Username already uses",status:false});
    const emailCheck = await User.findOne({email});
    if(emailCheck)
    return res.json({msg:"Email already used",status:false})
    const hashedPassword = await bcrypt.hash(password,5);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
        name,
        phone,
        gender,
    });
    delete user.password;
    return res.json({status:true,user});
   } catch (error) {
    next(error);
   }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // const username=username1;
    // const password = password1;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.avatar=async(req,res,next)=>{
  try {
    const userId = req.params.id;
    // console.log(userId);
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    next(error)
  }
}

module.exports.booking = async (req, res, next) => {
  try {
    const { userId, originCoordinates, destinationCoordinates,origin,destination } = req.body;
    const _id = userId;
    // console.log(origin);
    // console.log(destination);
    // console.log("hello");
    // console.log(originCoordinates.latitude);
    // Update user coordinates
    const update = await User.findByIdAndUpdate(
      userId,
      {
        coordinates: {
          Olatitude: originCoordinates.lat,
          Olongitude: originCoordinates.lng,
          Dlatitude: destinationCoordinates.lat,
          Dlongitude: destinationCoordinates.lng
        },
        origin,
        destination,
        online:true
      },
      {
        new: true, // Return the updated user data
      }
    
    );

    // console.log()
    // Find active users
    const activeUsers = await User.find({ online: true }).select(
      'username coordinates avatarImage origin destination gender '
    );

    // Calculate distances and filter nearby users within 1 km
    const nearbyUsers = activeUsers.filter((user) => {
      if (user.username !== update.username) {
        const OdistanceFind = calculateDistance(
          update.coordinates.Olatitude,
          update.coordinates.Olongitude,
          user.coordinates.Olatitude,
          user.coordinates.Olongitude
        );
        // console.log(user.name);
        const DdistanceFind = calculateDistance(
          update.coordinates.Dlatitude,
          update.coordinates.Dlongitude,
          user.coordinates.Dlatitude,
          user.coordinates.Dlongitude
        );
        // console.log(user.gender);
        // console.log(DdistanceFind);
        // const ;
        // Check if the user is within 2 km (adjust as needed)
        if (OdistanceFind <= 6 && DdistanceFind <= 6) {
          return true; // Include this user in the nearbyUsers list
        }
      }
      return false; // Exclude this user
    });

    // Create a list of nearby usernames and avatar images
    const nearbyUsernames = nearbyUsers.map((user) => {
      return {
        username: user.username,
        avatarImage: user.avatarImage,
        origin: user.origin,
        destination:user.destination,
        gender:user.gender,
        _id:user._id,
        distance:OdistanceFind = calculateDistance(
          update.coordinates.Olatitude,
          update.coordinates.Olongitude,
          user.coordinates.Olatitude,
          user.coordinates.Olongitude
        )
        // distance:
      };
    });
    // console.log(nearbyUsernames);

    // Send the list of nearby users as a JSON response
    res.json({ array: nearbyUsernames });
  } catch (error) {
    // Handle errors
    next(error);
  }
};


module.exports.logout=async(req,res,next)=>{
  try {
    // const userId = req.params.id;
    // console.log(userId);
    // const avatarImage = req.body.image;
    const { userId } = req.body;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        online:false
      },
      { new: true }
    );
    return res.json({
      isSet: userData.online,
      
    });
  } catch (error) {
    next(error)
  }
}


// module.exports.forgetPassword=async(req,res,next)=>{
//   try {
//     const {email, SQ,newPassword } = req.body;
//     // const username=username1;
//     // const password = password1;
//     const user = await User.findOne({email});
//     // const realSQ=user.SQ;
    
//     if (!user)
//     return res.json({ msg: "Incorrect Email or Security question", status: false });

//   // const isPasswordValid = await bcrypt.compare(password, user.password);

//     if(user.SQ!==SQ)
//     return res.json({ msg: "Incorrect Email or Security question", status: false });

//       const userId=user._id;
//     const newHashedPassword = await bcrypt.hash(newPassword,10);
//     const userdata =await User.findByIdAndUpdate(
//       userId,{
//         password:newHashedPassword,
//       }
//     );
//     return res.json({ status: true, user });
//     }
//     catch (error) {
//     next(error);
//   }
// }
// module.exports.online=async(req,res,next)=>{
//   try {
    
//     // console.log(userId);
//     // const online = req.body;
//     const {userId } = req.body;
//     // console.log(userId);
//     const userdata =await User.findByIdAndUpdate(
//       {_id:userId},{
//       online:true},
//       { new: true }
//     );
//     return res.json({
//       // isSet: userData.isAvatarImageSet,
//       online: true,
//     });
//     // console.log(userdata);
//     // return res.json({ status: true, user });
//   } catch (error) {
//     // console.log("hello");
//     next(error);
//   }
// }

// module.exports.result=async(req,res,next)=>{
//   try {
    
  
//       const { userId,
//           latitude,
//           longitude,} = req.body;
//           const _id=userId;
//       const update=await User.findByIdAndUpdate(
//         userId,{
//           coordinates:{
//             latitude,
//             longitude,
//           },
//         },{
//           new:true,
//         }
//       )
//       // console.log(update);
//       // console.log("hello");
//       const activeUsers = await User.find({ online: true }).select('username coordinates avatarImage');
//       // console.log(activeUsers);
//        // Calculate distances and filter users within 1 km
//     const nearbyUsers = activeUsers.filter(user => {
//       // console.log(update);
//       if(user.username!==update.username){
//       const distanceFind = calculateDistance(
//         update.coordinates.latitude,
//         update.coordinates.longitude,
//         user.coordinates.latitude,
//         user.coordinates.longitude
//       );
//       // console.log(distanceFind);
//       return distanceFind <= 2;
//       }
//     });
//     // console.log(nearbyUsers);
//     // console.log(nearbyUsers);
//     const nearbyUsernames = nearbyUsers.map((user) => {
//       return {
//         username: user.username,
//         avatarImage: user.avatarImage,
//       };
//     });
//     // console.log(nearbyUsernames);
//     // res.json();
//       // const partner=
//       // res.json(activeUsers);
//       res.json({array:nearbyUsernames});
//       // return res.json({
//       //   // isSet: userData.isAvatarImageSet,
//       //   location:true,
//       // });


//   } catch (error) {
//     // console.log("hello");
//     next(error);
//   }
// }

