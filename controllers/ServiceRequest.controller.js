const ServiceRequestModel = require("../models/ServiceRequestModel");
const createError = require('http-errors');

// Get Service Request details

module.exports = {
    getServiceRequestDetails : async (req,res,next) =>{
        try {
            const results = await ServiceRequestModel.find();
            if (!results){
                throw createError(404,'Service request details not exist');
            }
            res.send(results);

        }  catch (error) {
            console.log(error.message);
            next(error);

        }

    },

// post service request details

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


