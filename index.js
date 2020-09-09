const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/src/index.html');
})

const port = 80;

app.listen(port, () => {
    console.clear();
})
