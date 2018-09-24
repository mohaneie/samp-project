const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
const x = require('./schema')
const n = require('./connection')

app.get('/', (req, res) => {
     x.find({})
     .then((data) => {
        console.log(data)
        res.send(data)
     })
     .catch((error)=>{
        console.log(error)
        res.send(data)
     })

})

app.post('/', (req, res) => {
    const data = req.body;
    const samp = new x(data);
    samp.save()
    .then(() => {
        res.send(data)
    })
    .catch((error) => {
        res.send(error)
    })
})


app.listen(2000, () => {
    console.log('server is started at 2000');
})