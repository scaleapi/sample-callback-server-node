var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// taskModel._id is called task_id for the outside API
var schema = new Schema({
  task_id: {
    type: String,
    unique: true,
    required: true
  },
  created_at: Date,
  completed_at: Date,
  callback_url: String,
  type: String,
  status: String,
  instruction: String,
  params: Schema.Types.Mixed,
  response: Schema.Types.Mixed,
  urgency: String
});

var model = mongoose.model('task', schema);

module.exports = model;