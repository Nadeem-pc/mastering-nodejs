// Middleware for adding custom header in get request
app.use((req, res, next) => {
    if(req.method === 'GET'){
        res.setHeader('X-Custom-Header', 'Header added for get request')
    }
    next()
})  