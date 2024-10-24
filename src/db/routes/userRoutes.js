const {Router} = require("express");
const userRouter = Router();
const addUser = require("../controllers/users/addUser");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");
const listUsers = require("../controllers/users/listUsers");
const login = require("../controllers/users/login");
const checkToken = require("../middleware/checkToken");
 
userRouter.post("/addUser", hashPassword ,addUser);
userRouter.get('/listUsers', checkToken, listUsers)
userRouter.post('/login', checkPassword, login)
 
module.exports = userRouter;