const db = require('../db')

const User = db.model('User', {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fName:{
      type: String,
      required: false,
    },
    lName:{
      type: String,
      required: false
    },
  }, 'users');
  
  module.exports = User;