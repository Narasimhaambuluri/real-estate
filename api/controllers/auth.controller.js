import userModel from "../models/auth.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    res.send({
      success: true,
      msg: "User created Successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      msg: error.message,
    });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(password);
  const validUser = await userModel.findOne({ email });
  // console.log(validUser);
  if (!validUser) {
    return res.send({
      success: false,
      message: "User not Found",
    });
  }
  const decodedPass = bcryptjs.compareSync(password, validUser.password);
  if (!decodedPass) {
    return res.send({
      success: false,
      message: "Inavlid User deatils",
    });
  }
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  const userwithoutpass = await userModel.findOne({ email }, { password: 0 });
  res
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .send(userwithoutpass);
};
