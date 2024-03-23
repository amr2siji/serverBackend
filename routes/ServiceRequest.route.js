const express = require('express');
const router = express.Router();
const ServiceRequestController = require('../controllers/ServiceRequest.controller');

// Get Service Request
router.get('/',ServiceRequestController.getServiceRequestDetails);

// add a service request appointment
router.post('/',ServiceRequestController.addServiceRequestDetails);

// update status of service request
router.patch('/',ServiceRequestController.updateStatusRequestDetails);

// delete request
router.delete('/',ServiceRequestController.deleteRequestDetails);

module.exports = router;

