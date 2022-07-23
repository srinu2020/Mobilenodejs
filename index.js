const { json } = require('body-parser');
const response=require('./response.json')
const { Router } = require('express');
const express=require('express')
const router=require("express").Router()
const app = express(); 
const port=process.env.PORT||8080
const morgan = require('morgan');  


 
app.use(morgan("dev"));

 


app.listen(port,()=>{
    console.log(`server is connected to port number ${port}`);
})

app.get('/send-otp',(req,res,next)=>{
    console.log(req.query.id);
    console.log(req.query.number);
    console.log(req.query.authkey);
       // console.log(req);
     
   
    if(response)
    {
         
        //  res.send.statusCode(200)
          
        // res.setHeader(response.headers)
        res.json(response.body['Success Response'])
    
    }
    
    else
    res.statusCode(404)
    
      
    
      
})  

// app.get('/resource/*', function(req, res) {
//     var list = req.path.split('/').slice(2); // Slice to leave off '/resource/'
//     var obj {};
//     async.whilst(
//         function() { return list.length > 0 },
//         function(callback) {
//             obj[list.shift()] = list.shift();
//         },
//         function(err) { // return your obj here or do whatever else you need to do }
//     );
// });