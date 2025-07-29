app.use((req, res, next) => {
    console.log('Application level middleware executed')
    next()
})