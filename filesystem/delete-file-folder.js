// Creating a new folder 
fs.mkdir('newFolder', (err) => {
    if (err) throw err;
    console.log('folder created successfully')
})