const express = require('express');
const router = express.Router();
const VehicleMakeModel = require("../models/VehicleMakeModel");


// Get Service Request
router.get('/',async (req,res,next) =>{
    try {
        console.log("calling the api");
        const results = await VehicleMakeModel.find({},{'_id':0});
        res.send(results);

    }  catch (error) {
        console.log(error.message);

    }


});

module.exports = router;