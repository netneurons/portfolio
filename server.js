const express = require('express');
const app = express();

// Serve static assets
app.use(express.static(__dirname));

// Serve custom 404 page
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/test/404.html');
});

// Start server
const listener = app.listen(3030, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});