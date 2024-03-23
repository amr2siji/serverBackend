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
    },

    // delete a request

    deleteRequestDetails: async (req, res, next) => {
        try {
            const { vehicleMake, vehicleModel, serviceCenter, specificServices, dateTime, timeSlot,userEmail, status } = req.body;

            // Construct the query based on request parameters
            const query = {
                vehicleMake: vehicleMake,
                vehicleModel: vehicleModel,
                serviceCenter: serviceCenter,
                specificServices: specificServices,
                dateTime : dateTime,
                timeSlot : timeSlot,
                userEmail : userEmail,
                status : status
            };

            // Find the service request by query and delete it
            const deletedRequest = await ServiceRequestModel.findOneAndDelete(query);
            if (deletedRequest) {
                res.status(200).json({
                    success: true,
                    message: 'Service request deleted successfully',
                    deletedRequest: deletedRequest
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Service request not found.'
                });
            }
        } catch (error) {
            console.error('Error deleting service request:', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    },




};


