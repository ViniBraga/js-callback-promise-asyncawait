// Promise


const fs = require('fs');

console.log(1);

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
        if(err) {
            reject(err);
        } else { 
            resolve(content);
        }
    })
});

readFile('./in1.txt').then(content => {
    console.log(String(content));
});


readFile('./in1.txt')
    .then(content => {
        console.log(String(content));
        return readFile('./in2.txt');
    }).then(content => console.log(String(content)));


console.log(2);
console.log(3);

