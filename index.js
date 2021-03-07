const env = require('dotenv');
const express = require('express');
const app = express();

//Api Required : Hotel Booking
// Flight Booking
// Trains Booking
// Bus Booking
// Cabs Booking
// Travel Itinerary Api
// Travel Data

app.use(require('./Routes/Flight/index.js'))

app.listen(3000, ()=>{
    console.log('Server Running at 3000')
})