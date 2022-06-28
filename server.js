var express = require('express');
var path = require('path');
var app = new express();
var port = 3000;


app.get("/", (req, res) => {
    res.status(401).sendFile(path.join(__dirname + '/components/error.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/components/home.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname + '/components/contact.html'));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + '/components/about.html'));
})
