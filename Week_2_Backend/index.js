//creating HTTP Server
const express = require('express')
const app = express()
const port = 3000



//Middlewares

function middleware1(req,res,next){
    console.log("From inside middleware "+ req.headers.counter)
    // res.send("Error from inside middleware")
    next();
}

app.use(middleware1);

function sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}
function handleFirstRequest(req,res){
    console.log(req.headers);
    var counter=req.headers.counter;// header counter
    // var counter=req.query.counter;//query counter
    var calsulatedSum=sum(counter);
    console.log(calsulatedSum);
    var answer="The sum is "+calsulatedSum;
    res.send(answer);
}
function createUser(req,res){
    res.send("Just checking if the post working")
} 
function modify(req,res){
    res.send("Just checking if the put is working")
}
function deleteCheck(req,res){
    res.send("Just checking if the delete is working or not")
}
//app.get('/handleSum', handleFirstRequest)
app.post('/createuser',handleFirstRequest)
//app.put('/modifyuser',modify)
//app.delete('/deleteuser',deleteCheck)

function started(){
    console.log("Example app listening on port "+port);
}
app.listen(port, started)





// const fs=require("fs");
// const express=require("express");
// function callbackFn(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackFn);










