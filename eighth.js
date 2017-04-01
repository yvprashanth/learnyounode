var bl = require('bl');
var http = require('http');
var path = process.argv[2];

// console.log(process.argv[1]);
// console.log(path);


http.get(path, function (res) {
  var body = '' // Will contain the final response
  res.setEncoding("utf8");
  // Received data is a buffer.
  // Adding it to our body
  res.on('data', function (data) {
    body += data;
    // console.log(data.toString('utf8'))
  });
  // After the response is completed, parse it and log it to the console
  res.on('end', function () {
    var parsed = body;
    console.log(body.length);
    console.log(body);
  })
})



// Official Solution

//     var http = require('http')  
//      var bl = require('bl')  
       
//      http.get(process.argv[2], function (response) {  
//        response.pipe(bl(function (err, data) {  
//          if (err)  
//            return console.error(err)  
//          data = data.toString()  
//          console.log(data.length)  
//          console.log(data)  
//        }))    
//      })  