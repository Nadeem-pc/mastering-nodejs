const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hai from Express')
})

app.listen(5001, () => {
    console.log('Server is running on PORT 5001')
})