const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('Connect');
    } catch (error) {
        console.log('Fail');
    }
}

module.exports = { connect }