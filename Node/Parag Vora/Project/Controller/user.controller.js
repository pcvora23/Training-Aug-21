const express = require("express");
const router = express.Router();
const UserData = require("../Domain/userlogic");
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");
class UserController {
    static async getAllUserData(req, res) {
        const userData = new UserData();
        userData.getAllUserData(req, res);
    }
    static async getUserDetailsFromId(req, res) {
        const userData = new UserData();
        userData.getUserDetailsFromId(req, res);
    }
    static async addUser(req, res) {
        const userData = new UserData();
        userData.addUser(req, res);
    }
    static async deleteUser(req, res) {
        const userData = new UserData();
        userData.deleteUser(req, res);
    }
    static async updateUser(req, res) {
        const userData = new UserData();
        userData.updateUser(req, res);
    }
    static async logIn(req, res) {
        const userData = new UserData();
        userData.logIn(req, res);
    }
}

//Post Methods
//Register New User
router.post("/register", UserController.addUser);

// login
router.post('/login',UserController.logIn);
router.use(verifyLogIn)

//Get Methods
router.get("/",  UserController.getUserDetailsFromId);

//Put Methods
router.put("/", UserController.updateUser);

//Delete Methods
router.delete("/", UserController.deleteUser);




router.use(verifyAdmin);
router.get("/getAllUser",  UserController.getAllUserData);

module.exports = router;
