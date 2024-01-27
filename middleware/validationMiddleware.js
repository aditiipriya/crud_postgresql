const User = require("../models/user")

const validateUsername = (name) => {
    // regular expression for name validation
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };
  
  const validatePassword = (password) => {
    // regular expression for password validation //requires at least 8 characters, including at least one uppercase letter and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  
  const validationMiddleware = (req, res, next) => {
    const { username, password } = req.body;
  
    // Validate username
    if (!username || !validateUsername(username)) {
      return res.status(400).json({ error: 'Invalid username' });
    }
  
    // Validate password
    if (!password || !validatePassword(password)) {
      return res.status(400).json({ error: 'Invalid password' });
    }
  
    // If both name and password pass validation, proceed to the next middleware or route handler
    next();
  };
  
  const checkUserExists=async (req,res,next)=>{
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  }
  module.exports = {validationMiddleware,checkUserExists};
  