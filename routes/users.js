import express from "express";
import {
  createUser,
  getUsers,
  findUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

//get all users
router.get("/", getUsers);

//add new user
router.post("/", createUser);

//find user detail
router.get("/:id", findUser);

//delete user
router.delete("/:id", deleteUser);

//update user
router.patch("/:id", updateUser);

export default router;
