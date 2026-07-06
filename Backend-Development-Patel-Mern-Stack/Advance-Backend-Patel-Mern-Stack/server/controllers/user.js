import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    // find user if he is already registered
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "This email id is already registered",
      });
    }

   const hashedPassword = await bcrypt.hash(password, 8);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully ...",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    //    res.set('name','Suyash Kamath')  yu can set header

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    // Yes, findOne() in Mongoose takes an object as an argument.

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    /*
    findOne() in Mongoose takes an object as an argument to specify the query conditions. If a matching document is found, it returns the entire document (which is an object representing the record in the database), not just the field(s) you queried.
    */

    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `Welcome Back ${user.fullName}`,
      });
  } catch (error) {

  }
};

// debug login
// export const login = async (req, res) => {
//     try {
//       console.time("Login Process");
  
//       const { email, password } = req.body;
//       if (!email || !password) {
//         return res.status(403).json({
//           success: false,
//           message: "All fields are required",
//         });
//       }
  
//       console.time("User Query");
//       const user = await User.findOne({ email });
//       console.timeEnd("User Query");
  
//       if (!user) {
//         return res.status(403).json({
//           success: false,
//           message: "Incorrect email or password",
//         });
//       }
  
//       console.time("Password Comparison");
//       const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
//       console.timeEnd("Password Comparison");
  
//       if (!isPasswordMatch) {
//         return res.status(403).json({
//           success: false,
//           message: "Incorrect email or password",
//         });
//       }
  
//       console.time("JWT Generation");
//       const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
//         expiresIn: "1d",
//       });
//       console.timeEnd("JWT Generation");
  
//       console.timeEnd("Login Process");
  
//       return res
//         .status(200)
//         .cookie("token", token, {
//           httpOnly: true,
//           sameSite: "strict",
//           maxAge: 24 * 60 * 60 * 1000,
//         })
//         .json({
//           success: true,
//           message: `Welcome Back ${user.fullName}`,
//         });
//     } catch (error) {
//       console.error("Error during login:", error);
//       res.status(500).json({ success: false, message: "Server error" });
//     }
//   };
  
// export const login = async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       if (!email || !password) {
//         return res.status(403).json({
//           success: false,
//           message: "All fields are required",
//         });
//       }
  
//       // Log request body
//       console.log("Request Body:", req.body);
  
//       const user = await User.findOne({ email });
  
//       // Log user object
//       console.log("User found:", user);
  
//       if (!user) {
//         return res.status(403).json({
//           success: false,
//           message: "Incorrect email or password",
//         });
//       }
  
//       // Log hashed password
//       console.log("Stored Hashed Password:", user.password);
  
//       const isPasswordMatch = await bcrypt.compare(password, user.password);
  
//       if (!isPasswordMatch) {
//         return res.status(403).json({
//           success: false,
//           message: "Incorrect email or password",
//         });
//       }
  
//       const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
//         expiresIn: "1d",
//       });
  
//       return res
//         .status(200)
//         .cookie("token", token, {
//           httpOnly: true,
//           sameSite: "strict",
//           maxAge: 24 * 60 * 60 * 1000,
//         })
//         .json({
//           success: true,
//           message: `Welcome Back ${user.fullName}`,
//         });
//     } catch (error) {
//       console.error("Error during login:", error);
//       return res.status(500).json({
//         success: false,
//         message: "Something went wrong. Please try again later.",
//       });
//     }
//   };
  

export const logout = async(req,res)=>{
  try {         // maxAge:0 so that immediately expired
    return res.status(200).cookie("token","",{maxAge:0}).json({
      success:true,
      message:"User logged out successfully"
    })
  } catch (error) {
    console.log(error);
    
  }
}