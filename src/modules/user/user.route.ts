import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.createUser);
router.post("/profile", UserController.createOrUpdateProfile);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
