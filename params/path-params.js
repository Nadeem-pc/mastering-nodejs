// Api endpoints to add two numbers via path params
app.get('/add/:num1/:num2', (req,res) => {
    const {num1, num2} = req.params
    const sum = parseFloat(num1) + parseFloat(num2)  
    res.send(`Sum is ${sum}`)
})