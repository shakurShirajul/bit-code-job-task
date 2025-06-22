import { Router } from "express";
import { Comment } from "../models/Comment.js";
import { Roadmap } from "../models/Roadmap.js";
import { Types } from "mongoose";
import { deleteCommentRecursively } from "../utils/deleteCommentRecursively.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post("/create", verifyToken, async (req, res) => {
  try {
    const { content, authorID, roadmapID, parentCommentID } = req.body;
    if (!content || !authorID || !roadmapID) {
      return res
        .status(400)
        .json({ msg: "Please provide content, authorID and roadmapID" });
    }
    const response = await Comment.create({
      content,
      authorID,
      roadmapID,
    });
    if (response) {
      const updateRoadmap = await Roadmap.updateOne(
        { _id: roadmapID },
        { $push: { comments: response._id } }
      );
      return res.status(201).json({ message: "Comment created" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error, try again later." });
  }
});

router.put("/edit", verifyToken, async (req, res) => {
  try {
    const { content, commentID, authorID, roadmapID } = req.body;
    const response = await Comment.updateOne(
      { _id: commentID },
      {
        $set: {
          content: content,
        },
      }
    );
    if (response) {
      return res.status(201).json({ message: "Comment Updated Successfully" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error, try again later." });
  }
});

router.post("/reply", verifyToken, async (req, res) => {
  try {
    const { content, commentID, authorID, roadmapID } = req.body;
    const replyComment = await Comment.create({
      content,
      authorID,
      roadmapID,
      parentCommentID: commentID,
    });
    if (!replyComment) {
      return res.status(400).json({ msg: "Failed to create reply comment." });
    }
    const updateComment = await Comment.updateOne(
      {
        _id: commentID,
      },
      {
        $push: { replies: replyComment._id },
      }
    );
    if (!updateComment) {
      return res.status(400).json({ msg: "Failed to create reply comment." });
    }
    res.status(201).json({
      msg: "Reply comment created successfully.",
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error, try again later." });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { commentID, roadmapID, authorID, parentCommentID } = req.body;
    const commentObjectID = new Types.ObjectId(commentID);
    const deleteComment = await deleteCommentRecursively(commentID);
    if (deleteComment.deletedCount === 0) {
      return res
        .status(404)
        .json({ msg: "Comment not found or not authorized" });
    }
    if (parentCommentID) {
      const updateParentComment = await Comment.updateOne(
        { _id: parentCommentID },
        {
          $pull: {
            replies: new Types.ObjectId(commentID),
          },
        }
      );
    }
    const updateRoadmap = await Roadmap.updateOne(
      { _id: roadmapID },
      {
        $pull: {
          comments: commentObjectID,
        },
      }
    );
    if (updateRoadmap) {
      return res.status(201).json({ msg: "Comment Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error, try again later." });
  }
});

export default router;
