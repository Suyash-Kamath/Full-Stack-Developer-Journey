export const register = (req, res) => {
  console.log("register controller called after middleware");
  
    const obj = req.body;
    console.log(obj);
  
    res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  }

  export const login = (req, res) => {
    console.log("login controller called after middleware");
    
    const obj = req.body;
    console.log(obj);
  
    res.status(200).json({ success: true, message: "User logged in successfully" });
  }