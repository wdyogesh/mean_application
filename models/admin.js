const mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
    name: { type: String },
    role: { type: Number },
    description : {type: String}
})

module.export = { Admin };