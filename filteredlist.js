var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files){
    if (err) return console.error(err);
    files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  });
});


module.exports =  function(path, extension, cb) {
  var regex = new RegExp(".*\\." + escape(extension) + "$")
	fs.readdir(path, function(err, filenames) {
		if (err) {
			cb(err)
		} else {
			cb(false, filenames.filter(function(file) {
				return regex.test(file)
			}))
		}
	})
}
