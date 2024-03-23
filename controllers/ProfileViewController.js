const ProfileVIewModel = require("../models/ProfileViewModel");
const createError = require('http-errors');

module.exports= {

    updateProfileViewDetails: async (req, res, next) => {
        try {
            const {email, newName, newMobile, newProvince, newDistrict} = req.body;

            // Construct the query to find the profile by email
            const query = {email: email};

            // Construct the update object with the new name, mobile, province, and district
            const updateFields = {
                name: newName,
                mobile: newMobile,
                province: newProvince,
                district: newDistrict
            };

            // Update the profile details by email with the specified fields
            const updatedProfile = await ProfileVIewModel.findOneAndUpdate(query, updateFields, {new: true});

            if (updatedProfile) {
                res.status(200).json({
                    success: true,
                    message: 'Profile details updated successfully',
                    updatedProfile: updatedProfile
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Profile not found.'
                });
            }
        } catch (error) {
            console.error('Error updating profile details:', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }


    },

}