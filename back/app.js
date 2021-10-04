import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import usersRouter from "./routes/users.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.DB_PORT);
    console.log("conntected to port", process.env.DB_PORT);
  })
  .catch((err) => console.log(err.message));
