const express = require('express')
const router = express.Router();


// @route   GET api/users
//@desc      GET logged in  user
//@access   Private
router.get('/', (req, res) => {
    res.send('Get logged in user')
})

// @route   POST api/auth
//@desc     Auth user and get token
//@acess     Public
router.post('/', (req, res) => {
    res.send("Get logged in user")
})

module.exports = router;