const express = require('express')
const { signin, signup } = require('../controllers/auth')
const { check, validationResult } = require("express-validator");
const router = express.Router()
var jwt = require("jsonwebtoken");
var expressJwt = require("jsonwebtoken");


router.post(
    "/signup",
    [
        check("name", "name should be at least 3 char").isLength({ min: 3 }),
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 3 char").isLength({ min: 3 })
      ],
    signup
  );
  

router.get("/signin",signin)

module.exports = router