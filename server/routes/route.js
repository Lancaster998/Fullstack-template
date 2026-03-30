import express from "express";
import { controller } from "../controllers/controller.js";
const Router = express.Router()

Router.post('/route', controller)

export default Router