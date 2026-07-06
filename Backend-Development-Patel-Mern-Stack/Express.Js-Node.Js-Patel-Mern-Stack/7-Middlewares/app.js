/*
// old way
// const express = require('express');

// new way

import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true})); // // Use urlencoded with extended: true to parse nested objects
// with the help of use method we can use any middleware in our application

app.post("/api/v1/user/register", (req, res) => {
  const OBJ= req.body;
  console.log(OBJ);
  
  res
    .status(200)
    .json({ sucess: true, message: "User registered successfully" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT}`);
});

*/

// let us understand more

import express from "express";
const app = express();

app.use(function (req, res, next) {
    console.log('Middleware is called');
    next();
    
});
app.use(express.json());
app.get("/", (req, res) => {
    console.log("Route is called");
    
    res.send("Hello World");
})

app.post("/register", (req, res) => {
    res.status(200).json({
        success: true,
        message: "User registered successfully"
    });
})

app.post("/login", (req, res) => {

    const{email,password} = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    
    res.status(200).json({
        success: true,
        message: "User login successfully"
    });
})

app.listen(8000, () => {    
    console.log("Server is running at port 8000");
    
})



/*
What Happens in this Case:
If you place middleware after the route handler, then any checks or processing done by the middleware will occur after the route logic has already run.
If a route is responsible for inserting or modifying data (for example, a POST or PUT request), and there is no middleware before the insertion, you could theoretically bypass any validation or checks that the middleware would otherwise apply.
This would lead to a security hole, where the route could allow unauthorized or invalid data to be processed before the middleware has a chance to act on it.
*/