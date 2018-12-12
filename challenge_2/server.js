const bodyParser = require('body-parser');
const morgan = require('morgan');
const convertToCSV = require('./helperFunctions/convertToCSV.js').convertToCSV
const express = require('express');
const app = express();
const port = 3000;

// -------- middleware -------- //
app.use(morgan('short'));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// -------- crud -------- //
app.post('/convert', (req, res) => {
  convertToCSV(req.body.input);
});

// -------- server -------- //
app.use(express.static('./client'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));