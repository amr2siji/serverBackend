const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS options
const corsOptions = {
    origin: '*', // Change '*' to your desired origin or whitelist of origins
    methods: 'GET,POST,PUT,DELETE', // Specify the allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Specify the allowed headers
    preflightContinue: false,
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Use CORS middleware with options
app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://ammar:ammar123@vehicle.hsros5q.mongodb.net/SafeDrive')
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(error => {
        console.error('MongoDB connection error:', error);
    });

const ServiceRequestRoute = require('../routes/ServiceRequest.route');
const VehicleMakeRequestRoute = require('../routes/VehicleMakeRequest.route');

// Service Center Request route
app.use('/servicerequest', ServiceRequestRoute);

// Vehicle make details get route
app.use('/vehiclemake', VehicleMakeRequestRoute);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
