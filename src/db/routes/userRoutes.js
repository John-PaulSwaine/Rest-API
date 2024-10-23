const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/addUser");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");
const listUsers = require("../controllers/listUsers");
 
userRouter.post("/addUser", hashPassword ,addUser);
userRouter.post('/listUsers', checkPassword, listUsers)
 
module.exports = userRouter;