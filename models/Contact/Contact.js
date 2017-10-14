const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactInfoSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },  
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactInfoSchema);

module.exports = Contact;
