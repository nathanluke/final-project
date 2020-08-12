const express = require("express");
const bcrypt = require("bcryptjs");
const webtoken = require("jsonwebtoken");
const config = require("config");
const auth = require('../middleware/auth')
const { check, validationResult } = require("express-validator/check");
const router = express.Router();

const User = require("../modals/Usermodal");

// @route   GET api/users
//@desc      GET logged in  user
//@access   Private
router.get("/",auth, async (req, res) => {
  
    try {
     const user = await User.findById(req.user.id).select('-password');
     res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
});

// @route   POST api/auth
//@desc     Auth user and get token
//@acess     Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // check if user exists
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try{
        let user = await User.findOne({ email })

        if(!user) {
            return res.status(400).json({msg: "invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({msg: "invalid password"})
        }

        
      const payload = {
        user: {
          id: user.id
        }
      };

      webtoken.sign(
        payload,
        config.get("webtokensecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
    }
  }
);

module.exports = router;
