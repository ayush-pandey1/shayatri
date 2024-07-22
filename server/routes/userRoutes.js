const { signUp
    ,login
    ,avatar,
    booking,
    logout
 } = require("../controllers/usersController");

const router=require("express").Router();

router.post("/signUp",signUp);
router.post("/login",login);
router.post("/avatar/:id",avatar);
router.post("/booking",booking);
router.post("/logout",logout);
// router.post("/forget-password",forgetPassword);
// router.post("/online",online);
// router.post("/result",result);

module.exports=router;