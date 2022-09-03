import { check } from "express-validator";

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").not().isEmpty().isEmail().withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be as least 6 characters"),
];
