let express = require('express');
let app = express();
let port = process.env.port || 3000 ;

app.use(express.static(__dirname + '/'));


app.get('/',(req,res)=>{
        res.render('index.html');
})

app.listen(port, ()=>{
    console.log('server started - 2');
});

app.get('/addTwoNumbers',(req,res)=>{
    let num1 = req.query.number1; // this should return 1
    let num2 = req.query.number2; // this should return 2
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {statusCode:200, message:'success', data:sum}
    console.log("Number1="+num1 + " and "+ "Number2="+num2);
    res.json(obj);
});
