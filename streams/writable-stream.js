const fs = require('fs');

const writable = fs.createWriteStream('output.txt');

writable.write('Hello, this is the first line.\n');
writable.write('This is the second line.\n');

writable.end('Final line - stream closed.');


// Optional: Handle 'finish' event
writable.on('finish', () => {
    console.log('All data has been written to output.txt');
});

// Optional: Handle errors
writable.on('error', (err) => {
    console.error('Error while writing:', err);
});