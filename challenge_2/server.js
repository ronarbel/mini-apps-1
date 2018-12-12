const express = require('express');
const expressFileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

const convertToCSV = require('./helperFunctions/convertToCSV.js').convertToCSV
const convertToHTML = require('./helperFunctions/convertToHTML.js').convertToHTML

const app = express();

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
  fs.writeFile('./results/result.csv', CSVified, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
  res.send(HTMLified);
});
app.get('/download', function(req, res){
  var file = __dirname + '/results/result.csv';
  res.download(file); // Set disposition and send it.
});

// -------- server -------- //
app.use(express.static('./client'));
app.listen(3000, () => console.log(`Example app listening on port ${3000}!`));