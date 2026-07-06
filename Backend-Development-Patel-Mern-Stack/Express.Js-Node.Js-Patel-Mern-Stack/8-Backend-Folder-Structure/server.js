import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true })); // // Use urlencoded with extended: true to parse nested objects
// with the help of use method we can use any middleware in our application
app.use("/api/v1/user", userRouter);
app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
