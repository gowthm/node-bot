import express from "express";

const app = express();
const port = 4400;

app.get('/', function(req, res) {
    res.send('this is from typescipt node application')
})

app.listen(port, ()=> {
    console.log(`Application started in ${port}`)
})