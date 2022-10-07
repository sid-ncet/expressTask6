const express=require('express')
const path=require('path')
const app=express();
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','views','add-product.html'))
})
app.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','views','contactus.html'))
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','success.html'))
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','404.html'))
})

app.listen(3000,()=>{
    console.log('the view site is working')
})