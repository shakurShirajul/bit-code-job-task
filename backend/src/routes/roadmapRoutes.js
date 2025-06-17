import { Router } from "express";
import { Roadmap } from "../models/Roadmap.js";
import { Comment } from "../models/Comment.js";
import { User } from "../models/User.js";
const router = Router();

router.get("", async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({})
      .populate("upvotes")
      .populate("comments");
    res.status(200).json({ data: roadmaps });
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const roadmap = await Roadmap.findOne({ _id: id });
    res.status(200).json(roadmap);
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

export default router;
