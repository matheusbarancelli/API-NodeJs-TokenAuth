const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    selected: false,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function(next){
  // o ".pre" é uma funçao do mongoose
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();

});


const User = mongoose.model('user', UserSchema);

module.exports = User;
