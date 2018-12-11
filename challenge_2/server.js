const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;



app.use(morgan('short'));
app.use(express.static('./client'));

app.post('/convert', (req, res) => {
    console.log(req.body)
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

