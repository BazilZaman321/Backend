const express= require('express');
const app= express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/submit',(req,res)=>{
    console.log(req.body);
  res.send(`given : ${JSON.stringify(req.body)}`); 
    
})


app.listen(3000,()=>{
  console.log("good ");
  
})