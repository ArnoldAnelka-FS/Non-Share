const express = require('express');
require ("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const secretKey = process.env.SECRET_KEY;

app.get('/', (req, res) => {
    if (!secretKey) {
        res.status(500).send('Secret Key not available');
    }else {
        res.send(`The secret key is available at ${secretKey}`)
}
});

app.listen(port, () => {
    console.log(`Your server is listening on ${port}`);
});