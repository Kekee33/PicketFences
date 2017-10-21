const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({ 
  email: { type: String, required: true },
  password: {type: String, required: true},  
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", userInfoSchema);

module.exports = Contact;
