import { RequestHandler } from "express";
import { PostService } from "./post.service";

const createPost: RequestHandler = async (req, res) => {
  try {
    const { ...postData } = req.body;
    const result = await PostService.createPost(postData);
    res.send({
      status: 200,
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost: RequestHandler = async (req, res) => {
  try {
    const options = req.query;
    const result = await PostService.getAllPost(options);
    res.send({
      status: 200,
      success: true,
      message: "Posts retrived successfully",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = { createPost, getAllPost };
