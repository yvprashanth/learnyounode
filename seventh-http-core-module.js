var http = require('http');
var path = process.argv[2];

http.get(path, function(res) {
  var body = ''; // Will contain the final response
  // Received data is a buffer.
  // Adding it to our body
  res.on('data', function(data){
    body += data;
    console.log(data.toString("utf8"));
  });
  // After the response is completed, parse it and log it to the console
  res.on('end', function() {
    var parsed = body;
  });
})
// If any error has occured, log error to console
.on('error', function(e) {
  console.log("Got error: " + e.message);
});
