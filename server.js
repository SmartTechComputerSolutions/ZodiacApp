const express = require('express');

const app = express();

app.use(express.static(__dirname + '/client'));
//setup enviroment variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("zodiac app is running port " + port);
});