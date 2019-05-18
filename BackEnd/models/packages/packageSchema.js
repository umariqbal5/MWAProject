const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    package: {
        name: String ,
        description: String
    },
    destination: Array,
    hotel: String,
    price: Number

});

export default mongoose.model('package', packageSchema);
