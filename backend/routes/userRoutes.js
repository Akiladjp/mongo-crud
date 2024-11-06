import { addUser } from "../controllers/userControllers.js";
import express from "express";

const user = express.Router();

user.post("/useradd", addUser);

export default user;