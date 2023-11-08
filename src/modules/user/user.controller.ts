import { RequestHandler } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (req, res) => {
  try {
    const { ...userData } = req.body;
    console.log(userData);

    const result = await UserService.createUser(userData);
    res.send({
      status: 200,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();
    res.send({
      status: 200,
      message: "Users retrived successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser: RequestHandler = async (req, res) => {
  try {
    const id: number = parseInt(req.params.id);
    const result = await UserService.getSingleUser(id);
    res.send({
      status: 200,
      message: "User retrived successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const createOrUpdateProfile: RequestHandler = async (req, res) => {
  try {
    const { ...profileData } = req.body;
    const result = await UserService.createOrUpdateProfile(profileData);
    res.send({
      status: 200,
      message: "User profile created / updated successfully.",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  createOrUpdateProfile,
};
