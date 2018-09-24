const mongoose = require('mongoose');
const useSchema = mongoose.Schema({
    name: String,
    address: String,
    mobileno: Number,
})

const y = mongoose.model('info', useSchema);
module.exports = y;