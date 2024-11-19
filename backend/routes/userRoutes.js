import { addUser, deleteUser, getAllUsers, getUser } from "../controllers/userControllers.js";
import express from "express";

const user = express.Router();

user.post("/useradd", addUser);
user.get("/getuser", getUser);
user.get("/deleteuser", deleteUser);
user.get("/getallusers", getAllUsers);

export default user;