require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require('./routes/mail');
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
    myvar="";
});

var myvar="";

app.get("/contact",(req,res)=>{
    res.render("contact",{message :myvar});
});

app.post('/contact', (req, res) => {
    
    var body = "The Following Potential Customer Wants to Contact: Name: "+req.body.name+", Email: "+ req.body.email+" , Contact No. :"+req.body.contact;
    var sender_email = req.body.email;
    var receiver_email = 'rehaanmazid@gmail.com';
    var email_subject = "Potential Customer Want's To Connect";
    var email_body = body;
    sendMail(sender_email, receiver_email,
        email_subject, email_body);
    myvar="Message has been sent! We shall contact you shortly"
    res.redirect("/contact");
});


app.get("/technographics",(req,res)=>{
    res.render("technographics");
});

app.get("/tam",(req,res)=>{
    res.render("tam");
});

app.get("/ddm",(req,res)=>{
    res.render("ddm");
});

app.get("/dc",(req,res)=>{
    res.render("dc");
})

app.get("/dcp",(req,res)=>{
    res.render("dcp");
})

app.get("/competitive-intelligence",(req,res)=>{
    res.render("competitive-int");
});

app.get("/icp",(req,res)=>{
    res.render("icp");
});

app.get("/hi",(req,res)=>{
    res.render("health-int");
});

app.get("/abm",(req,res)=>{
    res.render('abm');
});

app.get("/aboutUs",(req,res)=>{
    res.render('about-us');
});

app.get("/career",(req,res)=>{
    res.render('career');
});

app.listen(process.env.PORT || 3000,()=>
{
    console.log("Server Up and Running at port 3000");
});
