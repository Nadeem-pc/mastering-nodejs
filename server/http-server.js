const http = require('http')

http.createServer((req, res) => {
    res.write('Hai from Node')
    res.end()
    console.log('Server is running on PORT 4000')
}).listen(4000)