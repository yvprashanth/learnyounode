var sum = 0;
process.argv.forEach(function(element) {
    var no = parseInt(element, 10); 
    if(typeof no === "number" && !isNaN(no)){
        sum += no;
    }
}, this);
console.log(sum);