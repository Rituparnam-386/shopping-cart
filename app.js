var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var mysql = require("mysql");
var path = require('path');
var url = require('url')
const { login } = require('./controller/auth');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopping cart',
})

function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writehead(404);
            res.write('file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}
db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("mysql is connected")
    }
})


http.createServer(onRequest).listen(8000);