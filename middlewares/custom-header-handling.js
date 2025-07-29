// Middleware for adding custom header in get request
app.use((req, res, next) => {
    if(req.method === 'GET'){
        res.setHeader('X-Custom-Header', 'Header added for get request')
    }
    next()
})

// middleware to block get request with custom header.
app.use((req, res, next) => {
    if(req.method === 'GET'){
        res.setHeader('X-Custom-Header', 'Get request are blocked')
        return res.status(403).send('Get requests are not allowed')
    }
    next()
})