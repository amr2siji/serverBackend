const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://ammar:ammar123@vehicle.hsros5q.mongodb.net/SafeDrive')
        .then(() => {
            console.log('MongoDB connected...');
        })
        .catch(error => {
            console.error('MongoDB connection error:', error);
        });

    mongoose.connection.on('connected', ()=>{
        console.log("Mongoose connected to DB...");
    })

    mongoose.connection.on('error',(err)=>{
        console.log(err.message);
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log("Mongoose connection is disconnected");
    })

}