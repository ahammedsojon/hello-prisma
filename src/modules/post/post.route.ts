import express from "express";
import { PostController } from "./post.contorller";

const router = express.Router();

router.post("/create-post", PostController.createPost);
router.get("/", PostController.getAllPost);

export const PostRoutes = router;
