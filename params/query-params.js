// Api endpoints to add two numbers via query params
app.get('/add', (req,res) => {
    const {num1, num2} = req.query
    const sum = parseFloat(num1) + parseFloat(num2)  
    res.send(`Sum is ${sum}`)
})
// Usage:  http://localhost:4000/add?num1=10&num2=2