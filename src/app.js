//modules
import express from "express";
import morgan from "morgan";
//routes middleware
import router from "./routes/index.js";
//express initialization
const app = express();
//app configs
app.use(morgan("dev"))
app.use(express.json())
app.use(router)

export default app;