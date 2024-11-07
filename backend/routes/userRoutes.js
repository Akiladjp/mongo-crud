import { addUser, deleteUser, getUser } from "../controllers/userControllers.js";
import express from "express";

const user = express.Router();

user.post("/useradd", addUser);
user.get("/getuser", getUser);
user.get("/deleteuser", deleteUser);

export default user;