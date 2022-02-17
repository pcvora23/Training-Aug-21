const UserModel = require("../Model/userData.model");
const ProductModel = require("../Model/product.model");
const nodemailer = require("nodemailer");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserData {
  async logIn(req, res) {
    console.log(req.body);
    let userdata = {
      email: req.body.email,
      password: req.body.password,
    };
    // user authentication
    const user = await UserModel.findOne({ email: userdata.email });
    const validPassword = await bcrypt.compare(
      userdata.password,
      user.password
    );
    if (validPassword) {
      let token = jwt.sign({ ...user }, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: "7d",
      });
      res.status(200).json({
        message: "login successfull",
        jwttoken: token,
      });
    } else {
      res.status(401).json({ message: "login failed" });
    }
  }
  async getAllUserData(req, res) {
    try {
      const result = await UserModel.find();
      res.send(result);
    } catch {
      return res.status(404).send("Users Not Available !!");
    }
  }
  async getUserDetailsFromId(req, res) {
    try {
      const result = await UserModel.find({ id: req.params.userId });
      if (!result) {
        return res
          .status(404)
          .send(`User Not Available For User ID : ${req.params.userId} !!`);
      } else {
        res.send(result);
      }
    } catch (ex) {
      res.send(ex.message);
    }
  }

  async addUser(req, res) {
    const data = req.body;
    try {
      const checkemail = await UserModel.find({ email: data.email });
      if (checkemail.length < 1) {
        bcrypt.hash(data.password, 10, async function (err, hash) {
          if (err) {
            return res.json({
              message: " Something went Wrong",
              error: err,
            });
          } else {
            try {
              const userObject = new UserModel({ ...data, password: hash });
              const result = await userObject.save();
              res.send(`Register Successfully Done`);
            } catch (e) {
              res.send(e.message);
            }
          }
        });
      } else {
        return res.send("Email id already exists");
      }
    } catch (ex) {
      return res.send("error");
    }
  }

  async updateUser(req, res) {
    var data = req.body;
    const id = req.body.id;
    bcrypt.hash(data.password, 10, async function (err, hash) {
      if (err) {
        res.send("password error");
        return;
      } else {
        data.password = hash;
        try {
          const result = await UserModel.updateOne(
            { id: id },
            {
              $set: {
                id: data.id,
                name: data.name,
                email: data.email,
                password: data.password,
                mobileno: data.mobileno,
              },
            }
          );
          if (result.modifiedCount == 0) {
            res.send("updation failed..");
          } else {
            res.send(`User Id:${req.body.id}  updated Successfully `);
          }
        } catch (e) {
          res.send(e.message);
        }
      }
    });
  }
  async deleteUser(req, res) {
    try {
      const result = await UserModel.updateOne(
        { id: req.params.id },
        { $set: { isdeleted: true } }
      );
      if (result.modifiedCount == 0) {
        res.send("deletion failed..");
      } else {
        res.send(`User Id:${req.params.id}  Deleted Successfully `);
      }
    } catch (e) {
      return res.send(e.message);
    }
  }

  async getNewUserId(req,res)
  {
    const newId = await UserModel.find({}).sort({id:-1}).limit(1)
    res.send(newId);
  }
}
module.exports = UserData;
