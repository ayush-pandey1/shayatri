const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        rquired:true,
        unique:true,
        max:50,
    },
    password:{
        type:String,
        required:true,
        min:8,

    },
    name:{
        type:String,
        required:true,
        min:3,

    },
    phone:{
        type:Number,
        required:true,
        // default:0,
        // min:10,
        // max:10
    },
    gender:{
        type:String,
        required:true,
        min:4,
        max:6
    },
    isAvatarImageSet:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:"no",
    },
    coordinates:{
    Olatitude:{
        type:Number,
        default:null,
    },
    Olongitude:{
        type:Number,
        default:null,
    },
    Dlatitude:{
        type:Number,
        default:null,
    },
    Dlongitude:{
        type:Number,
        default:null,
    }},
    online:{
        type:Boolean,
        default:false
    },
    origin:{
        
            type:String,
            default:"no",
        
    },
    destination:{
        type:String,
        default:"no",
    },
    // distance:{
    //     type:Number,
    //     default:null,
    // }
    // coordinates:{
    // latitude:{
    //     type:Number,
    //     default:null,
    // },
    // longitude:{
    //     type:Number,
    //     default:null,
    // }}
})

module.exports = mongoose.model("Users",userSchema);