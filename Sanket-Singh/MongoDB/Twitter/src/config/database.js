const mongoose = require('mongoose');


const connect = async()=>{
    console.log('Connecting to database...');
    await mongoose.connect('mongodb://localhost/twitter')
}

module.exports = connect;