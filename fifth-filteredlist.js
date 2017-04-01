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

module.exports = function(dirname, extension, callback){
    var list = [];
    var i = 0;

    fs.readdir(dirname, function(err,files){
        if(err){
            return callback(err);
        }
        else{
            files.forEach(function(fileName){
                if(path.extname(fileName) === extension){
                    list.push(fileName);
                }
            })
        }
        return callback(null,list);
    })
};