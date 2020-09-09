const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/src/index.html');
})

const port = 8080;

app.listen(port, () => {
    console.clear();
})
