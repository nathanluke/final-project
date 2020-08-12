const express = require('express');
const router = express.Router();


// @route   GET api/posts
//@desc     get all users posts
//@access   Private
router.get('/', (req, res) => {
    res.send('Get all users posts')
})

// @route    POST api/posts
// @desc     allow user to post 
// @access   Private
router.post('/', (req , res) => {
    res.send('user can post')
})

// @route    PUT api/users/: id
// @desc     allow user to update profile 
// @access   Private
router.put('/:id', (req, res) => {
    res.send('Update Profile')
})

// @route    DELETE api/users/: id
// @desc     allow user to delete  profile 
// @access   Private
router.delete('/:id', (req, res) => {
    res.send('delete profile')
})

module.exports = router;