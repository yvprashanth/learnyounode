var path = process.argv[2];
var extension = process.argv[3];
var readAndFilter = require('./filteredlist.js');


readAndFilter(path, extension, function(err, list){
    list.forEach(function(file){
        console.log(file);
    });
});
