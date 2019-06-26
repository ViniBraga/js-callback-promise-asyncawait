// Async / Await


const fs = require('fs');

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
        if(err) {
            reject(err);
        } else { 
            resolve(content);
        }
    })
});


console.log(1);

const init = async () => {
    const content = await readFile('./in1.txt');
    const content2 = await readFile('./in2.txt');
    console.log(String(content));
    console.log(String(content2));
}

console.log('init', init());

console.log(2);
console.log(3);

// Returning promises

const init3 = async () => {
    const content = await readFile('./in1.txt');
    const content2 = await readFile('./in2.txt');
    return content + ' ' + content2;
}

init3()
    .then(content => console.log('init3', content));


//Handling exception:

// const init3 = async () => {
//     try {
//         const content = await readFile('./in1.txt');
//         const content2 = await readFile('./in22.txt');
//         console.log(String(content));
//         console.log(String(content2));
//     } catch (err) {
//         console.log(err);
//     }
// }

// console.log('init3', init3());
