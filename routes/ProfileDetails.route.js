const express = require('express');
const router = express.Router();
const ProfileViewController = require('../controllers/ProfileViewController');


// update profile details
router.patch('/',ProfileViewController.updateProfileViewDetails);

// Get service center names
router.get('/',ProfileViewController.getNameOfServiceCenterProfiles);

module.exports = router;
