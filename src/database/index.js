const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/APItest2', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
