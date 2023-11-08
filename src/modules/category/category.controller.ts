import { RequestHandler } from "express";
import { CategoryService } from "./category.service";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const { ...categoryData } = req.body;
    const result = await CategoryService.createCategory(categoryData);
    res.send({
      status: 200,
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = { createCategory };
