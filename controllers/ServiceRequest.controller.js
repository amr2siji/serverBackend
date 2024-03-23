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
    },

    // update the status of the request

    updateStatusRequestDetails: async (req, res, next) => {
        try {
            await ServiceRequestModel.findOneAndUpdate(
                { status: "pending" }, // Filter
                { status: "approved" }, // Update
                { new: true } // Return the modified document
            );
            console.log("Status updated successfully!");

            // Send 200 response
            res.status(200).send("Status updated successfully!");
        } catch (error) {
            console.error("Error updating status:", error);
            res.status(500).json({ error: "Internal Server Error" }); // Send error response
            return; // Exit from the function to prevent further execution
        } finally {
            // Do not disconnect mongoose here, as it might be used elsewhere in your application
        }
    }



};


