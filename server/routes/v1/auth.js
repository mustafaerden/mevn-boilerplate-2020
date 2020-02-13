import { Router } from "express";
import authController from "@controllers/v1/authController";

const authRouter = new Router();

// Login route;
authRouter.post("/login", authController.login);

// Register route;
authRouter.post("/register", authController.register);

export default authRouter;
