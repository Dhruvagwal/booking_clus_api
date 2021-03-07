const express = require('express');
const flightData = require('./FlightListPlacesApi');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get('/flightData', async (req, res) => {
    const sampleData = {
        country: "us",
        currency:"inr",
        locale: "en-US",
        originPlace: "ind",
        destinationPlace: "ABEA",
        outboundPartialDate:"anytime",
        inboundPartialDate: "anytime"
    }
    const {body , statusCode}= await flightData(sampleData)
    return res.send({ status: statusCode,data: body})
});

module.exports = app;