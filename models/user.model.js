const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dataNascimento: {
    type: Date,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
