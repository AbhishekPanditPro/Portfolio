const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const port = 80;

// set up the static file as the required directory
app.use('/static',express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/index.html'))
    res.status(200).render('home.pug','');
}) 
app.get('/about',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/index.html'))
    res.status(200).render('about.pug','');
}) 

app.get('/stories',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/index.html'))
    res.status(200).render('stories.pug','');
}) 
app.get('/resume',(req,res)=>{
    // res.sendFile(path.join(__dirname,'/index.html'))
    res.status(200).render('resume.pug','');
}) 


app.listen(port, ()=>{
    console.log(`The application has been successfully started at port ${port}.`);
})