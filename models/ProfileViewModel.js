const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileViewSchema = new Schema({

    name:{
        type:String,
        lowercase: true,

    },
    email :{
        type : String,
        lowercase:true,
    },

    role :{
        type: String,
    },

    mobile:{
        type:String,
        lowercase: true,

    },
    province:{
        type:String,
        lowercase: true,

    },
    district:{
        type:String,
        lowercase: true,

    },


});

const profileView = mongoose.model('auths',ProfileViewSchema);
module.exports = profileView;