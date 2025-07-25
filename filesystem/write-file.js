const fs = require('fs')

// For creating a new file
fs.writeFile('sample.txt', 'Content will be given here', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('File created successfully...')
})


// Creating file using writeFileSync
try {
    fs.writeFileSync('async.txt', 'Hi my name is nadeem')
    console.log('File created successfully')
} catch (error) {
    console.log(error)
}


// Write a file when a Promise resolves
function writeFile(content) {
    return new Promise((resolve, reject) => {
        const taskCompleted = true
        if(taskCompleted){
            resolve(content)
        }else{
            reject('Task Failed !')
        }
    })
}

writeFile("Have a nice day")
.then((content) => {
    return fs.writeFile("promiseCreatedFile.txt", content)
})
.then(() => {
    console.log('File created successfully...')
})
.catch((err) => {
    console.error("An error occured", err)
})


// Adding data to an existing file
fs.appendFile('sample.txt', ' This data is appended after creation', (err) => {
    console.log('Data appended successfully')
})