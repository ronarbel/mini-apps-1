const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressFileUpload = require('express-fileupload');
const convertToCSV = require('./helperFunctions/convertToCSV.js').convertToCSV
const convertToHTML = require('./helperFunctions/convertToHTML.js').convertToHTML
const express = require('express');
const app = express();
const port = 3000;

// -------- middleware -------- //
app.use(morgan('short'));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressFileUpload());

// -------- crud -------- //
app.post('/convert', (req, res) => {
  let input = req.files.input.data.toString();
  let CSVified = convertToCSV(input);
  let HTMLified = convertToHTML(CSVified);
  res.send(HTMLified);
});

// -------- server -------- //
app.use(express.static('./client'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));