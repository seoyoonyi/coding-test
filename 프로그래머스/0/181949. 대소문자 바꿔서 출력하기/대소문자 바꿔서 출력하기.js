const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let swapped = ""

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    Array.from(str).map(item => {
        item === item.toUpperCase() ? swapped += item.toLowerCase() : swapped += item.toUpperCase()
    })
    console.log(swapped)
});