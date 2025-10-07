const express = require('express');
const app = express();

app.length('/', (req, res)=> {
    res.send('Hello Suraj');
});

const port = process.env.PORT || 5500;

app.listen(prot, () => {
    console.log('Server running on hhtps://localhost:${port}');
});