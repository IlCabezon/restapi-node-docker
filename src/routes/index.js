//modules
import {Router} from "express";
//controllers
import { greeting } from "../controllers/index.js";

const router = Router()

router.get('/',greeting)

export default router;