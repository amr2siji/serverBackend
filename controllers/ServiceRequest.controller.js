const ServiceRequestModel = require("../models/ServiceRequestModel");

// Get Service Request details

module.exports = {
    getServiceRequestDetails : async (req,res,next) =>{
        try {
            const results = await ServiceRequestModel.find();
            res.send(results);

        }  catch (error) {
            console.log(error.message);

        }


    }
};


// post service request details
module.exports = {

    addServiceRequestDetails : async (req,res,next) =>{

        try {

            const serviceRequest = new ServiceRequestModel(req.body);
            const result = await serviceRequest.save();
            res.send(result);


        }catch (error){
            console.log(error.message);
        }
    }
};