const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleMakeSchema = new Schema({

    vehicleMakeName : {
        type : String,
        required : true
    }
});

const vehicleMake = mongoose.model('vehicleMake',VehicleMakeSchema);
module.exports = vehicleMake;