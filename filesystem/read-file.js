const fs = require('fs')

// For reading data from a file
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Cannot read file', err)
    }
    console.log('Data from File: ', data)
})


// Reading using readFileSync
try {
    const data = fs.readFileSync('async.txt', 'utf-8');
    console.log('Data: ',data)
} catch (error) {
    console.log(error)
}


// Read a file and display on browser
const express = require('express')
const app = express()
const fs = require('fs')

let fileContent
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    fileContent = data
})

app.get('/', (req, res) => {
    res.send(fileContent)
})

app.listen(4000, () => {
    console.log('Server is running on port 4000...')
})