const { Schema, model } = require('mongoose')

const Item = new Schema({
  text: String,
  isDone: Boolean
})

module.exports = model('Item', Item)
