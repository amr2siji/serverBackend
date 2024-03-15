const express = require('express');
const router = express.Router();
const ServiceRequestModel = require("../models/ServiceRequestModel");

// Get Service Request
router.get('/',async (req,res,next) =>{
  try {
      const results = await ServiceRequestModel.find();
      res.send(results);

  }  catch (error) {
      console.log(error.message);

  }


});

// add a service request appointment
router.post('/',async (req,res,next) =>{

    try {

        const serviceRequest = new ServiceRequestModel(req.body);
        const result = await serviceRequest.save();
        res.send(result);


    }catch (error){
        console.log(error.message);
    }
});


module.exports = router;

