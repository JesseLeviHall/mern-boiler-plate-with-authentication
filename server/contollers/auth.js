import User from "../models/user.js";

/*
basic signup:
export const signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "This email already in use",
      });
    }
  });
  let newUser = new User({ name, email, password });
  newUser.save((err, success) => {
    if (err) {
      console.log("SIGN UP ERROR", err);
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      message: "SignUp Success!",
    });
  });
};
*/

export const signup = (req, res) => {};
//create an object for new user and post to sign up endpoint
