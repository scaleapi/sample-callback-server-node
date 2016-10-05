var express = require('express');
var bodyParser = require('body-parser');
var taskModel = require('./taskModel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var mongoose = require('mongoose');

// mongoose connect
if (!process.env.MONGODB_URI) {
	console.error("No MongoDB URI given. Please supply one as an environment variable MONGODB_URI.")
}
mongoose.connect(process.env.MONGODB_URI);


app.get('/', function(req, res) {
  res.send('Welcome to the Sample Callback server for Scale API.0');
});

app.post('*', function(req, res) {
  if (process.env.SCALE_CALLBACK_AUTH_KEY) {
    // Verify the callback auth key is correct
    if (req.headers['scale-callback-auth'] !== process.env.SCALE_CALLBACK_AUTH_KEY) {
      return res.status(500).send("Callback auth key is incorrect. Invalid callback");
    }
  }

  // Send 200 response code immediately
  res.status(200).send("Success!");

  // Update task in db idempotently
  var task_id = req.body.task_id;

  taskModel.findOneAndUpdate(
    { task_id: task_id },
    req.body.task,
    { upsert: true, new: true },
    function(err, task) {
      if (err) {
        console.error("Error updating document: " + err);
      } else {
        console.log(`Task (task_id: ${task_id}) successfully updated!`);
      }
    });
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Express server running on localhost:%d', port);
});