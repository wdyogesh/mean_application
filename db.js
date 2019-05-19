const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CurdBD', err=>{
    if (!err) {
        console.log("Mongo Connection successfully");
    }
    else {
        console.log('Error in connection is : ' + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;