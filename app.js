const express = require ("express");
const path = require("path");
const app = express();
const port = 5050;

//for serving static files;
app.use(express.static('static'))

//Set the template engine as pug
app.set('view engine', 'pug')

//set rhe view directory
app.set('views', path.join(__dirname, 'dir'))

app.get('/',(req,res)=>{
    // const con = "this is the content part of our project";
    // const head = {'title': 'PUG Template', "num": con}
    res.status(200).render('home.pug');
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
})

app.listen(port, ()=> {
    console.log(`The application started successful on port ${port}`);
})




























// our pug demo end point 
// app.get("/demo", (req,res)=> {
//     res.status(200).render('demo', {title: 'Hey Ashwath', message: "hello there! pug is working"})
// });

// app.get("/", (req,res)=>{
//     res.send("This is my Home page of my First express app with Harry")
// })

// app.get("/about", (req,res)=>{
//     res.send("This is about Page of my first express app with Harry")
// });

// app.post("/about", (req,res)=>{
//     res.send("This is a post request about Page of my first express app with Harry")
// });