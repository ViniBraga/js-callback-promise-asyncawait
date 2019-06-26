// Callback


const fs = require('fs');

console.log(1);

fs.readFile('./in1.txt', (err, content) => {
    fs.readFile('./in2.txt', (err2, content2) => {
        console.log(err, String(content));
        console.log(err2, String(content2)); 
    })
});

console.log(2);
console.log(3);

