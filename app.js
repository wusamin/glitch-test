// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const funcs = require('./func.js');

const request = require('request');

const app = express();

// app.use(app.router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.query['test'])
    funcs.testJson(res);
});

app.get('/test', (req, res) => {
    // funcs.testRouteJson(res)
    funcs.call(res);
});

app.get('/timer', (req, res) => {
    funcs.callUrl(req.query, res)
})

app.listen(3000);
console.log('server starting...');