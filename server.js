const express = require('express');
require('dotenv').config();
const mqtt = require('mqtt')
const cors = require('cors')

//let units = [   {unit: 'A',plastic: 12,metal: 25,paper: 13,others: 45},
//                {unit: 'B',plastic: 1,metal: 2,paper: 3,others: 4}      ]

let units = {   "A":{unit: 'A',plastic: 12,metal: 25,paper: 13,others: 45},
               "B":{unit: 'B',plastic: 1,metal: 2,paper: 3,others: 4}      }

const mqtt_port = 'mqtt://broker.hivemq.com'
let client = mqtt.connect(mqtt_port)

client.on('connect', ()=>{
    client.subscribe('TrashA')
    client.subscribe('TrashB')
    console.log('connected mqtt to ' + mqtt_port)
})

let data = '';
client.on('message', (topic,message)=>{
    data = message.toString();
    data = JSON.parse(data)
    

    if (data.unit == 'A') {
        units.A = data
        console.log(units.A)
    } else {
        units.B = data
        console.log(units.B)
    }

})

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(cors())
app.use(express.static('public'))
app.use(express.json({ limit: '1mb'}))

app.get('/trash', (req,res) => {
    res.json(units)
})

app.on('connected', ()=> console.log('connected'));




/*
const express = require('express');

require('dotenv').config();

const mqtt = require('mqtt')

let units = [ {unit: 'A',plastic: 12,metal: 25,paper: 13,others: 45},
              {unit: 'B',plastic: 20,metal: 30,paper: 33,others: 34}  ]

const mqtt_port = 'mqtt://broker.hivemq.com'
let client = mqtt.connect(mqtt_port)

client.on('connect', ()=>{
    client.subscribe('TrashA')
    client.subscribe('TrashB')
    console.log('connected mqtt to ' + mqtt_port)
})

let data = '';
client.on('message', (topic,message)=>{
    data = message.toString();
    data = JSON.parse(data)
    if (data.unit == 'A') {
        units[0] = data
        console.log(units[0])
    } else {
        units[1] = data
        console.log(units[1])
    } 
})

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'))
app.use(express.json({ limit: '1mb'}))


app.get('/trash', (req,res) => {
    res.json(units)
})


app.on('connected', ()=> console.log('connected'));
//comment
*/