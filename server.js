let express = require('express');
let app = express();
let port = process.env.port || 3000 ;
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/'));



app.get('/',(req,res)=>{
        res.render('index.html');
})

app.listen(port, ()=>{
    console.log('server started');
});

app.get('/addTwoNumbers',(req,res)=>{
    let num1 = req.query.number1; // this should return 1
    let num2 = req.query.number2; // this should return 2
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {statusCode:200, message:'success', data:sum}
    console.log("Number1="+num1 + " and "+ "Number2="+num2);
    res.json(obj);
});

app.post('/multiplyByPost',(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let product = num1 * num2 ;
    let responseOBJ = {statusCode:200, message:'success. This was from a POST call', data:product}
    res.json(responseOBJ);
});