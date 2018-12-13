const express = require('express');
const path = require('path');
const app = express();

const morgan = require('morgan');

// -------- middleware -------- //
app.use(express.static(path.join(__dirname, 'client/dist/')));
app.use(morgan('tiny'));


// -------- server -------- //
app.listen(3000, () => {console.log('Now listening on port 3000!')});

