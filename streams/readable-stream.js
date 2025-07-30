const fs = require('fs')
const readable = fs.createReadStream('read.txt', {encoding: 'utf-8'})

readable.on('data', (chunk) => {
    console.log(chunk)
})

// Optional: Handle 'finish' event
readable.on('end', () => {
    console.log('Finished reading file.');
});

// Optional: Handle errors
readable.on('error', (err) => {
    console.error('Error reading file:', err);
});