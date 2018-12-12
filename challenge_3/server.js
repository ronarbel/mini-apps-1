const express = require('express');
const morgan = require('morgan');
const app = express();

// -------- middleware -------- //
app.use(morgan('tiny'));

// -------- server -------- //
app.use(express.static('./public'));
app.listen(3000, () => { console.log('Now listening on port 3000!')});
