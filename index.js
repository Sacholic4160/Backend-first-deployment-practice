// console.log("sacholic is making its first ever backend project and deploying it"
// )
const express = require('express');
const dotenv =  require('dotenv').config()

const app = express();

const port = 2000;

 app.get('/', (req,res) => {
res.send("hii, can you see my request");
 });

app.get('/twitter',(req,res)=>{
    res.send("hii,can you see my twitter handle request");
});

app.get('/login', (req,res)=> {
    res.send('<h1> hii , this is heading style 1</h1>')
})

// app.listen(port,()=>{
//     console.log(`hii, i am listening on this port: ${port}`)
// })

app.listen(process.env.PORT,() =>{
    console.log(`hii, the server is listening on this port number: ${process.env.PORT}`)
})