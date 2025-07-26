// Creating a new folder 
fs.mkdir('folderName', (err) => {
    if (err) throw err;
    console.log('folder created successfully')
})


// Deleting a folder
fs.rmdir('folderName', (err) => {
    if (err) throw err;
    console.log('folder deleted successfully')
})

// Deleting a file
fs.unlink('fileName.txt', (err) => {
    if(err) throw err
    console.log('File deleted successfully')
})