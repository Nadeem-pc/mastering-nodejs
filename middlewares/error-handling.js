function errHandler (err, req, res, next) {
    console.log(err.message)
    res.status(500).send('Something went wrong !')
}
app.use(errHandler)