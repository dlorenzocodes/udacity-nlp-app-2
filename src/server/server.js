const path = require('path');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.js');
});

let data = {};

app.post('/entry', async (req, res) => {
    const url = req.body.articleURl;
    console.log(url);
    console.log('Url received');

    const baseURl = `https://api.meaningcloud.com/sentiment-2.1?`;
    const apikey = process.env.API_KEY;
    console.log(apikey);

    console.log('Starting Api call ...');
    console.log(`${baseURl}key=${apikey}&url=${url}&lang=en`);
    const response = await fetch(`${baseURl}key=${apikey}&url=${url}&lang=en`);
    try {
        const json = await response.json()
        console.log(json)
        data = json;
        res.send(data)
    }   catch(error) {
        console.log('Server POST error', error)
    }
});


app.get('/getData', (req, res) => {
    res.send(data);
    console.log('Getting data...');
});


const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Listening to port ${port}`));