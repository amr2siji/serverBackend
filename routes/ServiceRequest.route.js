const express = require('express');
const router = express.Router();
const ServiceRequestModel = require("../models/ServiceRequestModel");
const ServiceRequestController = require('../controllers/ServiceRequest.controller');

// Get Service Request
router.get('/',ServiceRequestController.getServiceRequestDetails);

// add a service request appointment
router.post('/',ServiceRequestController.addServiceRequestDetails);


module.exports = router;

