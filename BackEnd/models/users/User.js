import mongoose from 'mongoose';

const Schema=mongoose.Schema;

let User = new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone_number:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        state : {type:String},
        city : {type:String},
        zipcode : {type:String}
    },
    role:{
        type:String,
        default:'Client'
    }

});

export default mongoose.model('User', User);

//module.exports = mongoose.model('User',User );