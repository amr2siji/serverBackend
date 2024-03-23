const express = require('express');
const router = express.Router();
const ProfileViewController = require('../controllers/ProfileViewController');


// update profile details
router.patch('/',ProfileViewController.updateProfileViewDetails);

module.exports = router;
