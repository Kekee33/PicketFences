const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newTodo = new Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },  
  date: { type: Date, default: Date.now }
});

const toDo = mongoose.model("toDo", newTodo);

module.exports = toDo;
