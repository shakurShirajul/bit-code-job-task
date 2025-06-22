import { Router } from "express";
import { User } from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcryptjs";
import verifyToken from "../middleware/verifyToken.js";
const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, image, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide name, email and password" });
    }
    const user = await User.findOne({ email }, { password: false });
    if (user) {
      return res.status(400).json({ msg: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await User.create({
      name,
      email,
      image,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created." });
  } catch (error) {
    res.status(500).json({ msg: "Server error, try again later." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide email and password." });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Email or password is incorrect." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Email or password is incorrect." });
    }
    const token = generateToken({
      userID: user._id,
      email: user.email,
    });
    const { password: _password, ...userWithoutPassword } = user._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .json({ msg: "Login successful.", user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ msg: "Server error, try again later." });
  }
});

router.post("/logout", (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .status(200)
      .json({ msg: "Logout successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong during logout.",
    });
  }
});

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const { userID, email } = req.user;
    const user = await User.findOne({ email }, { password: false });
    res.json({ msg: "Token Received Succefully", user: user });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error, try again later.",
    });
  }
});

export default router;
