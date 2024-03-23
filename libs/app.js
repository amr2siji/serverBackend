const express = require('express');
const createError = require('http-errors');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Initialize DB
require('../initDB')();

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



const ServiceRequestRoute = require('../routes/ServiceRequest.route');
const VehicleMakeRequestRoute = require('../routes/VehicleMakeRequest.route');
const ProfileViewRotes = require('../routes/ProfileDetails.route')

// Service Center Request route
app.use('/servicerequest', ServiceRequestRoute);

// Vehicle make details get route
app.use('/vehiclemake', VehicleMakeRequestRoute);

// profile details route
app.use('/profiledetails',ProfileViewRotes)

app.use((req, res, next) => {

    next(createError(404,'Not found'))
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
