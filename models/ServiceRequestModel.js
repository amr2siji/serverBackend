const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceRquestSchema = new Schema({

    vehicleMake :{
      type : String,
      lowercase:true,
      required: true,
    },

    vehicleModel :{
      type: String,
      lowercase:true,
      required:true,
    },

    serviceCenter:{
        type:String,
        lowercase: true,
        required:true,

    },
    specificServices:{
        type:String,
        lowercase: true,
        required:true,

    },
    dateTime:{
        type:String,
        lowercase: true,
        required:true,

    }

});

const serviceRequest = mongoose.model('serviceRequestDetails',ServiceRquestSchema);
module.exports = serviceRequest;