import { response, Router } from "express";
import { Roadmap } from "../models/Roadmap.js";
import { Types } from "mongoose";
import { Comment } from "../models/Comment.js";
import { User } from "../models/User.js";
import { populate } from "dotenv";
import verifyToken from "../middleware/verifyToken.js";
const router = Router();

router.get("", async (req, res) => {
  try {
    const { title, category, status } = req.query;
    let query = {};
    if (title) {
      query = {
        $text: {
          $search: title,
          $caseSensitive: false,
        },
      };
    } else if (category) {
      query.category = category;
    } else if (status) {
      query.status = status;
    }
    const roadmaps = await Roadmap.find(query);
    res.status(200).json({ data: roadmaps });
  } catch (error) {
    console.error("Error fetching roadmaps:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;
    const roadmap = await Roadmap.findOne({ _id: id }).populate({
      path: "comments",
      populate: [
        {
          path: "authorID",
          select: "name image",
        },
        {
          path: "replies",
          populate: [
            {
              path: "authorID",
              select: "name image",
            },
            {
              path: "replies",
              populate: {
                path: "authorID",
                select: "name image",
              },
            },
          ],
        },
      ],
    });
    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

router.put("/upvotes", verifyToken, async (req, res) => {
  try {
    const { authorID, roadmapID } = req.body;
    if (!authorID || !roadmapID) {
      return res.status(400).json({ success: false, message: "Invalid IDs." });
    }

    const roadmap = await Roadmap.findOne({ _id: roadmapID });

    if (!roadmap) {
      return res
        .status(404)
        .json({ success: false, message: "Roadmap not found." });
    }
    const hasUpvoted = roadmap.upvotes.some((id) => id.equals(authorID));
    if (hasUpvoted) {
      const response = await Roadmap.updateOne(
        { _id: roadmapID },
        {
          $pull: {
            upvotes: new Types.ObjectId(authorID),
          },
        }
      );
    } else {
      const response = await Roadmap.updateOne(
        { _id: roadmapID },
        {
          $push: {
            upvotes: new Types.ObjectId(authorID),
          },
        }
      );
    }
    res.status(200).json({
      message: hasUpvoted ? "Upvote removed." : "Upvote added.",
      upvotes: roadmap.upvotes.length,
    });
  } catch (error) {
    console.error("Error toggling upvote:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
});

export default router;
