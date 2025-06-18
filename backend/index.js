import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import roadmapRoutes from "./src/routes/roadmapRoutes.js";
import commentRoutes from "./src/routes/commentRoutes.js";
import { database } from "./src/config/db.js";

const app = express();
const PORT = 5000;

database();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Auth Routes
app.use("/auth", authRoutes);
app.use("/roadmap", roadmapRoutes);
app.use("/comment", commentRoutes);

app.get("/", (req, res) => {
  res.send({ name: "shirajul" });
});

app.listen(PORT, "localhost", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
